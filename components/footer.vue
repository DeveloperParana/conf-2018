<template lang="html">
  <footer>
    <div class="footer relative">
      <div class="size margin container align-items-start justify-content-center wrap">

        <div class="box--footer">
          <strong>Para participantes</strong>
          <ul>
            <li><a href="#">Código de conduta</a></li>
            <li><a href="#">Google developers</a></li>
            <li><a href="#">Código de conduta</a></li>
            <li><a href="#">Google developers</a></li>
          </ul>
        </div>

        <div class="box--footer">
          <strong>Para participantes</strong>
          <ul>
            <li><a href="#">Código de conduta</a></li>
            <li><a href="#">Google developers</a></li>
          </ul>
        </div>

        <div class="box--footer">
          <strong>Redes sociais</strong>
          <ul class="social container wrap">
            <li><a href="https://github.com/DeveloperParana" target="_blank"><i class="fa fa-github"></i></a></li>
            <li><a href="https://twitter.com/developerparana" target="_blank"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://www.facebook.com/DeveloperParana/" target="_blank"><i class="fa fa-facebook"></i></a></li>
            <li><a href="http://slack.devparana.org/" target="_blank"><i class="fa fa-slack"></i></a></li>
          </ul>
        </div>

        <div class="rect-animation light rellax" data-rellax-speed="4" data-rellax-percentage="1" style="left: 0; top: -100px;"></div>
        <div class="rect-animation dark rellax" data-rellax-speed="4" data-rellax-percentage="1" style="right: -150px; top: 0;"></div>

      </div>

    </div>
  </footer>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .footer {
    padding: 100px 50px;
    background: $color-primary;
    background: url("~/assets/images/icon.svg"), $color-primary;
    background-position: bottom left;
    background-size: 300px;
    background-repeat: no-repeat;
    width: 100%;
    @media screen and (max-width: 980px) {
      background: $color-primary;
    }
    .box--footer {
      padding: 20px;
      box-sizing: border-box;
      strong {
        font-size: 16px;
      }
      ul {
        margin-top: 20px;
        list-style: none;
        li {
          margin-bottom: 10px;
          a {
            color: #9CD4AD;
            &:hover {
              color: #fff;
            }
          }
        }
        &.social {
          li a {
            width: 40px;
            height: 40px;
            font-size: 20px;
            background: transparent;
            border: 1px solid $color-dark;
            color: $color-dark;
            border-radius: 50%;
            margin-right: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.3s;
            &:hover {
              background: $color-dark;
              color: $color-primary;
            }
          }
        }
      }
    }
  }
</style>
