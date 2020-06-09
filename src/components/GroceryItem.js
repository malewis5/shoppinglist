import React, { useContext } from "react";
import { GroceryContext } from "../context/GroceryContext";

export const GroceryItem = ({
  item,
  handleDeleteClick,
  handleToggleFavorite,
}) => {
  return (
    <div className="list-item">
      <h3>{item.name}</h3>
      <p>{item.quantity}</p>
      <button onClick={handleDeleteClick}>Delete</button>
      <input type="checkbox" onChange={handleToggleFavorite} />
    </div>
  );
};
