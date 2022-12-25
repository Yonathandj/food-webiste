import React from "react";
import { MdMenuBook } from "react-icons/md";

import burger from "../images/burger.jpg";
import pizza from "../images/pizza.jpg";
import pasta from "../images/pasta.jpg";

const Menu = () => {
  return (
    <div className="bg-[#080D16] px-16">
      <div className="flex gap-2 align-center justify-center">
        <h1 className="uppercase text-2xl text-yellow-400 mt-5">Menu</h1>
        <MdMenuBook size={32} className="text-yellow-400 mt-5" />
      </div>
      <h1 className="text-5xl lg:text-6xl text-slate-200 capitalize font-bold my-5 text-center">
        Our Customer's Favorite Dish
      </h1>
      <div className="grid md:grid-cols-3 max-w-[1000px] gap-4 mx-auto p-4">
        <div className="overflow-hidden h-54 w-54 md:h-76 md:w-76">
          <img
            src={burger}
            alt="Burger by SK form Unsplash"
            className="rounded-sm hover:scale-110 duration-300 ease-out h-full w-full"
          />
        </div>
        <div className="overflow-hidden h-54 w-54 md:h-76 md:w-76">
          <img
            src={pizza}
            alt="Pizza by Vitalii Chernopyskyi from Unsplash"
            className="rounded-sm hover:scale-110 duration-300 ease-out h-full w-full"
          />
        </div>
        <div className="overflow-hidden h-54 w-54 md:h-76 md:w-76">
          <img
            src={pasta}
            alt="Pasta by Olayka Babalola from Unsplash"
            className="rounded-sm hover:scale-110 duration-300 ease-out h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
