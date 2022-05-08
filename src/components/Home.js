// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/07/2022

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
  let navigate = useNavigate();
  let cartInfo;

  console.log("Home!");

  if (items.length === 0) {
    cartInfo = <p>Cart is empty.</p>;
  } else if (items.length === 1) {
    cartInfo = <p>Cart contains 1 item.</p>;
  } else {
    cartInfo = <p>Cart contains {items.length} items.</p>;
  }

  return (
    <div>
      <h1>Truthy-Falsy Store</h1>
      <br />
      {cartInfo}
      <button primary="true" onClick={() => navigate("/products")}>
        See Products
      </button>
      <br />
      <p>
        If there are items in the cart, then links to the cart and checkout
        pages will be included here.
      </p>
    </div>
  );
};

export default Home;
