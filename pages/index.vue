<template>
  <section>
    <div>INdex</div>
  </section>
</template>

<script>

export default {
  components: { AppCard },
  async asyncData ( { store, params, error, req }) {
    await store.dispatch('getIntData', { url: '/api', type: ''});
  }
}
</script>

