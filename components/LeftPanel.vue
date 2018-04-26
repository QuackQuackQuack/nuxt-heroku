<template>
  <v-navigation-drawer
    fixed
    :clipped="$vuetify.breakpoint.mdAndUp"
    app v-model="leftPanel">

      <v-list dense>
        <template v-for="(item, index) in $store.state.initialData.navigation">
          <v-list-group v-if="item.children" :key="item.title" :prepend-icon="item.model ? item.icon : item['icon-alt']">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile :href="child.path" v-for="(child, i) in item.children" :key="i" @click="test">
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ child.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="test" :key="item.title" :href="item.path">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
      <v-list>
   </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    leftPanel: {
      get () {
        return this.$store.state.panel.left
      },
      set (val) {
        this.$store.commit('UPDATE_LEFT_PANEL', val)
      }
    }
  },
  methods: {
    test() {
      this.$store.commit('UPDATE_RIGHT_PANEL', false)
      this.$store.commit('UPDATE_LEFT_PANEL', false)
    }
  }
}
</script>