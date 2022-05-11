// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/10/2022

// Products.js
// ===========

// React Components
import React from "react";
import { useNavigate } from "react-router-dom";

// Application Components

// Stylesheets

// ProductCard()
// =============

const ProductCard = (props) => {
  const product = props.product;
  const navigate = useNavigate();
  console.log(`Product #${product.id}!`);

  return (
    <div
      className="ProductCard-Box"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <div className="ProductCard-Poster">
        <img
          className="ProductCard-Image"
          src={product.image}
          alt="The Product"
        />
      </div>
      <div className="ProductCard-Title">{product.title}</div>
      <div className="ProductCard-Price">{product.price.toFixed(2)}</div>
    </div>
  );
};

export default ProductCard;
