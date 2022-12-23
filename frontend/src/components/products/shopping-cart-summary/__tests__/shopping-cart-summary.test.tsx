import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ShoppingCartSummary from "../shopping-car-summary";

test("renders shopping cart summary with the passed props", () => {
  render(
    <ShoppingCartSummary
      subtotal={{ title: "Subtotal", amount: 99 }}
      shippingEstimate={{ title: "Shipping estimate", amount: 5.0 }}
      taxEstimate={{ title: "Tax estimate", amount: 5.0 }}
      orderTotal={{ title: "Total", amount: 12.0 }}
    />
  );

  const subTotalText = screen.getByText("Subtotal", { exact: true });
  const shippingEstimateText = screen.getByText("Shipping estimate", {
    exact: true,
  });
  const taxEstimateText = screen.getByText("Tax estimate", {
    exact: true,
  });
  const totalText = screen.getByText("Total", {
    exact: true,
  });

  expect(subTotalText).toBeInTheDocument();
  expect(shippingEstimateText).toBeInTheDocument();
  expect(taxEstimateText).toBeInTheDocument();
  expect(totalText).toBeInTheDocument();
});
