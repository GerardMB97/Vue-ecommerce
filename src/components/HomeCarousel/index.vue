<template>
   <div class="container">
     <carousel
     class="carousel"
     :scrollPerPage="true"
     :perPageCustom=[[375,1],[1024,1]]
     >
     <slide class="slide" v-for="details in info" v-bind:key="details.title">
       <h2>{{details.title}}</h2>
       <img :src="details.img" alt='clothes'>
     </slide>
     </carousel>
    </div>
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
  info = [
    {
      title: 'Stay trendy',
      img: 'https://trello-attachments.s3.amazonaws.com/5ffc5f162c16556900cb7618/602116689e23cf79375e07cf/f804e2844d11df9a5b9f8e77f2d4c1e6/0f9deaa6163842dcaadcc37625edd3ca.jpg',
    },
    {
      title: 'Check our crazy prices',
      img: 'https://trello-attachments.s3.amazonaws.com/602116689e23cf79375e07cf/1035x433/89d140ef28a248370d06dc56d2e58e27/image-slider-home.jpg',
    },
  ]
}
</script>
<style lang="scss" scoped>
@import './homeCaroussel.scss';
</style>
