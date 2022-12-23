export type PageLayoutProps = {
  children: React.ReactNode;
};

export type ProductCardProps = {
  id: string;
  name: string;
  price: string;
  smallDescription?: string;
  imageSrc: string;
  imageAlt: string;
  shippingTime?: string;
};

export type OrderSummaryItemProps = {
  title: string;
  isQuestionMarkDisplayed: boolean;
  amount: number;
  srText?: string;
};

export type ShoppingCartSummaryProps = {
  subtotal: {
    title: string;
    amount: number;
  };

  shippingEstimate: {
    title: string;
    amount: number;
  };

  taxEstimate: {
    title: string;
    amount: number;
  };

  orderTotal: {
    title: string;
    amount: number;
  };
};
