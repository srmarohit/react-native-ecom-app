export const LOAD_PRODUCTS = "load_products";
export const ADD_TO_CART = "add_to_cart";
export const REMOVE_FROM_CART = "remove_from_cart";

export const loadProducts = (payload) => (dispatch) => {
  dispatch({
    type: LOAD_PRODUCTS,
    payload,
  });
};

export const addToCart = (payload) => (dispatch) =>
  dispatch({
    type: ADD_TO_CART,
    payload,
  });

export const removeFromCart = (payload) => (dispatch) =>
  dispatch({
    type: REMOVE_FROM_CART,
    payload,
  });
