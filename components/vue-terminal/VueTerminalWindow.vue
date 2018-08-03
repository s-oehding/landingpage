<template>
    <section
            id="terminal"
            class="terminal"
            ref="terminal"
            :style="styles"
    >
    </section>
</template>

<script>
export default {
  name: 'VueTerminalWindow',
  props: ['lines', 'settings', 'styles'],
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
     * @param {Object} line - The line Object which content prop should be renderd.
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
     * Print out a line
     * @param {Object} line - The line Object which content prop should be renderd.
     */
    async printLine(line) {
      const lineElement = document.createElement('div')
      lineElement.innerHTML = line.content
      this.$refs.terminal.appendChild(lineElement)
    },
    /**
     * Animate a progress bar.
     * @param {Object}
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    section {
        &.terminal {
            font-family: monospace;
             font-size: 11pt;
            text-align: left;
             padding: 10px;
             box-sizing: border-box;
             width: 100%;
             height: 100%;
          min-height: 500px;
             top: 30px;
             bottom: 0;
             overflow: auto;
             white-space: pre;
            .typed-element {
                white-space: pre;
            }
            div {
                margin-bottom: .25rem;
                .green {
                    color: greenyellow;
                }
            }
        }

        .typed-cursor {
            opacity: 1;
            -webkit-animation: blink 0.7s infinite;
            -moz-animation: blink 0.7s infinite;
            animation: blink 0.7s infinite;
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
