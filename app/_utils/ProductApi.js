import axiosClient from "./axiosClient";

const getLatestProduct = () => axiosClient.get('/products?sort=id:asc&populate=*')

export default {
  getLatestProduct,
}

