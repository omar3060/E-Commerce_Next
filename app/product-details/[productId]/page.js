"use client"
import BreadCrumb from '@/app/_components/BreadCrumb'
import ProductApi from '@/app/_utils/ProductApi'
import React, { useEffect, useState } from 'react'
import ProductBanner from './_components/ProductBanner'
import ProductInfo from './_components/ProductInfo'

const productDetails = ({params}) => {
  const [productDetails, setProductDetails] = useState(null)
  useEffect(() => {
    getProductById_()
  }, [params?.productId])
  const getProductById_ = () => {
    ProductApi.getProductById(params?.productId).then(res => {
      console.log('product item', res?.data?.data[0])
      setProductDetails(res?.data?.data[0])
    })
  }
  return (

    <div className='px-10 py-8 md:px-28'>
      <BreadCrumb />
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0 justify-around'>
        <ProductBanner product = {productDetails}/>
        <ProductInfo product = {productDetails}/>
      </div>
    </div>
  )
}

export default productDetails