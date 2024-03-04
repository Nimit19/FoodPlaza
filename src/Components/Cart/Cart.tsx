import React from "react";

import CartButton from "../../UI/CartButton";
import {
  CartItemType,
  addItemToCart,
  removeItemFromCart,
} from "../../store/slices/cartSlice";

import "./Cart.css";
import { useDispatch } from "react-redux";

interface CartProps {
  cartItem: CartItemType;
}

const Cart: React.FC<CartProps> = ({ cartItem }) => {
  const { foodId, foodImage, title, subtitle, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const addItemToCartHandler = () => {
    dispatch(addItemToCart({ foodId, foodImage, title, subtitle, price }));
  };

  const removeItemFromCartHandler = () => {
    dispatch(removeItemFromCart({ foodId }));
  };
  return (
    <div className="flex-container__cart">
      <div className="img">
        <img src={foodImage} alt="" />
      </div>
      <div className="cart-title">
        <div className="cart-title__name">{title}</div>
        <div className="cart-title__price">₹{price}</div>
      </div>
      <div className="cart-subtitle">{subtitle}</div>

      <CartButton
        onAddItem={addItemToCartHandler}
        onRemoveItem={removeItemFromCartHandler}
        quantity={quantity}
      />

      <div className="cart-price">
        <div className="cart-price__subtotal">
          <div>Subtotal</div>
          <div>
            <span>{quantity} </span>
            <span> &nbsp;₹{price}</span>
          </div>
        </div>
        <div className="cart-price__divider" />
        <div className="cart-price__total">
          <div>Total</div>
          <div>= ₹{quantity * price}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
