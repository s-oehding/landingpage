<template>
    <div v-if="addStyledMarkup" class="terminal-window">
        <header>
            <div class="window-button is-round window-button--green"></div>
            <div class="window-button is-round window-button--yellow"></div>
            <div class="window-button is-round window-button--red"></div>
        </header>
        <section
                id="terminal"
                class="terminal"
                ref="terminal"
                :style="styles"
        >
        </section>
    </div>
    <section v-else
            id="terminal"
            class="terminal"
            ref="terminal"
            :style="styles"
    >
    </section>
</template>

<script>
import VueTerminalWindow from "./VueTerminalWindow"

export default {
  name: 'VueTerminal',
  components: {VueTerminalWindow},
  props: {
    addStyledMarkup: {
      type: Boolean,
      default: true
    },
    lines: {
      type: Array,
      default () {
        return [
          {
            type: 'input',
            content: '$ welcome to vue-terminal-emulator'
          },
          {
            type: 'input',
            content: '$ currently printing demo content...'
          },
          {
            type: 'printLine',
            content: 'Start <span class="green">adding</span> lines to <span class="green">the lines array and pass it as props to me</span>'
          },

        ]
      }
    },
    settings: {
      type: Object,
      default () {
        return {
          startDelay: 600,
          typeDelay: 60,
          lineDelay: 1000,
          progressBarLength: 40,
          progressBarCharacter: '█',
          cursorCharacter: '▋'
        }
      }
    },
    styles: {
      type: Object,
      default () {
        return {
          'background-color': '#242424',
          'color': 'white'
        }
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.init()
    })
  },
  methods: {
    /**
     * Initialise the widget, get lines, clear container and start animation.
     */
    init () {
      this.$refs.terminal.innerHTML = ''
      this.start()
    },
    /**
     * Start the animation and render the lines depending on their data attributes.
     */
    async start() {
      await this._wait(this.startDelay)

      for (let line of this.lines) {
        const type = line.type
        const delay = line.delay || this.settings.lineDelay

        if (type === 'input') {
          //line.setAttribute('cursor', this.cursor);
          await this.type(line)
          await this._wait(delay)
        }

        else if (type === 'progress') {
          await this.progress(line)
          await this._wait(delay)
        }

        else if (type === 'printLine') {
          this.printLine(line)
          await this._wait(delay)
        }

        else {
          return
        }

        //line.removeAttribute('cursor');
      }
    },
    /**
     * Animate a typed line.
     * @param {Node} line - The line element to render.
     */
    async type(line) {
      const lineElement = document.createElement('div')
      lineElement.innerHTML = line.content
      const chars = [...lineElement.textContent]
      const delay = line.typeDelay || this.settings.typeDelay
      lineElement.textContent = ''
      this.$refs.terminal.appendChild(lineElement)

      for (let char of chars) {
        await this._wait(delay)
        lineElement.textContent += char
      }
    },
    /**
     * Animate a typed line.
     * @param {Node} line - The line element to render.
     */
    async printLine(line) {
      const lineElement = document.createElement('div')
      lineElement.innerHTML = line.content
      this.$refs.terminal.appendChild(lineElement)
    },
    /**
     * Animate a progress bar.
     * @param {Node} line - The line element to render.
     */
    async progress(line) {
      const progressElement = document.createElement('div')
      const progressLength = line.progressBarLength || this.settings.progressBarLength;
      const progressBarCharacter = line.progressBarCharacter || this.settings.progressBarCharacter;
      const chars = progressBarCharacter.repeat(progressLength);
      progressElement.textContent = '';
      this.$refs.terminal.appendChild(progressElement);

      for (let i = 1; i < chars.length + 1; i++) {
        await this._wait(this.settings.typeDelay);
        const percent = Math.round(i / chars.length * 100);
        progressElement.textContent = `${chars.slice(0, i)} ${percent}%`;
      }
    },
    /**
     * Helper function for animation delays, called with `await`.
     * @param {number} time - Timeout, in ms.
     */
    _wait(time) {
      return new Promise(resolve => setTimeout(resolve, time));
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
        min-height: 500px;
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

                &.is-round {
                    border-radius: 50%;
                }

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
          min-height: 500px;
          padding: .25rem .5rem 0 .5rem;
          div {
            .green {
              color: greenyellow;
            }
          }
        }
      }

    }

    @media screen and (min-width: 1140px) {
        .terminal-window {
        }
    }

</style>
