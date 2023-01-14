import { Product } from "../products/product";

export type ProductResponse = {
  data: Product[];
  success: boolean;
  message: string;
  errors: string[];
};
