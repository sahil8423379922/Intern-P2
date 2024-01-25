import React from "react";
import FoodList from "./component/FoodList";
import "./Index.css";
import "./App.css";

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
