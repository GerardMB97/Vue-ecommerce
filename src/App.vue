<template>
  <router-view/>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import Component from 'vue-class-component';
import VueCarousel from 'vue-carousel';
import Home from './views/Home.vue';
import { GET_PRODUCTS, Product } from './types/product';

Vue.use(VueCarousel);

@Component({
  components: {
    Home,
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
