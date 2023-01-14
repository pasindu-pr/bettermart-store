import { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req: NextApiRequest, res: NextApiResponse) {
  const { items } = req.body;

  const redirectURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://stripe-checkout-next-js-demo.vercel.app";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: items,
    mode: "payment",
    success_url: redirectURL + "?status=success",
    cancel_url: redirectURL + "?status=cancel",
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;
