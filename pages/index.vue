<template>
  <section>
    <div>{{renderSource}}</div>
  </section>
</template>

<script>

export default {
  name: 'Index',
  head: {
    title: 'Index'
  },
  async asyncData ( { store, params, error, req }) {
    await store.dispatch('getIntData', { url: '/api/', type: ''});
    return {
      renderSource: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  }
}
</script>