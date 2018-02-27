<template lang="html">
  <div class="content size margin">
    <a href="#tickets">
      <div class="buy-tickets">
        <div class="buy-tickets--text">
          <h2>Comprar Ticket</h2>
        </div>
        <div class="buy-tickets--button">
          <button type="button" name="button" class="btn btn-lg btn-primary">Comprar tickets</button>
        </div>
      </div>
    </a>

    <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="0.5" style="left: 20%; bottom: 120px;"></div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  a {
    color: #fff;
  }

  .buy-tickets {
    width: 80%;
    margin: 0 auto;
    border: 2px solid $color-primary;
    padding: 50px 0px;
    box-sizing: border-box;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    transition: .3s;
    .buy-tickets--text {
      transform: translateX(-80px);
      h2 {
        @media screen and (max-width: 720px) {
          font-size: 7vw;
          text-align: center;
        }
      }
      @media (max-width: 720px) {
        transform: translateX(0);
      }
    }
    .buy-tickets--button {
      position: absolute;
      right: 70px;
      bottom: -35px;
    }
    &:hover {
      background: $color-primary;
      .btn-primary {
        background: $color-dark;
        border-color: $color-primary
      }
    }
  }
</style>
