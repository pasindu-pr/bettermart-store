import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button, CheckoutItem, Input } from "../../components";
import CheckoutSummary from "../../components/orders/checkout-summary/checkout-summary";
import { CartContext } from "../../context/cart-context";
import { uuid } from "../../libs";
import { CheckoutInfo } from "../../types/orders";
import { StripeProduct } from "../../types/products";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(publishableKey as string);

export default function CheckoutPage() {
  const { items } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutInfo>();

  const onSubmit = (data: CheckoutInfo) => {
    const checkout: CheckoutInfo = {
      ...data,
      order: {
        items: items?.map((item) => item.id) || [],
        subtotal: order.subTotal,
        shipping: order.shipping,
        tax: order.tax,
        total: order.total,
      },
    };
  };

  const [order, setOrder] = useState({
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  });

  useEffect(() => {
    const isCartEmpty = !items || items?.length === 0;

    const subTotal =
      items?.reduce(
        (accumulator, item) => item.price * item.quantity + accumulator,
        0
      ) || 0;

    const shipping = !isCartEmpty
      ? subTotal > 100
        ? 0
        : (subTotal * 8) / 100
      : 0;
    const tax = !isCartEmpty ? (subTotal * 12) / 100 : 0;
    const total = subTotal + shipping + tax;

    setOrder({
      subTotal: subTotal || 0,
      shipping: shipping,
      tax: tax,
      total: total,
    });
  }, [items]);

  const createCheckOutSession = async () => {
    const checkoutItems: StripeProduct[] =
      items?.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              images: [item.image],
              name: item.name,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }) || [];

    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create-stripe-session", {
      items: checkoutItems,
    });
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result?.error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        <form
          className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
          onSubmit={handleSubmit(onSubmit)}
        >
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
                  autoComplete="email"
                  {...register("email")}
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
                  autoComplete="given-name"
                  {...register("address.firstName")}
                />

                <Input
                  label="Last name"
                  type="text"
                  id="last-name"
                  autoComplete="family-name"
                  {...register("address.lastName")}
                />

                <div className="sm:col-span-2">
                  <Input
                    label="Address"
                    type="text"
                    autoComplete="street-address"
                    {...register("address.address")}
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input
                    label="Apartment, suite, etc."
                    type="text"
                    id="apartment"
                    {...register("address.apartment")}
                  />
                </div>

                <div>
                  <Input
                    label="City"
                    type="text"
                    id="city"
                    autoComplete="address-level2"
                    {...register("address.city")}
                  />
                </div>

                <div>
                  <Input
                    label="State / Province"
                    type="text"
                    id="region"
                    autoComplete="address-level1"
                    {...register("address.state")}
                  />
                </div>

                <div className="sm:col-span-2">
                  <Input
                    label="Postal code"
                    type="text"
                    id="postal-code"
                    autoComplete="postal-code"
                    {...register("address.zip")}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="sr-only">Items in your cart</h3>
              <ul role="list" className="divide-y divide-gray-200">
                {items?.map((item) => (
                  <CheckoutItem
                    key={uuid()}
                    name={item.name}
                    price={item.price}
                    imageSrc={item.image}
                    imageAlt={item.name}
                    quantity={item.quantity}
                  />
                ))}
              </ul>

              <CheckoutSummary
                subtotal={{ title: "Subtotal", amount: order.subTotal }}
                shippingEstimate={{
                  title: "Shipping estimate",
                  amount: order.shipping,
                }}
                taxEstimate={{ title: "Tax estimate", amount: order.tax }}
                orderTotal={{ title: "Total", amount: order.total }}
              />

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <Button
                  type="submit"
                  onClick={createCheckOutSession}
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
