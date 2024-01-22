import React from "react";
import Banner from "./Banner";
import ai from "../assets/images/ai.svg";

const Hero = () => {
  return (
    <div
      className="w-full max-w-[1408px] flex items-start 
    justify-between h-[488px] space-y-6 p-8 flex-auto gap-x-16"
    >
      <div className="flex w-[100%] items-start px-4 justify-center">
        <div className="w-[60%]">
          <h1 className="text-7xl font-[600]">
            Uniting the world,
            <br /> one video call at a time
          </h1>
          <p className="text-2xl font-[400]">
            Experience the future of communication with ClearLink where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>
          <div className="w-[457px] flex gap-y-5 mt-6">
            <button
              className="bg-blue-700 text-white w-56 rounded-full
            py-4 px-7 shadow-sm;
"
            >
              Start your free trial
            </button>
            <button
              className="flex gap-x-1 bg-transparent text-blue-700 w-72 rounded-full
            py-4 px-7 shadow-sm items-center justify-center
"
            >
              <img src={ai} alt="ai" className="h-4 w-4 object-contain" />
              Discover AI assistant
            </button>
          </div>
        </div>
        <Banner />
      </div>
    </div>
  );
};

export default Hero;
