'use client'
import React from 'react'
import ProductList from './ProductList'
import ProductApi from '../_utils/ProductApi'
import { useEffect, useState } from 'react'

function ProductSection() {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    getLatestProducts_()
  }, [])

  const getLatestProducts_ = () => {
    ProductApi.getLatestProduct().then(res => {
      console.log(res.data.data)
      setProductList(res.data.data)
    })
  }

  return (
    <div className ="px-10 md:px-20">
      <ProductList productList = {productList}/>
    </div>
  )
}

export default ProductSection