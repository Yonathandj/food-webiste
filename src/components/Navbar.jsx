import React, { useState } from "react";
import { MdOutlineMenu, MdRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className="flex justify-between items-center md:justify-around p-4 max-w-[1240px] mx-auto">
      <h1 className="text-3xl lg:text-4xl font-bold text-slate-200">
        Golden Grillz
      </h1>
      <ul className="hidden sm:flex justify-center align-center space-x-2 sm:space-x-3 lg:space-x-8 text-slate-200 font-medium uppercase tracking-widest">
        <li className="hover:text-yellow-400 duration-150 cursor-pointer">
          Home
        </li>
        <li className="hover:text-yellow-400 duration-150 cursor-pointer">
          About
        </li>
        <li className="hover:text-yellow-400 duration-150 cursor-pointer">
          Menu
        </li>
        <li className="hover:text-yellow-400 duration-150 cursor-pointer">
          Review
        </li>
        <li className="hover:text-yellow-400 duration-150 cursor-pointer">
          Order
        </li>
      </ul>

      <div
        onClick={handleMenu}
        className="fixed right-2 top-4 sm:hidden cursor-pointer text-slate-200 p-2 rounded-full bg-slate-400"
      >
        {!menu ? (
          <MdOutlineMenu size={25} className="text-emerald-600" />
        ) : (
          <MdRestaurantMenu size={25} className="text-emerald-600" />
        )}
      </div>

      <div className="sm:hidden text-slate-200 uppercase tracking-widest text-md">
        <ul
          className={
            menu
              ? "fixed top-32 left-5 cursor-point font-medium duration-500 ease-out w-24"
              : "fixed top-32 left-[-100%] cursor-point font-medium duration-500 ease-in w-24"
          }
        >
          <li className="p-2 text-slate-200 border-r-2 rounded-tl-lg rounded-br-lg bg-emerald-600 text-center font-semibold mt-5">
            Home
          </li>
          <li className="p-2 text-slate-200 border-r-2 rounded-tl-lg rounded-br-lg bg-emerald-600 text-center font-semibold mt-5">
            About
          </li>
          <li className="p-2 text-slate-200 border-r-2 rounded-tl-lg rounded-br-lg bg-emerald-600 text-center font-semibold mt-5">
            Menu
          </li>
          <li className="p-2 text-slate-200 border-r-2 rounded-tl-lg rounded-br-lg bg-emerald-600 text-center font-semibold mt-5">
            Review
          </li>
          <li className="p-2 text-slate-200 border-r-2 rounded-tl-lg rounded-br-lg bg-emerald-600 text-center font-semibold mt-5">
            Order
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
