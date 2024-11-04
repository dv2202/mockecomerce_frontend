import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function NavBar() {
  const { cartItems } = useCart();

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold hover:text-gray-300">
          Home
        </Link>
        <div className="flex flex-row gap-5">
          <Link
            to="/myorders"
            className="text-xl font-semibold hover:text-gray-300 flex items-center"
          >
            My orders
          </Link>
          <Link
            to="/cart"
            className="text-xl font-semibold hover:text-gray-300 flex items-center"
          >
            <AiOutlineShoppingCart />
            <sup className="bg-red-500 rounded-full px-1 text-xs">
              {cartItems.length || 0}
            </sup>
          </Link>
        </div>
      </div>
    </nav>
  );
}
