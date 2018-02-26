<template>
  <div class="size margin content" id="schedule">

    <div class="container justify-content-start">
      <div class="flex-basis-700 box-title text-align-left">
        <h2>
          Ingressos
        </h2>
      </div>
    </div>

    <div class="prices container wrap">
      <div class="prices--item col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4" v-for="price in prices" :key="price.id">
        <div class="prices--item--content container" :class="{ active :  currentPrice === price.id}" v-on:mouseover="currentPrice = price.id">
          <div class="prices--item--content--info flex-grow-1 container column align-center">
            <div class="value">
              {{ '$' + price.value}}
            </div>
            <div class="date">
              {{price.date}}
            </div>
          </div>
          <div class="prices--item--content--title container align-center">
            <strong>{{price.title}}</strong>
          </div>
          <div class="prices--item--content--button">
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
            <span>CAMISA</span>
            <span>DEVPARANÁ</span>
            <span>2018</span>
          </h3>
          <div class="container wrap align-items-end">
            <div class="">
              <ul class="container shop-check">
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
            <div class="shop--info--value container column align-center text-align-center">
              <span>$90</span>
              <button type="button" name="button" class="btn btn-primary">Comprar camisa</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPrice: 1,
        tshirtSize: 'large',
        prices: [{
          id: 1,
          value: 40,
          title: '1 Lote',
          date: '12 de Setembro - 23 de Setembro',
          link: ''
        }, {
          id: 2,
          value: 60,
          title: '2 Lote',
          date: '12 de Setembro - 23 de Setembro',
          link: ''
        }, {
          id: 3,
          value: 80,
          title: '3 Lote',
          date: '12 de Setembro - 23 de Setembro',
          link: ''
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .shop-check input[type="radio"] {
    display: none
  }

  .shop-check input[type="radio"] + label {
    width: 45px;
    height: 45px;
    cursor: pointer;
    transition: .3s;
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
    .shop--info {
      padding: 20px 40px;
      box-sizing: border-box;
      h3 {
        margin-bottom: 20px;
        span {
          display: block;
        }
        @media screen and (max-width: 720px) {
          font-size: 7vw;
        }
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
  }

  .prices {
    .prices--item {
      padding: 20px;
      box-sizing: border-box;
      text-align: center;
      position: relative;
      .prices--item--content {
        cursor: pointer;
        border: 2px solid $color-primary;
        border-radius: 10px;
        background: $color-dark;
        transition: .3s;
        margin-bottom: 50px;
        .prices--item--content--info {
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
        .prices--item--content--title {
          width: 50px;
          border-left: 2px solid $color-primary;
          color: $color-primary;
          transition: .3s;
          strong {
            transform: rotate(90deg);
          }
        }
        .prices--item--content--button {
          position: absolute;
          bottom: -50px;
          right: 20px;
          display: none;
          z-index: 100;
        }
        &:focus,
        &:hover,
        &.active {
          .prices--item--content--button {
            display: block;
            .btn {
              border: 2px solid $color-primary;
              &:hover {
                background: $color-primary;
              }
            }
          }
          transform: scale(1.1, 1.1);
          background: $color-primary;
          border: 2px solid $color-dark;
          color: $color-dark;
          .prices--item--content--info {
            .date {
              color: $color-dark;
              opacity: .5s;
            }
          }
          .prices--item--content--title {
            border-left: 2px solid $color-dark;
            color: $color-dark;
          }
        }
      }
    }
  }
</style>
