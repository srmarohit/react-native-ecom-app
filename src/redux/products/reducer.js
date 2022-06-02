import { fetchBestSellingProduct } from "../../services/products";
import { LOAD_PRODUCTS } from "./actions";

const initialState = {
  products: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      const products = action.payload;
      console.log(products);
      //console.log("dd" + JSON.stringify(products));
      // console.log(products?.search?.searchResult?.itemStacks[0]?.items[0]);
      // api calls to load products
      return {
        ...state,
        products: {
          ...state.products,
          best_selling: products?.search?.searchResult?.itemStacks[0]?.items,
        },
      };
    }

    default:
      return { ...state };
  }
};

export default reducer;
