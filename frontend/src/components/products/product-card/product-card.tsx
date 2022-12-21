import React from "react";
import { ProductCardTallProps } from "../../../types";

const ProductCard = ({
  id,
  name,
  price,
  smallDescription,
  imageSrc,
  imageAlt,
}: ProductCardTallProps) => {
  return (
    <div key={id} className="group relative">
      <div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">
        <span className="absolute inset-0" />
        {name}
      </h3>
      <p className="mt-1 text-sm text-gray-500">{smallDescription}</p>
      <p className="mt-1 text-sm font-medium text-gray-900">{price}</p>
    </div>
  );
};

export default ProductCard;
