// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/10/2022

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

  const cartFind = (id) => {
    const index = items.findIndex((item) => item.id === id);
    console.log(`Index: ${index}, Id: ${id}`);
    return items[index];
  }
  
  const addToCart = (product, quantity) => {
    console.log("Adding: ", product);
    const item = {
      id: parseInt(product.id),
      title: product.title,
      price: parseFloat(product.price),
      quantity: parseInt(quantity),
    };
    setItems((prevState) => [...prevState, item]);
  };

// This is the old version:
  const addToCart1 = (product, quantity) => {
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
    <CartContext.Provider value={{ items, addToCart, cartFind, totalCart, clearCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
