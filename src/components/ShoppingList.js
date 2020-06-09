import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ShoppingItem } from "../components/ShoppingItem";

export const ShoppingList = () => {
  const [cartItems] = useContext(CartContext);
  return (
    <div>
      <div className="grocery-list">
        <h1>Shopping List</h1>
      </div>
      {cartItems.map((item) => {
        return <ShoppingItem item={item} key={item.id} />;
      })}
    </div>
  );
};
