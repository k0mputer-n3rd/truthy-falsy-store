// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/06/2022

// App.js
// ======

// React Components
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Application Components
import HeaderFooter from "./HeaderFooter";
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Checkout from "./Checkout";
import About from "./About";
import NotFound from "./NotFound";

// Stylesheets
import "./App.css";

// App()
// ======

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderFooter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HeaderFooter>
      </BrowserRouter>
    </div>
  );
}

export default App;
