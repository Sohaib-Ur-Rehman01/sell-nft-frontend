import React from "react";
import logo from "../assets/logo.webp";
import searchImage from "../assets/search.webp";
import profileImage from "../assets/profile.webp";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-around mt-4 w-full">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="flex justify-between items-center w-full">
          <div className="">
            <img src={logo} alt="logo" />
          </div>
          <div className="hidden md:flex justify-center items-center gap-4 ">
            <div className="cursor-pointer">
              <img src={searchImage} alt="search" />
            </div>
            <div className="cursor-pointer bg-gradient-to-r from-[#2438CB] to-[#B600D1] rounded-full">
              <button className="px-[16px] py-[8px] rounded-full font-semibold text-[16px] text-[#FFFFFF] cursor-pointer">
                Connect Wallet
              </button>
            </div>
            <div className="cursor-pointer px-[16px] py-[8px]">
              <img src={profileImage} alt="" />
            </div>
          </div>
          <div className="md:hidden">
            {menuOpen ? (
              <HiX
                className="text-3xl cursor-pointer text-white"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <HiMenu
                className="text-3xl cursor-pointer text-white"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-[#B600D1] flex flex-col items-center gap-4 py-6 shadow-lg md:hidden transition-all duration-300">
          <img
            src={searchImage}
            alt="search"
            className="w-6 h-6 cursor-pointer"
          />
          <button className="px-[16px] py-[8px] bg-gradient-to-r from-[#2438CB] to-[#B600D1] text-white rounded-full font-semibold text-[16px] cursor-pointer">
            Connect Wallet
          </button>
          <img
            src={profileImage}
            alt="profile"
            className="w-8 h-8 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}
