export const ADD_TO_CART = "add_to_cart";
export const REMOVE_FROM_CART = "remove_from_cart";

export const ADD_TO_WISHLIST = "add_to_wishlist";
export const REMOVE_FROM_WISHLIST = "remove_from_wishlist";

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const addToWishlist = (payload) => ({
  type: ADD_TO_WISHLIST,
  payload,
});

export const removeFromWishlist = (payload) => ({
  type: REMOVE_FROM_WISHLIST,
  payload,
});
