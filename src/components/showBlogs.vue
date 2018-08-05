<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs"/>
    <div v-for="blog in filteredBlogs"
      :key="blog.id"
      class="single-blog">
      <router-link :to="'blog/' + blog.id">
        <h2>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'
export default {
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  created () {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(data => {
      this.blogs = data.body.slice(0, 10)
    })
  },
  filters: {
    'toUppercase' (value) {
      return value.toUpperCase()
    }
  },
  directives: {
    'rainbow': {
      bind (el, binding, vnode) {
        el.style.color = '#' + Math.random().toString().slice(2, 8)
      }
    }
  },
  mixins: [searchMixin]
}
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
#show-blogs h2{
  cursor: pointer;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
