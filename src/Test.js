// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/06/2022

// App.js
// ======

// React Components

// Application Components

// Stylesheets
import React from "react";
import { useNavigate } from "react-router-dom";

const Test = () => {
  let navigate = useNavigate();

  console.log("Test!");

  return (
    <div>
      This is a test!
      <br />
      <button primary onClick={() => navigate("/electron")}>
        Electron
      </button>
    </div>
  );
};

export default Test;
