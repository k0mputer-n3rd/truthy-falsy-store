// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/07/2022

// NotFound.js
// ===========

// React Components
import React from "react";
import { useParams } from "react-router-dom";

// Application Components

// Stylesheets

// NotFound()
// ==========

const NotFound = () => {
  const params = useParams();
  const { "*": param } = params;
  console.log(`Page not found: /${param}`);

  return <div>This page was not found!</div>;
};

export default NotFound;
