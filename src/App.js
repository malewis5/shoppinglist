import React from "react";
import "./App.css";
import { GroceryProvider } from "./context/GroceryContext";
import { CartProvider } from "./context/CartContext";

//Custom Components
import { GroceryList } from "./components/GroceryList";
import { AddGroceryItem } from "./components/AddGroceryItem";
import { ShoppingList } from "./components/ShoppingList";
import { Header } from "./components/layout/header";

function App() {
  return (
    <GroceryProvider>
      <CartProvider>
        <Header branding="Peak Test" />
        <div className="container">
          <AddGroceryItem />
          <GroceryList />
          <ShoppingList />
        </div>
      </CartProvider>
    </GroceryProvider>
  );
}

export default App;
