import { Product } from '@/types/product';
import { Commit } from 'vuex';
import { CartProduct, CartState } from '../types/cart';

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
    updateCart:
      (state:CartState, updatedCart:CartProduct[]):void => { state.products = updatedCart; },
    deleteProduct: ({ products }:CartState, index:number):void => { products.splice(index, 0); },
  },
  actions: {
    ADD_PRODUCT({ commit, state }:{ commit:Commit, state:CartState }, { product, quantity }:
      { productsArray:CartProduct[], product:Product, quantity:number }):void{
      const addedProduct = state.products.find((item:CartProduct) => item.id === product.id);
      if (addedProduct === undefined) {
        const cartProduct = {
          ...product,
          quantity: +quantity,
          totalPrice: (+quantity * product.price).toFixed(2),
        };
        commit('addProduct', cartProduct);
      } else {
        const updatedQuantity = addedProduct.quantity + +quantity;
        const updatedCart = state.products.map((item:CartProduct) => (item.id === product.id
          ? {
            ...item,
            quantity: updatedQuantity,
            totalPrice: (updatedQuantity * item.price).toFixed(2),
          }
          : item));

        commit('updateCart', updatedCart);
      }
    },
  },
};
