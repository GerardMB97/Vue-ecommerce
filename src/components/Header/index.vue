<template>
  <header>
      <div class="header__top">

      </div>
      <div class="header__middle">

      </div>
      <div class="header__bottom">
        <div class="mobile-menu">
          <FontAwesomeIcon class="mobile-menu__burger" icon="bars"/>
          <div class="mobile-menu__dropdown">
            <ul>
              <li v-for="item in menuOptions" v-bind:key="item">{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);
@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class Header extends Vue {
  menuOptions = [
    'Categories',
    'Products',
    'Contact Us',
    'Electronics',
    'Jewelery',
    'Men Clothing',
    'Women Clothing',
  ]
}
</script>

<style lang="scss" scoped>
@import './header.scss';

</style>
