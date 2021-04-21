<template>
<Header/>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Header from './components/Header/index.vue';

@Component({
  components: {
    Header,
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
