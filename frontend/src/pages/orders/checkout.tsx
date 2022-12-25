import { useState } from "react";

import {
  Button,
  CheckoutItem,
  DeliveryMethod,
  Input,
  Select,
} from "../../components";
import CheckoutSummary from "../../components/orders/checkout-summary/checkout-summary";
import { countries, products } from "../../data";
import { deliveryMethods } from "../../data/orders";
import { uuid } from "../../libs";
import { DeliveryMethod as DeliveryMethodType } from "../../types";

export default function CheckoutPage() {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] =
    useState<DeliveryMethodType>(deliveryMethods[0]);

  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(
    undefined
  );

  const setDeliveryMethod = (deliveryMethod: DeliveryMethodType) => {
    setSelectedDeliveryMethod(deliveryMethod);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Contact information
              </h2>

              <div className="mt-4">
                <Input
                  label="Email address"
                  type="email"
                  id="email-address"
                  name="email-address"
                  autoComplete="email"
                  onChange={(e) => {
                    console.log("");
                  }}
                />
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">
                Shipping information
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <Input
                  label="First name"
                  type="text"
                  id="first-name"
                  name="first-name"
                  autoComplete="given-name"
                  onChange={(e) => {
                    console.log("");
                  }}
                />

                <Input
                  label="Last name"
                  type="text"
                  id="last-name"
                  name="last-name"
                  autoComplete="family-name"
                  onChange={(e) => {
                    console.log("");
                  }}
                />

                <div className="sm:col-span-2">
                  <Input
                    label="Company"
                    type="text"
                    name="company"
                    id="company"
                    onChange={(e) => {
                      console.log("");
                    }}
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input
                    label="Address"
                    type="text"
                    name="address"
                    id="address"
                    autoComplete="street-address"
                    onChange={(e) => {
                      console.log("");
                    }}
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input
                    label="Apartment, suite, etc."
                    type="text"
                    name="apartment"
                    id="apartment"
                    onChange={(e) => {
                      console.log("");
                    }}
                  />
                </div>

                <div>
                  <Input
                    label="City"
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    onChange={(e) => {
                      console.log("");
                    }}
                  />
                </div>

                <div>
                  <Select
                    options={countries}
                    label="Country"
                    value={selectedCountry}
                    handleChange={handleCountryChange}
                  />
                </div>

                <div>
                  <Input
                    label="State / Province"
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    onChange={(e) => {
                      console.log("");
                    }}
                  />
                </div>

                <div>
                  <Input
                    label="Postal code"
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    onChange={(e) => {
                      console.log("");
                    }}
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input
                    label="Phone"
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    onChange={(e) => {
                      console.log("");
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              {/* Delivery Method FOrm */}
              <DeliveryMethod
                deliveryMethods={deliveryMethods}
                selectedDeliveryMethod={selectedDeliveryMethod}
                setSelectedDeliveryMethod={setDeliveryMethod}
              />
            </div>
          </div>

          {/* Order summary */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="sr-only">Items in your cart</h3>
              <ul role="list" className="divide-y divide-gray-200">
                {products.map((product) => (
                  <CheckoutItem
                    key={uuid()}
                    name={product.name}
                    price={product.price}
                    imageSrc={product.imageSrc}
                    imageAlt={product.imageAlt}
                  />
                ))}
              </ul>

              <CheckoutSummary
                subtotal={{ title: "Subtotal", amount: 99 }}
                shippingEstimate={{ title: "Shipping estimate", amount: 5.0 }}
                taxEstimate={{ title: "Tax estimate", amount: 5.0 }}
                orderTotal={{ title: "Total", amount: 12.0 }}
              />

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <Button
                  type="submit"
                  onClick={() => {
                    console.log("");
                  }}
                  title="Pay"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
