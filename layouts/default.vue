<template>
  <div>
    <socialFixed/>
    <headerTop/>
    <nuxt/>
  </div>
</template>

<script>
  import headerTop from '@/components/header'
  import socialFixed from '@/components/social-fixed'
  export default {
    components: {
      headerTop,
      socialFixed
    }
  }
</script>
