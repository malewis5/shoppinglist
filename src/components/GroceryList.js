import React, { useContext } from "react";
import { GroceryItem } from "./GroceryItem";
import { GroceryContext } from "../context/GroceryContext";

export const GroceryList = (props) => {
  const [items, setItems] = useContext(GroceryContext);
  const handleDeleteClick = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  const handleToggleFavorite = (id) => {
    const index = items.findIndex((elem) => elem.id === id);
    const newState = [...items];
    newState[index].favorite = !newState[index].favorite;
    console.log(newState);
    setItems(newState);
  };

  return (
    <div className="grocery-list">
      <div className="header">
        <h1>Grocery List</h1>
      </div>
      <div className="list-content">
        {items.map((item) => {
          return (
            <GroceryItem
              item={item}
              key={item.id}
              handleDeleteClick={handleDeleteClick.bind(this, item.id)}
              handleToggleFavorite={handleToggleFavorite.bind(this, item.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
