import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { products } from "../../../../data";
import ShoppingCartProductList from "../shopping-cart-product-list";

test("renders products list from array passed by props", () => {
  render(<ShoppingCartProductList products={products} />);

  products.forEach((product) => {
    const cardName = screen.getByText(product.name, { exact: true });
    const price = screen.getByText(product.price, { exact: true });
    const cardImageAlt = screen.getByAltText(product.imageAlt, { exact: true });

    expect(cardName).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(cardImageAlt).toBeInTheDocument();
    expect(cardImageAlt).toHaveAttribute("src", product.imageSrc);
  });
});
