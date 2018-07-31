<template>
  <div id="page-wrapper">
    <section class="hero is-primary is-large is-bold" style="margin-bottom: 9rem;">
      <div class="hero-head">
        <NavBar></NavBar>
      </div>
      <div class="hero-body" style="padding-bottom: 0; padding-top: 9rem; margin-bottom: -9rem;">
        <div class="container has-text-centered" style=" max-width: 800px;">
          <h1 class="title">
            <span style="font-weight: lighter;">Great command line with </span><strong>PhraseApp CLI</strong>
          </h1>
          <h2 class="subtitle">
            The PhraseApp CLI tool lets you navigate your projects and translations quickly from the
            command line instead of fiddling around with long curl requests.
          </h2>
          <br>
          <no-ssr placeholder="loading...">
            <TerminalWindow></TerminalWindow>
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

<style>
html {
  font-family: "Source Sans Pro", sans-serif;
}
</style>

<script>
  export default {

  }
</script>

