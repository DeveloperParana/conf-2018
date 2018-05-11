<template>
  <div class="overflow">
    <call4papers/>
    <socialFixed/>
    <headerTop/>
    <nuxt/>
    <footerBottom/>
  </div>
</template>

<style lang="scss">
  .overflow {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }
</style>

<script>
  import call4papers from '@/components/c4p'
  import headerTop from '@/components/header'
  import socialFixed from '@/components/social-fixed'
  import footerBottom from '@/components/footer'
  export default {
    components: {
      call4papers,
      headerTop,
      socialFixed,
      footerBottom
    },
    mounted () {
      var rellax = new Rellax('.rellax', {
        // center: true
        callback: function(position) {
            // callback every position change
            // console.log(position);
        }
      });
    }
  }
</script>
