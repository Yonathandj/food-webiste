import React from "react";

const Hero = () => {
  return (
    <div className="w-max-[1240px] mt-12 p-6">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-center font-bold text-slate-100 w-[90%] sm:w-[75%] md:w-[50%]">
          Where every flavor tells a
          <span className="text-5xl md:text-6xl lg:text-7xl text-yellow-400 ml-3">
            story
          </span>
        </h1>
        <p className="text-xl text-center font-medium text-slate-100 mt-8">
          Low cost. High quality.
        </p>
      </div>
      <div className="flex justify-center items-center mt-10">
        <button className="py-2 px-12 bg-emerald-600 text-slate-100 cursor-pointer rounded-2xl shadow-lg hover:bg-emerald-700 font-semibold tracking-wider duration-150 active:scale-95">
          See All Menus
        </button>
      </div>
    </div>
  );
};

export default Hero;
