<template>
  <div id="app">
    <add-blog/>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
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
    'add-blog': addBlog
  }
}
</script>

<style>
body  {
  margin: 0;
}
</style>
