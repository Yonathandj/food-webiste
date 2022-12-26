import React from "react";

import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { SiApacheflink } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#06080e]">
      <div className="grid md:grid-cols-3 mx-auto px-5 py-5">
        <div className="flex justify-center items-center">
          <SiApacheflink
            size={120}
            className="text-slate-400 hover:text-slate-200 cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-center md:mt-0 mt-10">
          <div className="flex items-center justify-center gap-5">
            <FaFacebook
              size={25}
              className="text-slate-400 hover:text-slate-200 cursor-pointer"
            />
            <FaInstagram
              size={25}
              className="text-slate-400 hover:text-slate-200 cursor-pointer"
            />
            <FaTiktok
              size={25}
              className="text-slate-400 hover:text-slate-200 cursor-pointer"
            />
            <FaTwitter
              size={25}
              className="text-slate-400 hover:text-slate-200 cursor-pointer"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 md:mt-0 mt-10 mx-auto gap-14 w-full">
          <div className="tracking-wider">
            <h6 className="text-md text-slate-400 font-semibold text-center">
              Company
            </h6>
            <ul className="mt-2 md:mt-0">
              <li className="text-slate-400 text-sm cursor-pointer hover:text-slate-200 text-center">
                About
              </li>
              <li className="text-slate-400 text-sm cursor-pointer hover:text-slate-200 text-center">
                Menus
              </li>
              <li className="text-slate-400 text-sm cursor-pointer hover:text-slate-200 text-center">
                Favorite
              </li>
              <li className="text-slate-400 text-sm cursor-pointer hover:text-slate-200 text-center">
                Location
              </li>
              <li className="text-slate-400 text-sm cursor-pointer hover:text-slate-200 text-center">
                Order
              </li>
            </ul>
          </div>
          <div className="tracking-wider">
            <h6 className="text-md text-slate-400 font-semibold text-center">
              Legal
            </h6>
            <ul className="mt-2 md:mt-0">
              <li className="text-slate-400 text-sm cursor-pointer hover:text-slate-200 text-center">
                Terms & Conditions
              </li>
              <li className="text-slate-400 text-sm cursor-pointer hover:text-slate-200 text-center">
                Privacy Policy
              </li>
              <li className="text-slate-400 text-sm cursor-pointer hover:text-slate-200 text-center">
                DMCA
              </li>
              <li className="text-slate-400 text-sm cursor-pointer hover:text-slate-200 text-center">
                Mobile App
              </li>
            </ul>
          </div>
          <div className="tracking-wider">
            <h6 className="text-md text-slate-400 font-semibold text-center">
              Info
            </h6>
            <ul className="mt-2 md:mt-0">
              <li className="text-slate-400 text-sm cursor-pointer hover:text-slate-200 text-center">
                FAQ
              </li>
              <li className="text-slate-400 text-sm cursor-pointer hover:text-slate-200 text-center">
                Contact Us
              </li>
              <li className="text-slate-400 text-sm cursor-pointer hover:text-slate-200 text-center">
                Instagram
              </li>
              <li className="text-slate-400 text-sm cursor-pointer hover:text-slate-200 text-center">
                Twitter
              </li>
              <li className="text-slate-400 text-sm cursor-pointer hover:text-slate-200 text-center">
                Facebook
              </li>
              <li className="text-slate-400 text-sm cursor-pointer hover:text-slate-200 text-center">
                Tiktok
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
