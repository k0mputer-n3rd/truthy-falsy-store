// React Homework Final Project
// Truthy-Falsy Store
// Allen P.
// 05/07/2022

// App.js
// ======

// React Components
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Contexts
import{ CartProvider } from "./contexts/CartContext.js";

// Application Components
import HeaderFooter from "./components/HeaderFooter";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import About from "./components/About";
import NotFound from "./components/NotFound";

// Stylesheets
import "./App.css";

// App()
// ======

const App = () => {
  return (
    <div className="App">
      <CartProvider>
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
      </CartProvider>
    </div>
  );
};

export default App;
