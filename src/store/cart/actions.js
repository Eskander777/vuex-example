const cartActions = {
  addProductToCart(context, product) {
    context.commit('addProductToCart', product);
  },
  removeProductFromCart(context, prodId) {
    context.commit('removeProductFromCart', prodId);
  },
};

export default cartActions;
