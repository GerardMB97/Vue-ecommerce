<template>
  <div>
    <Header/>
    <home-caroussel/>
    <home-products/>
    <home-categories/>
    <Footer/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Header from '../components/Header/index.vue';
import HomeCaroussel from '../components/HomeCarousel/index.vue';
import HomeProducts from '../components/HomeProducts/index.vue';
import HomeCategories from '../components/HomeCategories/index.vue';
import Footer from '../components/Footer/index.vue';

@Component({
  components: {
    Header,
    HomeCaroussel,
    HomeProducts,
    HomeCategories,
    Footer,
  },
})
export default class Home extends Vue {

}
</script>
