<template>
  <headroom class="header-hd">
    <header>
      <div class="inner-wrapper" style="justify-content: space-between">
        <NLink to="/inicio" class="logo-afda">
          <logo />
        </NLink>
        <nav id="main-menu">
          <NLink class="item nav-cuidate" data-stick-cursor to="/cuidate">Cuidate</NLink>
          <NLink
            class="item nav-derechos-sexuales"
            data-stick-cursor
            to="/derechos-sexuales"
          >Derechos sexuales</NLink>
          <NLink
            class="item nav-derechos-salud"
            data-stick-cursor
            to="/salud-integral-trans"
          >Salud Integral Trans</NLink>
          <NLink
            class="item nav-violencia-obstetrica"
            data-stick-cursor
            to="/parto-respetado"
          >Parto Respetado</NLink>
        </nav>
        <social />
      </div>
    </header>
  </headroom>
</template>

<script>
import logo from "~/components/logo.vue";
import { headroom } from "vue-headroom";
import social from "~/components/social.vue";
export default {
  components: {
    logo,
    headroom,
    social
  }
};
</script>

<style lang="scss" >
.header-hd {
  position: fixed;
  height: 70px;
  z-index: 9;
  .headroom {
    position: fixed !important;
  }

  .headroom header {
    will-change: all;
    transition: all 0.6s ease-out;
    height: 70px;
  }

  .headroom--top header {
    height: 100px;
    transform: translateY(0) !important;
  }
  .headroom--pinned header {
    transform: translateY(0%);
  }
  .headroom--unpinned header {
    transform: translateY(-100%);
  }
}

body.home {
  header {
    height: 100px !important;
    transform: translateY(0) !important;
  }

  .headroom--not-top {
    header {
      height: 70px !important;

      background: rgba(8, 74, 158, 0.58);
    }
  }
}
</style>
