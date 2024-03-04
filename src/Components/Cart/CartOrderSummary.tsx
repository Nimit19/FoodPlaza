import React, { useState } from "react";
import classes from "./CartOrderSummary.module.css";
import Lottie from "react-lottie";
import OrderSummaryModal from "./OrderSummaryModal";
import { useDispatch, useSelector } from "react-redux";
import { hideOrderSummary } from "../../store/slices/uiSlice";
import { allCartFoods } from "../../store";
import confirmOrderAnimation from "../../assets/json/confirmOrder.json";

import { resetCart } from "../../store/slices/cartSlice";
const COUPONCODE: { code: string; value: number }[] = [
  { code: "Food100", value: 100 },
  { code: "FOOD100", value: 100 },
  { code: "FOOD200", value: 200 },
  { code: "FOOD300", value: 300 },
  { code: "FOOD500", value: 500 },
];

const CartOrderSummary: React.FC = () => {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const dispatch = useDispatch();

  let deliveryCharge = 40;

  const hideOrderSummaryHandler = () => {
    dispatch(hideOrderSummary());
  };

  const cartFoods = useSelector(allCartFoods);

  const totalAmount = cartFoods.reduce((totalAmount, cartFood) => {
    return totalAmount + cartFood.price * cartFood.quantity;
  }, 0);

  const couponCodeChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCouponCode(event.target.value);
  };

  const applyCouponHandler = () => {
    const discountValue = COUPONCODE.reduce((prevValue, coupon) => {
      const { code, value } = coupon;

      if (couponCode === code) {
        return totalAmount < value ? prevValue : value;
      }

      return prevValue;
    }, 0);

    setDiscount(discountValue);
    setCouponCode("");
  };

  const confirmOrderHandler = () => {
    dispatch(resetCart());
    setConfirmOrder(true);
  };

  return (
    <>
      <OrderSummaryModal onCloseCart={hideOrderSummaryHandler}>
        <div className={classes["Order-summary__container"]}>
          <div
            className={`${classes["Order-summary__title"]} ${classes["order-card"]}`}
          >
            <p>{!confirmOrder ? "Order Summary" : "Order Confirm"}</p>
            <div className={classes["close-btn"]}>
              <button onClick={hideOrderSummaryHandler}>+</button>
            </div>
          </div>

          {!confirmOrder ? (
            <>
              <div
                className={`${classes["Order-summary__amount-container"]} ${classes["order-card"]}`}
              >
                <div className={classes["Order-summary__subtotal"]}>
                  <div className={classes["subtotal-text"]}>Subtotal</div>
                  <div className={classes["subtotal-price"]}>
                    ₹{totalAmount}
                  </div>
                </div>

                <div className={classes["Order-summary__discount"]}>
                  <div className={classes["discount-text"]}>Discount</div>
                  <div className={classes["discount-price"]}>- ₹{discount}</div>
                </div>
                <div className={classes["Order-summary__delivery"]}>
                  <div className={classes["delivery-text"]}>
                    Delivery Charge
                  </div>
                  <div className={classes["delivery-price"]}>
                    + ₹{deliveryCharge}
                  </div>
                </div>
                <div className={classes["Order-summary__divider"]}></div>
                <div className={classes["Order-summary__total-pay"]}>
                  <div className={classes["total-pay__text"]}>To Pay</div>
                  <div className={classes["total-pay__amount"]}>
                    ₹{totalAmount + deliveryCharge - discount}
                  </div>
                </div>
              </div>
              <div
                className={`${classes["Order-summary__delivery-time"]} ${classes["order-card"]}`}
              >
                <p>Earliest Delivery by 25 Feb, 9 AM</p>
              </div>
              <div
                className={`${classes["Order-summary_cart-coupon"]} ${classes["order-card"]}`}
              >
                <div className={classes["cart-coupon__text"]}>
                  Rewards & Coupons Available
                </div>
                <div className={classes["cart-coupon"]}>
                  <div className={classes["cart-coupon__code"]}>
                    <input
                      type="text"
                      placeholder="Apply Coupon Code"
                      value={couponCode}
                      onChange={couponCodeChangeHandler}
                    />
                  </div>
                  <div className={classes["cart-coupon__button"]}>
                    <button
                      disabled={discount !== 0}
                      style={{}}
                      onClick={applyCouponHandler}
                    >
                      {discount === 0 ? "Apply" : "Applied"}
                    </button>
                  </div>
                </div>
              </div>
              <div className={classes["Order-summary__btn"]}>
                {/* <button onClick={hideOrderSummaryHandler}>Cancel Order</button> */}
                <button onClick={confirmOrderHandler}>Confirm Order</button>
              </div>{" "}
            </>
          ) : (
            <div style={{ textAlign: "center" }}>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: confirmOrderAnimation, // Pass the imported JSON-encoded GIF
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={200}
                width={200}
              />{" "}
            </div>
          )}
        </div>
      </OrderSummaryModal>
    </>
  );
};

export default CartOrderSummary;
