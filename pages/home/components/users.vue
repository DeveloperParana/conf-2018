<template>
  <div class="size margin">
    <ul>
      <li v-for="speaker in speakers" :key="speaker.id">
        <nuxt-link :to="'palestrantes/' + speaker.id">
          {{speaker.name}}
        </nuxt-link>
      </li>
    </ul>
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
<style media="screen">

</style>
