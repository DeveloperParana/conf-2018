<template>
<div class="size margin content" id="tickets">

  <div class="container justify-content-start">
    <div class="flex-basis-700 box-title text-align-center">
      <h2>
          Ingressos
        </h2>
    </div>
  </div>

  <div class="tickets container wrap">
    <div class="tickets--item col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4" v-for="ticket in tickets" :key="ticket.id">

      <div class="tickets--item--content container" :class="{ active :  currentticket === ticket.id, soldout : ticket.soldout}" v-on:mouseover="currentticket = ticket.id">
        <div class="soldout-span" v-if="ticket.soldout">
          <div class="span">
            ESGOTADO
          </div>
        </div>
        <div class="tickets--item--content--info flex-grow-1 container column align-center">
          <div class="value">
            {{ '$' + ticket.value}}
          </div>
          <div class="date">
            {{ticket.date}}
          </div>
        </div>
        <div class="tickets--item--content--title container align-center">
          <strong>{{ticket.title}}</strong>
        </div>
        <div class="tickets--item--content--button" v-show="!ticket.soldout">
          <button type="button" name="button" class="btn btn-secundary">Comprar tickets</button>
        </div>
      </div>

    </div>
  </div>

  <div class="shop container align-center wrap">
    <div class="shop--image flex-basis-400 container align-center">
      <img src="~/assets/images/t-shirt.jpg" width="100%" alt="Camiseta DevParaná 2018">
    </div>
    <div class="shop--info flex-basis-500">
      <div class="">
        <h3>
            <span>CAMISETA</span>
            <span>DEVPARANÁ</span>
            <span>2018</span>
          </h3>
        <p>As camisetas do evento serão vendidas somente <b>ANTECIPADAMENTE</b> e estarão disponíveis para retirada no credenciamento do evento.</p>
        <div class="container wrap align-items-end">
          <div class="full-width container align-center">
            <ul class="container shop-check margin-top-20">
              <li>
                <input type="radio" id="s" name="size" checked="checked" value="small" v-model="tshirtSize">
                <label for="s">S</label>
              </li>
              <li>
                <input type="radio" id="m" name="size" value="medium" v-model="tshirtSize">
                <label for="m">M</label>
              </li>
              <li>
                <input type="radio" id="l" name="size" value="large" v-model="tshirtSize">
                <label for="l">L</label>
              </li>
              <li>
                <input type="radio" id="xl" name="size" value="xlarge" v-model="tshirtSize">
                <label for="xl">XL</label>
              </li>
              <li>
                <input type="radio" id="xxl" name="size" value="xxlarge" v-model="tshirtSize">
                <label for="xxl">XXL</label>
              </li>
            </ul>
          </div>
          <div class="shop--info--value container column align-center text-align-center full-width">
            <span>R$45</span>
            <button type="button" name="button" class="btn btn-full btn-primary margin-top-20">Comprar camisa</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="left: -100px; top: 300px;"></div>
  <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="right: 100px; bottom: 50%"></div>
  <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="right: 0; bottom: 100px;"></div>
  <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="left: -200px; bottom: 300px;"></div>

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
      currentticket: 2,
      tshirtSize: 'large',
    }
  },
  computed: {
    ...mapState(['tickets'])
  }
}
</script>

<style lang="scss" scoped>
.shop-check input[type="radio"] {
    display: none;
}

.shop-check input[type="radio"] + label {
    width: 45px;
    height: 45px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid $color-white;
}

.shop-check input[type="radio"]:checked + label {
    background: $color-primary;
    border-color: $color-primary;
}

.shop {
    margin-top: 100px;
    .shop--image {
        border: 2px solid $color-primary;
        border-radius: 10px;
        overflow: hidden;
    }

}

.shop--info {
    padding: 20px 40px;
    box-sizing: border-box;
    h3 {
        margin-bottom: 10px;
        span {
            display: block;
        }
        @media screen and (max-width: 720px) {
            font-size: 7vw;
        }
    }
    p {
        margin-bottom: 20px;
        // opacity: 0.7;
        font-size: 16px;
    }
    ul {
        list-style: none;
        li {
            margin-right: 10px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .shop--info--value {
        font-size: 5rem;
        font-weight: bold;
        color: $color-primary;
        margin-top: 20px;
    }
}

.tickets {
    .tickets--item {
        padding: 20px;
        box-sizing: border-box;
        text-align: center;
        position: relative;
    }
}

.tickets--item--content {
    cursor: pointer;
    border: 2px solid $color-primary;
    border-radius: 10px;
    background: $color-dark;
    transition: 0.3s;
    margin-bottom: 50px;

    .tickets--item--content--button {
        position: absolute;
        bottom: -30px;
        right: 20px;
        display: none;
        z-index: 100;
    }
    &.active,
    &:focus,
    &:hover {
        .tickets--item--content--button {
            display: block;
        }
        transform: scale(1.1, 1.1);
        background: $color-primary;
        border: 2px solid $color-dark;
        color: $color-dark;
        .tickets--item--content--info {
            .date {
                color: $color-white;
                font-weight: bold;
            }
        }
        .tickets--item--content--title {
            border-left: 2px solid $color-dark;
            color: $color-dark;
        }
    }

}

.tickets--item--content.soldout {
    background: $color-primary;
    border: 1px solid $color-dark;
    color: $color-dark;
    position: relative;
    overflow: hidden;
    pointer-events: none;
    .tickets--item--content--info {
        .date {
            color: $color-dark;
        }
    }
    .tickets--item--content--title {
        border-color: $color-dark;
        color: $color-dark;
    }
    .soldout-span {
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        z-index: 10;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 2rem;
        div {
            transform: rotate(-35deg);
        }
    }
    &::after {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .7);
        content: "";
        text-align: center;
        display: block;
        position: absolute;
    }
}

.tickets--item--content--info {
    min-height: 200px;
    .value {
        font-size: 5rem;
        font-weight: bold;
    }
    .date {
        margin-top: 20px;
        font-size: 14px;
        color: $color-primary;
    }
}
.tickets--item--content--title {
    width: 50px;
    border-left: 2px solid $color-primary;
    color: $color-primary;
    transition: 0.3s;
    white-space: nowrap;
    strong {
        transform: rotate(90deg);
    }
}
</style>
