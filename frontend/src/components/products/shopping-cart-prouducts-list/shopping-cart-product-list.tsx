import React from "react";

import { uuid } from "../../../libs";
import { ShoppingCartProductListProps } from "../../../types/components/props";
import ShoppingCartItem from "../shopping-cart-item/shopping-cart-item";

const ShoppingCartProductList = ({
  products,
  removeItem,
}: ShoppingCartProductListProps) => {
  return (
    <section aria-labelledby="cart-heading" className="lg:col-span-7">
      <h2 id="cart-heading" className="sr-only">
        Items in your shopping cart
      </h2>

      <ul
        role="list"
        className="border-t border-b border-gray-200 divide-y divide-gray-200"
      >
        {products?.map((product) => (
          <ShoppingCartItem
            key={uuid()}
            id={product.id}
            name={product.name}
            price={product.price}
            imageSrc={product.image}
            imageAlt={product.name}
            removeItem={removeItem}
            quantity={product.quantity}
          />
        ))}
      </ul>
    </section>
  );
};

export default ShoppingCartProductList;
