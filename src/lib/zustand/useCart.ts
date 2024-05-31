import { create } from "zustand";

type CartStorage = {
  cartItems: {
    title: string;
    img: string;
    price: string;
    id: number;
    rating: number;
  }[];
  //   setCartItems: (value: CartStorage) => void;
};

export const useCart = create<CartStorage>((set) => ({
  cartItems: [],
  //   setCartItems: (value) =>
  // set((state) => ({ cartItems: state.cartItems.push(value) })),
}));
