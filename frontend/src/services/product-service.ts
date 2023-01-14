import { client } from "../libs/fetch";
import { CreateProduct } from "../types/products";
import { ProductResponse } from "../types/responses";

export const ProductService = {
  createProduct: (product: CreateProduct) => {
    return client
      .post<ProductResponse>(`/api/product`, product)
      .then((res) => res)
      .catch((err) => {
        throw err;
      });
  },
};
