import { ShoppingCartProductList } from "../../components";
import ShoppingCartSummary from "../../components/products/shopping-cart-summary/shopping-car-summary";
import { products } from "../../data";

export default function ShoppingCart() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <ShoppingCartProductList products={products} />

          {/* Order summary */}
          <ShoppingCartSummary
            subtotal={{ title: "Subtotal", amount: 99 }}
            shippingEstimate={{ title: "Shipping estimate", amount: 5.0 }}
            taxEstimate={{ title: "Tax estimate", amount: 5.0 }}
            orderTotal={{ title: "Total", amount: 12.0 }}
          />
        </form>
      </div>
    </div>
  );
}
