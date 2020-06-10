import React from "react";
import { FaTimes, FaCartPlus, FaRegStar, FaStar } from "react-icons/fa";

export const GroceryItem = (props) => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        {props.item.name}
        <FaTimes
          style={{ cursor: "pointer", float: "right", color: "red" }}
          onClick={props.handleDeleteClick}
        />
        <FaCartPlus
          onClick={props.handleAddToCart}
          style={{
            cursor: "pointer",
            float: "right",
            color: "black",
            marginRight: "1rem",
          }}
        />
        {props.item.favorite ? (
          <FaStar
            onClick={(id) => props.handleToggleFavorite(id)}
            style={{
              cursor: "pointer",
              float: "right",
              color: "yellow",
              marginRight: "1rem",
            }}
          />
        ) : (
          <FaRegStar
            onClick={(id) => props.handleToggleFavorite(id)}
            style={{
              cursor: "pointer",
              float: "right",
              color: "black",
              marginRight: "1rem",
            }}
          />
        )}
      </div>
      <div className="panel-body">Quantity: {props.item.quantity}</div>
    </div>
  );
};
