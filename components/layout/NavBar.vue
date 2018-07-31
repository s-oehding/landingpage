<template>
  <nav class="navbar is-primary">
    <div class="container">
      <div class="navbar-brand">
        <AppLogo/>
        <span class="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-start">
          <span class="navbar-item">
              <nuxt-link to="/">Features</nuxt-link>
          </span>
          <span class="navbar-item">
              <nuxt-link to="/">Customers</nuxt-link>
          </span>
          <span class="navbar-item">
              <nuxt-link to="/">Pricing</nuxt-link>
          </span>
          <span class="navbar-item">
              <nuxt-link to="/">Pricing</nuxt-link>
          </span>


          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>
            <div class="navbar-dropdown has-background-primary has-text-white">
              <span class="navbar-item">
                <nuxt-link to="/">More features</nuxt-link>
              </span>
              <span class="navbar-item">
                <nuxt-link to="/">More features</nuxt-link>
              </span>
              <span class="navbar-item">
                <nuxt-link to="/">More features</nuxt-link>
               </span>
              <span class="navbar-item">
                <nuxt-link to="/">More features</nuxt-link>
              </span>
              <span class="navbar-item">
                <nuxt-link to="/">More features</nuxt-link>
              </span>
              <span class="navbar-item">
                <nuxt-link to="/">More features</nuxt-link>
              </span>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <span class="navbar-item">
            <nuxt-link to="/">Help & Support</nuxt-link>
          </span>
          <span class="navbar-item">
            <nuxt-link to="/">Login</nuxt-link>
          </span>
          <span class="navbar-item">
              <a class="button is-small is-success" href="#">
                <span title="Signup"><strong>Sign Up</strong></span>
              </a>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

</script>

<style lang="scss">
 .navbar {
   border-bottom: 1px solid rgba($white, .25);
 }
</style>
