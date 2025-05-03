'use client'
import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import React, { useContext } from "react";
import SkeletonProductInfo from "./SkeletonProductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartApis from "@/app/_utils/CartApis";
import { CartContext } from "@/app/_context/CartContext";

const ProductInfo = ({ product }) => {
  // console.log(product.title)
  const {user} = useUser()
  const router = useRouter()
  const {cart, setCart} = useContext(CartContext)
  const handleAddToCart = () => {
    if(!user) {
      router.push('/sign-in')
    } else {
      const data = {
				data: {
					username: user.fullName,
					email: user.primaryEmailAddress.emailAddress,
					products: [product?.id]
				}
			}
      CartApis.addToCart(data).then(res => {
        console.log('cart created succefully', res.data.data)
        setCart(oldCart => [
          ...oldCart,
          {
            id: res?.data?.data?.id,
            product
          }
        ])
      }).catch(error => {
        console.log('error', error)
      })
    }
  }
  return (
    <div>
      {product ? (
        <div>
          <h2 className="text-[20px]">{product?.title}</h2>
          <h2 className="text-[15px] text-gray-400">{product?.category}</h2>
          <h2 className="text-[11px] mt-5">
            {product?.description[0]?.children[0].text}
          </h2>
          <h2 className="text-[11px] text-gray-500 flex gap-2 items-center mt-2">
            {product?.instantDelivery ? (
              <BadgeCheck className="text-green-500 h-5 w-5" />
            ) : (
              <AlertOctagon className="" />
            )}
            Eligible For Instant Delivery
          </h2>
          <h2 className="text-[32px] text-primary mt-3">$ {product?.price}</h2>
          <button onClick={() => handleAddToCart()} className="flex gap-2 rounded-lg bg-primary hover:bg-teal-500 text-white p-3">
            <ShoppingCart />
            Add To Cart
          </button>
        </div>
      ) : (
        <SkeletonProductInfo />
      )}
    </div>
  );
};

export default ProductInfo;
