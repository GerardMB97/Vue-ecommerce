<template>
  <div>
    <article v-if="product" class= "container__product">
      <div class="product__image">
        <img :src="product.image" alt="Product detail" />
      </div>
      <div class="flex product__text">
        <h5>{{product.category}}</h5>
        <h3>{{product.title}}</h3>
        <p class="price">{{product.price}} €</p>
        <p>{{product.description}}</p>
        <p class="quantity__title">QUANTITY</p>
        <input type="number" min="0" max="15" v-model="quantity">
        <button
        v-on:click="()=>{ADD_PRODUCT({product, quantity})}" :disabled="quantity === 0">
        ADD
        </button>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters, mapActions } from 'vuex';
import { Product } from '../../types/product';
import { ADD_PRODUCT, CartProduct } from '../../types/cart';

@Component({
  props: {
    id: String,
  },
  computed: {
    ...mapGetters({
      cartProducts: 'cartStore/products',
      products: 'productsStore/products',
    }),
  },
  methods: {
    ...mapActions({
      ADD_PRODUCT: 'cartStore/ADD_PRODUCT',
    }),
  },
})
export default class ProductDetailComponent extends Vue {
  products!: Product[]

  cartProducts!: CartProduct[]

  id!: string

  quantity = 0;

  ADD_PRODUCT!:ADD_PRODUCT

  get product():Product {
    return this.products.find((product) => product.id === +this.id);
  }
}
</script>
<style lang="scss" scoped>
@import './productDetailComponents.scss';
</style>
