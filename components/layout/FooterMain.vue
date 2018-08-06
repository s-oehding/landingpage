<template>
  <footer class="footer">
    <div class="container main">
      <div class="columns">
        <div class="column is-3">
          <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                <span class="icon is-small">
                  <i class="fas fa-globe" aria-hidden="true"></i>
                </span>
                <span>English</span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
              <div class="dropdown-content">
                <div class="dropdown-item">
                  <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-3">
          <h2><strong>Product Information</strong></h2>
          <ul>
            <li class="nav-item"><a class="nav-link footer-links__link" href="/">Home</a></li>
            <li class="nav-item"><a class="nav-link footer-links__link" href="/features">Features</a></li>
            <li class="nav-item"><a class="nav-link footer-links__link" href="/customers">Customers</a></li>
            <li class="nav-item"><a class="nav-link footer-links__link" href="/pricing">Pricing</a></li>
            <li class="nav-item"><a class="nav-link footer-links__link" href="/demo">Demo</a></li>
            <li class="nav-item"><a class="nav-link footer-links__link" href="https://phraseapp.com/docs/api/v2">API</a></li>
          </ul>
        </div>
        <div class="column is-3">
          <h2><strong>Company</strong></h2>
          <ul>
            <li class="nav-item"><a class="nav-link footer-links__link" href="/about">About us</a></li>
            <li class="nav-item"><a class="nav-link footer-links__link" href="https://phraseapp.com/blog" target="_blank">Blog</a></li>
            <li class="nav-item"> <a class="nav-link footer-links__link" href="/jobs"> Careers <span class="badge badge-primary footer-links__badge"> We're hiring!</span> </a></li>
            <li class="nav-item"><a class="nav-link footer-links__link" href="/press">Press</a></li>
          </ul>
        </div>
        <div class="column is-3">
          <h2><strong>Support</strong></h2>
          <ul>
            <li class="nav-item"><a class="nav-link footer-links__link" href="/contact">Contact</a></li>
            <li class="nav-item"><a class="nav-link footer-links__link" href="/docs">Documentation</a></li>
            <li class="nav-item"><a class="nav-link footer-links__link" href="http://status.phraseapp.com" rel="nofollow" target="_blank">Service Status</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <div class="level-item">
              <figure class="image is-32x32">
                <img src="images/parrot-logo.svg">
              </figure>
            </div>
          </div>

          <!-- Right side -->
          <div class="level-right">
            <p class="level-item">
              <nuxt-link to="/">Terms</nuxt-link>
            </p>
            <p class="level-item">
              <nuxt-link to="/">Privacy</nuxt-link>
            </p>
            <p class="level-item">
              <nuxt-link to="/">Imprint</nuxt-link>
            </p>
          </div>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>

</script>

<style lang="scss">
 .footer {
   padding: 3rem 1.5rem 0rem;

   .main {
     margin-bottom: 2rem;
   }

   strong, a  {
     color: #b0b0b0
   }

   a {
     &:hover {
       color: $primary;
     }
   }

   .footer-bottom {
     border-top: 1px solid $grey-lighter;
     padding: 1.25rem 0;
   }
 }
</style>
