<template lang="html">
  <div class="content size margin" id="location">

    <div class="container wrap location align-center">
      <div class="flex-grow-1 flex-basis-300">
        <h2>
          <span>LOCALIZAÇÃO</span>
          <span>DO</span>
          <span>EVENTO</span>
        </h2>

        <ul class="container wrap list-style-none margin-top-50">
          <li class="flex-basis-300 flex-grow-1 margin-bottom-50">
            <div class="box-data container column">
              <span class="span-uppercase">Localização</span>
              <span class="color-primary">SENAI, Maringá</span>
            </div>
          </li>
          <li class="flex-basis-300 flex-grow-1">
            <div class="box-data container column">
              <span class="span-uppercase">Endereço</span>
              <span class="color-primary">R. José Corrêa de Águiar, 361 - Jardim Leblon</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="flex-grow-1 flex-basis-300">
        <div class="map-content">

        </div>
      </div>
    </div>

    <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="right: -150px; bottom: 50px;"></div>
    <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="left: -250px; top: 200px;"></div>

  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .location {
    .map-content {
      box-shadow: -50px 50px 0 0px $color-primary;
      margin-left: 100px;
      height: 400px;
      background: #ddd;
      margin-top: 50px;
      @media screen and (max-width: 720px) {
        margin-left: 0;
      }
    }
  }
</style>
