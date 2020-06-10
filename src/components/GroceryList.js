import React, { useContext } from "react";
import { GroceryItem } from "./GroceryItem";
import { GroceryContext } from "../context/GroceryContext";
import { CartContext } from "../context/CartContext";

export const GroceryList = (props) => {
  const [items, setItems] = useContext(GroceryContext);
  const [cartItems, setCartItems] = useContext(CartContext);

  const handleDeleteClick = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  const handleToggleFavorite = (id) => {
    const index = items.findIndex((elem) => elem.id === id);
    const newState = [...items];
    newState[index].favorite = !newState[index].favorite;
    setItems(newState);
  };
  const handleAddToCart = (item) => {
    if (cartItems.includes(item)) {
      item.quantity++;
      const newCart = cartItems.filter((id) => id !== item.id);
      setCartItems(newCart);
    } else if (item.quantity === 0) {
      item.quantity = 1;
      const newCart = [...cartItems, item];
      setCartItems(newCart);
    } else {
      const newCart = [...cartItems, item];
      setCartItems(newCart);
    }
  };

  return (
    <div>
      <h1 className="display-4 mb-2">Grocery List</h1>
      {items.map((item) => {
        return (
          <GroceryItem
            item={item}
            key={item.id}
            handleDeleteClick={handleDeleteClick.bind(this, item.id)}
            handleToggleFavorite={handleToggleFavorite.bind(this, item.id)}
            handleAddToCart={handleAddToCart.bind(this, item)}
          />
        );
      })}
    </div>
  );
};
