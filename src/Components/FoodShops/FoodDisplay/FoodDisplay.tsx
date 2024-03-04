import React from "react";

import "./FoodDisplay.css";
const FoodDisplay = () => {
  return (
    <div className="display_food">
      <div className="display_food_items">
        <img
          src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="bottom-left">
          <p>Veggies friendly</p>
          <p>29 Places Near You</p>
        </div>
      </div>
      <div className="display_food_items">
        <img
          src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="bottom-left">
          <p>Veggies friendly</p>
          <p>29 Places Near You</p>
        </div>
      </div>
      <div className="display_food_items">
        <img
          src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="bottom-left">
          <p>Veggies friendly</p>
          <p>29 Places Near You</p>
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;
