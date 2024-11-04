import React from "react";
import { useCart } from "../context/cartContext";
import { createOrder } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function CheckoutPage() {
  const { cartItems, totalAmount, clearCart } = useCart();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCheckout = async (data) => {
    try {
      await createOrder({ products: cartItems, totalAmount, ...data });
      clearCart();
      navigate("/success");
    } catch (error) {
      console.error("Checkout failed", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
      <p className="text-xl font-semibold text-gray-700 mb-6">
        Total: <span className="text-blue-600">${totalAmount.toFixed(2)}</span>
      </p>
      <form onSubmit={handleSubmit(handleCheckout)}>
        <input 
          {...register("name", { required: true })} 
          placeholder="Name" 
          className="w-full border rounded-lg px-3 py-2 mb-4" 
        />
        {errors.name && <p className="text-red-500">Name is required</p>}
        
        <input 
          {...register("email", { required: true })} 
          placeholder="Email" 
          className="w-full border rounded-lg px-3 py-2 mb-4" 
        />
        {errors.email && <p className="text-red-500">Email is required</p>}
        
        <input 
          {...register("address", { required: true })} 
          placeholder="Address" 
          className="w-full border rounded-lg px-3 py-2 mb-4" 
        />
        {errors.address && <p className="text-red-500">Address is required</p>}
        
        <input 
          {...register("phone", { required: true })} 
          placeholder="Phone" 
          className="w-full border rounded-lg px-3 py-2 mb-4" 
        />
        {errors.phone && <p className="text-red-500">Phone is required</p>}
        
        <button
          type="submit" 
          className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-colors duration-200"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
