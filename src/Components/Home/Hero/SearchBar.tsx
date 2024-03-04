import { useState } from "react";

import { FoodShopType } from "../../../store/slices/foodShopsSlice";
import { useSelector } from "react-redux";
import { allFoodShops } from "../../../store";

import classes from "./SearchBar.module.css";

export const SearchBar: React.FC<any> = ({ setResults }) => {
  const [input, setInput] = useState("");
  const foodShopsData: FoodShopType[] = useSelector(allFoodShops);

  const fetchData = (value: any) => {
    let results: any;

    // Convert value to lowercase
    const searchValue = value.trim().toLowerCase();

    if (searchValue.length === 0) {
      results = [];
    } else {
      results = foodShopsData.filter((foodShop) => {
        return foodShop.shopName.toLowerCase().includes(searchValue);
      });
    }

    setResults(results);
  };

  const handleChange = (value: any) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className={classes["search-input"]}>
      <select name="" id="">
        <option value="Surat">Surat</option>
        <option value="Vapi">Vapi</option>
        <option value="Valsad">Valsad</option>
        <option value="Ahmadabad">Ahmadabad</option>
      </select>
      <div className={classes.separate} />
      <input
        className="search-input"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
