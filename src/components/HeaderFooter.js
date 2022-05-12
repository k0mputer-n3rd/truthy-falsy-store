// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/10/2022

// HeaderFooter.js
// ===============

// React Components
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

// Application Components
import { CartContext } from "../contexts/CartContext.js";

// Stylesheets
import "../App.css";

// HeaderFooter()
// ==============

const HeaderFooter = (props) => {
  const { items } = useContext(CartContext);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <div className="Logo">Truthy-Falsy Store</div>
        {/* <div>
          <p>Items in Cart: {items.length}</p>
        </div> */}
        <div style={{ display: "flex" }}>
          <div style={{ padding: 10 }}>
            <Link to="/" className="Link">
              Home
            </Link>
          </div>
          <div style={{ padding: 10 }}>
            <Link to="/about" className="Link">
              About
            </Link>
          </div>
        </div>
      </div>
      <div style={{ padding: 40 }}>{props.children}</div>
      <div className="Copyright">&copy; 2022 K0mputer-N3rd</div>
    </div>
  );
};

export default HeaderFooter;
