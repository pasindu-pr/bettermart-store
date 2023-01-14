import { CartItem } from "../components";

export type CartContext = {
  items: CartItem[] | undefined;
  addItems: (item: CartItem) => void;
  removeItems: (id: string) => void;
};
