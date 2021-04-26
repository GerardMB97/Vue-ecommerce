<template>
   <section>
      <table>
        <tr>
          <th class="cart__product-title">Producte</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Delete</th>

        </tr>
          <tr v-for="cartItem in cartProducts" v-bind:key="cartItem.name">
            <td>
              <h4 class="cart__product-name">{{cartItem.title}}</h4>
            </td>
            <td>
              <h4 class="cart__product-price">{{cartItem.quantity}}</h4>
            </td>
            <td>
              <h4 class="cart__product-price">{{cartItem.totalPrice}} €</h4>
            </td>
            <td>
              <Button v-on:click="()=>{deleteProduct(cartItem)}">
                Delete
              </Button>
            </td>
          </tr>
      </table>

      <p class="cart__product-price total">
        Total:
        {{totalCart}}
      </p>
    </section>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters, mapMutations } from 'vuex';
import { CartProduct, deleteProduct } from '../../types/cart';

@Component({
  methods: {
    ...mapMutations({
      deleteProduct: 'cartStore/deleteProduct',
    }),
  },
  computed: {
    ...mapGetters({
      cartProducts: 'cartStore/products',
    }),
  },
})
export default class CartComponent extends Vue {
  cartProducts!:CartProduct[]

  deleteProduct!:deleteProduct

  get totalCart():number {
    return this.cartProducts.reduce((acc, currentVal) => acc + +currentVal.totalPrice, 0);
  }
}
</script>
<style lang="scss" scoped>
  @import './cartComponent.scss';
</style>
