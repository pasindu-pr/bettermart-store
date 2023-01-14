export type CheckoutInfo = {
  email: string;
  address: {
    firstName: string;
    lastName: string;
    address: string;
    apartment: string;
    city: string;
    state: string;
    zip: string;
  };
  order: {
    items: string[];
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
  };
};
