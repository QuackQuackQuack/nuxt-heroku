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
  data () {
    return {
      title: 'dasadsads'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'cart', name: '설명', content: '내가 커스텀한 설명' }
      ]
    }
  },
  components: { AppCard },
  async asyncData ( { store, params, error, req }) {
    await store.dispatch('getIntData', { url: '/api/cart', type: ''});
  }
}
</script>