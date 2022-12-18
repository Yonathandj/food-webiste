import React, { useState } from "react";
import { MdOutlineMenu, MdRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <navbar className="flex justify-between items-center md:justify-around p-4 max-w-[1240px] mx-auto">
      <h1 className="text-3xl lg:text-4xl font-bold text-slate-100">
        Golden Grillz
      </h1>
      <ul className="hidden sm:flex justify-center align-center space-x-2 sm:space-x-3 lg:space-x-8 text-slate-100 font-medium uppercase tracking-widest">
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
        className="fixed right-2 top-4 sm:hidden cursor-pointer text-slate-100"
      >
        {!menu ? <MdOutlineMenu size={25} /> : <MdRestaurantMenu size={25} />}
      </div>

      <div className="sm:hidden text-slate-100 uppercase tracking-widest text-sm">
        <ul
          className={
            menu
              ? "fixed top-20 left-5 cursor-point font-medium duration-500 ease-out"
              : "fixed top-20 left-[-100%] cursor-point font-medium duration-500 ease-in"
          }
        >
          <li className="p-2">Home</li>
          <li className="p-2">About</li>
          <li className="p-2">Menu</li>
          <li className="p-2">Review</li>
          <li className="p-2">Order</li>
        </ul>
      </div>
    </navbar>
  );
};

export default Navbar;
