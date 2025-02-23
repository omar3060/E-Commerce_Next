import React from 'react'

const productDetails = ({params}) => {
  return (

    <div>{params?.productId}</div>
  )
}

export default productDetails