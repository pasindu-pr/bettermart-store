export type StripeProduct = {
  price_data: {
    currency: string;
    product_data: {
      images: string[];
      name: string;
    };
    unit_amount: number;
  };
  quantity: number;
};
