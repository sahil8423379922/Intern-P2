import React from "react";
import FoodItem from "./FoodItem";

export default function FoodList({ item }) {
  //let item = props.item;
  if (item.length === 0) {
    return <Error />;
  } else {
    return (
      <>
        <div className="container pt-4">
          <h3 className="pb-3">Food Items</h3>
          <ul className="list-group">
            {item.map((x) => {
              return <FoodItem x={x} />;
            })}
          </ul>
        </div>
      </>
    );
  }
}
