// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/11/2022

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
  };

  const addToCart = (product, quantity) => {
    const newId = parseInt(product.id);
    let newItems = items;
    const newItem = {
      id: newId,
      title: product.title,
      price: parseFloat(product.price),
      quantity: parseInt(quantity),
    };
    let index = 0;
    // console.log("Array length is: ", newItems.length);
    // console.log("Item: ", index, "Id: ", items[index].id);
    while (index < newItems.length && items[index].id < newId) {
      console.log(`Index: ${index}  items[index.id: ${items[index].id}  newId: ${newId}`);
      console.log ("Comparison: ", (items[index].id < newId));
      index++;
    }
    console.log("Adding: ", newItem);
    console.log(`Index: ${index}, Id: ${newId}`);
    newItems.splice(index, 0, newItem);
    setItems(newItems);
  };

  // This is the old version:
  // const addToCart1 = (product, quantity) => {
  //   const item = {
  //     id: product.id,
  //     title: product.title,
  //     price: parseFloat(product.price),
  //     quantity: parseInt(quantity),
  //   };
  //   setItems((prevState) => [...prevState, item]);
  // };

  const updateItem = (id, quantity) => {
    let newItems = items;
    const index = newItems.findIndex((item) => item.id === id);
    let item = items[index];
    const newItem = {
      id: parseInt(item.id),
      title: item.title,
      price: parseFloat(item.price),
      quantity: parseInt(quantity),
    };
    console.log("Updating: ", newItem);
    console.log(`Index: ${index}, Id: ${id}`);
    newItems.splice(index, 1, newItem);
    setItems(newItems);
  };

  const deleteItem = (id) => {
    let newItems = items;
    const index = newItems.findIndex((item) => item.id === id);
    console.log("Deleting: ", items[index]);
    console.log(`Index: ${index}, Id: ${id}`);
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const totalCart = () => {
    return items.reduce((prev, item) => prev + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        cartFind,
        updateItem,
        deleteItem,
        totalCart,
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
