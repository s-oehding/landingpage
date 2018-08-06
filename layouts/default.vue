<template>
  <div id="page-wrapper">
    <section class="hero is-primary is-large is-bold">
      <div class="hero-head">
        <NavBar></NavBar>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered" style=" max-width: 800px;">
          <h1 class="title">
            <span style="font-weight: lighter;">Great command line with </span><strong>PhraseApp CLI</strong>
          </h1>
          <h2 class="subtitle">
            The PhraseApp CLI tool lets you navigate your projects and translations quickly from the
            command line instead of fiddling around with long curl requests.
          </h2>
          <br>
          <no-ssr>
            <VueTerminal
              class=""
              :lines="lines"
              :add-styled-markup=true
            ></VueTerminal>
          </no-ssr>
        </div>
      </div>
    </section>

    <div>
      <nuxt/>
    </div>

    <FooterMain/>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        lines: [
          {type: 'input', content: '$ phraseapp pull'},
          {type: 'progress'},
          {type: 'printLine', content: '  Downloaded <span class="green">en</span> to <span class="green">config/locales/en.yml'},
          {type: 'input', content: '$ phraseapp push'},
          {type: 'printLine', content: 'Uploading <span class="green">config/locales/en.yml</span>'},
          {type: 'progress'},
          {type: 'printLine', content: '  Uploaded <span class="green">config/locales/en.yml</span> successfully'},
        ]
      }
    }
  }
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", sans-serif;
}

.hero {
  margin-bottom: 9rem;
  .hero-body {
    padding-bottom: 0; padding-top: 2rem; margin-bottom: -9rem;
  }
}

@media screen and (min-width: 769px) {
  .hero.is-large .hero-body {
    padding-bottom: 0rem;
    padding-top: 9rem;
  }
}

@media screen and (min-width: 1140px) {
  .hero {
    margin-bottom: 9rem;
    .hero-body {
      padding-bottom: 0; padding-top: 9rem; margin-bottom: -9rem;
    }
  }
}

</style>
