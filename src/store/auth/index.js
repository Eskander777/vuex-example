import authGetters from './getters';
import authMutations from './mutations';
import authActions from './actions';

const authState = {
  state() {
    return {
      isLoggedIn: false,
    };
  },
  getters: authGetters,
  mutations: authMutations,
  actions: authActions,
};

export default authState;
