// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/07/2022

// HeaderFooter.js
// ===============

// React Components
import React from "react";
import { Link } from "react-router-dom";

// Application Components

// Stylesheets
import "../App.css";

// HeaderFooter()
// ==============

const HeaderFooter = (props) => {
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
}

export default HeaderFooter;
