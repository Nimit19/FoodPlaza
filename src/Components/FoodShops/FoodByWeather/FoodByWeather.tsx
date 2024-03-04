import "./FoodByWeather.css";

import { foodShopsApi } from "../../../API/FoodAPI";
import { FoodShopType, FoodType } from "../../../store/slices/foodShopsSlice";
import { Link } from "react-router-dom";

const FoodByWeather = () => {
  function shuffle<T>(array: T[]): T[] {
    const newArray = [...array]; // Create a mutable copy of the array
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Modify the copy
    }
    return newArray;
  }

  // Shuffle the array
  const shuffledFood: FoodShopType[] = shuffle(foodShopsApi);

  // Select the first 6 items
  const randomFoodShops: FoodShopType[] = shuffledFood.slice(0, 6);

  const randomOneFood = (
    Foods: {
      foodCategoryName: string;
      foodCategoryList: FoodType[];
    }[]
  ): {
    foodCategoryName: string;
    foodCategoryItem: FoodType;
  } => {
    const randomFoodWithCategories = shuffle(Foods);

    const randomFood = randomFoodWithCategories[0];

    return {
      foodCategoryName: randomFood.foodCategoryName,
      foodCategoryItem: randomFood.foodCategoryList[0],
    };
  };

  return (
    <div className="food-recommendation">
      <div className="food-recommendation__title">
        <p> Food according to weather</p>
      </div>
      <div className="food-recommendation__items">
        {randomFoodShops.map((foodShop) => {
          const random1Food = randomOneFood(foodShop.foods);

          return (
            <Link to={`/menu/${foodShop.id}/${random1Food.foodCategoryName}`}>
              <div className="food_item">
                <div className="food_item-img">
                  <img src={random1Food.foodCategoryItem.foodImage} alt="" />
                </div>
                <div className="food_details">
                  <p>{random1Food.foodCategoryItem.title}</p>
                  <p>{random1Food.foodCategoryItem.foodTag}</p>
                </div>
              </div>
            </Link>
          );
        })}

        {/* <div className="food_item">
          <div className="food_item-img">
            <img
              src="https://img.freepik.com/premium-photo/chole-bhature-chick-pea-curry-fried-puri-served-terracotta-crockery-white-background-selective-focus_466689-24973.jpg?w=740"
              alt=""
            />
          </div>
          <div className="food_details">
            <p>Vadapav</p>
            <p>20 Min</p>
          </div>
        </div>{" "}
        <div className="food_item">
          <div className="food_item-img">
            <img
              src="https://s3-alpha-sig.figma.com/img/ac13/e53c/a79b8d8b34ddcd34ca4ba4d73a02b202?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C3jKXQSiaytm2TYHAbIrfNnSIG8WNTp-13z8t6OUAm1MI-rDxkvalr59lDiOjeyR1uEy3ZgtGI5nj9EL-6KlfKkQyMevEQvk~YT6P3adP8mdYTLRfbvo1ok3JJ4OBlrtbWuixoMim0TWMeE3Z-1D5TiT1KilDzNzRQR-Dtf9dIlK2PR00ZY6tnG-6LOVRtBDeBQwM0KctHIVMUiFOEN0fr6Aqqpp9e~tNb76qmunS5gu3g1lCU~fPKn~brBmZdH3oco2lK3my0djiLGLqsBegLOTrWsY-v-Kk89QK7pmWKTrB3akwGSBVfg4dU~q93kASvF9Uhz96FY-EJQboJ2aoA__"
              alt=""
            />
          </div>
          <div className="food_details">
            <p>Vadapav</p>
            <p>20 Min</p>
          </div>
        </div>{" "}
        <div className="food_item">
          <div className="food_item-img">
            <img
              src="https://s3-alpha-sig.figma.com/img/ac13/e53c/a79b8d8b34ddcd34ca4ba4d73a02b202?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C3jKXQSiaytm2TYHAbIrfNnSIG8WNTp-13z8t6OUAm1MI-rDxkvalr59lDiOjeyR1uEy3ZgtGI5nj9EL-6KlfKkQyMevEQvk~YT6P3adP8mdYTLRfbvo1ok3JJ4OBlrtbWuixoMim0TWMeE3Z-1D5TiT1KilDzNzRQR-Dtf9dIlK2PR00ZY6tnG-6LOVRtBDeBQwM0KctHIVMUiFOEN0fr6Aqqpp9e~tNb76qmunS5gu3g1lCU~fPKn~brBmZdH3oco2lK3my0djiLGLqsBegLOTrWsY-v-Kk89QK7pmWKTrB3akwGSBVfg4dU~q93kASvF9Uhz96FY-EJQboJ2aoA__"
              alt=""
            />
          </div>
          <div className="food_details">
            <p>Vadapav</p>
            <p>20 Min</p>
          </div>
        </div>{" "}
        <div className="food_item">
          <div className="food_item-img">
            <img
              src="https://s3-alpha-sig.figma.com/img/ac13/e53c/a79b8d8b34ddcd34ca4ba4d73a02b202?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C3jKXQSiaytm2TYHAbIrfNnSIG8WNTp-13z8t6OUAm1MI-rDxkvalr59lDiOjeyR1uEy3ZgtGI5nj9EL-6KlfKkQyMevEQvk~YT6P3adP8mdYTLRfbvo1ok3JJ4OBlrtbWuixoMim0TWMeE3Z-1D5TiT1KilDzNzRQR-Dtf9dIlK2PR00ZY6tnG-6LOVRtBDeBQwM0KctHIVMUiFOEN0fr6Aqqpp9e~tNb76qmunS5gu3g1lCU~fPKn~brBmZdH3oco2lK3my0djiLGLqsBegLOTrWsY-v-Kk89QK7pmWKTrB3akwGSBVfg4dU~q93kASvF9Uhz96FY-EJQboJ2aoA__"
              alt=""
            />
          </div>
          <div className="food_details">
            <p>Vadapav</p>
            <p>20 Min</p>
          </div>
        </div>{" "}
        <div className="food_item">
          <div className="food_item-img">
            <img
              src="https://s3-alpha-sig.figma.com/img/ac13/e53c/a79b8d8b34ddcd34ca4ba4d73a02b202?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C3jKXQSiaytm2TYHAbIrfNnSIG8WNTp-13z8t6OUAm1MI-rDxkvalr59lDiOjeyR1uEy3ZgtGI5nj9EL-6KlfKkQyMevEQvk~YT6P3adP8mdYTLRfbvo1ok3JJ4OBlrtbWuixoMim0TWMeE3Z-1D5TiT1KilDzNzRQR-Dtf9dIlK2PR00ZY6tnG-6LOVRtBDeBQwM0KctHIVMUiFOEN0fr6Aqqpp9e~tNb76qmunS5gu3g1lCU~fPKn~brBmZdH3oco2lK3my0djiLGLqsBegLOTrWsY-v-Kk89QK7pmWKTrB3akwGSBVfg4dU~q93kASvF9Uhz96FY-EJQboJ2aoA__"
              alt=""
            />
          </div>
          <div className="food_details">
            <p>Vadapav</p>
            <p>20 Min</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FoodByWeather;
