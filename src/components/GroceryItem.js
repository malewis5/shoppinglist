import React from "react";

export const GroceryItem = (props) => {
  return (
    <div className="list-item">
      <h3>{props.item.name}</h3>
      <p>{props.item.quantity}</p>
      <button onClick={props.handleDeleteClick}>Delete</button>
      <button onClick={props.handleAddToCart}>Add to Cart</button>
      <input type="checkbox" onChange={props.handleToggleFavorite} />
    </div>
  );
};
