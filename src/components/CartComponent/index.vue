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
              <h4 class="cart__product-price">{{cartItem.price}} €</h4>
            </td>
            <td>
              <Button id="delete" variant="contained" color="primary">
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
import { mapGetters } from 'vuex';
import { CartProduct } from '../../types/cart';

@Component({
  computed: {
    ...mapGetters({
      cartProducts: 'cartStore/products',
    }),
  },
})
export default class CartComponent extends Vue {
  cartProducts!:CartProduct[]
}
</script>
<style lang="scss" scoped>
  @import './cartComponent.scss';
</style>
