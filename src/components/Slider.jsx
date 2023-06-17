import React from "react";

const Slider = () => {
  return (
    <div className="relative">
      <div className="slider flex overflow-hidden z-[-1]">
        <p className="slider-item bg-green-200">low-fat</p>
        <p className="slider-item bg-red-200">gluten-free</p>
        <p className="slider-item bg-blue-200">vegeterian</p>
        <p className="slider-item bg-purple-200">pescaterian</p>
        <p className="slider-item bg-cyan-200">kid-friendly</p>
        <p className="slider-item bg-orange-200">lactose-free</p>
        <p className="slider-item bg-pink-200">keto</p>
        <p className="slider-item bg-yellow-200">paleo</p>
      </div>
    </div>
  );
};

export default Slider;
