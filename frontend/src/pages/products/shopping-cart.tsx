import { useContext, useEffect, useState } from "react";
import { ShoppingCartProductList } from "../../components";
import ShoppingCartSummary from "../../components/products/shopping-cart-summary/shopping-car-summary";
import { CartContext } from "../../context/cart-context";

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
          />
        </form>
      </div>
    </div>
  );
}
