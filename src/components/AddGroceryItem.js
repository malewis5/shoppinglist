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

      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="item-name" className="col-sm-2 control-label">
            Item Name
          </label>
          <div className="col-sm-10">
            <input
              required
              type="text"
              className="form-control"
              id="item-name"
              placeholder="Enter Item Name..."
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="quantity" className="col-sm-2 control-label">
            Quantity
          </label>
          <div className="col-sm-10">
            <input
              min="0"
              type="number"
              className="form-control"
              id="quantity"
              placeholder="Enter Quantity..."
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="sugar" className="col-sm-2 control-label">
            Sugars
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="sugar"
              placeholder="Sugar per serving..."
              value={sugars}
              onChange={handleSugarChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Set as Favorite?
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">
              Add Item
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
