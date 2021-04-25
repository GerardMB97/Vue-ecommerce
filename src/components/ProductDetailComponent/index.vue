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
        <input type="number" v-model="quantity">
        <button>ADD</button>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';
import { Product } from '../../types/product';

@Component({
  props: {
    id: String,
  },
  computed: {
    ...mapGetters({
      products: 'productsStore/products',
    }),
  },
})
export default class ProductDetailComponent extends Vue {
  products!: Product[]

  id!: string

  quantity = 0;

  get product():Product {
    console.log(this.id);
    return this.products.find((product) => product.id === +this.id);
  }
}
</script>
<style lang="scss" scoped>
@import './productDetailComponents.scss';
</style>
