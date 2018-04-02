<template>
  <div class="sponsors--block justify-content-center container" id="sponsors">
    <div class="size margin">
      <h2 class="sponsors--title flex-grow-1">Patrocinadores</h2>

      <ul class="sponsors--list">
        <li class="sponsors--item" v-for="sponsor in sponsors" :key="sponsor.id">
          <a href="">
            <img class="sponsors--image" :src="require('@/assets/images/sponsors/' + sponsor.image + '.png')" alt="">
          </a>
        </li>
      </ul>
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

<style lang="scss" scoped>
  .sponsors--block {
    @extend .background-third;
    padding: 100px 0;
    border-top: 10px $color-primary solid;
    position: relative;
    flex-direction: column;
  }

  .sponsors--title {
    color: $color-dark;
    font-size: 40px;
    text-transform: uppercase;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    text-align: left;
    margin-bottom: 60px;
  }

  .sponsors--list {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    overflow-x: auto;
  }

  .sponsors--image {
    max-width: 130px;
  }
</style>
