<template>
  <v-navigation-drawer v-model="rightPanel"
    fixed right :clipped="$vuetify.breakpoint.mdAndUp" app disable-resize-watcher width="300">
    <v-list dense>
      <Cart/>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import Cart from '.././components/Cart.vue'
import { mapGetters } from 'vuex'


export default {
  components: {
    Cart
  },
  computed: {
    rightPanel: {
      get () {
        return this.$store.state.panel.right
      },
      set (val) {
        this.$store.commit('UPDATE_RIGHT_PANEL', val)
      }
    }
  },
}
</script>




  <!-- computed: {
    getCartquantity() {
      return this.$store.getters.cartQuantity;
    }
  },
  watch: {
    getCartquantity(val) {
      // if cart item 0, close
      if (val === 0) {
        this.showCart = false;
      }

      if (val === 1) {
        this.showCart = true;
      }
    }
  }
} -->