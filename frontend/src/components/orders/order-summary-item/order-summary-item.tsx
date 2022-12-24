import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { OrderSummaryItemProps } from "../../../types";

const OrderSummaryItem = ({
  title,
  isQuestionMarkDisplayed,
  amount,
  srText,
  type,
}: OrderSummaryItemProps) => {
  return (
    <div
      className={`${
        type !== "checkout-item" && "border-t"
      } border-gray-200 pt-4 flex items-center justify-between`}
    >
      <dt className="flex text-sm text-gray-600">
        <span>{title}</span>

        {srText && (
          <span className="sr-only">
            Learn more about how tax is calculated
          </span>
        )}
        {isQuestionMarkDisplayed && (
          <QuestionMarkCircleIcon
            className="h-5 w-5 question-icon"
            aria-hidden="true"
          />
        )}
      </dt>
      <dd className="text-sm font-medium text-gray-900">${amount}</dd>
    </div>
  );
};

export default OrderSummaryItem;
