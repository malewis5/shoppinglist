import React, { useState, useContext } from "react";
import "./ShoppingItem.css";
import { CartContext } from "../context/CartContext";
import {
  FaTimes,
  FaRegPlusSquare,
  FaRegStar,
  FaStar,
  FaRegMinusSquare,
  FaArrowDown,
} from "react-icons/fa";

export const ShoppingItem = (props) => {
  const { item } = props;
  const [cartItems, setCartItems] = useContext(CartContext);
  const [moreInfo, setMoreInfo] = useState(false);

  const increaseCount = (item) => {
    const index = cartItems.findIndex((elem) => elem.name === item.name);
    const newState = [...cartItems];
    newState[index].quantity++;
    setCartItems(newState);
  };
  const decreaseCount = (item) => {
    const index = cartItems.findIndex((elem) => elem.name === item.name);
    let newState = [...cartItems];
    newState[index].quantity--;
    if (newState[index].quantity <= 0) {
      newState = cartItems.filter((elem) => elem.id !== item.id);
    }
    setCartItems(newState);
  };
  const removeFromCart = (item) => {
    const newState = cartItems.filter((elem) => elem.id !== item.id);
    item.quantity = 0;
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
          style={{ cursor: "pointer", float: "right", color: "red" }}
          onClick={() => removeFromCart(item)}
        />
        <FaRegMinusSquare
          style={{ cursor: "pointer", float: "right", marginRight: "1rem" }}
          onClick={() => decreaseCount(item)}
        />
        <FaRegPlusSquare
          style={{ cursor: "pointer", float: "right", marginRight: "1rem" }}
          onClick={() => increaseCount(item)}
        />
        {props.item.favorite ? (
          <FaStar
            onClick={(id) => toggleFavorite(item.id)}
            style={{
              cursor: "pointer",
              float: "right",
              color: "yellow",
              marginRight: "1rem",
            }}
          />
        ) : (
          <FaRegStar
            onClick={(id) => toggleFavorite(item.id)}
            style={{
              cursor: "pointer",
              float: "right",
              color: "black",
              marginRight: "1rem",
            }}
          />
        )}
      </div>
      <div className="panel-body">
        <span onClick={() => setMoreInfo(!moreInfo)}>
          {moreInfo ? "Less" : "More"} info...
        </span>
        <ul>
          <li>Quantity: {props.item.quantity}</li>
          {moreInfo ? <li>Sugar: {props.item.nutrition[0].sugars} g</li> : null}
        </ul>{" "}
      </div>
    </div>
  );
};
