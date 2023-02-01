import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueScrollReveal from 'vue-scroll-reveal'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// OR specifying custom default options for all uses of the directive
Vue.use(vueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 2000,
  scale: 1,
  distance: '80px',
  mobile: false
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
