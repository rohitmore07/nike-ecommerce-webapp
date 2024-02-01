export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, { ...action.payload }],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((c) => c.id !== action.payload.id),
      };

    case "PLUS_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = c.qty + 1) : c.qty
        ),
      };
    case "MINUS_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id && c.qty >= 2 ? (c.qty = c.qty - 1) : c.qty
        ),
      };
    default:
      return state;
  }
};
