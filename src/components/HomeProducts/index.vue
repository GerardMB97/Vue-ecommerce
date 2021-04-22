<template>
  <h1>Hello World</h1>
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

    while (randomIndex.length < 4) {
      const index = Math.floor(Math.random() * this.products.length) + 1;
      if (randomIndex.indexOf(index) === -1) randomIndex.push(index);
    }
    return randomIndex.map((index) => this.products[index]);
  }
}
</script>
