import React, { useState } from "react";
import AppBar from "../../Shared/AppBar/AppBar";
import Footer from "../../Shared/Footer/Footer";
import { useForm } from "react-hook-form";
import useStore from "../../../hooks/useStore";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const { signInUsingGoogle, user, registerUser, signInUsingEmailAndPassword } =
    useStore();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (isRegister) {
      registerUser(data.email, data.password, data.name, navigate);
    } else {
      signInUsingEmailAndPassword(data.email, data.password, navigate, from);
    }
  };
  return (
    <>
      <AppBar />
      <div className="py-5 mx-2">
        <div className="lg:w-1/3 m-auto">
          <h1 className="text-3xl text-center font-bold">
            {isRegister ? "Register" : "Login"}
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {isRegister && (
              <input
                className="border-2 border-black w-full my-3 p-2 text-2xl rounded-md"
                placeholder="Your Name"
                {...register("name")}
              />
            )}
            <input
              className="border-2 border-black w-full my-3 p-2 text-2xl rounded-md"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="border-2 border-black w-full my-3 p-2 text-2xl rounded-md"
              placeholder="Your Password"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <br />
            {isRegister ? (
              <input
                className="bg-sky-900 px-3 py-2 text-white rounded cursor-pointer"
                type="submit"
                value="Register"
              />
            ) : (
              <input
                className="bg-sky-900 px-3 py-2 text-white rounded cursor-pointer"
                type="submit"
                value="Login"
              />
            )}
          </form>
          {isRegister ? (
            <h1 className="text-xl my-3">
              Already register?{" "}
              <span
                className="text-sky-800 cursor-pointer"
                onClick={() => setIsRegister(false)}
              >
                Login here
              </span>
            </h1>
          ) : (
            <h1 className="text-xl my-3">
              New user?{" "}
              <span
                className="text-sky-800 cursor-pointer"
                onClick={() => setIsRegister(true)}
              >
                Signup here
              </span>
            </h1>
          )}
          <div
            onClick={() => signInUsingGoogle(navigate, from)}
            className="flex hover:bg-green-700 bg-green-900 text-white p-4 items-center text-2xl cursor-pointer"
          >
            <i className="fab fa-google text-orange-400"></i>
            <p className="ml-4">Sign In Using Google</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
