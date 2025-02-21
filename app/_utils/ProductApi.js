import axiosClient from "./axiosClient";

const getLatestProduct = () => axiosClient.get('/products?sort=id:asc')

export default {
  getLatestProduct,
}

