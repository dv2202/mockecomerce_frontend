import React from "react";
import { useCart } from "../context/cartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((product) => (
            <li key={product._id} className="flex justify-between items-center border-b pb-4">
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-gray-600">Price: ${product.price}</p>
              </div>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => removeFromCart(product._id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div
      className="mt-6 w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded disabled:opacity-50 text-center">
      <Link
        to="/checkout"
        
        disabled={cartItems.length === 0}

      >
        Proceed to Checkout
      </Link>
      </div>

    </div>
  );
}
