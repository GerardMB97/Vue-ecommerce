import Vue from 'vue';
import Vuex from 'vuex';
import productsStore from './products';
import cartStore from './cart';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    productsStore,
    cartStore,
  },
});
