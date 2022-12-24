import React from "react";
import { CheckoutItemProps } from "../../../types";

const CheckoutItem = ({
  name,
  imageSrc,
  imageAlt,
  price,
}: CheckoutItemProps) => {
  return (
    <li className="flex py-6 px-4 sm:px-6">
      <div className="flex-shrink-0">
        <img src={imageSrc} alt={imageAlt} className="w-20 rounded-md" />
      </div>

      <div className="ml-6 flex-1 flex flex-col">
        <div className="flex">
          <div className="min-w-0 flex-1">
            <h4 className="text-sm">
              <a className="font-medium text-gray-700 hover:text-gray-800">
                {name}
              </a>
            </h4>
          </div>
        </div>

        <div className="flex-1 flex justify-between">
          <p className="mt-1 text-sm font-medium text-gray-900">{price}</p>
        </div>
      </div>
    </li>
  );
};

export default CheckoutItem;
