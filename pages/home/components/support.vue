<template>
<div class="support--block justify-content-center container column" id="support">

  <div class="size margin">
    <h2 class="support--title flex-grow-1">Apoio</h2>

    <ul class="support--list list-style-none">
      <li class="support--item" v-for="supporter in support" :key="supporter.id">
        <a href="">
            <img class="support--image" :src="require('@/assets/images/support/' + supporter.image + '.png')" alt="">
          </a>
      </li>
    </ul>
  </div>

  <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="right: 110px; bottom: 100px"></div>
  <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="right: 0px;"></div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['support'])
  }
}
</script>

<style lang="scss" scoped>

</style>
