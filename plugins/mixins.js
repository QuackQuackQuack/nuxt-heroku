import Vue from 'vue'

Vue.mixin({
  methods:{

    // print 1000 => 1,000
    displayCommas(num){
      return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    },
    currentPath(path) {
      if (this.$store.state.currentPath === path) {
        return true
      } else {
        return false;
      }
    }
  }
})