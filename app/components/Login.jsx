"use client";

import React, { useState } from "react";

const Login = () => {
  const [move, setMove] = useState(false);

  function onBtn() {
    setMove(!move);
  }
  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="h-[60%] w-[70%] flex items-center bg-[#ffffff] rounded-2xl relative overflow-hidden shadow-[#5a5a5a] shadow-2xl">
        <div
          className={`${
            move
              ? "translate-x-full rounded-l-full"
              : "rounded-r-full"
          } transition-all duration-1000 z-30 p-10 bg-[#ff2323] h-full w-1/2 absolute rounded-2xl`}
        ></div>

        <div
          className={`${
            move ? "-translate-x-full opacity-0" : ""
          } z-30 flex flex-col gap-5 items-center absolute left-24 text-center text-white transition-all duration-1000`}
        >
          <h1 className="text-4xl font-bold ">Welcome Back!</h1>
          <p className="text-sm">
            To keep connected with us please login
            <br /> with your personal info
          </p>
          <button
            onClick={onBtn}
            className="border border-white font-bold text-xs py-2 px-8 rounded-2xl"
          >
            SIGN IN
          </button>
        </div>

        <div
          className={`${
            move ? "-translate-x-full opacity-0" : ""
          } z-20 flex flex-col gap-5 items-center absolute right-24 transition-all duration-1000`}
        >
          <h1 className="text-4xl font-bold">Create Account</h1>
          <p className="text-sm">or use yur emai for registration</p>
          <input
            type="text"
            placeholder="Name"
            className="px-3 py-1 bg-gray-200 text-sm rounded-sm"
          />
          <input
            type="text"
            placeholder="Email"
            className="px-3 py-1 bg-gray-200 text-sm rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-3 py-1 bg-gray-200 text-sm rounded-sm"
          />
          <button
            onClick={onBtn}
            className="border-[#ff2323] text-white font-bold bg-[#ff2323] text-xs py-2 px-8 rounded-2xl"
          >
            SIGN UP
          </button>
        </div>

        <div
          className={`${
            move ? "" : "translate-x-full opacity-0"
          } z-20 flex flex-col gap-5 items-center absolute left-24 transition-all duration-1000`}
        >
          <h1 className="text-4xl font-bold">Sign in</h1>
          <p className="text-gray-700">or use your account</p>
          <input
            type="text"
            placeholder="Email"
            className="px-3 py-1 bg-gray-200 text-sm rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-3 py-1 bg-gray-200 text-sm rounded-sm"
          />
          <p className="text-gray-700">forget your password?</p>
          <button
            onClick={onBtn}
            className="border-[#ff2323] text-white font-bold bg-[#ff2323] text-xs py-2 px-8 rounded-2xl"
          >
            SIGN IN
          </button>
        </div>

        <div
          className={`${
            move ? "" : "translate-x-full opacity-0"
          } z-30 flex flex-col gap-5 items-center absolute right-24 text-white text-center transition-all duration-1000`}
        >
          <h1 className="text-4xl font-bold">Hello, Friend!</h1>
          <p className="text-sm">
            Enter your personal details and start
            <br /> journey with us
          </p>
          <button
            onClick={onBtn}
            className="border border-white font-bold text-xs py-2 px-8 rounded-2xl"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
