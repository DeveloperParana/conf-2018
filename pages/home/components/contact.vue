<template lang="html">
  <div class="content size margin" id="contact" v-on:click="getToken">

    <div class="container wrap-reverse contact align-center">

      <div class="flex-basis-400 flex-grow-1">
        <div class="container--form-block">
          <div class="form-block">
            <label for="">Seu nome</label>
            <input type="text" name="" value="" class="input" v-model="contact.name" v-on:click="getToken" placeholder="Digite seu nome">
          </div>
          <div class="form-block">
            <label for="">Seu e-mail</label>
            <input type="text" name="" value="" class="input" v-model="contact.email" placeholder="Digite seu e-mail">
          </div>
          <div class="form-block">
            <label for="">Qual o assunto?</label>
            <input type="text" name="" value="" class="input" v-model="contact.subject" placeholder="Digite o assunto">
          </div>
          <div class="form-block">
            <label for="">Qual a mensagem?</label>
            <textarea name="name" class="input text-area" rows="4" v-model="contact.message" placeholder="Digite a mensagem"></textarea>
          </div>
          <div class="form-block">
            <button type="button" name="button" class="btn btn-primary" v-on:click="send">Enviar mensagem</button>
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
  export default {
    data() {
      return {
        contact: {
          token: null,
          email: null,
          message: null,
          name: null,
          subject: null
        }
      }
    },
    methods: {
      getToken() {
        console.log('getToken', this.$data.contact.token)
        if (this.$data.contact.token === null) {
          fetch('https://wn3smey42d.execute-api.us-east-1.amazonaws.com/production/createToken', {
            method: 'POST'
          })
          .then((data) => data.json())
          .then((body) => {
            this.$data.contact.token = body.token
          }).catch((err) => {
            console.error(err)
          })
        }
      },
      send() {
        if (!Object.values(this.$data.contact).includes(null)) {
          fetch('https://wn3smey42d.execute-api.us-east-1.amazonaws.com/production/sendEmail', {
            method: 'POST',
            body: JSON.stringify(this.$data.contact)
          })
          .then((data) => data.json())
          .then((body) => {
            console.log(body)
            if (body.status === 'ok') {
              alert('mensagem enviada com sucesso')
            }
          })
          .catch((err) => {
            console.error(err)
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.contact {
  p {
    opacity: 0.7;
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
