import React, { useContext } from "react";
import "./GroceryItem.css";
import { FaTimes, FaCartPlus, FaRegStar, FaStar } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { GroceryContext } from "../../context/GroceryContext";

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
    const duplicateCheck =
      cartItems.findIndex((elem) => elem.id === newItem.id) !== -1;
    if (duplicateCheck) {
      const newState = [...cartItems];
      const index = cartItems.findIndex((elem) => elem.id === newItem.id);
      newState[index].quantity++;
      return setCartItems(newState);
    }
    setCartItems([...cartItems, newItem]);
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
          className="icon-red"
          onClick={(id) => deleteFromList(props.item.id)}
        />
        <FaCartPlus
          className="icon"
          onClick={(item) => addToCart(props.item)}
        />
        {props.item.favorite ? (
          <FaStar
            className="icon-favorite"
            onClick={(id) => toggleFavorite(props.item.id)}
          />
        ) : (
          <FaRegStar
            className="icon"
            onClick={(id) => toggleFavorite(props.item.id)}
          />
        )}
      </div>
      <div className="panel-body">Quantity: {props.item.quantity}</div>
    </div>
  );
};
