<template lang="html">
  <header class="bg-header">
    <div class="header">
      <menuFixed/>
      <div class="header--block size margin container column">

        <div class="header--block--date container">
          <div class="box-data container column">
            <span class="span-uppercase">DATA</span>
            <span class="font-strong">28 de julho</span>
          </div>
          <div class="box-data container column">
            <span class="span-uppercase">Localização</span>
            <span class="font-strong">Parque Internacional de Exposições Francisco Feio Ribeiro - Maringá PR</span>
          </div>
        </div>

        <div class="header--block--intro">
          <h1>
            <span>DevParaná</span>
            <span>Conference 2018</span>
          </h1>
          <p>Um evento de desenvolvedores para desenvolvedores!</p>
        </div>

        <div class="header--block--buttons">
          <a href="/#tickets"><button type="button" name="button" class="btn btn-primary margin-right-10 margin-bottom-10">Comprar tickets</button></a>
          <a href="/#speakers"><button type="button" name="button" class="btn btn-outline margin-bottom-10">Palestrantes</button></a>
        </div>

        <div class="header--block--days container wrap">
          <div class="box-data container column">
            <span class="span-uppercase">DIAS</span>
            <span class="color-primary font-strong">80</span>
          </div>
          <div class="box-data container column">
            <span class="span-uppercase">HRS</span>
            <span class="color-primary font-strong">03</span>
          </div>
          <div class="box-data container column">
            <span class="span-uppercase">MINS</span>
            <span class="color-primary font-strong">20</span>
          </div>
          <div class="box-data container column">
            <span class="span-uppercase">SEGS</span>
            <span class="color-primary font-strong">57</span>
          </div>
        </div>

      </div>

      <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="left: 40%; bottom: 300px"></div>

    </div>
  </header>
</template>

<script>
import menuFixed from "@/components/menu";

export default {
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
            h1 span {
                display: block;
            }
            p {
                font-size: 20px;
                opacity: 0.7;
            }
            @media (max-width: 720px) {
                h1 {
                    font-size: 4rem;
                }
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
</style>
