<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label for="blogTitle">Blog Title:</label>
      <input
        type="text"
        v-model.lazy="blog.title"
        id="blogTitle"
        required />
      <label for="blogContent">Blog Content:</label>
      <textarea
        v-model.lazy="blog.content"
        id="blogContent">
      </textarea>
      <div id="checkboxes">
        <label for="ninjas">Ninjas</label>
        <input type="checkbox"
          id="ninjas" value="ninjas"
          v-model="blog.categories"/>
        <label for="wizards">Wizards</label>
        <input type="checkbox"
          id="wizards" value="wizards"
          v-model="blog.categories"/>
        <label for="mario">Mario</label>
        <input type="checkbox"
          id="mario" value="mario"
          v-model="blog.categories"/>
        <label for="cheese">Cheese</label>
        <input type="checkbox"
          id="cheese" value="cheese"
          v-model="blog.categories"/>
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors"
          :key="author">{{author}}</option>
      </select>
      <button @click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post!</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{blog.title}}</p>
      <p>Blog content: </p>
      <p>{{blog.content}}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="(category, idx) in blog.categories"
          :key="idx">{{category}}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['Sam', 'Dean', 'Bobby'],
      submitted: false
    }
  },
  methods: {
    post () {
      this.$http.post('http://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then(data => {
        console.log(data)
        this.submitted = true
      })
    }
  }
}
</script>

<style scoped>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  display: inline-block;
}
</style>
