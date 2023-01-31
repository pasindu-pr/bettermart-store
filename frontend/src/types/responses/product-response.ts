import { Product } from "../products/product";

export type ProductsResponse = {
  data: Product[];
  success: boolean;
  message: string;
  errors: string[];
};

export type ProductResponse = {
  data: Product;
  success: boolean;
  message: string;
  errors: string[];
};
