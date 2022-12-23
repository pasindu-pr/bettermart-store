import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { products } from "../../../../data";
import ShoppingCartItem from "../shopping-cart-item";

test("renders shopping cart item with details passed by props", () => {
  const product = products[0];

  render(
    <ShoppingCartItem
      id={"random"}
      name={product.name}
      price={product.price}
      imageSrc={product.imageSrc}
      imageAlt={product.imageAlt}
    />
  );

  const cardName = screen.getByText(product.name, { exact: true });
  const price = screen.getByText(product.price, { exact: true });
  const cardImageAlt = screen.getByAltText(product.imageAlt, { exact: true });

  expect(cardName).toBeInTheDocument();
  expect(price).toBeInTheDocument();
  expect(cardImageAlt).toBeInTheDocument();
  expect(cardImageAlt).toHaveAttribute("src", product.imageSrc);
});
