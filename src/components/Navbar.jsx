import React, { useState } from "react";

import logo from "../assets/omnifood-logo.png";
import calendarIcon from "../assets/calendar.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex justify-between items-center py-[3rem] xs:px-[2rem] md:px-[3.6rem] bg-tertiaryBackground opacity-95 z-10 sticky top-0">
      {/* Logo */}
      <a href="#">
        <img src={logo} alt="logo" className="md:w-[15vw] xs:w-[35vw] " />
      </a>

      {/* Navbar - Desktop */}
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

      {/* Nav List - Mobile*/}
      <nav className="md:hidden xs:relative ">
        <img
          src={!toggle ? menu : close}
          className="fixed top-4 right-7 w-[35px] h-[35px] object-contain cursor-pointer "
          alt="nav menu"
          onClick={() => setToggle(!toggle)}
        />

        <ul
          className={`${
            !toggle ? "hidden" : "block"
          } text-center w-[90vw] h-[100vh] relative top-[8rem] right-4 `}
        >
          <li
            onClick={() => setToggle(!toggle)}
            className="font-medium text-colorText hover:text-primaryColor mb-4 text-xl"
          >
            <a href="#howItWorks">How it Works</a>
          </li>
          <li
            onClick={() => setToggle(!toggle)}
            className="font-medium text-colorText hover:text-primaryColor mb-4 text-xl"
          >
            <a href="#meals">Meals</a>
          </li>
          <li
            onClick={() => setToggle(!toggle)}
            className="font-medium text-colorText hover:text-primaryColor mb-4 text-xl"
          >
            <a href="#testimonials">Testimonials</a>
          </li>
          <li
            onClick={() => setToggle(!toggle)}
            className="font-medium text-colorText hover:text-primaryColor mb-4 text-xl"
          >
            <a href="#pricing">Pricing</a>
          </li>
          <li
            onClick={() => setToggle(!toggle)}
            className="font-medium text-white py-2 px-4 w-[50vw] bg-primaryColor rounded-lg hover:bg-shadeColor cursor-pointer mx-auto text-xl mt-6"
          >
            <a href="#contact" className="flex gap-">
              <img src={calendarIcon} alt="calendar" className="w-[20px]" />
              Order today
            </a>
          </li>
        </ul>
      </nav>

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
