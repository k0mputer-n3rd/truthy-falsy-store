// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/06/2022

// Checkout.js
// ===========

// React Components
import React from "react";
import { useNavigate } from "react-router-dom";

// Application Components

// Stylesheets

// Checkout()
// ==========

const Checkout = () => {
  let navigate = useNavigate();

  console.log("Checkout!");

  return (
    <div>
      <h1>The Checkout Procedure will be handled here</h1>
      <br />
      <button primary onClick={() => navigate("/")}>
        Home Page
      </button>
    </div>
  );
};

export default Checkout;
