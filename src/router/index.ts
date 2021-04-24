import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', component: Home },
  { path: '/:category', component: Products },
];

const router = new VueRouter({
  routes,
});

export default router;
