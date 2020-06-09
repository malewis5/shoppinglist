import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export const ShoppingItem = (props) => {
  const { item } = props;
  const [cartItems, setCartItems] = useContext(CartContext);
  const [showNutrition, setShowNutrition] = useState(false);
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
  return (
    <div>
      <li>{props.item.name}</li>
      <li>Quantity: {props.item.quantity}</li>
      <button onClick={() => increaseCount(item)}>Increase</button>
      <button onClick={() => decreaseCount(item)}>Decrease</button>
      <button onClick={() => removeFromCart(item)}>Remove From Cart</button>
      <button onClick={() => setShowNutrition(!showNutrition)}>
        Show Nutrition
      </button>
      {showNutrition ? (
        <div className="nutrition">{`${props.item.nutrition[0].sugars} g sugar`}</div>
      ) : (
        ""
      )}
    </div>
  );
};
