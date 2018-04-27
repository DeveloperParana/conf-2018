<template lang="html">
  <div class="content size margin" id="location">

    <div class="container wrap location align-center">
      <div class="flex-grow-1 flex-basis-300 ">
        <div class="box-title">
          <h2>
            LOCALIZAÇÃO DO EVENTO
          </h2>
        </div>

        <ul class="container-location container wrap list-style-none margin-top-50">
          <li class="flex-basis-300 flex-grow-1 margin-bottom-50">
            <div class="box-data container column">
              <span class="span-uppercase">Localização</span>
              <span class="color-primary font-strong">Parque Internacional de Exposições Francisco Feio Ribeiro</span>
            </div>
          </li>

          <li class="flex-basis-300 flex-grow-1">
            <div class="box-data container column">
              <span class="span-uppercase">Endereço</span>
              <span class="color-primary font-strong">Avenida Colombo, 2186, Vila Morangueira - Maringá PR</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="flex-grow-1 flex-basis-300">
        <div class="map-content">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14644.417575241552!2d-51.9018197!3d-23.4205958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbfb7c9cce3800fc1!2sParque+Internacional+de+Exposi%C3%A7%C3%B5es+Francisco+Feio+Ribeiro!5e0!3m2!1spt-BR!2sbr!4v1524840886684" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
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
        box-shadow: -50px 50px 0 0 $color-primary;
        margin-left: 100px;
        height: 400px;
        background: #ddd;
        margin-top: 50px;
        @media screen and (max-width: 720px) {
            margin-left: 0;
        }
    }
}
.container-location {
  li {
    padding-right: 10px;
    &:last-child {
      padding-right: 0;
    }
  }
}
</style>
