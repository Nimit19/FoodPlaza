import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { showOrderSummary } from "../../store/slices/uiSlice";

import classes from "./CartBottomBar.module.css";
import { allCartFoods } from "../../store";

const ChartBottomBar: React.FC = () => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const dispatch = useDispatch();

  const showOrderSummaryHandler = () => {
    dispatch(showOrderSummary());
  };

  const cartFoods = useSelector(allCartFoods);

  const totalAmount = cartFoods.reduce((totalAmount, cartFood) => {
    return totalAmount + cartFood.price * cartFood.quantity;
  }, 0);

  useEffect(() => {
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [totalAmount]);

  const btnClass = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

  return (
    <div className={classes["cart-footer"]}>
      <div className={classes["cart-footer__content"]}>
        <h1 className={classes["cart-footer__text"]}>Your Cart</h1>
        <button className={btnClass} onClick={showOrderSummaryHandler}>
          <span className={classes["icon"]}></span>
          <span>Pay</span>
          <span className={classes["badge"]}> ₹{totalAmount}</span>
        </button>
      </div>
    </div>
  );
};

export default ChartBottomBar;
