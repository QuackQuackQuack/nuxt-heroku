<template>
  <v-card>
    <div class="card-thumb">
      <v-card-media :src="list.image" height="250" class="main-image"></v-card-media>
      <v-card-media :src="list.imageHover" height="250" class="hover-image"></v-card-media>
    </div>
    <v-card-title primary-title>
      <div class="v-card-title">
        <h3 class="headline mb-0">{{list.title}}</h3>
        <div class="grey--text">{{list.color}}</div>
        <div class="grey--text">{{ displayCommas(list.price) }} <span class="unit">{{list.unit}}</span></div>
        <v-select :items="list.size" v-model="size" label="Select" single-line></v-select>
      </div>
    </v-card-title>
    <div class="v-card-list-button-area">
      <v-btn flat small color="primary" @click="addCart">Cart</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      size:  null,
    }
  },
  props: ['list'],
  methods: {
    addCart() {
      const data = Object.assign({}, this._props.list);
      delete data['size'];
      const selectData = Object.assign({}, data, { size: this.size });
      this.$store.dispatch('addCart', selectData);
    }
  }
}
</script>