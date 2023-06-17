import React from "react";

import logo from "../assets/omnifood-logo.png";
import calendarIcon from "../assets/calendar.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-[3rem] px-[3rem]">
      {/* Logo */}
      <a href="#">
        <img src={logo} alt="logo" className="w-[15vw]" />
      </a>

      {/* Navbar */}
      <div className="flex justify-center items-center gap-6 bg-primaryBackground px-7 py-2 rounded-full text-lg font-medium">
        <a
          className="hover:bg-secondaryColor px-4 py-2 rounded-full hover:text-white"
          href="#howItWorks"
        >
          How it works
        </a>
        <a
          className="hover:bg-secondaryColor px-4 py-2 rounded-full hover:text-white"
          href="#meals"
        >
          Meals
        </a>
        <a
          className="hover:bg-secondaryColor px-4 py-2 rounded-full hover:text-white"
          href="#testimonials"
        >
          Testimonials
        </a>
        <a
          className="hover:bg-secondaryColor px-4 py-2 rounded-full hover:text-white"
          href="#pricing"
        >
          Pricing
        </a>
      </div>

      {/* Order today */}
      <a
        href="#contact"
        className="flex gap-2 px-6 py-4 bg-secondaryColor rounded-full text-xl hover:bg-primaryColor"
      >
        <img src={calendarIcon} alt="calendar" className="w-[20px]" />
        Order today
      </a>
    </div>
  );
};

export default Navbar;
