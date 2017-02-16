import Vue from 'vue/dist/vue';

let data = { total: 0 };

new Vue({
  el: '#app',
  data,
  methods: {
    add: function() {
      this.total++;
    },
    sub: function() {
      this.total--;
    }
  }
});
