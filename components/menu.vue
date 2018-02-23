<template lang="html">
  <nav>
    <div class="menu">
      <div class="menu--content size margin container align-center">

        <div class="menu--content--logo flex-grow-1">
          <router-link :to="{ name: 'home', params: {} }">
            <img src="../assets/images/logo.svg" width="100" alt="Logo devparaná">
          </router-link>
        </div>

        <div class="menu--content--links">
          <ul class="container wrap">
            <li>
              <router-link :to="{ name: 'home', params: {} }">Página inicial</router-link>
            </li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Palestrantes</a></li>
          </ul>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  $size-menu: 20vh;
  .menu {
    width: 100%;
    // position: fixed;
    .menu--content {
      min-height: $size-menu;
      .menu--content--logo {
        img {
          max-width: 100%;
        }
      }
      .menu--content--links {
        ul {
          list-style: none;
          li {
            margin: 10px;
            text-transform: uppercase;
            font-weight: 800;
            font-size: 14px;
            a {
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>
