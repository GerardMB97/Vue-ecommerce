import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Cart from '../views/Cart.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', component: Home },
  { path: '/products/:category', component: Products },
  { path: '/product/:id', component: ProductDetail },
  { path: './cart', component: Cart },
];

const router = new VueRouter({
  routes,
});

export default router;
