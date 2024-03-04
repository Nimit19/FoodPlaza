import { createSlice } from "@reduxjs/toolkit";
import { toastFunc } from "../../util/toastFunc";

export interface CartItemType {
  foodId: string;
  foodImage: string;
  title: string;
  subtitle: string;
  price: number;
  quantity: number;
}

export interface CartSliceType {
  items: CartItemType[];
  totalQuantity: number;
}

const initialCartState: CartSliceType = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    resetCart: (state) => (state = initialCartState),

    addItemToCart: (state, action) => {
      const { foodId, foodImage, title, subtitle, price } = action.payload;

      const existingItem = state.items.find((item) => item.foodId === foodId);

      if (!existingItem) {
        state.items.push({
          foodId,
          foodImage,
          title,
          subtitle,
          price: +price,
          quantity: 1,
        });
        state.totalQuantity += 1;
      } else {
        if (existingItem.quantity < 5) {
          existingItem.quantity++;
          state.totalQuantity += 1;
        } else {
          toastFunc("You can't have more than 5 items");
        }
      }
    },

    removeItemFromCart: (state, action) => {
      const { foodId } = action.payload;
      state.totalQuantity -= 1;

      const existingItem = state.items.find((item) => item.foodId === foodId);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.foodId !== existingItem.foodId
          );
        } else {
          existingItem.quantity--;
        }
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, resetCart } =
  cartSlice.actions;
export default cartSlice;
