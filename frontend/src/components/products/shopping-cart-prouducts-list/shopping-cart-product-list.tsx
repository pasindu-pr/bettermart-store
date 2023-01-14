import React from "react";

import { uuid } from "../../../libs";
import { ProductCard } from "../../../types";
import ShoppingCartItem from "../shopping-cart-item/shopping-cart-item";

const ShoppingCartProductList = ({ products }: { products: ProductCard[] }) => {
  return (
    <section aria-labelledby="cart-heading" className="lg:col-span-7">
      <h2 id="cart-heading" className="sr-only">
        Items in your shopping cart
      </h2>

      <ul
        role="list"
        className="border-t border-b border-gray-200 divide-y divide-gray-200"
      >
        {products.map((product, productIdx) => (
          <ShoppingCartItem
            key={uuid()}
            id="sdsd"
            name={product.name}
            price={Number(product.price)}
            smallDescription="Sample Description"
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
          />
        ))}
      </ul>
    </section>
  );
};

export default ShoppingCartProductList;
