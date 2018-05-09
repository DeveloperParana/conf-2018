<template>
<div class="support--block justify-content-center container column" id="sponsors">
  <div class="size margin">
    <h2 class="support--title flex-grow-1">Patrocinadores</h2>

    <ul class="support--list list-style-none">
      <li class="support--item" v-for="sponsor in sponsors" :key="sponsor.id">
        <a :href="sponsor.address">
            <img class="support--image" :src="require('@/assets/images/sponsors/' + sponsor.image + '.png')" alt="">
          </a>
      </li>
    </ul>
    <div class="container align-center margin-top-50">
      <a href="/conf/pdf/mediakit.pdf" target="_blank" class="btn btn-primary btn-outline margin">Seja um patrocinador</a>
    </div>
  </div>
  <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="left: 0px; bottom: 200px"></div>
  <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="right: 0px; bottom: 540px"></div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['sponsors'])
  }
}
</script>
