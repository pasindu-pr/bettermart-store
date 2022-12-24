import React from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/solid";
import { DeliveryMethod } from "../../../types";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export type DeliveryMethodProps = {
  deliveryMethods: DeliveryMethod[];
  selectedDeliveryMethod: DeliveryMethod;
  setSelectedDeliveryMethod: (deliveryMethod: DeliveryMethod) => void;
};

const DeliveryMethod = ({
  deliveryMethods,
  selectedDeliveryMethod,
  setSelectedDeliveryMethod,
}: DeliveryMethodProps) => {
  return (
    <RadioGroup
      value={selectedDeliveryMethod}
      onChange={setSelectedDeliveryMethod}
    >
      <RadioGroup.Label className="text-lg font-medium text-gray-900">
        Delivery method
      </RadioGroup.Label>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        {deliveryMethods.map((deliveryMethod) => (
          <RadioGroup.Option
            key={deliveryMethod.id}
            value={deliveryMethod}
            className={({ checked, active }) =>
              classNames(
                checked ? "border-transparent" : "border-gray-300",
                active ? "ring-2 ring-indigo-500" : "",
                "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
              )
            }
          >
            {({ checked, active }) => (
              <>
                <div className="flex-1 flex">
                  <div className="flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {deliveryMethod.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="mt-1 flex items-center text-sm text-gray-500"
                    >
                      {deliveryMethod.turnaround}
                    </RadioGroup.Description>
                    <RadioGroup.Description
                      as="span"
                      className="mt-6 text-sm font-medium text-gray-900"
                    >
                      {deliveryMethod.price}
                    </RadioGroup.Description>
                  </div>
                </div>
                {checked ? (
                  <CheckCircleIcon
                    className="h-5 w-5 text-indigo-600"
                    aria-hidden="true"
                  />
                ) : null}
                <div
                  className={classNames(
                    active ? "border" : "border-2",
                    checked ? "border-indigo-500" : "border-transparent",
                    "absolute -inset-px rounded-lg pointer-events-none"
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default DeliveryMethod;
