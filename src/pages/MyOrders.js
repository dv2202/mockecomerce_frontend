import React from "react";
import { useQuery } from "react-query";
import { fetchOrders, fetchProducts } from "../services/api";

export default function MyOrders() {
  const { data: ordersData, error: ordersError, isLoading: ordersLoading } = useQuery("orders", fetchOrders);
  const { data: productsData, error: productsError, isLoading: productsLoading } = useQuery("products", fetchProducts);

  if (ordersLoading || productsLoading) {
    return <div className="flex justify-center items-center h-screen text-gray-500">Loading...</div>;
  }

  if (ordersError || productsError) {
    return <div className="flex justify-center items-center h-screen text-red-500">Error: {ordersError?.message || productsError?.message}</div>;
  }

  const orders = ordersData?.data?.data || []; // Access the array of orders
  const products = productsData?.data || []; // Access the array of products

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">My Orders</h1>
      {orders.length === 0 ? (
        <p className="text-center text-gray-600">You have no orders.</p>
      ) : (
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-6">
            {orders.map((order) => (
              <li key={order._id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-700">Order ID: <span className="font-normal">{order._id}</span></h2>
                <p className="text-gray-600 mt-2">Payment Status: <span className="font-medium text-gray-700">{order.paymentStatus}</span></p>
                <p className="text-gray-600">Total: <span className="font-medium text-gray-700">${order.totalAmount}</span></p>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-700">Products:</h3>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {order.products.map((product) => {
                      const productDetails = products.find((p) => p._id === product._id);
                      return (
                        <li key={product._id} className="text-gray-600">
                          {productDetails ? (
                            <span className="font-medium text-gray-800">{productDetails.name}</span>
                          ) : (
                            <span className="italic text-gray-500">Product name not available</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
