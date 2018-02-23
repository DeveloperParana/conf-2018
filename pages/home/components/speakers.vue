<template>
  <div class="size-padding margin content">

    <div class="relative container wrap">
      <div class="rotate--box-title">
        <div class="box-title">
          <h2>Palestrantes</h2>
        </div>
      </div>

      <div class="flex-basis-500 flex-grow-1 speakers container wrap align-center">
        <div class="speakers--item col-lg-6 col-12" v-for="speaker in speakers" :key="speaker.id" :class="{ active : speakerSelected === speaker.id }">
          <div class="speakers--item--content" @click="speakerSelected = speaker.id" v-on:mouseover="speakerSelected = speaker.id">
            <div class="speakers--item--content--image">
              <img :src="require('@/assets/images/speakers/' + speaker.image + '.jpg')" width="100%">
              <div class="speakers--item--content--description">
                <p>{{speaker.description}}</p>
                <ul class="social container align-items-center">
                  <li><a href="#" target="_blank"><i class="fa fa-link"></i></a></li>
                  <li><a href="#" target="_blank"><i class="fa fa-github"></i></a></li>
                  <li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#" target="_blank"><i class="fa fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="speakers--item--content--title">
              <p><strong>{{speaker.name}}</strong></p>
              <p>{{speaker.role}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

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
          speakerSelected: 1
        }
      },
      computed: {
        ...mapState(['speakers'])
      }
  }
</script>

<style lang="scss" scoped>
  .speakers {
    .speakers--item {
      padding: 20px;
      box-sizing: border-box;
      .speakers--item--content {
        cursor: pointer;
        .speakers--item--content--image {
          background: $color-primary;
          max-height: 400px;
          width: 90%;
          max-width: 400px;
          margin: 0 auto;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          transition: .3s;
          border: 5px solid $color-dark;
          .speakers--item--content--description {
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 20px;
            box-sizing: border-box;
            display: none;
            max-height: 400px;
            overflow-y: auto;
            p {
              font-weight: 700;
            }
            .social {
              list-style: none;
              li a {
                margin: 5px;
                width: 35px;
                height: 35px;
                border: 1px solid $color-white;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                transition: .3s;
                &:hover {
                  background: $color-white;
                  color: $color-primary;
                }
              }
            }
            @keyframes showDescription {
              from {
                opacity: 0;
                transform: translateY(50px);
              }
              to {}
            }
            animation: .3s showDescription backwards;
          }
        }
        .speakers--item--content--title {
          text-align: right;
          transform: translateY(-40px) translateX(-40px);
          p {
            font-size: 22px;
          }
          @media (max-width: 720px) {
            transform: translateY(0) translateX(0);
          }
        }
      }
      &.active {
        .speakers--item--content--image {
          border-color: $color-primary;
          box-shadow: 0 0 20px 0 $color-primary;
          ;
          .speakers--item--content--description {
            display: block;
          }
        }
      }
    }
  }

  .rotate--box-title {
    position: relative;
    width: 100px;
    .box-title {
      position: absolute;
      left: -250px;
      top: 250px;
      transform: rotate(90deg);
      transition: .3s;
    }
    @media (max-width: 720px) {
      width: 100%;
      .box-title {
        position: relative;
        left: 0;
        top: 0;
        transform: rotate(0deg);
      }
    }
  }
</style>
