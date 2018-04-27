<template>
  <div class="about--block size margin content container justify-content-center" id="about">

    <div class="about--block--title col-6">
      <h2>
          <span>sobre o</span>
          <span>dev parana</span>
          <span>conference</span>
      </h2>
    </div>

    <div class="about--block--title col-6">
      <p><strong>O DevParaná pensando em trazer relevância de conteúdo aos desenvolvedores do nosso estado organiza o segundo DevParaná Conference.</strong></p>
      <p><strong>A conferência tem por objetivo trazer palestrantes que são referência nacional em sua área de atuação, assim como palestrantes que são destaque na comunidade através de uma chamada para submissão de palestras.</strong></p>
      <p>No total serão 8 talks, 4 de convidados e 4 de pessoas da comunidade.</p>
    </div>

    <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="left: -100px; bottom: 300px"></div>
    <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="right: 0px;"></div>

  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .about--block {
    margin-top: 7rem;
    h2 {
      span {
        display: block;
        width: 100%;
        font-size: 2rem;
      }
      @media screen and (min-width: 400px) and (max-width: 1200px) {
        span {
          font-size: calc(16px + (90 - 16) * (100vw - 400px) / (1200 - 400));
        }
      }
      @media screen and (min-width: 1200px) {
        span {
          font-size: 7vw;
        }
      }
    }
    .about--block--title {
      p {
        margin-bottom: 2rem;
        font-size: 1.2rem;
        line-height: 1.7em;
        font-weight: 300;
      }
    }
  }
</style>
