<template lang="html">
  <div class="social-fixed container">
    <div class="">
      Participe:
      <a href="http://slack.devparana.org/" target="_blank"><i class="fab fa-slack"></i></a>
    </div>
    <div class="">
      Compartilhe:
      <a href="http://www.facebook.com/sharer.php?u=https://www.devparana.org/conf-2018/" target="_blank"><i class="fab fa-facebook-square"></i></a>
      <a href="https://twitter.com/share?url=https://www.devparana.org/conf-2018/;text=DevParaná Conference 2018. #devpr18k" target="_blank"><i class="fab fa-twitter-square"></i></a>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .social-fixed {
    text-align: center;
    position: fixed;
    bottom: 50%;
    right: -80px;
    transform: rotate(90deg);
    z-index: 10;
    a {
      color: #fff;
      transition: .3s;
      &:hover {
        color: $color-primary;
      }
    }
    > div {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
    @media (max-width: 720px) {
      display: none;
    }
    .fab {
      margin: 0 5px;
    }
  }
</style>
