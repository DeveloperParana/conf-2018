<template lang="html">
  <div class="">
    <transition name="fade-bottom">
      <div class="c4p" v-if="show">
        <div class="size margin container align-items-center justify-content-between">
          <div class="">
            Está aberta a chamada para o <a href="http://bit.ly/2jttFlx" target="_blank">CALL4PAPERS!</a>
          </div>
          <div class="close-c4p" @click="show = false  ">
            <i class="far fa-times-circle"></i>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style lang="scss" scoped>
.c4p {
    background: $color-primary;
    padding: 10px;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 15;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
    animation: c4p .5s ease-in backwards;
    animation-delay: 2s;

    @keyframes c4p {
      from {
        opacity: 0;
        transform: translateY(100px);
      }
      to {}
    }
}

a {
    font-weight: bold;
    color: $color-dark;
}
.close-c4p {
    cursor: pointer;
}
</style>
