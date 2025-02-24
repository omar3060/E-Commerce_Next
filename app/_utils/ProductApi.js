import axiosClient from "./axiosClient";

const getLatestProduct = () => axiosClient.get('/products?sort=id:asc&populate=*')
const getProductById = (id) => axiosClient.get(`/products?filters[id][$eq]=${id}&populate=*`);

export default {
  getLatestProduct,
  getProductById
}

