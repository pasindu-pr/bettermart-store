import { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";

import { ShoppingCartProductList } from "../../components";
import ShoppingCartSummary from "../../components/products/shopping-cart-summary/shopping-car-summary";
import { CartContext } from "../../context/cart-context";
import { StripeProduct } from "../../types/products";
import { OrderService } from "../../services";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(publishableKey as string);

export default function ShoppingCart() {
  const { items, removeItems } = useContext(CartContext);

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

    const shipping = !isCartEmpty ? subTotal + 5 : 0;
    const tax = !isCartEmpty ? (subTotal * 12) / 100 : 0;
    const total = subTotal + shipping + tax;

    setOrder({
      subTotal: subTotal || 0,
      shipping: shipping,
      tax: tax,
      total: total,
    });
  }, [items]);

  const createOrder = async () => {
    const productIds = items?.map((item) => item.id);

    if (productIds) {
      OrderService.createOrder(productIds)
        .then((res) => {
          const orderId = res.data.data;
          createCheckOutSession(orderId);
        })
        .catch(() => {
          toast.error("Something went wrong!");
        });
    }
  };

  const createCheckOutSession = async (orderId: string) => {
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
      shipping: order.shipping,
      orderId: orderId,
    });
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result?.error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <ShoppingCartProductList products={items} removeItem={removeItems} />

          {/* Order summary */}
          <ShoppingCartSummary
            subtotal={{
              title: "Subtotal",
              amount: order.subTotal,
            }}
            shippingEstimate={{
              title: "Shipping estimate",
              amount: order.shipping,
            }}
            taxEstimate={{ title: "Tax estimate", amount: order.tax }}
            orderTotal={{ title: "Total", amount: order.total }}
            onClick={createOrder}
          />
        </form>
      </div>
    </div>
  );
}
