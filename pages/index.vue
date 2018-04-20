<template>
  <ul class="users">
    <li v-for="(navigation, index) in data.navigation" :key="index" >
      {{navigation.content}}
    </li>
  </ul>
</template>

<script>
export default {
  async asyncData({ app }) {
    const data = await app.$axios.$get('/api')
    return { data }
  }
}
</script>

<style>
.red {
  color: red;
}
</style>