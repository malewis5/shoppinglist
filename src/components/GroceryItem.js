import React, { useContext } from "react";
import { FaTimes, FaCartPlus, FaRegStar, FaStar } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { GroceryContext } from "../context/GroceryContext";

export const GroceryItem = (props) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [items, setItems] = useContext(GroceryContext);

  const toggleFavorite = (id) => {
    const index = items.findIndex((elem) => elem.id === id);
    const newState = [...items];
    newState[index].favorite = !newState[index].favorite;
    setItems(newState);
  };
  const addToCart = (item) => {
    const newItem = {
      ...item,
    };
    if (cartItems.length === 0) {
      setCartItems([newItem]);
    } else {
      setCartItems([...cartItems, newItem]);
    }
  };
  const deleteFromList = (id) => {
    const newState = items.filter((elem) => elem.id !== id);
    setItems(newState);
  };

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        {props.item.name}
        <FaTimes
          style={{ cursor: "pointer", float: "right", color: "red" }}
          onClick={(id) => deleteFromList(props.item.id)}
        />
        <FaCartPlus
          onClick={(item) => addToCart(props.item)}
          style={{
            cursor: "pointer",
            float: "right",
            color: "black",
            marginRight: "1rem",
          }}
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
