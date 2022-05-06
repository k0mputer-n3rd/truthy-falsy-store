// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/06/2022

// Home.js
// =======

// React Components
import React from "react";
import { useNavigate } from "react-router-dom";

// Application Components

// Stylesheets

// Home()
// ======

const Home = () => {
  let navigate = useNavigate();

  console.log("Home!");

  return (
    <div>
      <h1>Truthy-Falsy Store</h1>
      <br />
      <button primary onClick={() => navigate("/products")}>
        See Products
      </button>
      <br />
      <p>If there are items in the cart, then links to the cart and checkout pages will be included here.</p>
    </div>
  );
};

export default Home;
