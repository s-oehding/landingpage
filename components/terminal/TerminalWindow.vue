<template>
  <div class="terminal-window">
    <header>
      <div class="button button--green"></div>
      <div class="button button--yellow"></div>
      <div class="button button--red"></div>
    </header>
    <section class="__terminal">
      <div class="history"></div>
      $&nbsp;<span class="prompt"></span>
      <span class="typed-cursor"></span>

    </section>
  </div>
</template>

<script>

</script>

<style lang="scss">
  .terminal-window {
    text-align: left;
    width: 600px;
    height: 360px;
    border-radius: 10px;
    margin: auto;
    position: relative;

    header {
      background: #E0E8F0;
      height: 30px;
      border-radius: 8px 8px 0 0;
      padding-left: 10px;

      .button {
        width: 12px;
        height: 12px;
        margin: 10px 4px 0 0;
        display: inline-block;
        border-radius: 8px;

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
      &__terminal {
        color: white;
        font-family: Menlo, Monaco, "Consolas", "Courier New", "Courier";
        font-size: 11pt;
        background: #30353A;
        padding: 10px;
        box-sizing: border-box;
        position: absolute;
        width: 100%;
        top: 30px;
        bottom: 0;
        overflow: auto;
      }

      .typed-cursor {
        opacity: 1;
        -webkit-animation: blink 0.7s infinite;
        -moz-animation: blink 0.7s infinite;
        animation: blink 0.7s infinite;
      }
    }
  }

  @keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
  }
  @-webkit-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
  }
  @-moz-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
  }
</style>
