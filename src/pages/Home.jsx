import React from "react";

// assets
import home_img from "../assets/bowls.jpg";

// components
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="w-[80vw] md:w-[90vw] mx-auto md:flex justify-center gap-3">
      {/* Left Container */}
      <div className="lg:w-[40%]">
        <h1 className="text-4xl font-medium my-6">
          A healthy meal delivered to your door, <b>every single day</b>{" "}
        </h1>
        <p className="text-lg my-4">
          The smart 365-days-per-year food subscription that will make you{" "}
          <b>eat healthy again.</b> Tailored to your personal tastes and
          nutritional needs.
        </p>

        <div className="mt-[4rem]">
          <Slider />
        </div>

        <div className="flex justify-evenly items-center md:justify-start xs:gap-5 mt-[4rem]">
          <button>
            <a
              className="border-2 border-primaryColor bg-secondaryBackground hover:bg-primaryColor rounded-full px-4 py-2 text-lg md:text-xl font-medium"
              href="#howItWorks"
            >
              Learn more
            </a>
          </button>

          <button>
            <a
              className=" bg-primaryBackground hover:bg-secondaryBackground hover:border-2 hover:border-primaryColor rounded-full px-4 py-2 text-lg lg:text-xl font-medium"
              href="#contact"
            >
              Get Started
            </a>
          </button>
        </div>
      </div>

      {/* Right Container */}
      <div className="flex justify-center items-center xs:mt-[4rem] md:mt-0 md:pl-4">
        <img
          src={home_img}
          alt="home_img"
          className="rounded-lg shadow-lg mb-[3rem] lg:w-[70%]"
        />
      </div>
    </div>
  );
};

export default Home;
