import React from 'react'
import Image from 'next/image'
const ProductItem = ({product}) => {
  return (
    <div>
      <Image src={product?.banner?.url} alt={`${product.title} banner`} width={400} height={350} className="rounded-t-lg h-[170px] object-cover"/>
      <div className="p-3">
        <h2 className="text-[16px] md:text-[20px] font-medium">{product?.title}</h2>
        <h2 className="text-[14px] text-gray-400">{product?.category}</h2>
        
        
        
      </div>
    </div>
    
  )
} 

export default ProductItem