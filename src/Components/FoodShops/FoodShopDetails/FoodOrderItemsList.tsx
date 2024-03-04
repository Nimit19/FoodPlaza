import React from "react";
import FoodOrderItem from "./FoodOrderItem";
import { FoodType } from "../../../store/slices/foodShopsSlice";

interface FoodOrderItemsListProps {
  foodsList: FoodType[]; // Corrected prop type definition
}

const FoodOrderItemsList: React.FC<FoodOrderItemsListProps> = ({
  foodsList,
}) => {
  return (
    <div>
      {foodsList.map((food) => {
        return <FoodOrderItem food={food} />;
      })}
    </div>
  );
};

export default FoodOrderItemsList;
