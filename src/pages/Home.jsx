import React from "react";

// assets
import home_img from "../assets/bowls.jpg";
import customer_1 from "../assets/customers/customer-1.jpg";
import customer_2 from "../assets/customers/customer-2.jpg";
import customer_3 from "../assets/customers/customer-3.jpg";
import customer_4 from "../assets/customers/customer-4.jpg";
import customer_5 from "../assets/customers/customer-5.jpg";
import customer_6 from "../assets/customers/customer-6.jpg";

// components
import Slider from "../components/Slider";

const Home = () => {
  const customers = [
    {
      id: 1,
      img: customer_1,
    },
    {
      id: 2,
      img: customer_2,
    },
    {
      id: 3,
      img: customer_3,
    },
    {
      id: 4,
      img: customer_4,
    },
    {
      id: 5,
      img: customer_5,
    },
    {
      id: 6,
      img: customer_6,
    },
  ];

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

        <div className="flex items-center xs:justify-center md:justify-normal mt-[4rem]">
          {customers.map((customer) => (
            <img
              src={customer.img}
              alt="customer"
              className="rounded-full border-[6px] border-primaryBackground md:w-[80px] xs:w-[60px] ml-[-1.5rem] first:ml-0 scale-100 hover:scale-110 transition-all duration-200 ease-in-out hover:z-10"
            />
          ))}
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
