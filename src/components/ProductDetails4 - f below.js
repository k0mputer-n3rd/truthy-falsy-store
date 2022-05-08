// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/08/2022

// ProductDetails.js
// =================

// React Components
import React from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Contexts
import { CartContext } from "../contexts/CartContext.js";

// Application Components

// Stylesheets

// ProductDetails()
// ================

const ProductDetails = () => {
  const { items, addToCart } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
//  const [item, setItem] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  console.log(`ProductDetails #${params.id}!`);

  useEffect(() => {
    const getProduct = async () => {
      const url = `https://fakestoreapi.com/products/${params.id}`;
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [params.id]);

  console.log(product.title);

  return (
    <div>
      <p>Items in Cart: {items.length}</p>
      <h1>{product.title}</h1>
      <br />
      <div>
        <label htmlFor="qty">Quantity</label>
        <input
          name="qty"
          type="text"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
      </div>

      <button
        onClick={() => addItemToCart(product, quantity, addToCart)}
      >
        Add To Cart
      </button>
      <br />
      <button onClick={() => navigate("/cart")}>Cart Page</button>
    </div>
  );
};

const addItemToCart = (prod, quan, addF) => {
  console.log("Product: ", prod);
  const item = {
    id: prod.id,
    title: prod.title,
    price: prod.price,
    quantity: quan,
  };
  console.log(item);
  addF(item);
};

export default ProductDetails;
