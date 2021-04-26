import { Product } from '@/types/product';
import { Commit } from 'vuex';
import { CartProduct, CartState } from '../types/cart';
import products from './products';

export default {
  namespaced: true,
  state: {
    products: [],
  },
  getters: {
    products: ({ products }:CartState):CartProduct[] => products,
  },
  mutations: {
    addProduct: ({ products }:CartState, product:CartProduct):void => { products.push(product); },
    deleteProduct: ({ products }:CartState, index:number):void => { products.splice(index, 0)}
  },
  actions: {
    ADD_PRODUCT({ commit }:{ commit:Commit }, { product, quantity }:
      { product:Product, quantity:number }):void{
      const cartProduct = {
        ...product,
        quantity,
        totalPrice: (quantity * product.price).toFixed(2),
      };
      commit('addProduct', cartProduct);
    },
  },
};
