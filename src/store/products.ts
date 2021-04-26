import axios from 'axios';
import { Commit } from 'vuex';
import { Product, ProductState } from '../types/product';
import endPoints from '../constants/endPoints';

export default {
  namespaced: true,
  state: {
    products: [],
  },
  getters: {
    products: ({ products }:ProductState):Product[] => products,
  },
  mutations: {
    setProducts(state:ProductState, productsList:Product[]):void {
      state.products = productsList;
    },
  },
  actions: {
    async GET_PRODUCTS({ commit }:{ commit:Commit }):Promise<void> {
      const { data } = await axios(endPoints.getProducts);
      commit('setProducts', data);
    },
  },
};
