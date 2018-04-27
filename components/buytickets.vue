<template lang="html">
  <div class="content size margin">
    <a href="#tickets">
      <div class="buy-tickets box-title">
        <div class="buy-tickets--text ">
          <h2>Comprar Ticket</h2>
        </div>
        <div class="buy-tickets--button">
          <!-- <button type="button" name="button" class="btn btn-lg btn-primary">Comprar tickets</button> -->
          <button type="button" name="button" class="btn btn-lg btn-primary"><i class="fas fa-arrow-down"></i></button>
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
    padding: 50px 0;
    box-sizing: border-box;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: darken($color-primary, 20);
    }
}

.buy-tickets--text {
    transform: translateX(-80px);
}

.buy-tickets--button {
    transition: .3s;
    text-align: center;
    position: absolute;
    right: 70px;
    bottom: -35px;
}

@media (max-width: 720px) {
    .buy-tickets--text {
        h2 {
            @media screen and (max-width: 720px) {
                // font-size: 7vw;
                text-align: center;
            }
        }
        @media (max-width: 720px) {
            transform: translateX(0);
        }
    }
    .buy-tickets--button {
        right: -20px;

    }
}
</style>
