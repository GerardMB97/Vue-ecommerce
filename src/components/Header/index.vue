<template>
  <header>
      <div class="header__top">
        <p>Free Shipments</p>
      </div>

      <div class="header__middle">
        <ul>
          <li v-for="item in menuOptions.slice(0,3)" v-bind:key="item">{{item}}</li>
        </ul>
        <img class="mobile-logo" src="../../assets/img/store-logo.png" alt="">
        <div class="mobile-cart">
          <FontAwesomeIcon icon="shopping-cart"/>
          <span class="cart-badge">0</span>
        </div>
      </div>

      <div class="header__bottom">
        <ul class="desktop-menu">
          <li v-for="item in menuOptions.slice(3)" v-bind:key="item">{{item}}</li>
        </ul>
        <div class="mobile-menu">
          <button v-on:click="toggleMobileMenu">
            <FontAwesomeIcon class="mobile-menu__burger" icon="bars"/>
          </button>
          <div v-bind:class="mobileMenuIsActive ? 'mobile-menu__dropdown' : 'hide'">
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
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faShoppingCart);
@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class Header extends Vue {
  menuOptions = [
    'Categories',
    'Products',
    'Home',
    'Electronics',
    'Jewelery',
    'Men Clothing',
    'Women Clothing',
  ];

  mobileMenuIsActive = false;

  toggleMobileMenu():void {
    this.mobileMenuIsActive = !this.mobileMenuIsActive;
  }
}
</script>

<style lang="scss" scoped>
@import './header.scss';

</style>
