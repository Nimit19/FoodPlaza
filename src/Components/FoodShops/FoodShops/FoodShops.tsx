import React from "react";

import "./FoodShops.css";
import FoodShopsList from "../FoodShopsList/FoodShopsList";
import FoodDisplay from "../FoodDisplay/FoodDisplay";
import FoodByWeather from "../FoodByWeather/FoodByWeather";

const FoodShop = () => {
  return (
    <>
      <div className="categories">
        <div className="categories_title">
          <p>Top brands for you</p>
        </div>
        <div className="categories_items">
          <FoodShopsList />
        </div>
      </div>
      <FoodByWeather />
      <FoodDisplay />
    </>
  );
};

export default FoodShop;
