import axiosClient from "../api/axiosClient";

const productApi = {
  getProducts: () => axiosClient.get("/products"),
  getProductById: (id) => axiosClient.get(`/products/${id}`),
  deleteProduct: (id) => axiosClient.delete(`/products/${id}`),
  updateProduct: (id, data) => axiosClient.put(`/products/${id}`, data),
};

export default productApi;
