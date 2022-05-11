// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/10/2022

// Home.js
// =======

// React Components
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Contexts
import { CartContext } from "../contexts/CartContext.js";

// Application Components

// Stylesheets

// Home()
// ======

const Home = () => {
  const { items } = useContext(CartContext);
  const navigate = useNavigate();
  let Buttons;

  console.log("Home!");

  if (items.length === 0) {
    Buttons = (
      <>
        <button onClick={() => navigate("/products")}>View Products</button>
        <br />
      </>
    );
  } else {
    Buttons = (
      <>
        <button onClick={() => navigate("/products")}>View Products</button>
        <br />
        <button onClick={() => navigate("/cart")}>View Cart</button>
        <br />
        <button onClick={() => navigate("/checkout")}>Checkout</button>
        <br />
      </>
    );
  }

  return (
    <div>
      <h1>Truthy-Falsy Store</h1>
      <br />
      {Buttons}
    </div>
  );
};

export default Home;
