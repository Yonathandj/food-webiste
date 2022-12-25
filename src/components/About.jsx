import React from "react";
import { MdOutlineFoodBank } from "react-icons/md";

import steak from "../images/steak.jpg";

const About = () => {
  return (
    <div className="bg-[#080D16] w-full">
      <div className="p-14 grid md:grid-cols-2 mx-auto gap-5">
        <div>
          <div className="flex gap-2 align-center justify-center md:justify-start">
            <h1 className="uppercase text-2xl text-yellow-400">About Us</h1>
            <MdOutlineFoodBank size={32} className="text-yellow-400" />
          </div>
          <div>
            <h1 className="text-5xl md:text-6xl text-slate-200 capitalize font-bold my-5 text-center md:text-left">
              The best restaurant in town
            </h1>
            <p className="text-slate-400 text-xl md:text-[22px] text-justify">
              Golden Grillz opened on Thanksgiving Day 1990. Chef / Owner Ron
              Golden began baking pies and selling them to restaurants and his
              neighbors out of a small kitchen at the corner of Hudson and North
              Moore St. in Tribeca. Today, NYC's beloved restaurant celebrates
              27 years of classic, made from scratch American cooking.
            </p>
            <button className="mt-4 py-2 px-8 bg-emerald-600 text-slate-100 cursor-pointer rounded-[4px] shadow-lg hover:bg-emerald-700 font-semibold tracking-wider duration-150 active:scale-95">
              Learn More
            </button>
          </div>
        </div>
        <div className="m-auto h-[27rem] w-auto">
          <img
            src={steak}
            alt="Steak by Chad Montano from Unsplash"
            className="text-slate-400 rounded-md h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
