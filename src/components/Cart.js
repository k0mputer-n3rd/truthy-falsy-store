// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/08/2022

// Cart.js
// =======

// React Components
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Contexts
import { CartContext } from "../contexts/CartContext.js";

// Application Components

// Stylesheets

// Cart()
// ======

const Cart = () => {
  const { items } = useContext(CartContext);
  let navigate = useNavigate();
  let itemList;

  console.log("Cart!");
  console.log(items);

  if (items.length === 0) {
    itemList = <li>Cart is empty.</li>;
  } else {
    itemList = items.map((item) => (
      <li key={item.id}>
        {item.title} ${item.price}
      </li>
    ));
  }

  return (
    <div>
      <h1>Items in the Cart will be shown here</h1>
      {itemList}
      <br />
      <button onClick={() => navigate("/")}>Home Page</button>
      <br />
      <button onClick={() => navigate("/checkout")}>Checkout Page</button>
    </div>
  );
};

export default Cart;
