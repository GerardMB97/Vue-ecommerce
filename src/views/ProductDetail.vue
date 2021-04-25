<template>
  <div>
    <Header/>
    <product-detail-component :id="$route.params.id"/>
    <Footer/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Header from '../components/Header/index.vue';
import ProductDetailComponent from '../components/ProductDetailComponent/index.vue';
import Footer from '../components/Footer/index.vue';

@Component({
  components: {
    Header,
    ProductDetailComponent,
    Footer,
  },
})
export default class Products extends Vue {

}
</script>
