<template lang="html">
  <footer>
    <div class="footer">
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
          <ul>
            <li><a href="#">Github</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Slack</a></li>
          </ul>
        </div>

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
    background: url("~/assets/images/icon.svg"), $color-primary, ;
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
      }
    }
  }
</style>
