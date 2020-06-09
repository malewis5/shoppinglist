import React from "react";

export const GroceryItem = ({ item }) => {
  return (
    <div className="list-item">
      <h3>{item.name}</h3>
      <p>{item.quantity}</p>
    </div>
  );
};
