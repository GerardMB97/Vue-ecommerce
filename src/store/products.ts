import axios from 'axios';
import {Product, ProductState} from '../types/product';
import {Commit} from 'vuex';
export default {
  state: {
    products: [],
    product: {}
  },
  mutations: {
    setProducts({products}:ProductState, productsList:Product[]) {
      products = productsList
    }
  },
  actions: {
    async GET_PRODUCTS({commit}:{commit:Commit}){

    }
  },
}
