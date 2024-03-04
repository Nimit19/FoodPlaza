import PopularRecipesFoodItem from "./PopularRecipesFoodItem";

import classes from "./PopularRecipesFoodItemsList.module.css";
import { filterFoodByCategory } from "../../../store";
import { FoodType } from "../../../store/slices/foodShopsSlice";
import { useSelector } from "react-redux";

const PopularRecipesFoodItemsList = () => {
  const filterData: FoodType[] = useSelector(filterFoodByCategory);

  return (
    <>
      <div className={classes["popular-recipes__container"]}>
        {filterData.map((food: FoodType) => (
          <PopularRecipesFoodItem food={food} />
        ))}
      </div>
    </>
  );
};

export default PopularRecipesFoodItemsList;
