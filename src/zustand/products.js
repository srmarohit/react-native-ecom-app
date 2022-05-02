import create from "zustand";
import { fetchBestSellingProduct } from "../services/products";

export const useProductStore = create((set) => ({
  products: {},
  carts: [],

  // functions
  loadProducts: async () => {
    const products = await fetchBestSellingProduct();
    console.log(products?.search?.searchResult?.itemStacks[0]?.items[0]);
    return set((state) => {
      // api calls to load products
      return {
        products: {
          ...products,
          best_selling: products?.search?.searchResult?.itemStacks[0]?.items,
        },
      };
    });
  },

  // add to cart
}));
