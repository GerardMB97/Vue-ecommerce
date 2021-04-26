<template>
  <div>
    <Header/>
    <products-component :category="category"/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Route } from 'vue-router';
import Component from 'vue-class-component';
import Header from '../components/Header/index.vue';
import ProductsComponent from '../components/ProductsComponent/index.vue';
import Footer from '../components/Footer/index.vue';

interface WithRoute{
  $route: Route
}
@Component({
  components: {
    Header,
    ProductsComponent,
    Footer,
  },
  computed: {
    category() {
      return this.$route.params.category
        ? this.$route.params.category
        : 'all';
    },
  },
})
export default class Products extends Vue implements WithRoute {
  category!: string | undefined
}
</script>
