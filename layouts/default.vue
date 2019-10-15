<template>
  <transition name="layout" mode="out-in">
    <div>
      <div id="top"></div>
      <headeraws />

      <nuxt />

      <Slide :isOpen="this.open" right>
        <NLink class="item" to="/inicio">Inicio</NLink>
        <NLink class="item" to="/cuidate">Cuidate</NLink>
        <NLink class="item" to="/derechos-sexuales">Derechos sexuales</NLink>
        <NLink class="item" to="/salud-integral-trans">Salud Integral Trans</NLink>
        <NLink class="item" to="/parto-respetado">Parto Respetado</NLink>
      </Slide>
      <footer>
        <headroom
          v-scroll-to="{
          el: '#top',
          duration: 2000,
          easing: 'ease-in-out'
        }"
          class="btn-to-top"
        >
          <img
            class="to-top"
            src="~/assets/images/purple-arrow.svg"
            alt="image-3"
            style="width:30px"
          />
        </headroom>
        <a href>
          <span s>con el apoyo de</span>
          <br />
          <img src="~/assets/images/logo-paises-bajos.jpg" width="255" />
        </a>
      </footer>
    </div>
  </transition>
</template>

<script>
import headeraws from "~/components/headeraws.vue";
import { headroom } from "vue-headroom";
import { Slide } from "vue-burger-menu";
import logo from "~/components/logo.vue";

export default {
  components: {
    headeraws,
    headroom,
    logo,
    Slide
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
    openMenu() {
      this.open = true;
    }
  },

  mounted() {
    AOS.init();
    //require our external library and load it in window
    window.VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(this.$refs.tilt);
    VanillaTilt.init(document.querySelector(".your-element"), {
      scale: 1.1,
      perspective: 500,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 9000
    });
  }
};
</script>



<style lang="scss">
body.bm-overlay {
  background: #143b6d;
}

body.welcome {
  .inner-wrapper {
    opacity: 0;
  }
}

.yellow-arrow {
  position: absolute;
  bottom: 0;
  cursor: pointer;
}

.btn-to-top {
  position: fixed;
  bottom: 15px;
  cursor: pointer;
  right: 25px;

  .headroom {
    position: relative !important;
    transition: all 1.8s;

    &.headroom--top {
      opacity: 0;
      transform: translate3d(0px, 200px, 0px) !important;
    }

    &.headroom--not-top {
      transform: translate3d(0px, 0, 0px) !important;
    }

    &.headroom--bottom {
      transform: translate3d(0px, -10px, 0px) scale(1.1) !important;
    }
  }
}

/*
initial : "headroom", // when element is initialised
pinned : "headroom--pinned", // when scrolling up
unpinned : "headroom--unpinned", // when scrolling down
top : "headroom--top", // when above offset
notTop : "headroom--not-top", // when below offset
bottom : "headroom--bottom", // when at bottom of scoll area
notBottom : "headroom--not-bottom" // when not at bottom of scroll area
*/

footer {
  margin-top: 0;
  padding: 150px 2em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 2;
  border-top: 2px solid #ddd;
  background-color: #fff;
  position: relative;
  box-shadow: 0 -3px 17px 0 rgba(0, 0, 0, 0.2), 0 3px 0 0 rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 560px) {
    padding: 2em 0.2em;
  }

  span {
    color: #1c628f;
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    margin: 0;
    padding-top: 21px;
    margin-right: 30px;
  }

  a {
    margin: 15px 35px;
    text-decoration: none !important;
    display: flex;
    align-items: center;
  }
}
</style>
