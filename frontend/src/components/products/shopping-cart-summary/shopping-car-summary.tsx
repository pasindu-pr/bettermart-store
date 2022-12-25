import React from "react";

import { ShoppingCartSummaryProps } from "../../../types/components/props";
import Button from "../../button/button";
import OrderSummaryItem from "../../orders/order-summary-item/order-summary-item";

const ShoppingCartSummary = ({
  subtotal,
  shippingEstimate,
  taxEstimate,
  orderTotal,
}: ShoppingCartSummaryProps) => {
  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <OrderSummaryItem
          title={subtotal.title}
          amount={subtotal.amount}
          isQuestionMarkDisplayed={false}
        />

        <OrderSummaryItem
          title={shippingEstimate.title}
          amount={shippingEstimate.amount}
          isQuestionMarkDisplayed={true}
          srText="Learn more about how shipping is calculated"
        />

        <OrderSummaryItem
          title={taxEstimate.title}
          amount={taxEstimate.amount}
          isQuestionMarkDisplayed={true}
          srText=" Learn more about how tax is calculated"
        />

        <OrderSummaryItem
          title={orderTotal.title}
          amount={orderTotal.amount}
          isQuestionMarkDisplayed={false}
        />
      </dl>

      <div className="mt-6">
        <Button
          type="submit"
          onClick={() => {
            console.log("");
          }}
          title="Checkout"
        />
      </div>
    </section>
  );
};

export default ShoppingCartSummary;
