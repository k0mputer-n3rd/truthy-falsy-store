// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/11/2022

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
  const { items, addToCart, cartFind, updateItem, deleteItem } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const params = useParams();
  let Buttons;

  console.log(`ProductDetails #${params.id}!`);

  const addItemToCart = (product, quantity) => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  const updateItemInCart = (id, quantity) => {
    updateItem(id, quantity);
    navigate("/cart");
  };

  const deleteItemInCart = (id) => {
    deleteItem(id);
    navigate("/cart");
  };

  useEffect(() => {
    const getProduct = async () => {
      const url = `https://fakestoreapi.com/products/${params.id}`;
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [params.id]);

  const item = cartFind(parseInt(params.id));
  console.log(item);
  if (item === undefined) {
    // setQuantity(1);
    console.log("Not in Cart");
    Buttons = (
      <>
        <button onClick={() => addItemToCart(product, quantity)}>Add Item to Cart</button>
        <br />
        <button onClick={() => navigate("/products")}>View Products</button>
        <br />
        <button onClick={() => navigate("/cart")}>View Cart</button>
        <br />
      </>
    );
  } else {
    // console.log(item.quantity);
    // setQuantity(item.quantity);
    console.log("Item in Cart");
    Buttons = (
      <>
        <button onClick={() => updateItemInCart(product.id, quantity)}>Update Item in Cart</button>
        <br />
        <button onClick={() => deleteItemInCart(product.id)}>Delete Item in Cart</button>
        <br />
        <button onClick={() => navigate("/products")}>View Products</button>
        <br />
        <button onClick={() => navigate("/cart")}>View Cart</button>
        <br />
      </>
    );
 }

  return (
    <div>
      <p>Items in Cart: {items.length}</p>
      <h1>{product.title}</h1>
      <br />
      <div>
        <label htmlFor="qty">Quantity</label>
        <input
          name="qty"
          type="number"
          autocomplete="off"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
      </div>
      {Buttons}
    </div>
  );
};

export default ProductDetails;
