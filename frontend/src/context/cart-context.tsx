import React, { useEffect, useState, createContext } from "react";
import { CartItem } from "../types/components";
import { CartContext as ICartContext } from "../types/context/cart-context";

export const CartContext = createContext<ICartContext>({
  items: undefined,
  addItems: () => {},
  removeItems: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[] | undefined>(undefined);

  const addItems = (item: CartItem) => {
    setItems((prevItems) => {
      if (prevItems) {
        return [...prevItems, item];
      } else {
        return [item];
      }
    });
  };

  const removeItems = (id: string) => {
    setItems((prevItems) => {
      if (prevItems) {
        return prevItems.filter((item) => item.id !== id);
      } else {
        return [];
      }
    });
  };

  return (
    <CartContext.Provider value={{ items, addItems, removeItems }}>
      {children}
    </CartContext.Provider>
  );
};
