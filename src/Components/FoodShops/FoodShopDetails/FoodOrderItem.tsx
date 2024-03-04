import React from "react";
import CartButton from "../../../UI/CartButton";
import { FoodType } from "../../../store/slices/foodShopsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../../store/slices/cartSlice";
import { allCartFoods } from "../../../store";
import { useRouteLoaderData } from "react-router-dom";
import { toastFunc } from "../../../util/toastFunc";
import Button from "../../../UI/Button";

import classes from "./FoodOrderItem.module.css";

interface FoodOrderItemProps {
  food: FoodType;
}

const FoodOrderItem: React.FC<FoodOrderItemProps> = ({ food }) => {
  const { foodId, foodImage, title, subtitle, price } = food;

  const dispatch = useDispatch();
  const token = useRouteLoaderData("root") as string | null;

  const cartFood = useSelector(allCartFoods).find(
    (food) => food.foodId === foodId
  );

  const cartItemQuantity = cartFood?.quantity || 0;

  const addItemToCartHandler = () => {
    if (!token) {
      toastFunc("You must be logged in to add items to cart");
      return;
    }

    dispatch(addItemToCart({ foodId, foodImage, title, subtitle, price }));
  };

  const removeItemFromCartHandler = () => {
    dispatch(removeItemFromCart({ foodId }));
  };

  return (
    <div>
      <div className={classes["food-order__content-foods"]}>
        <div className={classes["food-order__c1"]}>
          <img src={foodImage} alt="" />
        </div>

        <div className={classes["food-order__c2"]}>
          <div className={classes["food-order__c2-title"]}>
            <p>{title}</p>
          </div>
          <div className={classes["food-order__c2-subtitle"]}>
            <p>{subtitle}</p>
          </div>
          <div className={classes["food-order__c2-price"]}>
            <p>₹{price}</p>
          </div>

          {cartItemQuantity !== 0 ? (
            <CartButton
              onAddItem={addItemToCartHandler}
              onRemoveItem={removeItemFromCartHandler}
              quantity={cartItemQuantity}
            />
          ) : (
            <div className={classes["food-order__c2-btn"]}>
              <Button type="submit" onClickButton={addItemToCartHandler}>
                Add To Cart
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodOrderItem;
