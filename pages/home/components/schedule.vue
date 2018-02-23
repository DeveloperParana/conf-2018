<template>
  <div class="size margin content" id="schedule">
    <div class="container justify-content-center">
      <div class="flex-basis-700 box-title text-align-left">
        <h2>
          Programação
        </h2>
      </div>
    </div>
    <div class="schedule container column">
      <div class="schedule--item container align-items-start" v-for="schedule in schedules" :key="schedule.id" :class="{ active : sheduleSelected === schedule.id}" @click="sheduleSelected = schedule.id">
        <div class="schedule--item--time flex-basis-100 margin-right-10">
          <p><strong>{{schedule.time}}</strong></p>
        </div>

        <div class="schedule--item--ball container justify-content-center">
          <div class="line"></div>
          <div class="ball">
          </div>
        </div>

        <div class="schedule--item--description flex-basis-800">
          <h4>{{schedule.title}}</h4>
          <p><strong>{{schedule.name}}</strong></p>
          <p>{{schedule.description}}</p>
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
          sheduleSelected: 1
        }
      },
      computed: {
        ...mapState(['schedules'])
      }
  }
</script>

<style lang="scss" scoped>
  .schedule {
    font-size: 20px;
    .schedule--item {
      padding-bottom: 100px;
      position: relative;
      transition: .3s;
      cursor: pointer;
      &:last-child {
        padding-bottom: 0;
      }
      .schedule--item--ball {
        width: 100px;
        .line {
          width: 5px;
          height: 100%;
          transform: translateY(20px);
          background: $color-primary;
          display: block;
          position: absolute;
        }
        .ball {
          width: 25px;
          height: 25px;
          border: 7px solid $color-primary;
          background: $color-dark;
          border-radius: 50%;
          transition: .3s;
        }
        @media (max-width: 720px) {
          display: none;
        }
      }
      &.active {
        color: $color-primary;
        .schedule--item--description p {
          color: $color-primary-light;
        }
        .ball {
          background: $color-primary;
          transform: scale(1.2, 1.2);
        }
      }
      .schedule--item--description {
        @media (max-width: 720px) {
          h4 {
            font-size: 2rem;
          }
        }
      }
    }
    .schedule--item:last-child .schedule--item--ball .line {
      display: none
    }
  }
</style>
