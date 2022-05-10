// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/08/2022

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
      price: parseFloat(product.price),
      quantity: parseInt(quantity),
    };
    setItems((prevState) => [...prevState, item]);
  };

  const totalCart = () => {
    return items.reduce(
      (prev, item) => prev + item.price * item.quantity,
      0
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ items, addToCart, totalCart, clearCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
