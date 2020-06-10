import React, { useContext } from "react";
import { GroceryItem } from "./GroceryItem";
import { GroceryContext } from "../../context/GroceryContext";

export const GroceryList = () => {
  const [items, setItems] = useContext(GroceryContext);

  const handleDeleteClick = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div>
      <h1 className="display-4 mb-2">Grocery List</h1>
      {items.length
        ? items.map((item) => {
            return (
              <GroceryItem
                item={item}
                key={item.id}
                handleDeleteClick={handleDeleteClick.bind(this, item.id)}
              />
            );
          })
        : "List is Empty"}
    </div>
  );
};
