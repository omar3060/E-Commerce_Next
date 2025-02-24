
import React from "react";
import Image from "next/image";
import { List } from "lucide-react";
import Link from "next/link";
const ProductItem = ({ product }) => {
  return (
    <Link href={`/product-details/${product.id}`} className="hover:border shadow-md hover:rounded-lg border-teal-400 transition-all hover:cursor-pointer">
      <Image
        src={product?.banner?.url}
        alt={`${product.title} banner`}
        width={400}
        height={350}
        className="rounded-t-lg h-[170px] object-cover"
      />
      <div className='flex justify-between p-3 items-center bg-gray-50 rounded-b-lg'>
        <div className="">
          <h2 className="text-[16px] md:text-[20px] font-medium line-clamp-1">
            {product?.title}
          </h2>
          <h2 className="text-[14px] text-gray-400 flex items-center gap-1">
            <List className="w-4 h-4" /> {product?.category}
          </h2>
        </div>
        <h2>{product?.price}</h2>
      </div>
    </Link>
  );
};

export default ProductItem;
