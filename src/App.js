import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";
import NavBar from "./components/Navbar";
import './index.css';
import CartPage from "./pages/CartPage";
import MyOrders from "./pages/MyOrders";

function App() {
  return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </Router>
  );
}

export default App;
