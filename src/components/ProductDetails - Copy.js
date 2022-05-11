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
  const { items, addToCart, cartFind } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const [inCart, setInCart] = useState();
  const [quantity, setQuantity] = useState();
  const navigate = useNavigate();
  const params = useParams();
  let Buttons;

  console.log(`ProductDetails #${params.id}!`);

  const addItemToCart = (product, quantity) => {
    addToCart(product, quantity);
    navigate("/cart");
  }

const updateItemInCart = (id, quantity) => {
// ***** I need to create a function to do this *****
  navigate("/cart");
}

const deleteItemInCart = (id) => {
  // ***** I need to create a function to do this *****
    navigate("/cart");
  }
  
  useEffect(() => {
    const getProduct = async () => {
      const url = `https://fakestoreapi.com/products/${params.id}`;
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [params.id]);

  const item = cartFind(params.id);
  if (item === undefined) {
    setQuantity(1);
    setInCart(false);
    Buttons = (
      <>
        <button onClick={() => addItemToCart()}>Add Item to Cart</button>
        <br />
        <button onClick={() => navigate("/products")}>View Products</button>
        <br />
        <button onClick={() => navigate("/cart")}>View Cart</button>
        <br />
      </>
    );
  } else {
    setQuantity(item.quantity);
    setInCart(true);
    Buttons = (
      <>
        <button onClick={() => updateItemInCart()}>Update Item in Cart</button>
        <br />
        <button onClick={() => deleteItemInCart()}>Delete Item in Cart</button>
        <br />
        <button onClick={() => navigate("/products")}>View Products</button>
        <br />
        <button onClick={() => navigate("/cart")}>View Cart</button>
        <br />
      </>
    );
  }

  console.log(product.title);

  return (
    <div>
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
      {Buttons}
    </div>
  );
};

export default ProductDetails;
