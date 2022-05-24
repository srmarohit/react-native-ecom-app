import create from "zustand";
import { fetchBestSellingProduct } from "../services/products";

export const useProductStore = create((set) => ({
  products: {},

  // functions
  loadProducts: async () => {
    const products = await fetchBestSellingProduct();
    console.log(products?.search?.searchResult?.itemStacks[0]?.items[0]);
    return set((state) => {
      // api calls to load products
      return {
        products: {
          ...state.products,
          best_selling: products?.search?.searchResult?.itemStacks[0]?.items,
        },
      };
    });
  },
}));
