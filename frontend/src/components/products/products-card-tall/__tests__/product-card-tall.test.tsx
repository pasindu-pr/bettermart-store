import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductCardTall from "../products-card-tall";
import { products } from "../../../../data";

// Mock the jest router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

test("renders tall product card with details passed by props", () => {
  const product = products[0];

  render(
    <ProductCardTall
      id={"random"}
      name={product.name}
      price={Number(product.price)}
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
