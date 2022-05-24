import create from "zustand";
import { fetchBestSellingProduct } from "../services/products";

export const useCartStore = create((set) => ({
  products: {},

  // add to cart
  addToCart: ({ id, usItemId, qty }) => {
    return set((state) => {
      const { products } = state;

      if (products[id]) {
        products[id].qty += qty;
      } else {
        products[id] = {
          qty,
          usItemId,
        };
      }

      return { products: { ...products } };
    });
  },

  // inc Item in Cart
}));
