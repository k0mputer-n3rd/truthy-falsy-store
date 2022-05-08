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

  const addToCart = (product, quantity) => {
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity,
    };
    setItems((prevState) => [...prevState, item]);
  }

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
