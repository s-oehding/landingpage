<template>
  <div class="terminal-window">
    <header>
      <div class="window-button is-round window-button--green"></div>
      <div class="window-button is-round window-button--yellow"></div>
      <div class="window-button is-round window-button--red"></div>
    </header>
    <section class="terminal">
      <no-ssr>
        <vue-typed-js
          :strings="strings[index]"
          :contentType="'html'"
          @onComplete="updateIndex()">
          <code class="typing"></code>
        </vue-typed-js>
      </no-ssr>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        strings: [
          [
            'npm install ^1000 \n\
            installing components... ^1000 \n \
            Fetching from source...'
          ],
          [
            '$ phraseapp push ^1000',
            '  Uploading config/locales/en.yml ^1000',
            '  <span class="green">config/locales/en.yml</span> successfully'
          ]
        ],
        index: 0,
        history: '$'
      }
    },

    methods: {
      updateIndex () {
        this.index ++
        if (this.index > this.strings.length) {
          this.index = 0
        }
      }
    }
  }
</script>

<style lang="scss">
  .terminal-window {
    text-align: left;
    width: 680px;
    height: 400px;
    border-radius: 10px;
    margin: auto;
    position: relative;

    header {
      background: #EFEFEF;
      height: 32px;
      border-radius: 8px 8px 0 0;
      padding-left: 10px;

      .window-button {
        width: 12px;
        height: 12px;
        margin: 10px 4px 0 0;
        display: inline-block;

        &--green {
          background: #3BB662;
        }
        &--yellow {
          background: #E5C30F;
        }
        &--red {
          background: #E75448;
        }
      }
    }

    section {
      &.terminal {
        background: #242424;
        font-size: 11pt;
        padding: 10px;
        box-sizing: border-box;
        position: absolute;
        width: 100%;
        top: 30px;
        bottom: 0;
        overflow: auto;
        white-space: pre;
        .green {
          color: greenyellow;
        }
      }

      .typed-cursor {
        opacity: 1;
        -webkit-animation: blink 0.7s infinite;
        -moz-animation: blink 0.7s infinite;
        animation: blink 0.7s infinite;
      }
    }
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
