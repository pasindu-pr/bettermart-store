import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { products } from "../../../../data";
import { CheckoutItem } from "../../..";

test("renders checkout item with details passed by props", () => {
  const product = products[0];

  render(
    <CheckoutItem
      name={product.name}
      price={product.price}
      imageSrc={product.imageSrc}
      imageAlt={product.imageAlt}
    />
  );

  const productName = screen.getByText(product.name, { exact: true });
  const price = screen.getByText(product.price, { exact: true });
  const cardImageAlt = screen.getByAltText(product.imageAlt, { exact: true });

  expect(productName).toBeInTheDocument();
  expect(price).toBeInTheDocument();
  expect(cardImageAlt).toBeInTheDocument();
  expect(cardImageAlt).toHaveAttribute("src", product.imageSrc);
});
