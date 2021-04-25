<template>
  <div>
    <Header/>
    <products-component :category="$route.params.category"></products-component>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Header from '../components/Header/index.vue';
import ProductsComponent from '../components/ProductsComponent/index.vue';
import Footer from '../components/Footer/index.vue';

@Component({
  components: {
    Header,
    ProductsComponent,
    Footer,
  },
})
export default class Products extends Vue {

}
</script>
