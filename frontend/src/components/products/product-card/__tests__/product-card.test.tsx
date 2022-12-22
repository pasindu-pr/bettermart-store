import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductCard from "../product-card";
import { products } from "../../../../data";

test("renders product card with details passed by props", () => {
  const product = products[0];

  render(
    <ProductCard
      id={"random"}
      name={product.name}
      price={product.price}
      smallDescription={product.description}
      imageSrc={product.imageSrc}
      imageAlt={product.imageAlt}
    />
  );

  const cardName = screen.getByText(product.name, { exact: true });
  const price = screen.getByText(product.price, { exact: true });
  const description = screen.getByText(product.description, { exact: true });
  const cardImageAlt = screen.getByAltText(product.imageAlt, { exact: true });

  expect(cardName).toBeInTheDocument();
  expect(price).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(cardImageAlt).toBeInTheDocument();
  expect(cardImageAlt).toHaveAttribute("src", product.imageSrc);
});
