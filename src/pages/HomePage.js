import React from "react";
import { useQuery } from "react-query";
import { fetchProducts } from "../services/api";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function HomePage() {
  const { data, isLoading, error } = useQuery("products", fetchProducts);
  const { addToCart } = useCart();

  if (isLoading) return <p className="text-center text-lg font-medium">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading products</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.data?.map((product) => (
          <li key={product._id} className="border rounded-lg p-4 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <div className="text-center">
              <Link to={`/product/${product._id}`} className="text-lg font-semibold hover:underline block ">
                {product.name}
              </Link>
              <p className="text-gray-700 mt-2">Price: <span className="font-semibold">${product.price}</span></p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
