// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/08/2022

// Cart.js
// =======

// React Components
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Contexts
import { CartContext } from "../contexts/CartContext.js";

// Application Components

// Stylesheets

// Cart()
// ======

const Cart = () => {
  const { items, totalCart } = useContext(CartContext);
  const navigate = useNavigate();
  let itemList;

  console.log("Cart!");
  console.log(items);

  if (items.length === 0) {
    itemList = <li>Cart is empty.</li>;
  } else {
    itemList = items.map((item, index) => (
      <tr key={index}>
        <td>{item.quantity}</td>
        <td>{item.title}</td>
        <td>${item.price}</td>
      </tr>
    ));
  }

  return (
    <div>
      <h1>Cart Contents</h1>
      <table>
        <tbody>{itemList}</tbody>
      </table>
      <br />
      <p>Total is: ${totalCart().toFixed(2)}</p>
      <br />
      <button onClick={() => navigate("/")}>Home Page</button>
      <br />
      <button onClick={() => navigate("/checkout")}>Checkout Page</button>
    </div>
  );
};

export default Cart;
