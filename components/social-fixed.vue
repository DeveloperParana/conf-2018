<template lang="html">
  <div class="social-fixed container">
    <div class="">
      PARTICIPE: <i class="fa fa-slack"></i>
    </div>
    <div class="">
      COMPARTILHE: <i class="fa fa-facebook"></i> <i class="fa fa-twitter"></i>
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
    right: -50px;
    transform: rotate(90deg);
    > div {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
    @media (max-width: 720px) {
      display: none;
    }
  }
</style>
