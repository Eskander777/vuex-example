const authMutations = {
  login(state) {
    return (state.isLoggedIn = true);
  },
  logout(state) {
    return (state.isLoggedIn = false);
  },
};

export default authMutations;
