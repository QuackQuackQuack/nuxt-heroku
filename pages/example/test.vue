<template>
  <section>
    <div>Test3123123123</div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      title: '안녕 세계2'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'test', name: '설명', content: '내가 커스텀한 설명' }
      ]
    }
  },
  async asyncData ( { store, params, error, req }) {
    await store.dispatch('getIntData', { url: '/api/cart', type: ''});
  }
}
</script>