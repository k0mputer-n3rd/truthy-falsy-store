// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/07/2022

// Products.js
// ===========

// React Components
import React from "react";
import { useEffect, useState } from "react";

// Application Components
import ProductCard from "./ProductCard";

// Stylesheets

// Products()
// ==========

const Products = () => {
  // Create an empty product list as a state variable
  const [productList, setProductList] = useState([]);

  console.log("Products!");

  useEffect(() => {
    const getProducts = async () => {
      const url = `https://fakestoreapi.com/products`;
      const response = await fetch(url);
      const data = await response.json();
      setProductList(data);
    };
    getProducts();
  }, []);

  productList.map((product) => console.log(product));

  return (
    <div>
      <h1>Products</h1>
      <br />
      <div className="ProductCards-Box">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
