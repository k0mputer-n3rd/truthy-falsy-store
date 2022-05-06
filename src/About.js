// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/06/2022

// About.js
// ========

// React Components
import React from "react";
import { useNavigate } from "react-router-dom";

// Application Components

// Stylesheets

// About()
// =======

const About = () => {
  let navigate = useNavigate();

  console.log("About!");

  return (
    <div>
      <h1>Truthy-Falsy Store</h1>
      <p>
        The is a fake store application created as a homework assignment for the
        BitWise React class. It uses data from fakestoreapi.com.
      </p>
      <br />
      <button primary onClick={() => navigate("/")}>
        Home Page
      </button>
    </div>
  );
};

export default About;
