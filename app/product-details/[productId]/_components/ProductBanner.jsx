import React from "react";
import Image from "next/image";
function ProductBanner({ product }) {
  return (
    <div>
      {product ? (
        <Image
          src={product?.banner?.url}
          alt="product-details-banner"
          width={400}
          height={400}
          className="rounded-lg"
        />
      ) : (
        <div className="w-[336px] h-[189px] bg-slate-200 animate-pulse"></div>
      )}
    </div>
  );
}

export default ProductBanner;
