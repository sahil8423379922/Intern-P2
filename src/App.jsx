import React from "react";
import FoodList from "./component/FoodList";

export default function App() {
  const fooditem = [
    "Pizza",
    "Pink Pasta",
    "Burger",
    "Fries",
    "Noodles",
    "Paneer",
    "Paratha",
    "Chocolate",
  ];
  return <FoodList item={fooditem} />;
}
