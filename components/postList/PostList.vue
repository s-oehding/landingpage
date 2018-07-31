<template>
  <section class="container">
    <div class="columns">
      <div class="column">
        <h3 class="title is-3 is-regular">From our Blog</h3>
      </div>
    </div>
    <div class="columns is-centered" style="padding: 2rem">
      <PostListItem :post="post" :key="post.id" v-for="post in posts"></PostListItem>
    </div>
  </section>
</template>

<script>

  export default {
    data() {
      return {
      }
    },
    props: {
      posts: {
        required: true
      }
    },
    methods: {
    },
    mounted () {
    },
    created() {
    }
  }
</script>

<style lang="scss">

</style>
