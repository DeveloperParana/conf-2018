<template lang="html">
  <div class="content size margin">
      <div class="buy-tickets box-title">
        <div class="buy-tickets--text">
          <h2>Está aberta a chamada para o CALL4PAPERS!</h2>
        </div>
        <div class="buy-tickets--button">
          <a target="_blank" href="http://bit.ly/2jttFlx" class="btn btn-lg btn-primary"><i class="fas fa-arrow-right"></i></a>
        </div>
      </div>

    <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="0.5" style="left: 20%; bottom: 120px;"></div>
  </div>
</template>

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
    text-align: center;

    h2 {
        font-size: 2rem;
    }
}

.buy-tickets--button {
    transition: 0.3s;
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
