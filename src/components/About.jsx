import React from "react";
import Pizza from "../images/pizza.jpg";

const About = () => {
  return (
    <section className="p-6 bg-slate-100">
      <div className="mx-auto w-52 h-16 bg-yellow-400 flex justify-center items-center p-2 rounded-tl-lg rounded-br-lg">
        <p className="text-2xl text-slate-100 font-bold">About Us</p>
      </div>
      <h1 className="text-center text-5xl text-slate-600 font-bold uppercase mt-5">
        Why Choose Us?
      </h1>
      <div className="max-w-[1000px] grid md:grid-cols-2 mt-8 mx-auto">
        <img src={Pizza} alt="Pizza" className="w-[80%] rounded" />
        <div>
          <h1 className="uppercase text-2xl tracking-widest text-slate-600 font-bold text-center">
            Best in this country
          </h1>
          <p className="text-xl text-slate-500 text-justify mt-2">
            Golden Grillz opened on Thanksgiving Day 1990. Chef / Owner Ron
            Silver began baking pizza and selling them to restaurants and his
            neighbors out of a small kitchen at the corner of Hudson and North
            Moore St. in Tribeca. Today, NYC's beloved restaurant and pie shop
            celebrates 27 years of classic, made from scratch American cooking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
