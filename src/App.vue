<template>
  <div>
    <Header/>
    <HomeCaroussel/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
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
})
export default class App extends Vue {

}

</script>
<style lang="scss">
body{
  margin: 0;
}
</style>
