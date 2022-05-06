// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/06/2022

// Products.js
// ===========

// React Components
import React from "react";
import { useNavigate } from "react-router-dom";

// Application Components

// Stylesheets

// Products()
// ==========

const Products = () => {
  let navigate = useNavigate();

  console.log("Products!");

  return (
    <div>
      <h1>Product list will be shown here</h1>
      <br />
      <button primary onClick={() => navigate("/")}>
        Home Page
      </button>
      <br />
      <button primary onClick={() => navigate("/products/1")}>
        Select Product #1
      </button>
      <br />
      <button primary onClick={() => navigate("/products/2")}>
        Select Product #2
      </button>
      <br />
      <button primary onClick={() => navigate("/products/3")}>
        Select Product #3
      </button>
    </div>
  );
};

export default Products;
