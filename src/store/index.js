import { createStore } from 'vuex';

export default createStore({
  state: {
    counter: localStorage.getItem("counter") || 1,
    isAuthenticated: localStorage.getItem("isAuthenticated") || false,
    typeUser: localStorage.getItem("typeUser") || 'unknown'
  },
  mutations: {
    increment(state) {
      state.counter++;
      localStorage.setItem("counter", state.counter)
    },
    setTypeUser(state, user) {
      state.typeUser = user;
      localStorage.setItem("typeUser", user)
    },
    authenticateTrue(state) {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", true)
    },
    logout(state) {
      state.isAuthenticated = false;
      state.typeUser = 'unknown';
      localStorage.setItem("isAuthenticated", false)
      localStorage.setItem("typeUser", 'unknown')
    }
  },
  actions: {
    saveCounter({ commit }) {
      commit('increment');
    },
    authenticate({ commit }, typeUser) {
      commit('setTypeUser', typeUser)
      commit('authenticateTrue')
    },
    logout({ commit }) {
      commit('logout')
    }
  },
  modules: {
  }
})
