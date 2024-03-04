import { createSlice } from "@reduxjs/toolkit";
import { foodShopsApi } from "../../API/FoodAPI";

// Define interfaces for food and food shop types
export interface FoodType {
  foodId: string;
  foodImage: string;
  foodTag: string;
  title: string;
  subtitle: string;
  price: number;
}

export interface FoodShopType {
  id: string;
  shopName: string;
  shopDescription: string;
  shopLogo: string;
  location: string;
  openingStatus: string;
  openingTime: string;
  closingTime: string;
  averageCost: string;
  foods: {
    foodCategoryName: string;
    foodCategoryList: FoodType[];
  }[];
}

// Define the initial state type
export interface FoodShopSliceState {
  foodShopsApi: FoodShopType[];
  filterItemByCategory: FoodType[];
}

// Define the initial state
const initialState: FoodShopSliceState = {
  foodShopsApi: foodShopsApi,
  filterItemByCategory: [],
};

const foodShopsSlice = createSlice({
  name: "FoodShops",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      const { category } = action.payload;

      const filteredFoods: FoodType[] = state.foodShopsApi.reduce(
        (prevData: FoodType[], foodShop: FoodShopType) => {
          foodShop.foods.forEach((foodList) => {
            const filterCategory = foodList.foodCategoryList.filter((food) => {
              return food.foodTag === category;
            });
            prevData.push(...filterCategory);
          });
          return prevData;
        },
        []
      );
      state.filterItemByCategory = filteredFoods;
    },
  },
});

// const foodShopSlice = createSlice({
//   name: "FoodShop",
//   initialState,
//   reducers: {
//     incrementQuantity(state, action) {},

//     // filterByCategory: (state, action) => {
//     //   const { foodShopsApi } = current(state);
// import { filterFoodItemByCategory } from "../../../store";

//     //   const { category } = action.payload;
//     //   const filteredFoods: FoodType[] = state.foodShopsApi.reduce(
//     //     (allFoods: FoodType[], foodShop) => {
//     //       const foodsInCategory = foodShop.foods[category];
//     //       if (foodsInCategory) {
//     //         return [...allFoods, ...foodsInCategory];
//     //       }
//     //       return allFoods;
//     //     },
//     //     []
//     //   );
//     //   state.filterItemByCategory = filteredFoods;
//     // },
//   },
// });

export const { filterByCategory } = foodShopsSlice.actions;
export default foodShopsSlice;
