import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AuthContext } from "../../../context";

import { ShoppingCartSummaryProps } from "../../../types/components/props";
import Button from "../../button/button";
import OrderSummaryItem from "../../orders/order-summary-item/order-summary-item";

const ShoppingCartSummary = ({
  subtotal,
  shippingEstimate,
  taxEstimate,
  orderTotal,
  onClick,
}: ShoppingCartSummaryProps) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const handleOnClick = () => {
    if (!user) {
      router.push({
        pathname: "/auth/login",
        query: { redirect: "/products/shopping-cart" },
      });
    } else {
      onClick();
    }
  };

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
          type="button"
          onClick={handleOnClick}
          title={user ? "Checkout" : "Login to checkout"}
        />
      </div>
    </section>
  );
};

export default ShoppingCartSummary;
