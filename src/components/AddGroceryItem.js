import React, { useState, useContext } from "react";
import { GroceryContext } from "../context/GroceryContext";

export const AddGroceryItem = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [sugars, setSugars] = useState("");
  const [items, setItems] = useContext(GroceryContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSugarChange = (e) => {
    setSugars(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: items.length + 1,
      name: name,
      favorite: favorite,
      quantity: quantity,
      nutrition: [
        {
          sugars: sugars,
        },
      ],
    };

    // Check if it already exists
    const duplicateCheck = items.findIndex(
      (elem) => elem.name === newItem.name
    );

    if (duplicateCheck !== -1) {
      setName("");
      setQuantity("");
      setFavorite(false);
      setSugars("");
      return alert("Item already exists");
    }
    setItems([...items, newItem]);
    setName("");
    setQuantity("");
    setFavorite(false);
    setSugars("");
  };

  return (
    <div>
      <h1>Add Item</h1>

      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="name"
          placeholder="Item Name..."
          value={name}
          onChange={handleNameChange}
        />
        <input
          required
          min="0"
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <p>
          Mark as Favorite
          {favorite ? (
            <input
              type="checkbox"
              name="favorite"
              checked
              onClick={() => setFavorite(!favorite)}
            />
          ) : (
            <input
              type="checkbox"
              name="favorite"
              onClick={() => setFavorite(!favorite)}
            />
          )}
        </p>

        <input
          required
          type="number"
          name="sugars"
          placeholder="Sugars"
          value={sugars}
          onChange={handleSugarChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
