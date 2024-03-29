import { ChangeEvent } from "react";
import { CartItem } from "./cart-item";
import { SelectOption } from "./selectoptions";

export type PageLayoutProps = {
  children: React.ReactNode;
};

export type H2Props = {
  text: string;
};

export type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  smallDescription?: string;
  imageSrc: string;
  imageAlt: string;
  shippingTime?: string;
  quantity?: number;
  removeItem?: (id: string) => void;
};

export type OrderSummaryItemProps = {
  title: string;
  isQuestionMarkDisplayed: boolean;
  amount: number;
  srText?: string;
  type?: "checkout-item";
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

  onClick: () => void;
};

export type CheckoutItemProps = {
  name: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  quantity: number;
};

export type SelectProps = {
  label: string;
  options: SelectOption[];
  value: string | undefined;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export type ButtonProps = {
  title: string;
  onClick?: (e: React.FormEvent) => void;
  type?: "button" | "submit";
  size?: "small" | "medium";
};

export type ImageProps = { src: string; alt: string };

export type InputComponentProps = {
  autoComplete?: string;
  id?: string;
  label?: string;
  name: string;
  value?: string | undefined;
  error?: string | undefined;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  additionalStyles?: string;
};

export type ErrorProps = { message: string };

export type ImageUploadProps = {
  id: string;
  label: string;
  uploadProgress: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type ShoppingCartProductListProps = {
  products: CartItem[] | undefined;
  removeItem: (id: string) => void;
};
