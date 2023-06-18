import React from "react";

// assets
import price_img_1 from "../assets/about_icons/infinity.png";
import price_img_2 from "../assets/about_icons/leaf.png";
import price_img_3 from "../assets/about_icons/recycle.png";
import price_img_4 from "../assets/about_icons/pause.png";

const About = () => {
  const prices = [
    {
      id: 1,
      title: "Never cook again!",
      img: price_img_1,
      description:
        "Our subscriptions cover 365 days per year, even including major holidays.",
    },

    {
      id: 2,
      title: "Local and organic",
      img: price_img_2,
      description:
        "Our cooks only use local, fresh, and organic products to prepare your meals.",
    },

    {
      id: 3,
      title: "Zero waste",
      img: price_img_3,
      description:
        "All our partners only use reusable containers to package all your meals.",
    },

    {
      id: 4,
      title: "Pause anytime",
      img: price_img_4,
      description:
        "Going on vacation? Just pause your subscription, and we refund unused days.",
    },
  ];

  return (
    <div id="about" className="mb-[4rem] bg-secondaryBackground">
      <div className="lg:flex justify-center items-center w-[50vw] gap-6 py-2 mx-auto ">
        {prices.map((price) => (
          <div className="flex xs:flex-col justify-center items-center mx-auto my-[2.5rem]">
            <img
              src={price.img}
              alt={price.name}
              className="w-[50px] border-[2px] border-primaryBackground bg-secondaryBackground rounded-full p-2 mt-2"
            />
            <h1 className="my-3 text-xl font-medium">{price.title}</h1>
            <p className="text-center">{price.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
