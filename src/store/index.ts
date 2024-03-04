import { configureStore } from "@reduxjs/toolkit";
import uiSlice, { UiState } from "./slices/uiSlice";

import cartSlice, { CartSliceType } from "./slices/cartSlice";
import foodShopsSlice, { FoodShopSliceState } from "./slices/foodShopsSlice";
import authSlice, { authSliceType } from "./slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    foodShops: foodShopsSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;

// Selector for ui
export const orderSummaryVisibility = (state: { ui: UiState }) =>
  state.ui.orderSummaryIsVisible;

export const userProfileVisibility = (state: { ui: UiState }) =>
  state.ui.userProfileIsVisible;
// Selector for foodShops
export const allFoodShops = (state: { foodShops: FoodShopSliceState }) =>
  state.foodShops.foodShopsApi;

export const filterFoodByCategory = (state: {
  foodShops: FoodShopSliceState;
}) => state.foodShops.filterItemByCategory;

// Selector for cart
export const allCartFoods = (state: { cart: CartSliceType }) =>
  state.cart.items;

export const cartFoodsData = (state: { cart: CartSliceType }) => state.cart;

/// Selector from Auth
export const userInfo = (state: { auth: authSliceType }) => state.auth.userInfo;
