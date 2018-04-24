<template>
  <span>{{cartquantity}}</span>
</template>


<script>
import { mapGetters } from 'vuex'
export default {

  computed: {
    ...mapGetters({
      cartquantity: 'cartQuantity',
    }),
  },
}
</script>