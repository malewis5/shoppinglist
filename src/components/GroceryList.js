import React, { useContext } from "react";
import { GroceryItem } from "./GroceryItem";
import { GroceryContext } from "../context/GroceryContext";

export const GroceryList = (props) => {
  const items = useContext(GroceryContext);
  const handleDeleteClick = () => {};

  return (
    <div className="grocery-list">
      <div className="header">
        <h1>Grocery List</h1>
      </div>
      <div className="list-content">
        {items[0].map((item) => {
          return <GroceryItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
