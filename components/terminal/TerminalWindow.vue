<template>
  <div class="terminal-window">
    <header>
      <div class="window-button is-round window-button--green"></div>
      <div class="window-button is-round window-button--yellow"></div>
      <div class="window-button is-round window-button--red"></div>
    </header>
    <section id="termynal" data-termynal data-ty-typeDelay="40" data-ty-lineDelay="700" class="terminal">
      <span data-ty="input">phraseapp pull</span>
      <span data-ty="progress"></span>
      <span data-ty>Downloaded <span class="green">en</span> to <span class="green">config/locales/en.yml</span></span>
      <br>
      <span data-ty="input">phraseapp push</span>
      <span data-ty>Uploading <span class="green">config/locales/en.yml</span></span>
      <span data-ty="progress"></span>
      <span data-ty>Uploaded <span class="green">config/locales/en.yml</span> successfully.</span>
    </section>
  </div>
</template>

<script>

  export default {
    data() {
      return {
      }
    },

    methods: {
      updateIndex () {
        this.index ++
        if (this.index > this.strings.length) {
          this.index = 0
        }
      }
    },
    mounted () {
    },
    created() {
      if (process.browser) {
        let termynalScript = document.createElement('script')
        termynalScript.setAttribute('src', 'termynal.js')
        termynalScript.setAttribute('data-termynal-container', '#termynal')
        document.body.appendChild(termynalScript)
      }
    }
  }
</script>

<style lang="scss">
  .typed-element {
    display: inline-block !important;
    white-space: pre;
  }
  .typing {
    display: inline-block !important;
    white-space: pre;
  }
  .terminal-window {
    text-align: left;
    width: 100%;
    height: 600px;
    overflow-x: scroll;
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
        width: 100% !important;
        top: 30px;
        bottom: 0;
        overflow: auto;
        white-space: pre;
        .typed-element {
          white-space: pre;
        }
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

  @media screen and (min-width: $desktop) {
    .terminal-window {
      width: 680px;
      height: 400px;
      overflow-x: auto;
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
