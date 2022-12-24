import React from "react";
import { ShoppingCartSummaryProps } from "../../../types/components/props";
import OrderSummaryItem from "../order-summary-item/order-summary-item";

const CheckoutSummary = ({
  subtotal,
  shippingEstimate,
  taxEstimate,
  orderTotal,
}: ShoppingCartSummaryProps) => {
  return (
    <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
      <dl className="mt-6 space-y-4">
        <OrderSummaryItem
          title={subtotal.title}
          amount={subtotal.amount}
          isQuestionMarkDisplayed={false}
          type="checkout-item"
        />

        <OrderSummaryItem
          title={shippingEstimate.title}
          amount={shippingEstimate.amount}
          isQuestionMarkDisplayed={true}
          srText="Learn more about how shipping is calculated"
          type="checkout-item"
        />

        <OrderSummaryItem
          title={taxEstimate.title}
          amount={taxEstimate.amount}
          isQuestionMarkDisplayed={true}
          srText=" Learn more about how tax is calculated"
          type="checkout-item"
        />

        <OrderSummaryItem
          title={orderTotal.title}
          amount={orderTotal.amount}
          isQuestionMarkDisplayed={false}
          type="checkout-item"
        />
      </dl>
    </dl>
  );
};

export default CheckoutSummary;
