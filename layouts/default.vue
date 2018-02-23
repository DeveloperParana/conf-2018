<template>
  <div>
    <socialFixed/>
    <headerTop/>
    <nuxt/>
    <footerBottom/>
  </div>
</template>

<script>
  import headerTop from '@/components/header'
  import socialFixed from '@/components/social-fixed'
  import footerBottom from '@/components/footer'
  export default {
    components: {
      headerTop,
      socialFixed,
      footerBottom
    }
  }
</script>
