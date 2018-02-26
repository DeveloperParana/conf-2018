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
    width: 100%;
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
            color: $color-white;
            opacity: .5;
              &:hover {
                opacity: 1;
              }
          }
        }
      }
    }
  }
</style>
