<template>
  <section v-if="products.length > 0" class="homeProducts">
    <div
    class="product-card"
    v-for="product in randomProducts"
    v-bind:key="product.id">
    <div class="img-container">
      <img :src="product.image" alt="">
    </div>
      <div>
        <h3>{{product.title}}</h3>
        <p>{{product.price}} €</p>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';
import { Product } from '../../types/product';

@Component({
  computed: {
    ...mapGetters({
      products: 'productsStore/products',
    }),
  },
})
export default class HomeProducts extends Vue {
  products!:Product[]

  get randomProducts():Product[] {
    const randomIndex = [];
    const length = this.products.length === 0 ? 4 : this.products.length;
    while (randomIndex.length < 4) {
      const index = Math.floor(Math.random() * length);
      if (randomIndex.indexOf(index) === -1) randomIndex.push(index);
    }
    return randomIndex.map((index) => this.products[index]);
  }
}
</script>
<style lang="scss" scoped>
@import './homeProducts.scss';
</style>
