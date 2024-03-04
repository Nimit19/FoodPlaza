import React from "react";
import Cart from "../../Components/Cart/Cart";

import classes from "./CartPage.module.css";
import CartBottomBar from "../../Components/Cart/CartBottomBar";
import CartOrderSummary from "../../Components/Cart/CartOrderSummary";
import { useSelector } from "react-redux";
import { allCartFoods, orderSummaryVisibility } from "../../store";
import { ReactComponent as EmptyCart } from "../../assets/svgs/empty-cart.svg";
const CartPage: React.FC = () => {
  const orderSummaryIsVisible = useSelector(orderSummaryVisibility);

  const cartFoods = useSelector(allCartFoods);

  return (
    <>
      {cartFoods.length > 0 ? (
        <div className={classes["cart_items"]}>
          {cartFoods.map((cartFood) => (
            <Cart key={cartFood.foodId} cartItem={cartFood} />
          ))}
        </div>
      ) : (
        <div className={classes["empty-cart"]}>
          <EmptyCart />
          <h3>Your Cart Is Empty</h3>
        </div>
      )}

      <CartBottomBar />
      {orderSummaryIsVisible && <CartOrderSummary />}
    </>
  );
};

export default CartPage;
