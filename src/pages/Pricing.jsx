import React from "react";

const Pricing = () => {
  return (
    <div id="pricing" className="pb-[2rem] pt-[5rem]">
      {/* Secondary & Primary Heading */}
      <div className="md:w-[70vw] mx-auto">
        <h2 className="uppercase text-primaryColor xs:text-lg md:text-2xl px-[2rem] pb-[1rem] text-center">
          Pricing
        </h2>

        <h1 className=" pl-[2rem] pr-[3rem] font-semibold lg:text-6xl md:text-[2.5rem] mb-[3rem] md:mb-[9rem] md:mt-[2rem] text-center text-4xl">
          Find a plan that works <i className="text-primaryColor">for you</i>
        </h1>
      </div>

      {/* Main - Container*/}
      <div className="md:flex flex-wrap justify-center items-center md:w-[80vw] lg:w-[70vw] mx-auto">
        {/* Starter - Container*/}
        <div className="border-[2px] border-secondaryBackground bg-secondaryBackground rounded-xl flex flex-col justify-center items-center xs:w-[85vw] md:w-[350px] px-[3rem] py-[4rem] mb-[4rem] mx-auto">
          <h1 className="uppercase text-primaryColor text-xl font-medium">
            Starter
          </h1>
          <p className="text-5xl font-semibold my-4">
            <span className="text-sm font-medium">$</span>
            399
          </p>
          <span className="text-xs font-light mb-[2rem] text-center">
            per month. That's just $13 per meal!
          </span>

          <div className="flex flex-col gap-2 font-light my-6">
            <p>
              <b>1 meal</b> per day
            </p>
            <p>
              Order from <b>11am to 9pm</b>
            </p>
            <p>
              Delivery is <b>free</b>
            </p>
          </div>

          <button className="mt-[4rem]">
            <a
              className="py-4 px-10 rounded-3xl text-white hover:bg-shadeColor transition-all duration-500 ease-in-out bg-primaryColor font-medium text-lg"
              href="#contact"
            >
              Select plan
            </a>
          </button>
        </div>

        {/* Complete - Container*/}
        <div className="bg-primaryBackground rounded-xl flex flex-col justify-center items-center xs:w-[85vw] md:w-[350px] mx-auto p-[3rem] mb-[4rem] relative overflow-hidden">
          <span className="bg-primaryColor text-white font-medium uppercase py-1 px-8 absolute top-0 right-0 rotate-[45deg] translate-x-9 translate-y-7 ">
            best value
          </span>
          <h1 className="uppercase text-primaryColor text-xl font-medium">
            Complete
          </h1>
          <p className="text-5xl font-semibold my-4">
            <span className="text-sm font-medium">$</span>
            649
          </p>
          <span className="text-xs font-light mb-[2rem] text-center">
            per month. That's just $11 per meal!
          </span>

          <div className="flex flex-col gap-2 font-light my-6">
            <p>
              <b>2 meals</b> per day
            </p>
            <p>
              Order <b>24/7</b>
            </p>
            <p>
              Get access to <b>latest recipes</b>
            </p>
            <p>
              Delivery is <b>free</b>
            </p>
          </div>

          <button className="mt-[4rem]">
            <a
              className="py-4 px-10 rounded-3xl text-white hover:bg-shadeColor transition-all duration-500 ease-in-out bg-primaryColor font-medium text-lg"
              href="#contact"
            >
              Select plan
            </a>
          </button>
        </div>

        {/* Custom - Container*/}
        <div className="border-[2px] border-secondaryBackground bg-secondaryBackground  rounded-xl flex flex-col justify-center items-center xs:w-[85vw] md:w-[350px] px-[3rem] py-[2rem] mb-[4rem] mx-auto">
          <h1 className="uppercase text-primaryColor text-xl font-medium">
            Custom
          </h1>
          <p className="text-5xl font-semibold my-4">
            <span className="text-sm font-medium">$</span>
            999
          </p>
          <span className="text-xs font-light mb-[2rem] text-center">
            per month. That's just $13 per meal!
          </span>

          <div className="flex flex-col gap-2 font-light my-6">
            <p>
              <b>3 meals</b> per day
            </p>
            <p>
              Order <b>24/7</b>
            </p>
            <p>
              Access to <b>exclusive</b> recipes
            </p>
            <p>
              Access to <b>expert</b> nutritionists
            </p>
            <p>
              Delivery is <b>free</b>
            </p>
          </div>

          <button className="mt-[4rem]">
            <a
              className="py-4 px-10 rounded-3xl text-white hover:bg-shadeColor transition-all duration-500 ease-in-out bg-primaryColor font-medium text-lg"
              href="#contact"
            >
              Select plan
            </a>
          </button>
        </div>
      </div>

      <h1 className="text-sm font-light text-center mb-[3rem]">
        Prices include all applicable taxes. You can cancel at any time. Both
        plans include the following:
      </h1>
    </div>
  );
};

export default Pricing;
