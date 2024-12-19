import axios from "axios";
import { create } from "zustand";

export const useCountStore = create((set) => ({
  count: 0,
  incCount: (value) => set((state) => ({ count: state.count + value })),
  decCount: (value) => set((state) => ({ count: state.count - value })),

  removeAllCount: () => set({ count: 0 }),
}));
export const useFetchData = create((set) => ({
  data: [],
  fetchData: async () => {
    try {
      const responce = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      set({ data: responce.data });
    } catch (error) {}
  },
}));
export const useAddToCart = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const exists = state.cart.find((item) => item.id === product.id);
      if (exists) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}));
