import React, { useState } from "react";
import { MdOutlineMenu, MdRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <navbar className="flex justify-between sm:justify-around items-center p-2 max-w-[1240px] mx-auto">
      <h1 className="text-3xl lg:text-4xl font-bold text-yellow-400">
        Golden Grillz
      </h1>
      <ul className="hidden sm:flex space-x-4 cursor-pointer text-yellow-500 font-medium">
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Review</li>
        <li>Order</li>
      </ul>

      <div
        onClick={handleMenu}
        className="fixed right-2 top-4 sm:hidden cursor-pointer text-yellow-400"
      >
        {!menu ? <MdOutlineMenu size={25} /> : <MdRestaurantMenu size={25} />}
      </div>

      <div className="sm:hidden text-yellow-500 uppercase tracking-wider text-sm">
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
