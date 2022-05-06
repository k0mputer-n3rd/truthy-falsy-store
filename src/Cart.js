// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/06/2022

// Cart.js
// =======

// React Components
import React from "react";
import { useNavigate } from "react-router-dom";

// Application Components

// Stylesheets

// Cart()
// ======

const Cart = () => {
  let navigate = useNavigate();

  console.log("Cart!");

  return (
    <div>
      <h1>Items in the Cart will be shown here</h1>
      <br />
      <button primary onClick={() => navigate("/")}>
        Home Page
      </button>
      <br />
      <button primary onClick={() => navigate("/checkout")}>
        Checkout Page
      </button>
    </div>
  );
};

export default Cart;
