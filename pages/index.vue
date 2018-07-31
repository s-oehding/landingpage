<template>
  <div>
  <section class="container">
    <div class="columns">
      <div class="column">
        <h3 class="title is-3 is-regular">Usage</h3>
      </div>
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
  <section class="container">
    <div class="columns">
      <div class="column">
        <h3 class="title is-3 is-regular">From our Blog</h3>
      </div>
    </div>
    <div class="columns is-centered" style="padding: 2rem">
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img src="https://phraseapp.com/blog/wp-content/uploads/2018/07/13_Blog_Post_Meteor-768x519.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Localizing Meteor Applications Powered by React</p>
                <p class="subtitle is-6">@JohnDoe</p>
              </div>
            </div>

            <div class="content">
              Meteor is a popular full-stack JavaScript platform to develop powerful web and mobile applications. In this article, you will learn how to localize Meteor applications powered by React templates.
              <a>@PhraseApp</a>.
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
          <div class="card-image">
            <figure class="image">
              <img src="https://phraseapp.com/blog/wp-content/uploads/2018/07/13_Blog_Post_Meteor-768x519.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Localizing Meteor Applications Powered by React</p>
                <p class="subtitle is-6">@JohnDoe</p>
              </div>
            </div>

            <div class="content">
              Meteor is a popular full-stack JavaScript platform to develop powerful web and mobile applications. In this article, you will learn how to localize Meteor applications powered by React templates.
              <a>@PhraseApp</a>.
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
          <div class="card-image">
            <figure class="image">
              <img src="https://phraseapp.com/blog/wp-content/uploads/2018/07/13_Blog_Post_Meteor-768x519.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Localizing Meteor Applications Powered by React</p>
                <p class="subtitle is-6">@JohnDoe</p>
              </div>
            </div>

            <div class="content">
              Meteor is a popular full-stack JavaScript platform to develop powerful web and mobile applications. In this article, you will learn how to localize Meteor applications powered by React templates.
              <a>@PhraseApp</a>.
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
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
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

