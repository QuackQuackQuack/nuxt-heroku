<template>
  <div class="cart">
    <div class="cart-remove-wrap">
      <button v-show="products.length" @click="clearCart">Delte All</button>
    </div>
    <ul class="cart-list">
      <li v-for="(product,index) in products" v-bind:key="index">
        <div class="cart-item" :data-id="product.id">
          <div class="thumb"><img :src="product.image"></div>
          <div class="detail">
            <div class="prod-title">{{ product.title }}</div>
            <div class="color">{{ product.color }}</div>
            <div class="size">Size: {{ product.size}}</div>
            <div class="select">
              <span>QTY</span>
              <v-btn flat icon color="gray" @click="decrement(product)">
                <v-icon>remove_circle_outline</v-icon>
              </v-btn>
              <span class="quantity">{{ product.quantity}}</span>
              <v-btn flat icon color="gray" @click="increment(product)">
                <v-icon>add_circle_outline</v-icon>
              </v-btn>
            </div>
            <div class="price-area">
              <span class="price">{{ displayCommas(product.price) }} {{product.unit}}</span>
              <button class="remove" @click="removeCart(product)">Remove</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div v-show="products.length" class="total" data-container="cartTotal">
      <dl>
        <dt>Total:</dt>
        <dd><Cartquantity/></dd>
        <dt>TotalPirce:</dt>
        <dd>{{ displayCommas(totalprice) }} WON</dd>
      </dl>
      <div class="check-wrap">
        <button>Check Out</button>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import Cartquantity from '.././components/Cartquantity'

export default {
  components: {
    Cartquantity,
  },
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      totalprice: 'totalPirce',
    }),
  },
  methods: {
    decrement (product) {
      this.$store.dispatch('decrement', product)
    },
    increment (product) {
      this.$store.dispatch('increment', product)
    },
    removeCart(removeItem) {
      this.$store.dispatch('removeCart', removeItem);
    },
    clearCart () {
      this.$store.dispatch('clearCart')
    }
  }
}
</script>