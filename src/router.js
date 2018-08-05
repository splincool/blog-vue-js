import Vue from 'vue'
import Router from 'vue-router'
import showBlogs from './components/showBlogs.vue'
import addBlog from './components/addBlog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: showBlogs
    },
    {
      path: '/add',
      component: addBlog
    }
  ]
})
