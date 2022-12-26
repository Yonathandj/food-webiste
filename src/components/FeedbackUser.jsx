import React from "react";
import ReactStars from "react-rating-stars-component";

import { SiFeedly } from "react-icons/si";

const FeedbackUser = () => {
  return (
    <div className="bg-[#080D16] w-full px-14 py-5 flex justify-center align-center">
      <div className="max-w-[800px] p-5 mx-auto">
        <div>
          <h2 className="text-2xl text-slate-200 uppercase tracking-wider font-semibold text-center">
            Send us a feedback
          </h2>
          <SiFeedly size={30} className="text-slate-200 mx-auto mt-2" />
          <div className="flex justify-center align-center flex-col">
            <ReactStars
              count={5}
              size={40}
              a11y={true}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
              classNames={"mx-auto"}
            />
            <button className="py-2 bg-emerald-600 text-slate-200 cursor-pointer rounded-[4px] shadow-lg hover:bg-emerald-700 font-semibold tracking-wider duration-150 active:scale-95">
              Add rating
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackUser;
