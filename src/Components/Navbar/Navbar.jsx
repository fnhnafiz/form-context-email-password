import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ContextAuthProvider } from "../Providers/AuthProvider";

const Navbar = () => {
  const { users, logOutUsers } = useContext(ContextAuthProvider);

  const navigate = useNavigate();
  // console.log(users);

  const handleLogoutUser = () => {
    logOutUsers()
      .then(() => {
        console.log("Logout");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" bg-green-500 text-white ">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu space-x-5 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/"> Home</NavLink>
              </li>
              {users ? (
                <li>
                  <NavLink to="/login"> Login</NavLink>
                </li>
              ) : (
                <li>
                  <NavLink to="/register"> Register</NavLink>
                </li>
              )}
              {users && (
                <>
                  <li>
                    <NavLink to="/details">Details</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products">Our Products</NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop">Shop Now</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact US</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">TrendHive</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-5 px-1">
            <li>
              <NavLink to="/"> Home</NavLink>
            </li>
            {users ? (
              <li>
                <NavLink to="/login"> Login</NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/register"> Register</NavLink>
              </li>
            )}
            {users && (
              <>
                <li>
                  <NavLink to="/details">Details</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Our Products</NavLink>
                </li>
                <li>
                  <NavLink to="/shop">Shop Now</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact US</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {users ? (
            <div className="space-x-5">
              <span>{(users && users.email) || users.displayName}</span>
              <button onClick={handleLogoutUser} className="btn">
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
