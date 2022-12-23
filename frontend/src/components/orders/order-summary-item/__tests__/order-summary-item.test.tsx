import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import OrderSummaryItem from "../order-summary-item";

describe("Order Summary Item", () => {
  test("renders title, question mark icon and amount passed by props", () => {
    const itemDetails = { title: "Total", amount: 100 };

    render(
      <OrderSummaryItem
        title={itemDetails.title}
        isQuestionMarkDisplayed={true}
        amount={itemDetails.amount}
      />
    );

    const title = screen.getByText(itemDetails.title, { exact: true });
    const price = screen.getByText(`$${itemDetails.amount}`, { exact: true });
    const questionMarkIcon = document.querySelector(".question-icon");

    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(questionMarkIcon).toBeInTheDocument();
  });

  test("does not render the icon if false passed by the props for icon", () => {
    const itemDetails = { title: "Total", amount: 100 };

    render(
      <OrderSummaryItem
        title={itemDetails.title}
        isQuestionMarkDisplayed={false}
        amount={itemDetails.amount}
      />
    );

    const title = screen.getByText(itemDetails.title, { exact: true });
    const price = screen.getByText(`$${itemDetails.amount}`, { exact: true });
    const questionMarkIcon = document.querySelector(".question-icon");

    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(questionMarkIcon).not.toBeInTheDocument();
  });
});
