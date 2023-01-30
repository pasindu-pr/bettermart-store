import { client } from "../libs/fetch";
import { CreateOrderResponse } from "../types/responses";

export const OrderService = {
  createOrder: (productIds: String[]) => {
    return client
      .post<CreateOrderResponse>(`/api/order`, productIds)
      .then((res) => res)
      .catch((err) => {
        throw err;
      });
  },
};
