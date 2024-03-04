import { useEffect, useState } from "react";

import FoodOrderItemsList from "./FoodOrderItemsList";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { allFoodShops } from "../../../store";
import { FoodShopType } from "../../../store/slices/foodShopsSlice";

// import leftImage from "../../../assets/images/FoodDetailsPageImg/left.jpg";
// import right1Image from "../../../assets/images/FoodDetailsPageImg/right_1.jpeg";
// import right2Image from "../../../assets/images/FoodDetailsPageImg/right_2.jpeg";
import classes from "./FoodShopDetails.module.css";

const FoodShopDetails = () => {
  const { shopId, category } = useParams<{
    shopId: string;
    category: string;
  }>();

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const {
    shopName,
    shopDescription,
    shopLogo,
    location,
    openingStatus,
    openingTime,
    closingTime,
    averageCost,
    foods,
  } = useSelector(allFoodShops).find(
    (food: FoodShopType) => food.id === shopId
  )!;

  useEffect(() => {
    if (foods.length > 0) {
      if (category) {
        setSelectedCategory(category);
      } else {
        setSelectedCategory(foods[0].foodCategoryName);
      }
    }
  }, [foods, category]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <section className={classes["grid_img-gallery"]}>
        <div className={classes["img_left"]}>
          {/* <img src={leftImage} alt="" /> */}
        </div>
        <div className={classes["img_right_1"]}>
          {/* <img src={right1Image} alt="" /> */}
        </div>
        <div className={classes["img_right_2"]}>
          {/* <img src={right2Image} alt="" /> */}
        </div>
      </section>

      <section className={classes["foods-shops"]}>
        <div className={classes["food-shop__container"]}>
          <div className={classes["food-shop__img"]}>
            <img src={shopLogo} alt="" />
          </div>
          <div className={classes["food-shop__text"]}>
            <div className={classes["food-shop__text-title"]}>
              <p>{shopName}</p>
            </div>
            <div className={classes["food-shop__text-subtitle"]}>
              <p>{shopDescription}</p>
            </div>
            <div className={classes["food-shop__text-location"]}>
              <p>{location}</p>
            </div>

            <div className={classes["food-shop__text-timing"]}>
              <p>
                {openingTime} - {closingTime}
              </p>
            </div>

            <div className={classes["food-shop__text-timing"]}>
              <p>{openingStatus} </p>
            </div>
          </div>
          <div className={classes["food-shop__about"]}>
            <p>
              Average Cost: <span>{averageCost}</span>
            </p>
          </div>
          <div className={classes["food_shop__buttons"]}>
            <button>Order Online</button>
            <button>Directions</button>
            <button>Share</button>
          </div>
        </div>
      </section>

      <section className={classes["food-order"]}>
        <div className={classes["food-order__container1"]}>
          <div className={classes["food-order__types"]}>
            <ul className={classes["food-order__types-list"]}>
              {foods.map((foodCategory) => (
                <li
                  className={
                    selectedCategory === foodCategory.foodCategoryName
                      ? classes["active"]
                      : ""
                  }
                  key={foodCategory.foodCategoryName}
                  onClick={() =>
                    handleCategoryChange(foodCategory.foodCategoryName)
                  }
                >
                  {`${foodCategory.foodCategoryName} (${foodCategory.foodCategoryList.length})`}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={classes["food-order__container2"]}>
          <div className={classes["food-order__content-title"]}>
            <p>{selectedCategory}</p>
          </div>

          <div className={classes["food-order__content"]}>
            {foods.find(
              (category) => category.foodCategoryName === selectedCategory
            ) ? (
              <FoodOrderItemsList
                foodsList={
                  foods.find(
                    (category) => category.foodCategoryName === selectedCategory
                  )!.foodCategoryList
                }
              />
            ) : (
              <p>No items found for this category</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodShopDetails;
