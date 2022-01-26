import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="bg-black py-10">
      <div className="container px-4 mx-auto text-white lg:flex justify-between items-center">
        <div>
          <p>Phone: 01732249303</p>
          <p>Email: demo@gmail.com</p>
          <div className="flex social-all-icon">
            <Link to="/">
              <i className="fab fa-facebook"></i>
            </Link>

            <Link to="/">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-facebook-messenger"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-twitter"></i>{" "}
            </Link>
          </div>
        </div>
        <div className="text-center hidden lg:block">
          <i className="fas fa-plane text-7xl"></i>
          <h1 className="text-2xl mt-4 font-bold">TRAVEL ADVENTURES</h1>
        </div>
        <div>
          <div className="footer-nav">
            <Link className="mr-5" to="/">
              Privacy & Policy
            </Link>
            <Link to="/">FAQ</Link>
          </div>
          <div className="flex my-3">
            <input
              className="text-black lg:p-3 outline-none"
              placeholder="Your Email"
              type="email"
              name=""
              id=""
            />
            <button className="bg-sky-800 p-3 ">Subscribe</button>
          </div>
        </div>
      </div>
      <h1 className="text-white text-center pt-20">
        Copyright &copy; 2022 All right received
      </h1>
    </div>
  );
};

export default Footer;
