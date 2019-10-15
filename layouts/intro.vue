<template>
  <transition name="layout" mode="out-in">
    <div>
      <div id="top"></div>

      <nuxt />
      <section id="parallax-bg" class="parallax-bg">
        <img
          data-depth=".1"
          class="parallax-1"
          src="~/assets/images/bg-section-1-a.svg"
          alt="image-1"
        />
        <img
          data-depth=".1"
          class="parallax-2"
          src="~/assets/images/bg-section-1-b.svg"
          alt="image-2"
        />
        <img
          data-depth=".2"
          src="~/assets/images/bg-section-1-c.svg"
          class="parallax-3"
          alt="image-3"
        />
      </section>
      <Slide :isOpen="this.open" right>
        <NLink class="item" to="/cuidate">Cuidate</NLink>
        <NLink class="item" to="/derechos-sexuales">Derechos sexuales</NLink>
        <NLink class="item" to="/salud-integral-trans">Salud Integral Trans</NLink>
        <NLink class="item" to="/violencia-obstetrica">Violencia obstetrica</NLink>
      </Slide>
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
    var scene = document.getElementById("parallax-bg");
    var parallaxInstance = new Parallax(scene);

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
</style>
