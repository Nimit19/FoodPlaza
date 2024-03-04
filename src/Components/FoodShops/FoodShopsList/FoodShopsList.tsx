import FoodShopLogo from "../FoodShopLogo/FoodShopLogo";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { allFoodShops } from "../../../store";
import {} from "../../../API/FoodAPI";
import { FoodShopType } from "../../../store/slices/foodShopsSlice";

const FoodShopsList = () => {
  const foodShopsData: FoodShopType[] = useSelector(allFoodShops);

  console.log(foodShopsData);

  return (
    <>
      {foodShopsData.map((foodShop) => (
        <div key={foodShop.id}>
          <Link to={`/menu/${foodShop.id}`}>
            <FoodShopLogo foodShop={foodShop} />
          </Link>
        </div>
      ))}
    </>
  );
};

export default FoodShopsList;
