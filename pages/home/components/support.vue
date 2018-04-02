<template>
  <div class="support--block justify-content-center container" id="support">

    <div class="size margin">
      <h2 class="support--title flex-grow-1">Apoio</h2>

      <ul class="support--list">
        <li class="support--item" v-for="supporter in support" :key="supporter.id">
          <a href="">
            <img class="support--image" :src="require('@/assets/images/support/' + supporter.image + '.png')" alt="">
          </a>
        </li>
      </ul>
    </div>

    <button type="button" name="button" class="btn support--button">Seja um parceiro</button>

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
  .support--block {
    @extend .background-third;
    padding: 100px 0;
    position: relative;
    flex-direction: column;
  }

  .support--title {
    color: $color-dark;
    font-size: 40px;
    text-transform: uppercase;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    text-align: left;
    margin-bottom: 60px;
  }

  .support--list {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    overflow-x: auto;
  }

  .support--image {
    max-width: 130px;
  }

  .support--button {
    max-width: 220px;
    margin: 0 auto;
    margin-top: 60px;
    background: $color-white;
    border: $color-primary 3px solid;
    text-transform: uppercase;
    color: $color-primary;

    &:hover {
      color: $color-white;
      background: $color-primary;
    }
  }


</style>
