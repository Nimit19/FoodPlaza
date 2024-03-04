import React, { useCallback, useEffect, useState } from "react";

import "./PopularRecipesCategories.css";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../../../store/slices/foodShopsSlice";

const DUMMY_CATEGORY = ["Pizza", "Drinks", "Sides", "Chicken", "Dessert"];

const PopularRecipesCategories: React.FC = () => {
  const [category, setCategory] = useState(DUMMY_CATEGORY[0]);

  const dispatch = useDispatch();

  const selectCategoryHandler = useCallback(
    (category: string) => {
      setCategory(category);
      dispatch(filterByCategory({ category }));
    },
    [dispatch]
  );

  useEffect(() => {
    selectCategoryHandler(DUMMY_CATEGORY[0]);
  }, [selectCategoryHandler]);

  return (
    <div className="popular-recipe_categories">
      <div className="popular-recipe_title">
        <p>Popular Recipes</p>
      </div>
      <div className="popular-recipe__categories-name">
        {DUMMY_CATEGORY.map((foodCategory) => {
          return (
            <button
              onClick={() => {
                selectCategoryHandler(foodCategory);
              }}
              className={`popular-recipe__categories-btn ${
                category === foodCategory ? "active" : ""
              }`}
            >
              {foodCategory}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PopularRecipesCategories;
