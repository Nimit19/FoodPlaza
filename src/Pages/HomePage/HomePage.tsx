import React from "react";

import "./HomePage.css";
import PopularRecipes from "../../Components/Home/PopularRecipes/PopularRecipes";
import Hero from "../../Components/Home/Hero/Hero";
import Dining from "../../Components/Home/Dining/Dining";
import FoodGallery from "../../Components/Home/FoodGallary/FoodGallery";
import ShowcaseFood from "../../Components/Home/ShowcaseFood/ShowcaseFood";
const HomePage = () => {
  return (
    <>
      <Hero />
      <Dining />
      <ShowcaseFood />
      <PopularRecipes />
      <FoodGallery />
    </>
  );
};

export default HomePage;
