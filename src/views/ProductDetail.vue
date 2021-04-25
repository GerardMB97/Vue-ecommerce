<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Header from '../components/Header/index.vue';
import Footer from '../components/Footer/index.vue';

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class Products extends Vue {

}
</script>
