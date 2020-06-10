import React from "react";
import "./App.css";
import { GroceryProvider } from "./context/GroceryContext";
import { CartProvider } from "./context/CartContext";

//Custom Components
import { GroceryList } from "./components/grocery/GroceryList";
import { AddGroceryItem } from "./components/grocery/AddGroceryItem";
import { ShoppingList } from "./components/shopping/ShoppingList";
import { Header } from "./components/layout/header";

function App() {
  return (
    <GroceryProvider>
      <CartProvider>
        <Header branding="Peak Test" />
        <div className="container">
          <div className="add-item">
            <AddGroceryItem />
          </div>
          <div className="shopping-list">
            <ShoppingList />
          </div>
          <div className="grocery-list">
            <GroceryList />
          </div>
        </div>
      </CartProvider>
    </GroceryProvider>
  );
}

export default App;
