import cartGetters from './getters';
import cartMutations from './mutations';
import cartActions from './actions';

const cartState = {
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  getters: cartGetters,
  mutations: cartMutations,
  actions: cartActions,
};

export default cartState;
