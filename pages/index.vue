<template>
  <section>
    <div>INdex</div>
  </section>
</template>

<script>

export default {
  async asyncData ( { store, params, error, req }) {
    await store.dispatch('getIntData', { url: '/api', type: ''});
  }
}
</script>