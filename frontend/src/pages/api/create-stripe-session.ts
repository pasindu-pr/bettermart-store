import { NextApiRequest, NextApiResponse } from "next";
import { StripeProduct } from "../../types/products";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req: NextApiRequest, res: NextApiResponse) {
  let { items, shipping }: { items: StripeProduct[]; shipping: number } =
    req.body;

  items = items.map((item) => {
    return {
      ...item,
      tax_rates: [process.env.STRIPE_TAX_ID],
    };
  });

  const redirectURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.FRONTEND_DOMAIN;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: { allowed_countries: ["US", "CA"] },
    line_items: items,
    mode: "payment",
    success_url: redirectURL + "?status=success",
    cancel_url: redirectURL + "?status=cancel",
    metadata: {
      orderId: "123",
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: shipping, currency: "usd" },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 5 },
            maximum: { unit: "business_day", value: 7 },
          },
        },
      },
    ],
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;
