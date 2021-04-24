<template>
   <div class="container">
     <carousel
     class="carousel"
     :scrollPerPage="true"
     :perPageCustom=[[375,1],[1024,1]]
     >
     <slide class="slide" v-for="details in info" v-bind:key="details.title">
       <h2>{{details.title}}</h2>
       <img :src="require('../../assets/img/'+ details.img)" alt='clothes'>
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
      img: 'clothes-1.jpeg',
    },
    {
      title: 'Check our crazy prices',
      img: 'clothes-2.jpeg',
    },
  ]
}
</script>
<style lang="scss" scoped>
@import './homeCaroussel.scss';
</style>
