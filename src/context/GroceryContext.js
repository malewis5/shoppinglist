import React, { useState, createContext } from "react";
import { data } from "../data";

export const GroceryContext = createContext();

export const GroceryProvider = ({ children }) => {
  const [items, setItems] = useState(data);
  return (
    <GroceryContext.Provider value={[items, setItems]}>
      {children}
    </GroceryContext.Provider>
  );
};
