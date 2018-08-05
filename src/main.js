import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)

// custom directives

Vue.directive('theme', {
  bind (el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1200px'
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '560px'
    }
    if (binding.arg === 'column') {
      el.style.background = '#ddd'
      el.style.padding = '20px'
    }
  }
})

// filters

Vue.filter('snippet', value => {
  return value.slice(0, 100) + '...'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
