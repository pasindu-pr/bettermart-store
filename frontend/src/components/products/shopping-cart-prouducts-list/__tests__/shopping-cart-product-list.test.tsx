import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ShoppingCartProductList from "../shopping-cart-product-list";

const products = [
  {
    id: "unique_id_1",
    name: "Focus Paper Refill",
    href: "#",
    price: 13,
    quantity: 1,
    description: "3 sizes available",
    image:
      "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
];

test("renders products list from array passed by props", () => {
  const removeItem = jest.fn();

  render(
    <ShoppingCartProductList products={products} removeItem={removeItem} />
  );

  products.forEach((product) => {
    const cardName = screen.getByText(product.name, { exact: true });
    const price = screen.getByText(product.price, { exact: true });

    expect(cardName).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
