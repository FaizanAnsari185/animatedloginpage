"use client";

import React, { useState } from "react";

const Login = () => {
  const [move, setMove] = useState(false);

  function onBtn() {
    setMove(!move);
  }
  return (
    <div className="h-screen bg-slate-200 flex flex-col justify-center items-center ">
      <div className="h-[60%] w-[70%] flex bg-white items-center rounded-2xl relative overflow-hidden shadow-2xl">
        <div
          className={`bg-[#ff2323] h-full w-1/2 absolute rounded-2xl ${
            move ? "translate-x-full " : " "
          } transition-transform  duration-1000 z-30 p-10`}
        ></div>

        <div
          className={`${
            move ? "-translate-x-full opacity-0" : " "
          } z-30 flex flex-col gap-5 items-center absolute left-32 text-white transition-all duration-1000`}
        >
          <button onClick={onBtn} className="border-2 border-white p-5">
            click
          </button>
          <h1 className="text-4xl">Hello World</h1>
        </div>

        <div
          className={` ${
            move ? "" : "translate-x-full opacity-0"
          } z-30 flex flex-col gap-5 items-center absolute right-32 text-white transition-all duration-1000`}
        >
          <button onClick={onBtn} className="border-2 border-white p-5">
            click
          </button>
          <h1 className="text-4xl">Hello World</h1>
        </div>

        <div
          className={` ${
            move ? "-translate-x-full opacity-0" : ""
          } z-20 flex flex-col gap-5 items-center absolute right-36 transition-all duration-1000`}
        >
          <h1 className="text-4xl">Hi Coder</h1>
          <p>Join Me With Click Button</p>
          <button onClick={onBtn} className="border-2 border-black p-5">
            click
          </button>
        </div>

        <div
          className={` ${
            move ? "" : "translate-x-full opacity-0"
          } z-20 flex flex-col gap-5 items-center absolute left-36 transition-all duration-1000`}
        >
          <h1 className="text-4xl">Hi Coder</h1>
          <p>Join Me With Click Button</p>
          <button onClick={onBtn} className="border-2 border-black p-5">
            click
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
