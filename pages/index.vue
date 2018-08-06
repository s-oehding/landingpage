<template>
  <div>
    <section class="container">
      <div class="columns">
      </div>
      <div class="columns is-centered" style="padding: 2rem">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <b-icon icon="cloud-download"></b-icon>
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Download and Install</p>
                </div>
              </div>
              <div class="content">
                <p>You can find lorum ipsum GitHub.</p>
                <a class="button is-primary is-large">Download for MacOS</a><br>
                <a href="#" class="">Download for Windows or Linux</a>
                <br>
                <br>
                <p>Install via homebrew on MacOS:</p>
                <code>brew tap phrase/brewed</code><br>
                <code>brew install phraseapp</code><br>
                <br>
                <a class="button">
                  <span>Learn more</span>
                  <b-icon icon="play"></b-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <b-icon icon="settings"></b-icon>
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Initialize</p>
                </div>
              </div>
              <div class="content">
                <p>Use the <code>phraseapp init</code> command to initialize and configure your project.</p>
                <br>
                <a class="button">
                  <span>Learn more</span>
                  <b-icon icon="play"></b-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <b-icon icon="cloud-upload"></b-icon>
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Upload</p>
                </div>
              </div>
              <div class="content">
                <p>Use the phraseapp push command
                  to upload your existing locale files
                  to PhraseApp. Done.</p>
                <br>
                <a class="button">
                  <span>Learn more</span>
                  <b-icon icon="play"></b-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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

