import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ContextAuthProvider } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, handleTwitterProvider, loginWithGoogle } =
    useContext(ContextAuthProvider);
  const navigateToHomePage = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    const loginEmail = e.target.email.value;
    const loginPassword = e.target.password.value;

    console.log(loginEmail, loginPassword);

    loginUser(loginEmail, loginPassword)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigateToHomePage("/");
        toast.success("Successfully login");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const loginWithTwitter = () => {
    handleTwitterProvider()
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => {
        console.log("Error from twitter", error);
      });
    navigateToHomePage("/products");
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
    navigateToHomePage("/products");
  };
  return (
    <div className="card bg-base-100 max-w-xl mx-auto my-12 shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
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
          <div className="flex justify-between">
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <label className="label">
              <NavLink
                to="/register"
                className="label-text-alt link link-hover"
              >
                Create an account
              </NavLink>
            </label>
          </div>
        </div>
        <div className="form-control mt-6 space-y-5">
          <button className="btn btn-primary">Login</button>
          <button onClick={loginWithTwitter} className="btn btn-accent">
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

export default Login;
