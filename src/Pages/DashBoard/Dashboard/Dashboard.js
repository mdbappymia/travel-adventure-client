/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useStore from "../../../hooks/useStore";

const Dashboard = () => {
  const [openNav, setOpenNav] = useState(false);
  const { logOut } = useStore();
  return (
    <div>
      <div className="relative min-h-screen md:flex">
        {/* <!-- mobile menu bar --> */}
        <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
          {/* <!-- logo --> */}
          <Link to="/" className="block p-4 text-white font-bold">
            Travel Adventure
          </Link>

          {/* <!-- mobile menu button --> */}
          <button
            onClick={() => setOpenNav(!openNav)}
            className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* <!-- sidebar --> */}
        <div
          className={`sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform  md:relative md:translate-x-0 transition duration-200 ease-in-out ${
            !openNav ? "-translate-x-full" : ""
          }`}
        >
          {/* <!-- logo --> */}
          <Link to="/" className="text-white flex items-center space-x-2 px-4">
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span className="text-xl font-extrabold">Travel Adventure</span>
          </Link>

          {/* <!-- nav --> */}
          <nav>
            <Link
              to="/dashboard"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              Manage Order
            </Link>
            <Link
              to="/dashboard"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              Payment
            </Link>
            <Link
              to={`/dashboard/addBlog`}
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              Add Place
            </Link>
            <Link
              to="/dashboard/addReview"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              Add Review
            </Link>
            <Link
              to="/dashboard/manageAllOrder"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              Manage All Order
            </Link>
            <Link
              to="/dashboard/adminManagement"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              Admin Management
            </Link>
            <Link
              to="/"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              Back to home
            </Link>
            <div className="my-5 py-2.5 px-4">
              <button
                onClick={logOut}
                className="bg-red-700 px-3 py-2 hover:bg-red-800 rounded"
              >
                Log Out
              </button>
            </div>
          </nav>
        </div>

        {/* <!-- content --> */}
        <div className="flex-1 p-10 text-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
