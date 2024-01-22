import React from "react";
import {
  animoji1,
  animoji2,
  animoji3,
  animoji4,
  animoji5,
  animoji6,
} from "./_index";
import { zap } from "./_index";

const Banner = () => {
  return (
    <div
      className="w-[50%] flex flex-col bg-blue-50 p-6 shadow-xl border 
    rounded-md border-blue-200 space-y-5 "
    >
      <div className="grid grid-cols-3 gap-3">
        <img src={animoji1} alt="animoji" />
        <img src={animoji2} alt="animoji" />
        <img src={animoji3} alt="animoji" />
        <img src={animoji4} alt="animoji" />
        <img src={animoji5} alt="animoji" />
        <img src={animoji6} alt="animoji" />
      </div>
      <div className="flex w-[100%] items-center justify-around gap-3 px-4 space-y-6">
        <ul className="gap-2.5 flex">
          {zap.map((icon, index) => (
            <li key={index} className="">
              <img src={icon} className="w-11 h-11 object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Banner;
