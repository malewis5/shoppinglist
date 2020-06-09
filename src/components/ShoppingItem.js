import React, { useState } from "react";

export const ShoppingItem = (props) => {
  const [showNutrition, setShowNutrition] = useState(false);
  return (
    <div>
      <li>{props.item.name}</li>
      <li>Quantity: {props.item.quantity}</li>
      <button onClick={() => setShowNutrition(!showNutrition)}>
        Show Nutrition
      </button>
      {showNutrition ? (
        <div className="nutrition">{`${props.item.nutrition[0].sugars} g sugar`}</div>
      ) : (
        ""
      )}
    </div>
  );
};
