import React from "react";
import "./App.css";
import { GroceryProvider } from "./context/GroceryContext";

//Custom Components
import { GroceryList } from "./components/GroceryList";
import { AddGroceryItem } from "./components/AddGroceryItem";

function App() {
  return (
    <GroceryProvider>
      <div className="App">
        <GroceryList />
        <AddGroceryItem />
      </div>
    </GroceryProvider>
  );
}

export default App;
