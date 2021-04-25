<template>
  <div>
    <article v-if="product" className="flex container__product">
      <div className="product__image">
        <img :src="product.image" alt="Product detail" />
      </div>
      <div className="flex product__text">
        <h5>{{product.category}}</h5>
        <h3>{{product.title}}</h3>
        <p className="price">
          {{product.price}}
          {' '}
          €
        </p>
        <p>{{product.description}}</p>
        <p className="quantity__title">QUANTITAT</p>
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

  get product():Product {
    console.log(this.id);
    return this.products.find((product) => product.id === +this.id);
  }
}
</script>
