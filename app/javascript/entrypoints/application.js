console.log('Vite ⚡️ Rails')
import Vue from 'vue';
import App from '../App.vue';
Vue.prototype.$version = Vue.version;
new Vue({
  render: (h) => h(App),
}).$mount('#app');