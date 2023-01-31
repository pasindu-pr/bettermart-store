import React from "react";
import { useRouter } from "next/router";

import { ProductCardProps } from "../../../types";

const ProductsCardTall = ({
  id,
  name,
  price,
  smallDescription,
  imageSrc,
  imageAlt,
}: ProductCardProps) => {
  const router = useRouter();

  const handleProductCardClick = () => {
    router.push(`/products/details/${id}`);
  };

  return (
    <div className="group cursor-pointer" onClick={handleProductCardClick}>
      <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
        <h3>{name}</h3>
        <p>{price} $</p>
      </div>
      <p className="mt-1 text-sm italic text-gray-500">{smallDescription}</p>
    </div>
  );
};

export default ProductsCardTall;
