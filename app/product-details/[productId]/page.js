"use client"
import BreadCrumb from '@/app/_components/BreadCrumb'
import ProductApi from '@/app/_utils/ProductApi'
import React, { useEffect, useState } from 'react'
import ProductBanner from './_components/ProductBanner'
import ProductInfo from './_components/ProductInfo'
import ProductList from '@/app/_components/ProductList'
import { usePathname } from 'next/navigation'

const productDetails = ({params}) => {
  const path = usePathname()
  console.log(path)
  const [productDetails, setProductDetails] = useState(null)
  const [productList, setProductList] = useState([])
  useEffect(() => {
    getProductById_()
  }, [params?.productId])
  const getProductById_ = () => {
    ProductApi.getProductById(params?.productId).then(res => {
      console.log('product item', res?.data?.data[0])
      setProductDetails(res?.data?.data[0])
      getProductListByCategory(res?.data?.data[0])
    })
  }
  const getProductListByCategory = (product) => {
    ProductApi.getProductsByCategory(product?.category).then(res => {
      console.log(res?.data?.data)
      setProductList(res?.data?.data)
    })
  }

  return (

    <div className='px-10 py-8 md:px-28'>
      <BreadCrumb path={path}/>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0 justify-around'>
        <ProductBanner product = {productDetails}/>
        <ProductInfo product = {productDetails}/>
      </div>
      <div>
        <h2 className='mt-24 text-xl mb-4'>Similar Products</h2>
        <ProductList productList={productList}/>
      </div>
    </div>
  )
}

export default productDetails