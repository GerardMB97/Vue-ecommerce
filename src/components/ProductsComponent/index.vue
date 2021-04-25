<template>
<div class="products">
  <div
    class="product-card"
    v-for="product in categoryProducts"
    v-bind:key="product.id">
    <div class="img-container">
      <img :src="product.image" :alt="product.title">
    </div>
      <div>
        <h3>{{product.title}}</h3>
        <p>{{product.price}} €</p>
      </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';
import { Product } from '../../types/product';

@Component({
  props: {
    category: String,
  },
  computed: {
    ...mapGetters({
      products: 'productsStore/products',
    }),
  },
})
export default class ProductsComponent extends Vue {
  products!: Product[]

  category!: string

  get categoryProducts(): Product[] {
    console.log(this.category);
    console.log(this.products);
    console.log(this.products.filter((product) => product.category === this.category));
    return this.products.filter((product) => product.category === this.category);
  }
}
</script>

<style lang="scss" scoped>
@import './productsComponent.scss';
</style>
