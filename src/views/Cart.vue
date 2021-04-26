<template>
<div>
  <Header/>
  <cart-component/>
  <Footer/>
</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Header from '../components/Header/index.vue';
import Footer from '../components/Footer/index.vue';
import CartComponent from '../components/CartComponent/index.vue';

@Component({
  components: {
    Header,
    CartComponent,
    Footer,
  },
})
export default class Cart extends Vue {

}
</script>
