<template lang="html">
  <header class="bg-header" id="home">
    <div class="header">
      <menuFixed/>
      <div class="header--block size margin container column">
        <div class="header--block--intro">
          <div class="logo">
            <img src="~/assets/images/logo-full.svg" width="100%" alt="">
          </div>
          <p>Um evento de desenvolvedores para desenvolvedores!</p>
          <div class="header--block--buttons container wrap">
            <div class="flex-grow-1 margin-10">
              <a href="/#tickets"><button type="button" name="button" class="btn btn-full btn-primary">Comprar tickets</button></a>
            </div>
          </div>
        </div>
        <div class="header--block--date container wrap">
          <div class="box-data container column flex-basis-200 flex-grow-1">
            <span class="span-uppercase">Localização</span>
            <span class="font-strong">Parque Internacional de Exposições Francisco Feio Ribeiro - Maringá PR</span>
          </div>
          <div class="box-data container column flex-basis-100">
            <span class="span-uppercase">DATA</span>
            <span class="font-strong">28 de julho</span>
          </div>
        </div>
        <countdown :time="time" :interval="100">
          <template slot-scope="props">
            <div class="header--block--days container wrap">
              <div class="box-data container column">
                <span class="span-uppercase">DIAS</span>
                <span class="color-primary font-strong">{{ props.days }}</span>
              </div>
              <div class="box-data container column">
                <span class="span-uppercase">HRS</span>
                <span class="color-primary font-strong">{{ props.hours }}</span>
              </div>
              <div class="box-data container column">
                <span class="span-uppercase">MINS</span>
                <span class="color-primary font-strong">{{ props.minutes }}</span>
              </div>
              <div class="box-data container column">
                <span class="span-uppercase">SEGS</span>
                <span class="color-primary font-strong">{{ props.seconds }}</span>
              </div>
            </div>
          </template>
        </countdown>
      </div>
      <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="left: 40%; bottom: 300px"></div>
    </div>
  </header>
</template>

<script>
import menuFixed from "@/components/menu";

export default {
  data: function() {
    let now = new Date();
    let eventDate = new Date(2018, 6, 28);

    return {
      time: eventDate - now
    };
  },
  components: {
    menuFixed
  }
};
</script>

<style lang="scss" scoped>
.bg-header {
  background: url("~/assets/images/header.svg");
  background-position: center bottom;
  background-size: 90%;
  background-repeat: no-repeat;
  @media (max-width: 720px) {
    background: none;
  }
}

.header {
  min-height: 100vh;
  .header--block {
    min-height: 80vh;
    .header--block--intro {
      p {
        font-size: 20px;
        opacity: 0.7;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .logo {
        width: 100%;
        max-width: 400px;
      }
    }
    > div {
      margin-bottom: 50px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.header--block--date {
  max-width: 600px;
  > div:first-child {
    min-width: 130px;
  }
}

.header--block--buttons {
  width: 100%;
  max-width: 500px;
}
</style>
