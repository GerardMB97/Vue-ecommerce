<template>
  <footer>
    <FontAwesomeIcon :icon="['fab', 'instagram']" class="icon"/>
    <FontAwesomeIcon :icon="['fab', 'facebook']" class="icon"/>
    <FontAwesomeIcon :icon="['fab', 'pinterest']" class="icon"/>
    <span>VueStore</span>
    <FontAwesomeIcon :icon="['fab', 'github']" class="icon"/>
    <FontAwesomeIcon :icon="['fab', 'twitter']" class="icon"/>
    <FontAwesomeIcon :icon="['fab', 'youtube']" class="icon"/>
  </footer>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faGithub, faTwitter, faFacebook, faInstagram, faYoutube, faPinterest);
@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class Footer extends Vue {

}

</script>
<style lang="scss" scoped>
@import './footer.scss';
</style>
