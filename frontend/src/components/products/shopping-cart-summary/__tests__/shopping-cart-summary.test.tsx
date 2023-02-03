import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ShoppingCartSummary from "../shopping-car-summary";

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

jest.mock("../../../../context", () => {
  const mockUser = {
    uid: "12345",
    email: "test@example.com",
  };

  const AuthContext = React.createContext({
    user: mockUser,
  });

  return { AuthContext };
});

test("renders shopping cart summary with the passed props", () => {
  // jest on click function
  const onClick = jest.fn();

  render(
    <ShoppingCartSummary
      subtotal={{ title: "Subtotal", amount: 99 }}
      shippingEstimate={{ title: "Shipping estimate", amount: 5.0 }}
      taxEstimate={{ title: "Tax estimate", amount: 5.0 }}
      orderTotal={{ title: "Total", amount: 12.0 }}
      onClick={onClick}
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
