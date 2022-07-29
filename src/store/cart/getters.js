const cartGetters = {
  cart(state) {
    return state.cart;
  },
  cartTotal(state) {
    return state.cart.total.toFixed(2);
  },
  cartQty(state) {
    return state.cart.qty;
  },
};

export default cartGetters;
