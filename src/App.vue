<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'
import header from './components/header.vue'

export default {
  data () {
    return {
      //
    }
  },
  methods: {
    //
  },
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
    'app-header': header
  }
}
</script>

<style>
body  {
  margin: 0;
  font-family: Helvetica, Arial, sans-serif
}
</style>
