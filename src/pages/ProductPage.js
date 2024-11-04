import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProductById } from "../services/api";
import { useCart } from "../context/cartContext"; // Update the import

export default function ProductPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery(["product", id], () => fetchProductById(id));
  const { addToCart } = useCart(); // Use the useCart hook

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Product not found</p>;

  const product = data.data;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
