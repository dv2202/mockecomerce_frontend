import axios from "axios";



const api = axios.create({
  baseURL: "https://mockecommerce-backend.onrender.com/api",
});

export const fetchProducts = () => api.get("/products");
export const fetchProductById = (id) => api.get(`/products/${id}`);
export const createOrder = (order) => api.post("/orders", order);
export const fetchOrders = () => api.get("/orders/allorders");