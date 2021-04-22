<template>
  <div>
    <Header/>
    <HomeCaroussel/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import Component from 'vue-class-component';
import VueCarousel from 'vue-carousel';
import Header from './components/Header/index.vue';
import HomeCaroussel from './components/HomeCarousel/index.vue';

Vue.use(VueCarousel);

@Component({
  components: {
    Header,
    HomeCaroussel,
  },
  computed: {
    ...mapGetters({
      products: 'productsStore/products',
    }),
  },
  methods: {
    ...mapActions({
      GET_PRODUCTS: 'productsStore/GET_PRODUCTS',
    }),
  },
})
export default class App extends Vue {
  GET_PRODUCTS

  products

  mounted(): void{
    this.GET_PRODUCTS();
    console.log(this.$store);
    console.log(this.products);
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
