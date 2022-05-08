// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/07/2022

// CartContext.js
// ==============

// React Components
import React from "react";
import { createContext, useState } from "react";

// Application Components

// Stylesheets

// CartContext()
// =============

const CartContext = createContext();

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addToCart = (newItem) => {
    setItems((prevState) => [...prevState, newItem]);
  }

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
