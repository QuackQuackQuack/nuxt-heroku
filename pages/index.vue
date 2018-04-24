<template>
  <section>
    <v-container fluid grid-list-lg>
      <v-subheader>{{ $store.state.initialData.product.title }}</v-subheader>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="(list, index) in $store.state.initialData.product.list" :key="index">
          <app-card v-bind:list="list"/>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import AppCard from '@/components/Card'

export default {
  components: { AppCard },
  async asyncData ( { store, params, error, req }) {
    await store.dispatch('getIntData', { url: '/api/cart', type: ''});
  }
}
</script>

// export default {

// }

<style>
.red {
  color: red;
}
</style>
