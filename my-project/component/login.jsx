import React, { useState } from "react";
import back from "../src/assets/bgimage.jpg";
import { CgProfile } from "react-icons/cg";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  return (
    <>
      <main
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${back})` }}
      >
        <section className="flex min-h-screen items-center justify-center p-4 sm:p-6">
          <div className="flex w-full max-w-lg flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-white shadow-2xl backdrop-blur-md sm:p-8">
            <h1 className="mb-5 text-4xl font-sans font-extrabold text-gray-950 sm:text-6xl">
              Login
            </h1>
            <div className="relative mt-3 w-full max-w-sm sm:mt-7">
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <CgProfile className="h-5 w-5" />
              </div>
              <input
                className="block w-full rounded-2xl border border-white px-5 py-3 pr-12 placeholder:text-white focus:outline-none"
                type="text"
                placeholder="@username"
              />
            </div>

            <div className="relative mt-3 w-full max-w-sm sm:mt-7">
              <button
                onClick={() => setShowPass(!showPass)}
                className="absolute inset-y-0 right-3 flex items-center px-2 cursor-pointer"
                aria-label={showPass ? "Hide password" : "Show password"}
              >
                {showPass ? (
                  <FaRegEyeSlash className="h-5 w-5 " />
                ) : (
                  <FaRegEye className="h-5 w-5 " />
                )}
              </button>
              <input
                className="block w-full rounded-2xl border border-white px-5 py-3 pr-12 placeholder:text-white focus:outline-none"
                type={showPass ? "text" : "password"}
                placeholder="Password"
              />
                
             
            </div>

            <div className="relative mt-3 w-full max-w-sm sm:mt-7">
              <button
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="absolute inset-y-0 right-3 flex items-center px-2 cursor-pointer"
                aria-label={showConfirmPass ? "Hide password" : "Show password"}
              >
                {showConfirmPass ? (
                  <FaRegEyeSlash className="h-5 w-5 " />
                ) : (
                  <FaRegEye className="h-5 w-5 " />
                )}
              </button>
              <input
                className="block w-full rounded-2xl border border-white px-5 py-3 pr-12 placeholder:text-white focus:outline-none"
                type={showConfirmPass ? "text" : "password"}
                placeholder="Confirm Password"
              />
                
             
            </div>

            

            <div className="mt-2 flex w-full max-w-sm flex-col items-start gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <input id="remember-me" type="checkbox" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <a href="">Forgot Password?</a>
            </div>
            <button
              type="button"
              className="mt-5 w-full max-w-sm rounded-2xl bg-gray-900 px-5 py-3 text-xl font-sans font-medium text-white cursor-pointer"
            >
              Login
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
