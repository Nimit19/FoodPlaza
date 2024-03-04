import React from "react";

import classes from "./FoodShopLogo.module.css";
import {} from "../../../API/FoodAPI";
import { FoodShopType } from "../../../store/slices/foodShopsSlice";

const FoodShopLogo: React.FC<{ foodShop: FoodShopType }> = ({ foodShop }) => {
  return (
    <div className={classes.category}>
      <div className={classes["category_logo"]}>
        <img src={foodShop.shopLogo} alt="" />
      </div>
      <div className={classes["category_name"]}>{foodShop.shopName}</div>
    </div>
  );
};

export default FoodShopLogo;
