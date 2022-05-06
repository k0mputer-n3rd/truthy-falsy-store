// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/06/2022

// ProductDetails.js
// =================

// React Components
import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Application Components

// Stylesheets

// ProductDetails()
// ================

const ProductDetails = () => {
  let navigate = useNavigate();
  let params = useParams();
  console.log(`ProductDetails #${params.id}!`);
  console.log(params);

  return (
    <div>
      <h1>Details for Product {params.id} will be shown here</h1>
      <br />
      <button primary onClick={() => navigate("/")}>
        Home Page
      </button>
      <br />
      <button primary onClick={() => navigate("/cart")}>
        Cart Page
      </button>
    </div>
  );
};

export default ProductDetails;
