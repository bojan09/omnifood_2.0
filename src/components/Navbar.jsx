import React from "react";

import logo from "../assets/omnifood-logo.png";
import calendarIcon from "../assets/calendar.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-[3rem] xs:px-[2rem] md:px-[3.6rem]">
      {/* Logo */}
      <a href="#">
        <img src={logo} alt="logo" className="md:w-[15vw] xs:w-[35vw] " />
      </a>

      {/* Navbar */}
      <div className="xs:hidden md:flex justify-center items-center gap-6 bg-primaryBackground lg:px-7 md:px-4 py-2 rounded-full lg:text-lg md:text-md font-medium mx-2">
        <a
          className="hover:bg-secondaryColor lg:px-4 md:px-2 py-2 rounded-full hover:text-white"
          href="#howItWorks"
        >
          How it works
        </a>
        <a
          className="hover:bg-secondaryColor lg:px-4 md:px-2 py-2 rounded-full hover:text-white"
          href="#meals"
        >
          Meals
        </a>
        <a
          className="hover:bg-secondaryColor lg:px-4 md:px-2 py-2 rounded-full hover:text-white"
          href="#testimonials"
        >
          Testimonials
        </a>
        <a
          className="hover:bg-secondaryColor lg:px-4 md:px-2 py-2 rounded-full hover:text-white"
          href="#pricing"
        >
          Pricing
        </a>
      </div>

      {/* Order today */}
      <a
        href="#contact"
        className="xs:hidden md:flex gap-2 lg:px-6 md:px-3 lg:py-4 md:py-3 bg-secondaryColor rounded-full text-xl hover:bg-primaryColor"
      >
        <img src={calendarIcon} alt="calendar" className="w-[20px]" />
        Order today
      </a>
    </div>
  );
};

export default Navbar;
