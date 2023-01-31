import { client } from "../libs/fetch";
import { CreateProduct } from "../types/products";
import { ProductResponse, ProductsResponse } from "../types/responses";

export const ProductService = {
  getProducts: () => {
    return client
      .get<ProductsResponse>(`/api/product`)
      .then((res) => res)
      .catch((err) => {
        throw err;
      });
  },

  getProduct: (id: string) => {
    return client.get<ProductResponse>(`/api/product/${id}`);
  },

  createProduct: (product: CreateProduct) => {
    return client
      .post<ProductsResponse>(`/api/product`, product)
      .then((res) => res)
      .catch((err) => {
        throw err;
      });
  },
};
