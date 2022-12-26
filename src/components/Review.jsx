import React from "react";

import { MdRateReview } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

import person from "../images/person.jpg";

const Review = () => {
  return (
    <div className="bg-[#080D16] w-full px-14 py-16">
      <div className="flex gap-2 align-center justify-center">
        <h1 className="uppercase text-2xl text-yellow-400">Review</h1>
        <MdRateReview size={32} className="text-yellow-400" />
      </div>
      <div className="flex justify-center items-center p-5">
        <div className="max-w-[800px] p-2 grid md:grid-cols-2">
          <div className="flex flex-col justify-center items-center">
            <img
              src={person}
              alt="person by Jurica Koletić from Unsplash"
              className="w-auto h-40 rounded-full"
            />
            <h2 className="text-2xl text-slate-200">Tom Smith</h2>
          </div>
          <div className="pt-5 md:pt-0">
            <p className="text-xl text-slate-400 text-justify">
              This cozy restaurant has left the best impressions! Hospitable
              hosts, delicious dishes, beautiful presentation, wide wine list
              and wonderful dessert. I recommend to everyone! I would like to
              come back here again and again.
            </p>
            <div className="flex items-center pt-2">
              <AiFillStar size={25} className="text-yellow-400" />
              <AiFillStar size={25} className="text-yellow-400" />
              <AiFillStar size={25} className="text-yellow-400" />
              <AiFillStar size={25} className="text-yellow-400" />
              <AiFillStar size={25} className="text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
