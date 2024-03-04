import React from "react";

import classes from "./PopularRecipesFoodItem.module.css";

import { FoodType } from "../../../store/slices/foodShopsSlice";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { allCartFoods } from "../../../store";

import { ReactComponent as CartBtn } from "../../../assets/svgs/add-cart.svg";
import { useRouteLoaderData } from "react-router-dom";
import { toastFunc } from "../../../util/toastFunc";

const PopularRecipesFoodItem: React.FC<{ food: FoodType }> = ({ food }) => {
  const dispatch = useDispatch();
  const token = useRouteLoaderData("root") as string | null;

  const { foodId, foodImage, title, subtitle, price } = food;

  const cartFood = useSelector(allCartFoods).find(
    (food) => food.foodId === foodId
  );

  const cartItemQuantity = cartFood?.quantity || 0;

  const addRemoveCartHandler = () => {
    if (!token) {
      toastFunc("You must be logged in to add items to cart");
      return;
    }

    if (cartItemQuantity === 0) {
      dispatch(addItemToCart({ foodId, foodImage, title, subtitle, price }));
    } else {
      dispatch(removeItemFromCart({ foodId }));
    }
  };

  return (
    <div className={classes["popular_recipes"]}>
      <img src={foodImage} alt="" />
      <div className={classes["recipe_title"]}>
        <span>{title}</span>
        <span>32min</span>
      </div>
      <div className={classes["recipe_subtitle"]}>
        <p>{subtitle}</p>
      </div>
      <div className={classes["recipe_price"]}>
        <p>₹{price}</p>
      </div>
      <button
        className={`${classes["btn"]} ${
          cartItemQuantity > 0 ? classes["active"] : ""
        }`}
        onClick={addRemoveCartHandler}
      >
        <CartBtn className={classes["cart-btn"]} />
      </button>

      <div className={classes["square2"]} />
    </div>
  );
};

export default PopularRecipesFoodItem;
