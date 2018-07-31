<template>
  <div>
    <PostList v-if="posts" :posts="posts.data"></PostList>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      posts: null
    }
  },
  async asyncData ({ params }) {
    let { posts } = await axios.get(`https://phraseapp.com/blog/wp-json/wp/v2/posts/?per_page=3&_embed`)
    return posts
  },
  async mounted(){
    if(!this.temp) {
      this.posts = await axios.get(`https://phraseapp.com/blog/wp-json/wp/v2/posts/?per_page=3&_embed`)
      console.log(this.posts)
    }
  }
}
</script>

<style lang="scss">
 .title {
   &.is-regular {
     font-weight: normal;
    }
 }
</style>

