import { createSlice } from "@reduxjs/toolkit";

export interface UiState {
  orderSummaryIsVisible: boolean;
  userProfileIsVisible: boolean;
  isAddedToCart: { isAdd: boolean; foodId: string }[];
}

const initialUiState = {
  orderSummaryIsVisible: false,
  userProfileIsVisible: false,
  isAddedToCart: [],
};

const uiSlice = createSlice({
  name: "UI",
  initialState: initialUiState,
  reducers: {
    showOrderSummary: (state: UiState) => {
      state.orderSummaryIsVisible = true;
    },
    hideOrderSummary: (state: UiState) => {
      state.orderSummaryIsVisible = false;
    },

    toggleUserProfile: (state: UiState) => {
      state.userProfileIsVisible = !state.userProfileIsVisible;
    },

    isAddedToCartToggle: (state: UiState, action) => {
      state.isAddedToCart = state.isAddedToCart.map(
        (item: { isAdd: boolean; foodId: string }) => {
          if (item.foodId === action.payload) {
            return { ...item, isAdd: !item.isAdd };
          }
          return item;
        }
      );
    },
  },
});

// Reducer Functions
export const {
  showOrderSummary,
  hideOrderSummary,
  isAddedToCartToggle,
  toggleUserProfile,
} = uiSlice.actions;

export default uiSlice;
