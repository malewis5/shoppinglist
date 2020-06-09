import React from "react";
import "./App.css";
import { GroceryProvider } from "./context/GroceryContext";
import { CartProvider } from "./context/CartContext";

//Custom Components
import { GroceryList } from "./components/GroceryList";
import { AddGroceryItem } from "./components/AddGroceryItem";
import { ShoppingList } from "./components/ShoppingList";

function App() {
  return (
    <GroceryProvider>
      <CartProvider>
        <div className="container">
          <div className="header">
            <h3>React Test</h3>
          </div>
          <div className="row">
            <div className="column">
              <div className="card">
                <AddGroceryItem />
              </div>
            </div>
            <div className="column">
              <div className="card">
                <GroceryList />
              </div>
            </div>
            <div className="column">
              <div className="card">
                <ShoppingList />
              </div>
            </div>
          </div>
        </div>
      </CartProvider>
    </GroceryProvider>
  );
}

export default App;
