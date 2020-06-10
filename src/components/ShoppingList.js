import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ShoppingItem } from "../components/ShoppingItem";

export const ShoppingList = () => {
  const [cartItems] = useContext(CartContext);
  return (
    <div>
      <h1 className="display-4 mb-2">Shopping List</h1>

      {cartItems.length
        ? cartItems.map((item) => {
            return <ShoppingItem item={item} key={item.id} />;
          })
        : "Cart is Empty"}
    </div>
  );
};
