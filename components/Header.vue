<template>
  <v-toolbar
    color="blue darken-3"
    dark
    fixed
    app
    clipped-left
    clipped-right
  >
    <v-toolbar-side-icon @click.stop="controlLeftPanel"></v-toolbar-side-icon>
    <v-toolbar-title>Nuxt Example</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click.stop="controlRightPanel" class="cart-button">
      <Cartquantity class="cart-quantity">10</Cartquantity>
      <v-icon>work</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import Cartquantity from '@/components/Cartquantity'

export default {
  components: { Cartquantity },
  methods: {
    controlLeftPanel() {
      this.$store.dispatch('toggleLeftPanel')
    },
    controlRightPanel() {
      if (this.getCartquantity) {
        this.$store.dispatch('toggleRightPanel')
      }
    },
  },
  computed: {
    getCartquantity() {
      return this.$store.getters.cartQuantity;
    }
  },
  watch: {
    getCartquantity(val) {
      // if cart item 0, close
      if (val === 0) {
        this.$store.commit('UPDATE_RIGHT_PANEL', false)
      }
      if (val === 1) {
        this.$store.commit('UPDATE_RIGHT_PANEL', true)
      }
    }
  }
}
</script>