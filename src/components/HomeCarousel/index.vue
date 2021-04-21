<template>
  <carousel class="caroussel">
  <slide>
   <p>Hello World!</p>
  </slide>
</carousel>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Caroussel, Slide } from 'vue-carousel';

@Component({
  components: {
    Caroussel,
    Slide,
  },
})
export default class HomeCaroussel extends Vue {

}
</script>
<style lang="scss" scoped>
@import './homeCaroussel.scss';
</style>
