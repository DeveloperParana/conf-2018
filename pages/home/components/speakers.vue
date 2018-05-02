<template>
<div class="size-padding margin content" id="speakers">

  <div class="relative container wrap">
    <div class="rotate--box-title">
      <div class="box-title">
        <h2>Palestrantes</h2>
      </div>
    </div>

    <div class="flex-basis-500 flex-grow-1 speakers container wrap align-center">
      <div class="speakers--item col-lg-6 col-12" v-for="speaker in speakers" :key="speaker.id" :class="{ active : speakerSelected === speaker.id }">
        <div class="speakers--item--content" @click="speakerSelected = speaker.id" v-on:mouseover="speakerSelected = speaker.id">
          <div class="speakers--item--content--image">
            <img :src="require('@/assets/images/speakers/' + speaker.image + '.jpg')" width="100%">
            <div class="speakers--item--content--description">
              <p>{{speaker.description}}</p>
              <ul class="social container align-items-center">
                <li><a href="#" target="_blank"><i class="fa fa-link"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-github"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-facebook"></i></a></li>
                <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="speakers--item--content--title">
            <p><strong>{{speaker.name}}</strong></p>
            <p>{{speaker.role}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="left: -200px; top: 300px;"></div>
  <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="right: 0px; bottom: 200px;"></div>

</div>
</template>

<script>
import {
  mapState
}
from 'vuex'

export default {
  data() {
    return {
      speakerSelected: 0
    }
  },
  computed: {
    ...mapState(['speakers'])
  }
}
</script>

<style lang="scss" scoped>
</style>
