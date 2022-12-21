import React from "react";
import Pizza from "../images/pizza.jpg";

import { MdPayments, MdFastfood } from "react-icons/md";
import { GiChefToque } from "react-icons/gi";

const About = () => {
  return (
    <section className="p-6 bg-slate-100">
      <div className="mx-auto w-40 h-10 sm:w-52 sm:h-16 bg-yellow-400 flex justify-center items-center p-2 rounded-tl-lg rounded-br-lg">
        <p className="text-2xl text-slate-100 font-bold">About Us</p>
      </div>
      <h1 className="text-center text-4xl sm:text-5xl text-slate-600 font-bold uppercase mt-5">
        Why Choose Us?
      </h1>
      <div className="max-w-[1000px] grid sm:grid-cols-2 mt-8 mx-auto">
        <img src={Pizza} alt="Pizza" className="w-[100%] sm:w-[85%] rounded" />
        <div>
          <h1 className="uppercase mt-4 sm:mt-0 text-3xl sm:text-2xl tracking-widest text-slate-600 font-bold text-center">
            Best in this country
          </h1>
          <p className="text-xl text-slate-500 text-justify mt-2">
            Golden Grillz opened on Thanksgiving Day 1990. Chef / Owner Ron
            Silver began baking pizza and selling them to restaurants and his
            neighbors out of a small kitchen at the corner of Hudson and North
            Moore St. in Tribeca. Today, NYC's beloved restaurant and pie shop
            celebrates 27 years of classic, made from scratch American cooking.
          </p>
          <div className="grid grid-cols-3 mt-2 gap-4">
            <div className="py-[1.5px] px-2 bg-emerald-600 text-slate-100 rounded-tl-lg rounded-br-lg">
              <MdPayments size={25} className="mx-auto" />
              <p className="text-sm font-semibold tracking-wider w-[100%] text-center">
                Many Methods
              </p>
            </div>
            <div className="py-[1.5px] px-2 bg-emerald-600 text-slate-100 rounded-tl-lg rounded-br-lg">
              <MdFastfood size={25} className="mx-auto" />
              <p className="text-sm font-semibold tracking-wider w-[100%] text-center">
                Many Variants
              </p>
            </div>
            <div className="py-[1.5px] px-2 bg-emerald-600 text-slate-100 rounded-tl-lg rounded-br-lg">
              <GiChefToque size={25} className="mx-auto" />
              <p className="text-sm font-semibold tracking-wider w-[100%] text-center">
                Many Pro Chefs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
