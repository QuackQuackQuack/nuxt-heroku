import Vue from 'vue'

Vue.mixin({
  methods:{

    // print 1000 => 1,000
    displayCommas(num){
      return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    },
  }
})