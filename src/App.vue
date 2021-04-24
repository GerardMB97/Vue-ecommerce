<template>
  <div>
    <Header/>
    <home-caroussel/>
    <home-products/>
    <home-categories/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import Component from 'vue-class-component';
import VueCarousel from 'vue-carousel';
import Header from './components/Header/index.vue';
import HomeCaroussel from './components/HomeCarousel/index.vue';
import HomeProducts from './components/HomeProducts/index.vue';
import HomeCategories from './components/HomeCategories/index.vue';
import { GET_PRODUCTS, Product } from './types/product';

Vue.use(VueCarousel);

@Component({
  components: {
    Header,
    HomeCaroussel,
    HomeProducts,
    HomeCategories,
  },
  methods: {
    ...mapActions({
      GET_PRODUCTS: 'productsStore/GET_PRODUCTS',
    }),
  },
})
export default class App extends Vue {
  GET_PRODUCTS!:GET_PRODUCTS

  products!:Product[]

  mounted(): void{
    this.GET_PRODUCTS();
  }
}

</script>
<style lang="scss">
@import './assets/styles/fonts.scss';
body{
  margin: 0;
  font-family: $default;
}
</style>
