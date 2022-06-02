import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
} from "./actions";

const initialState = {
  cart: {
    products: [],
    subtotal: "",
    tax: "",
  },
  wishlist: [],
  orders: [],
};

const reducer = (state = initialState, action) => {
  /** Note : Promises Async in front of reducer fnction  misbehave in state */
  switch (action.type) {
    case ADD_TO_CART: {
      //console.log("addtocart");
      //console.log(state);
      // console.log("adc : " + JSON.stringify(state["_W"]));
      const product = action.payload;
      let cart = state?.cart && { ...state.cart };
      if (!cart) {
        console.log("something wrong into addcart action");
        return state;
      }
      let index = cart?.products.findIndex((item) => item.id == product.id);

      if (index == -1) {
        cart.products.push({
          ...product,
          total: product.qty * product.priceInfo?.currentPrice?.price || 0,
        });
      } else {
        cart.products[index].qty += product.qty;
        cart.products[index].total =
          cart.products[index].qty *
          (product.priceInfo?.currentPrice?.price || 0);
      }

      cart.subtotal = cart.products
        .reduce((acc, curr) => acc + curr.total, 0)
        .toFixed(2);
      //console.log(cart.subtotal);

      console.log(cart);

      return {
        ...state,
        cart,
      };
    }

    case REMOVE_FROM_CART: {
      // console.log(action.payload);
      const cart = { ...state.cart };
      const filt_cart_products =
        action.payload &&
        cart.products.filter((product) => product.id !== action.payload);

      cart.products = filt_cart_products || cart.products;

      cart.subtotal = filt_cart_products
        .reduce((acc, curr) => acc + curr.total, 0)
        .toFixed(2);

      console.log(cart);
      return {
        ...state,
        cart,
      };
    }

    case ADD_TO_WISHLIST: {
      console.log(state);
      const wishlist = [...state.wishlist];
      console.log(wishlist);

      wishlist.push(action.payload);

      return {
        ...state,
        wishlist,
      };
    }

    case REMOVE_FROM_WISHLIST: {
      const wishlist = [...state.wishlist];

      let filt_wishlist = action.payload
        ? wishlist.filter((id) => id != action.payload)
        : wishlist;

      return {
        ...state,
        wishlist: filt_wishlist,
      };
    }

    default:
      return { ...state };
  }
};

export default reducer;
