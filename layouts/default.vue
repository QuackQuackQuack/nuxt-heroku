<template @click="test">
  <v-app id="wrap">
    <app-header/>
    <app-right-panel />
    <app-left-panel />
    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
import { store } from 'vuex'
import AppHeader from '@/components/Header'
import AppLeftPanel from '@/components/LeftPanel'
import AppRightPanel from '@/components/RightPanel'
export default {
  components: { AppHeader, AppLeftPanel, AppRightPanel },
  head () {
    return {
      title: 'Test',
    }
  }
}
</script>
