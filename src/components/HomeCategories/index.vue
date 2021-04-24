<template>
  <section>
    <div
    class="category-card"
    v-for="category in categories"
    v-bind:key="category.name"
    >
      <img :src="category.img" :alt="category.name">
      <div class="name-container">
        <h2>{{category.name}}</h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import categories from '../../constants/categories';

@Component({

})
export default class HomeCategories extends Vue {
  categories = categories
}
</script>

<style lang="scss" scoped>
@import './homeCategories.scss';
</style>
