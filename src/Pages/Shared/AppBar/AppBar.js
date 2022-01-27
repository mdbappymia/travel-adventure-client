import React from "react";
import { Link } from "react-router-dom";
import useStore from "../../../hooks/useStore";
import { HashLink } from "react-router-hash-link";

const AppBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { user, logOut } = useStore();
  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to="/"
            >
              Travel Adventures
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/"
                >
                  <i className="fas fa-home text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <HashLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/#places"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Place</span>
                </HashLink>
              </li>
              <li className="nav-item">
                {user.email && (
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to="/dashboard"
                  >
                    <i className="fas fa-columns text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Dashboard</span>
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/about"
                >
                  <i className="fas fa-address-book text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <HashLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/#reviews"
                >
                  <i className="fas fa-thumbs-up text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Reviews</span>
                </HashLink>
              </li>
              {user.email ? (
                <button
                  onClick={logOut}
                  className="px-5 py-3 bg-sky-800 rounded-lg flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <span>Log Out</span>
                  <i className="ml-2 fas fa-sign-out-alt text-lg leading-lg text-white opacity-75"></i>
                </button>
              ) : (
                <li className="nav-item">
                  <Link
                    className="px-5 py-3 bg-sky-800 rounded-lg flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to="/login"
                  >
                    <i className="fas fa-sign-in-alt text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Login</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppBar;
