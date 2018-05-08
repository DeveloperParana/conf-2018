<template>
  <div class="overflow">
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
  import headerTop from '@/components/header'
  import socialFixed from '@/components/social-fixed'
  import footerBottom from '@/components/footer'
  export default {
    components: {
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
