import React from "react";

import classes from "./CartButton.module.css";

interface CartButtonPropsType {
  onAddItem: () => void;
  onRemoveItem: () => void;
  quantity: number;
}
const CartButton: React.FC<CartButtonPropsType> = ({
  onAddItem,
  onRemoveItem,
  quantity,
}) => {
  return (
    <div className={classes["cart-quantity"]}>
      <div className={classes["cart-quantity__add"]}>
        <button onClick={onRemoveItem}>-</button>
      </div>
      <div className={classes["cart-quantity_display"]}>
        <p>{quantity || 0}</p>
      </div>
      <div className={classes["cart-quantity__remove"]}>
        <button disabled={quantity > 5} onClick={onAddItem}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartButton;
