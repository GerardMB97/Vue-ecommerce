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
    updateCart: ({products}:CartState, updatedCart:CartProduct[]):void => {products = updatedCart},
    deleteProduct: ({ products }:CartState, index:number):void => { products.splice(index, 0)}
  },
  actions: {
    ADD_PRODUCT({ commit }:{ commit:Commit }, { products, product, quantity }:
      { products:CartProduct[],product:Product, quantity:number }):void{

      const addedProduct = products.find((item)=> item.id === product.id);

      if (addedProduct === undefined){
        const cartProduct = {
          ...product,
          quantity,
          totalPrice: (quantity * product.price).toFixed(2),
        };
        commit('addProduct', cartProduct);
    }else {
      const updatedQuantity = addedProduct.quantity + quantity;
      const updatedCart = products.map(item => {
        return item.id === product.id ?
          {...item, quantity: updatedQuantity, totalPrice: (updatedQuantity * item.price).toFixed(2)}
          :
          item;
      })
    }
    },
  },
};
