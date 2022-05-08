// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/07/2022

// ProductDetails.js
// =================

// React Components
import React from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Contexts
import{ CartContext } from "../contexts/CartContext.js";

// Application Components

// Stylesheets

// ProductDetails()
// ================

const ProductDetails = () => {
  const { items, addToCart } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const [item, setItem] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  console.log(`ProductDetails #${params.id}!`);

  useEffect(() => {
    const getProduct = async () => {
      const url = `https://fakestoreapi.com/products/${params.id}`;
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
      setItem({
        id: data.id,
        title: data.title,
        price: data.price,
        quantity: 1,
      });
    };
    getProduct();
  }, [params.id]);

  console.log(product.title);

  return (
    <div>
      <p>Items in Cart: {items.length}</p>
      <h1>{product.title}</h1>
      <br />
      <button onClick={() => addToCart(item)}>
        Add To Cart
      </button>
      <br />
      <button onClick={() => navigate("/")}>
        Home Page
      </button>
      <br />
      <button onClick={() => navigate("/cart")}>
        Cart Page
      </button>
    </div>
  );
};

export default ProductDetails;
