import { createStore } from 'vuex';

import products from './products/index';
import authState from './auth';
import cartState from './cart';

const store = createStore({
  modules: { products, isLoggedIn: authState, cart: cartState },
});

export default store;
