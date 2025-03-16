import axiosClient from "./axiosClient";

const getLatestProduct = () => axiosClient.get('/products?sort=id:asc&populate=*')
const getProductById = (id) => axiosClient.get(`/products?filters[id][$eq]=${id}&populate=*`);
const getProductsByCategory = (category) => axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`);

export default {
  getLatestProduct,
  getProductById,
  getProductsByCategory
}

