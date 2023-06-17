import React from "react";

// components
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      {/* Left Container */}
      <div>
        <h1>A healthy meal delivered to your door, every single day</h1>
        <p>
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </p>
        {/*
    <Slider />
  */}
        <div>
          <button>
            <a href="#howItWorks">Learn more</a>
          </button>

          <button>
            <a href="#contact">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
