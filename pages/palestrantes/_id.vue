<template lang="html">
  <div class="size margin container column align-center">
    speaker: {{speakers}}
    <nuxt-link :to="{ name: 'home' }" class="btn">Voltar</nuxt-link>
  </div>
</template>

<script>
  import {
    mapState
  }
  from 'vuex'

  export default {
    computed: {
      ...mapState(['speakers'])
    }
  }
</script>

<style lang="css">

</style>
