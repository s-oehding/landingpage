# phrase-app

> Demo Application for PhraseApp

## Application 

Why i decided to use nuxt.js:
- SPAs are great for creating snappy UIs, but when it comes to SEO, single page applications are not ideal because they have no initial content. That makes it difficult for Google and other crawlers (including social media crawlers like Facebook) to crawl your website and to display it properly in the search results. Nuxt uses Vue.js ServerSide rendering  as a default and delivers rendered html to the browser on page load. For Dynamic elements that cant be rendered on serverside we have a nice SPA fallback.
- Nuxt Js comes bundle with vue-meta to manage header and html attributes, which provided dynamically populated meta tags
- Automagically generated vue-router configuration (for both basic and dynamic routes)
- Cleaner way of creating & organising custom plugins and modules (Google Analytics, TweenMax Animations and Transitions)
- State management to share data within web application

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

