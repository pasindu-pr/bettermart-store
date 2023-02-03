import React from "react";
import { CheckIcon, XIcon } from "@heroicons/react/solid";

import { ProductCardProps } from "../../../types";

const ShoppingCartItem = ({
  id,
  name,
  price,
  imageSrc,
  imageAlt,
  removeItem,
  quantity,
}: ProductCardProps) => {
  return (
    <li key={id} className="flex py-6 sm:py-10">
      <div className="flex-shrink-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm">{name}</h3>
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900">
              $<span>{price}</span>
            </p>
            <p className="mt-1 text-sm font-medium text-gray-900">
              Quantity {quantity}
            </p>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <div className="absolute top-0 right-0">
              <button
                onClick={() => {
                  if (removeItem) removeItem(id);
                }}
                type="button"
                className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Remove</span>
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* <p className="mt-4 flex text-sm text-gray-700 space-x-2">
          <CheckIcon
            className="flex-shrink-0 h-5 w-5 text-green-500"
            aria-hidden="true"
          />

          <span>{`In stock Ships in ${shippingTime}`}</span>
        </p> */}
      </div>
    </li>
  );
};

export default ShoppingCartItem;
