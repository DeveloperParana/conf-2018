<template>
<div class="size margin content" id="tickets">

  <div class="container justify-content-start">
    <div class="flex-basis-700 box-title text-align-center">
      <h2>Ingressos</h2>
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
            {{ 'R$' + ticket.value}}
          </div>
          <div class="date">
            {{ticket.date}}
          </div>
        </div>
        <div class="tickets--item--content--title container align-center">
          <strong>{{ticket.title}}</strong>
        </div>
        <div class="tickets--item--content--button" v-show="!ticket.soldout">
          <a :href="ticket.link" class="btn btn-secundary">Comprar tickets</a>
        </div>
      </div>

    </div>
  </div>

  <div class="shop container align-items-center justify-content-between wrap">
    <div class="shop--image flex-basis-400 flex-grow-1 container align-center">
      <img src="~/assets/images/t-shirt-blue.jpg" width="100%" alt="Camiseta DevParaná 2018">
    </div>
    <div class="shop--info flex-basis-500 flex-grow-1">
      <div class="">
        <h3>
          <span>CAMISETA</span>
          <span>DEVPARANÁ</span>
          <span>2018</span>
        </h3>
        <p>As vendas antecipadas foi <b>encerrada</b>.</p>
        <p>Se você já comprou sua camiseta, retire ela na recepção do evento junto ao credenciamento.</p>
        <p>Caso você não tenha comprado teremos venda no dia, a quantidade e tamanho podem ser limitadas.</p>
      </div>
    </div>
  </div>
  <form id="form-camiseta">
    <input type="hidden" name="iot" value="button" />
    <input type="hidden" name="code" :value="tshirtSize" />
  </form>

  <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="left: -100px; top: 300px;"></div>
  <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="right: 100px; bottom: 50%"></div>
  <!-- <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="right: 0; bottom: 100px;"></div>
  <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="left: -200px; bottom: 300px;"></div> -->

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
      tshirtSize: '6C0760762727348CC4D39F8A7A077AB6',
    }
  },
  computed: {
    ...mapState(['tickets'])
  },
  methods: {
    tshirtSelectionValidation() {
      PagSeguroLightbox(document.querySelector('#form-camiseta'))
    }
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
      overflow: hidden;
      box-shadow: -50px 50px 0 0 $color-primary;
      height: 500px;
      img {
        object-fit: cover;
        transition: .3s;
          &:hover {
            transform: scale(1.5);
          }
      }
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
        line-height: 1;
        font-weight: bold;
        color: $color-primary;
        // margin-top: 20px;
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
