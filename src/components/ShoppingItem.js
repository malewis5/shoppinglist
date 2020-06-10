import React, { useState, useContext } from "react";
import "./ShoppingItem.css";
import { CartContext } from "../context/CartContext";
import {
  FaTimes,
  FaRegPlusSquare,
  FaRegStar,
  FaStar,
  FaRegMinusSquare,
} from "react-icons/fa";

export const ShoppingItem = (props) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [moreInfo, setMoreInfo] = useState(false);

  const deleteFromList = (id) => {
    const newState = cartItems.filter((elem) => elem.id !== id);
    setCartItems(newState);
  };
  const changeQuantity = (type, id) => {
    const index = cartItems.findIndex((elem) => elem.id === id);
    let newState = [...cartItems];
    if (type === "DECREMENT") {
      newState[index].quantity--;
    }
    if (type === "INCREMENT") {
      newState[index].quantity++;
    }
    if (newState[index].quantity <= 0) {
      newState = cartItems.filter((elem) => elem.id !== id);
    }
    setCartItems(newState);
  };
  const toggleFavorite = (id) => {
    const index = cartItems.findIndex((elem) => elem.id === id);
    const newState = [...cartItems];
    newState[index].favorite = !newState[index].favorite;
    setCartItems(newState);
  };
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        {props.item.name}

        <FaTimes
          onClick={(id) => deleteFromList(props.item.id)}
          style={{ cursor: "pointer", float: "right", color: "red" }}
        />
        <FaRegMinusSquare
          onClick={(type, id) => changeQuantity("DECREMENT", props.item.id)}
          style={{ cursor: "pointer", float: "right", marginRight: "1rem" }}
        />
        <FaRegPlusSquare
          onClick={(type, id) => changeQuantity("INCREMENT", props.item.id)}
          style={{ cursor: "pointer", float: "right", marginRight: "1rem" }}
        />
        {props.item.favorite ? (
          <FaStar
            onClick={(id) => toggleFavorite(props.item.id)}
            style={{
              cursor: "pointer",
              float: "right",
              color: "yellow",
              marginRight: "1rem",
            }}
          />
        ) : (
          <FaRegStar
            onClick={(id) => toggleFavorite(props.item.id)}
            style={{
              cursor: "pointer",
              float: "right",
              marginRight: "1rem",
            }}
          />
        )}
      </div>
      <div className="panel-body">
        <span onClick={() => setMoreInfo(!moreInfo)}>
          {moreInfo ? "Less" : "More"} info...
        </span>
        Quantity: {props.item.quantity}
        {moreInfo ? (
          <ul>
            <li>Sugar: {props.item.nutrition[0].sugars} grams </li>
          </ul>
        ) : null}{" "}
      </div>
    </div>
  );
};
