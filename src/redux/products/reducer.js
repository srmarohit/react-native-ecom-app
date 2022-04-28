import { ADD_TO_CART, LOAD_PRODUCTS, REMOVE_FROM_CART } from "./actions";

const initialState = {
  products: [],
  cart: {
    products: [],
    subtotal: "",
    tax: "",
  },
  wishlist: [],
  orders: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      // console.log(action.payload);
      const { products } = action.payload;
      //console.log(products);
      return {
        ...state,
        products: products || [],
        orders: "Rrr",
      };
    }

    case ADD_TO_CART: {
      //console.log("addtocart");
      //console.log(action.payload);
      const product = action.payload;
      let cart = state.cart;
      let index = cart.products.findIndex((item) => item.id == product.id);

      if (index == -1) {
        cart.products.push({ ...product, total: product.qty * product.price });
      } else {
        cart.products[index].qty += product.qty;
        cart.products[index].total =
          cart.products[index].qty * cart.products[index].price;
      }

      cart.subtotal = cart.products.reduce((acc, curr) => acc + curr.total, 0);
      //console.log(cart.subtotal);

      return {
        ...state,
        cart,
      };
    }

    case REMOVE_FROM_CART: {
      // console.log(action.payload);
      const cart = state.cart;
      const filt_cart_products =
        action.payload &&
        cart.products.filter((product) => product.id !== action.payload);

      cart.products = filt_cart_products || cart.products;

      cart.subtotal = filt_cart_products.reduce(
        (acc, curr) => acc + curr.total,
        0
      );

      console.log(cart);
      return {
        ...state,
        cart,
      };
    }

    default:
      return { ...state };
  }
};

export default reducer;
