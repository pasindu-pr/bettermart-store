import React from "react";

import { ShoppingCartSummaryProps } from "../../../types/components/props";
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
        <button
          type="submit"
          className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
        >
          Checkout
        </button>
      </div>
    </section>
  );
};

export default ShoppingCartSummary;
