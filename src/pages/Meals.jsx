import React from "react";

// animate on screen library
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100,
});

// assets
import meal_1 from "../assets/meals/meal-1.jpg";
import meal_2 from "../assets/meals/meal-2.jpg";
import meal_3 from "../assets/meals/meal-3.png";
import meal_4 from "../assets/meals/meal-4.jpeg";

import score from "../assets/meals_icons/badge.png";
import calories from "../assets/meals_icons/fire.png";
import rating from "../assets/meals_icons/heart.png";

const Meals = () => {
  const mealContainer = [
    {
      id: 1,
      categories: ["LACTOSE-FREE", "VEGAN", "KETO"],
      tittle: "Japanese Gyozas",
      description:
        "Juicy pork, cabbage, scallions, and shiitake mushrooms with a rich Ponzu sauce drizzle.",
      calories: "650 Calories",
      score: "NutriScore Ⓡ 74",
      rating: "4.6 Rating (201)",
      img: meal_1,
    },

    {
      id: 2,
      categories: ["PALEO", "VEGAN", "GLUTEN-FREE"],
      tittle: "Avocado Salad",
      description:
        "Healthy green salad with fresh avocado, spinach, tomatoes and citrus lime dressing.",
      calories: "400 Calories",
      score: "NutriScore Ⓡ 92",
      rating: "4.8 Rating (441)",
      img: meal_2,
    },

    {
      id: 3,
      categories: ["VEGETERIAN", "KID-FRIENDLY", "KETO"],
      tittle: "Summer Pasta Salad",
      description:
        "Classic pasta salad with fresh veggies and herbs, and plenty of feta cheese.",
      calories: "630 Calories",
      score: "NutriScore Ⓡ 87",
      rating: "4.7 Rating (323)",
      img: meal_3,
    },

    {
      id: 4,
      categories: ["PALEO", "KETO", "LOW-FAT"],
      tittle: "Chicken Caesar Cobb",
      description:
        "Grilled chicken, fresh avocado with veggie toppings and creamy caesar dressing.",
      calories: "410 Calories",
      score: "NutriScore Ⓡ 93",
      rating: "4.9 Rating (691)",
      img: meal_4,
    },
  ];

  return (
    <div
      id="meals"
      className="md:w-[80vw] mx-auto mt-[10rem] xs:mt-[8rem] mb-[5rem]"
    >
      {/* Secondary & Primary Heading */}
      <div className="md:w-[70vw] mx-auto">
        <h2 className="uppercase text-primaryColor xs:text-lg md:text-2xl px-[2rem] pb-[1rem] text-center">
          MEALS
        </h2>

        <h1 className=" pl-[2rem] pr-[3rem] font-semibold lg:text-6xl md:text-[2.5rem]  md:mb-[9rem] md:mt-[2rem] text-center text-4xl">
          <b className="text-primaryColor">Omnifood AI </b>chooses from
          <b className="text-primaryColor">5000+ </b>
          unique recipes
        </h1>
      </div>

      <div
        className="flex flex-wrap gap-[2rem] md:w-[80vw] xs:w-[75vw] mx-auto mt-[5rem]"
        data-aos="fade-right"
      >
        {mealContainer.map((meal) => (
          <div
            key={meal.id}
            className="w-[350px] shadow-xl rounded-b-xl bg-gradient-to-br from-tertiaryBackground to-white scale-100 hover:scale-105 transition-all duration-200 ease-in-out my-[1rem]"
          >
            {/* Meal Image */}
            <img src={meal.img} alt="meal_img" className="rounded-t-xl " />

            {/* Meal Categories */}
            <div className="flex justify-center items-center gap-2 p-2 mt-2">
              <p className="bg-red-200 px-2 py-[1px] text-[13px] font-medium rounded-lg">
                {meal.categories[0]}
              </p>
              <p className="bg-yellow-100 px-2 py-[1px] text-[13px] font-medium rounded-lg">
                {meal.categories[1]}
              </p>
              <p className="bg-blue-200 px-3 py-[3px] text-[13px] font-medium rounded-lg">
                {meal.categories[2]}
              </p>
            </div>
            {/* Heading & Description */}
            <div className="mx-6 my-5">
              <h1 className="text-2xl font-medium">{meal.tittle}</h1>
              <p className="font-light my-2">{meal.description}</p>
            </div>

            {/* Calories, Score & Rating */}
            <div className="ml-6">
              <div className="flex gap-2 items-end mb-6">
                <img src={calories} alt="calories_icon" className="w-[25px]" />
                <p>{meal.calories}</p>
              </div>
              <div className="flex gap-2 items-end mb-6">
                <img src={score} alt="calories_icon" className="w-[25px]" />
                <p>{meal.score}</p>
              </div>
              <div className="flex gap-2 items-end mb-6">
                <img src={rating} alt="calories_icon" className="w-[25px]" />
                <p>{meal.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
