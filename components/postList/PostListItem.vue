<template>
  <article class="column">
    <div v-if="post" class="card">
      <div class="card-image">
        <figure class="image">
          <img :src="post._embedded['wp:featuredmedia']['0'].source_url" :alt="post._embedded['wp:featuredmedia']['0'].title.rendered">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4"> {{ post.title.rendered }}</p>
            <p class="subtitle is-6">@{{ post._embedded.author.name}}</p>
          </div>
        </div>

        <div class="content">
          <div v-html="post.content.rendered.substr(0, 150) + '...'"></div>
          <br>
          <a class="button">
            <span>Learn more</span>
            <b-icon icon="play"></b-icon>
          </a>
        </div>
      </div>
    </div>

    <b-loading v-else :is-full-page="false" :can-cancel="false"></b-loading>
  </article>

</template>

<script>

  export default {
    data() {
      return {
      }
    },
    props: {
      post: {
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
