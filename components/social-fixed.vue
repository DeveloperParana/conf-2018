<template lang="html">
  <div class="social-fixed container">
    <div class="">
      Participe:
      <a href="http://slack.devparana.org/" target="_blank"><i class="fa fa-slack"></i></a>
    </div>
    <div class="">
      Compartilhe: <a href="#" target="_blank"><i class="fa fa-facebook"></i></a> <a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
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
    .fa {
      margin: 5px;
    }
  }
</style>
