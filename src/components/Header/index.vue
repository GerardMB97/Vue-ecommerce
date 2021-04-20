<template>
  <header>
      <div class="header__top">

      </div>
      <div class="header__middle">

      </div>
      <div class="header__bottom">
        <FontAwesomeIcon class="burger" icon="bars"/>
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
}
</script>

<style lang="scss" scoped>
@import './header.scss';

</style>
