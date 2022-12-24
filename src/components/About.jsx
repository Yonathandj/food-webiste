import React, { useState, useEffect } from "react";
import { MdOutlineFoodBank } from "react-icons/md";

const About = ({ API_URL, API_KEY }) => {
  const [item, setItem] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await fetch(
          `${API_URL}apiKey=${API_KEY}&query=burger&number=1`
        );
        if (!response.ok)
          throw new Error("Can't access this image, refresh the page");
        const data = await response.json();
        setItem(data["menuItems"][0]);
      } catch (error) {
        setError(error.message);
      }
    };
    getImage();
  }, []);

  return (
    <div className="bg-[#080D16] w-full">
      <div className="p-14 grid md:grid-cols-2 mx-auto gap-5">
        <div>
          <div className="flex gap-2 align-center justify-center md:justify-start">
            <h1 className="uppercase text-2xl text-yellow-400">About Us</h1>
            <MdOutlineFoodBank size={32} className="text-yellow-400" />
          </div>
          <div>
            <h1 className="text-5xl text-slate-200 capitalize font-bold my-5 text-center md:text-left">
              The best restaurant in town
            </h1>
            <p className="text-slate-400 text-xl text-justify">
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
        <div className="flex justify-center align-center md:block md:my-auto md:mx-auto">
          {error ? (
            <p className="text-xl text-red-200 font-semibold text-center p-10 bg-gray-800 rounded-sm">
              {error}
            </p>
          ) : (
            <img
              src={item["image"]}
              alt={item["title"]}
              className="w-auto rounded-sm"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
