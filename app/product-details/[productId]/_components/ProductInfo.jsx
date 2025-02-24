import React from 'react'

const ProductInfo = ({product}) => {
  // console.log(product.title)
  return (
    <div>
      {/* <h2>{product.title}</h2> */}
      {/* <p>{product.description?.[0] || "No description available"}</p> */}
      {/* <p>Price: ${product.price}</p> */}
      {product?.price}
      {product?.title}
    </div>
  )
}

export default ProductInfo