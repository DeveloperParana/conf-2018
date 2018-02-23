<template lang="html">
  <div class="size margin">

    <div class="styleguide">
      <div class="text-align-right">
        <h2>Texts</h2>
      </div>

      <div class="">
        <h1>h1. DevParaná Conference 2018</h1>
        <h2>h2. DevParaná Conference 2018</h2>
        <h3>h3. DevParaná Conference 2018</h3>
        <h4>h4. DevParaná Conference 2018</h4>
        <h5>h5. DevParaná Conference 2018</h5>
        <h6>h6. DevParaná Conference 2018</h6>
      </div>

      <div class="">
        <p class="margin-bottom-20"><strong>p strong. Are you into React, React Native, GraphQL and hungry to learn from the best?</strong></p>
        <p class="margin-bottom-20"><strong>p strong. React Day Berlin is a brand new event in the city, the first of its kind - a full day conference for engineers working with the React technology stack.</strong></p>
        <p>p. Careful balance of practical and visionary talks from renowned speakers make React Day a unique place to meet and learn from the most forward-thinking international community members, influencers and open source maintainers.</p>
      </div>

      <div class="margin-top-50">
        <p class="text-align-left">Text align left</p>
        <p class="text-align-center">Text align center</p>
        <p class="text-align-right">Text align right</p>
      </div>

      <div class="margin-top-50 container">
        <div class="box-data container column">
          <span class="span-uppercase">DATA</span>
          <span>28 de julho</span>
        </div>

        <div class="box-data container column">
          <span class="span-uppercase">DIAS</span>
          <span class="color-primary">80</span>
        </div>
      </div>
    </div>

    <div class="styleguide">
      <div class="text-align-right">
        <h2>Colors</h2>
      </div>

      <div class="container wrap">
        <div class="box-color background-primary container align-center">
          #15a04b
        </div>
        <div class="box-color background-secundary container align-center">
          #072211
        </div>
      </div>

      <div class="margin-top-20">
        <p>DevParaná Conference 2018</p>
        <p class="color-primary">DevParaná Conference 2018</p>
        <p class="color-secundary">DevParaná Conference 2018</p>
      </div>
    </div>

    <div class="styleguide">
      <div class="text-align-right">
        <h2>Buttons</h2>
      </div>

      <div class="container wrap align-items-center">
        <button type="button" name="button" class="btn">Button</button>
        <nuxt-link :to="{ name: '', params: {} }" class="btn">Nuxt Link</nuxt-link>
        <a href="#" class="btn">Link</a>
      </div>

      <div class="container wrap align-items-center">
        <button type="button" name="button" class="btn btn-sm">Button</button>
        <nuxt-link :to="{ name: '', params: {} }" class="btn">Nuxt Link</nuxt-link>
        <a href="#" class="btn btn-lg">Link</a>
      </div>

      <div class="container wrap align-items-center">
        <button type="button" name="button" class="btn btn-primary">Button</button>
        <nuxt-link :to="{ name: '', params: {} }" class="btn btn-primary">Nuxt Link</nuxt-link>
        <a href="#" class="btn btn-primary">Link</a>
      </div>

      <div class="container wrap align-items-center">
        <button type="button" name="button" class="btn btn-secundary">Button</button>
        <nuxt-link :to="{ name: '', params: {} }" class="btn btn-secundary">Nuxt Link</nuxt-link>
        <a href="#" class="btn btn-secundary">Link</a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 50px;
  }

  .styleguide {
    margin-top: 50px;
    margin-bottom: 50px;
    .box-color {
      flex-grow: 1;
      height: 100px;
    }
    .btn {
      margin: 5px;
    }
  }
</style>
