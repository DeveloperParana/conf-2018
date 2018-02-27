<template lang="html">
  <div class="content size margin" id="contact">

    <div class="container wrap-reverse contact align-center">

      <div class="flex-basis-400 flex-grow-1">
        <div class="container--form-block">
          <div class="form-block">
            <label for="">Seu nome</label>
            <input type="text" name="" value="" class="input" placeholder="Digite seu nome">
          </div>
          <div class="form-block">
            <label for="">Seu e-mail</label>
            <input type="text" name="" value="" class="input" placeholder="Digite seu e-mail">
          </div>
          <div class="form-block">
            <label for="">Qual o assunto?</label>
            <input type="text" name="" value="" class="input" placeholder="Digite o assunto">
          </div>
          <div class="form-block">
            <label for="">Qual a mensagem?</label>
            <textarea name="name" class="input" rows="4" placeholder="Digite a mensagem"></textarea>
          </div>
          <div class="form-block">
            <button type="button" name="button" class="btn btn-primary">Enviar mensagem</button>
          </div>
        </div>
      </div>

      <div class="contact--text flex-basis-400 flex-grow-2 container align-center">
        <div class="">
          <h2>
            <span>ENVIE</span>
            <span>SUAS</span>
            <span>DÚVIDAS</span>
          </h2>
          <p>Entre em contato conosco que lhe
            <br> responderemos o mais rápido possível.</p>
        </div>
      </div>

    </div>

    <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="0.1" style="left: -200px; bottom: 300px;"></div>
    <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="right: 100px; top: 200px;"></div>
    <div class="rect-animation rellax" data-rellax-speed="4" data-rellax-percentage="1" style="right: -200px; bottom: 200px;"></div>

  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .contact {
    p {
      opacity: .7;
    }
    .container--form-block {
      padding: 50px;
      box-sizing: border-box;
    }
    .contact--text {
      background: url("~/assets/images/contact.jpg");
      background-position: center right;
      background-size: 90%;
      background-repeat: no-repeat;
      padding: 0 50px;
      box-sizing: border-box;
      > div {
        transform: translateY(-100px);
      }
    }
    @media (max-width: 720px) {
      .contact--text {
        background: none;
        > div {
          transform: translateY(0);
        }
      }
    }
  }
</style>
