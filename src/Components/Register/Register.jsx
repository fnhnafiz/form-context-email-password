import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ContextAuthProvider } from "../Providers/AuthProvider";

const Register = () => {
  const { createRegisterUser, handleTwitterProvider, loginWithGoogle } =
    useContext(ContextAuthProvider);
  const navigateToLoginPage = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    const registerName = e.target.name.value;
    const registerEmail = e.target.email.value;
    const registerPassword = e.target.password.value;
    console.log(registerName, registerEmail, registerPassword);

    createRegisterUser(registerEmail, registerPassword)
      .then((result) => {
        console.log(result);
        e.target.reset();
        navigateToLoginPage("/login");
      })
      .catch((error) => {
        console.log("Error the content", error);
      });
  };

  const registerWithTwitter = () => {
    handleTwitterProvider()
      .then((result) => {
        console.log(result.user);
      })

      .catch((error) => console.log(error));
    navigateToLoginPage("/login");
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
    navigateToLoginPage("/login");
  };
  return (
    <div className="card bg-base-100 max-w-xl mx-auto my-12 shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Type of Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <label className="label ">
          <NavLink to="/login" className="label-text-alt link link-hover">
            Already have an account
          </NavLink>
        </label>
        <div className="form-control mt-6 space-y-5">
          <button className="btn btn-primary">Register</button>
          <button onClick={registerWithTwitter} className="btn btn-accent">
            Continue with Twitter
          </button>
          <button onClick={handleLoginWithGoogle} className="btn btn-warning">
            Continue with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
