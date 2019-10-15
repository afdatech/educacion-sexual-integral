<template>
  <div>
    <div class="tu-desicion animated fadeInDown delay-2s slow">
      <img src="~/assets/images/inicio/tu-desicion.svg" alt="image-3" />
    </div>
    <ul class="article-nav" v-scroll-spy-active v-scroll-spy-link>
      <li class="animated fadeInUp slow">
        <a>Cuidate</a>
      </li>
      <li class="animated fadeInUp slow">
        <a>Derechos Sexuales</a>
      </li>
      <li class="animated fadeInUp slow">
        <a>Salud Integral Trans</a>
      </li>
      <li class="animated fadeInUp slow">
        <a>Parto Respetado</a>
      </li>
    </ul>
    <div class="home-links" id="derechos" v-scroll-spy="{time: 1800, steps: 30}">
      <div class="home-item cuidate animated fadeInUp slow" id="cuidate-consejos">
        <NLink to="/cuidate" style="width: 340px;">
          <div class="your-element your-element3" style="width: 100%;">
            <img src="~/assets/images/inicio/iso-cuidate.svg" alt="image-3" />
          </div>
        </NLink>
        <p
          class="home-subtitle"
        >Para tener una sexualidad saludable y placentera podés elegir el método anticonceptivo que mejor se adapte a vos.</p>
        <NLink to="/cuidate" class="button">acceder</NLink>
      </div>
      <div class="home-item derechos-sexuales animated fadeInUp slow" id="tus-derechos">
        <NLink to="/derechos-sexuales">
          <div class="your-element your-element1">
            <img src="~/assets/images/inicio/iso-mis-derechos.svg" alt="image-3" />
          </div>
        </NLink>
        <p
          class="home-subtitle"
        >Podes decidir por vos mismo/a la realización o no de tratamientos o prácticas médicas excepto que impliquen un riesgo grave para tu salud o tu vida.</p>
        <NLink to="/derechos-sexuales" class="button">acceder</NLink>
      </div>
      <div class="home-item derechos-salud-trans animated fadeInUp slow" id="salud-trans">
        <NLink to="/salud-integral-trans">
          <div class="your-element your-element2">
            <img src="~/assets/images/inicio/iso-salud-trans.svg" alt="image-3" />
          </div>
        </NLink>
        <p
          class="home-subtitle"
        >Cada persona puede decidir, desarrollar y expresar libremente su identidad de genero de acuerdo a su propia autopercepción.</p>
        <NLink to="/salud-integral-trans" class="button">acceder</NLink>
      </div>
      <div class="home-item violencia-obstetrica animated fadeInUp slow" id="parto-respetado">
        <NLink to="/parto-respetado">
          <div class="your-element your-element4">
            <img
              src="~/assets/images/inicio/iso-parto-respetado.svg"
              alt="image-3"
              style="width: 100%"
            />
          </div>
        </NLink>
        <p
          class="home-subtitle"
        >Existe la violencia hacia la persona gestante durante la atención del embarazo, preparto, parto o cesárea, durante la interrupción legal del embarazo e incluso después.</p>
        <NLink to="/parto-respetado" class="button">acceder</NLink>
      </div>
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
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import misexualidad from "~/components/misexualidad.vue";

export default {
  head: {
    bodyAttrs: {
      class: "home inicio "
    }
  },

  components: {
    misexualidad,
    Logo
  },
  mounted() {
    var scene = document.getElementById("parallax-bg");
    var parallaxInstance = new Parallax(scene);
    //require our external library and load it in window
    window.VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(this.$refs.tilt);
    VanillaTilt.init(document.querySelector(".your-element1"), {
      scale: 1.1,
      perspective: 500,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 9000
    });
    VanillaTilt.init(document.querySelector(".your-element2"), {
      scale: 1.1,
      perspective: 500,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 9000
    });
    VanillaTilt.init(document.querySelector(".your-element3"), {
      scale: 1.1,
      perspective: 500,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 9000
    });
    VanillaTilt.init(document.querySelector(".your-element4"), {
      scale: 1.1,
      perspective: 500,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 9000
    });
  }
};
</script>

<style lang="scss">
body.inicio {
  overflow: hidden;
  background-color: #0057c6;
  #main-menu {
    opacity: 0;
    visibility: hidden;
  }

  .bm-burger-button {
    span {
      background-color: #fff;
    }
  }

  header {
    background: transparent;

    svg {
      .beta {
        fill: #fff;
      }
    }

    .socials {
      svg {
        path {
          fill: #fff;
        }
      }
    }
  }

  footer {
    display: none;
  }

  .article-nav {
    opacity: 0;
    z-index: 999;
    top: 35vh;
    left: 0;

    @media only screen and (max-width: 1500px) {
      opacity: 1;
    }

    li {
      color: #fff;
      padding: 5px 0;
      cursor: pointer;
      transition: all 2s;

      &.active {
        a {
          font-weight: 600;
          padding-left: 15px;
          border-left: 5px solid #fff;
        }
      }
      a {
        color: #fff;
        transition: all 1s;
        padding-left: 15px;
        border-left: 5px solid transparent;

        &:hover {
          padding-left: 15px;
        }
      }
    }
  }
}

.hero-main-section {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

section#salud-trans {
  background: #fff;
}

.home-links {
  width: 100%;
  display: flex;
  position: relative;
  min-height: 100vh;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  a {
    height: auto;
    width: 250px;
  }

  @media only screen and (max-width: 1500px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
}

.tu-desicion {
  position: absolute;
  top: 30px;
  left: calc(50vw - 150px);
  width: 300px;
  z-index: 99;

  @media only screen and (max-width: 920px) {
    display: none;
  }

  img {
    width: 100%;
  }
}

.home-item {
  flex: 1;
  position: relative;
  overflow: hidden;
  //  height: 100vh;
  //min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  //z-index: 2;
  flex-direction: column;
  padding: 0 25px;
  //background: transparent !important;

  .your-element {
    width: 250px;

    img {
      height: auto;
      width: 100%;

      @media only screen and (max-width: 500px) {
        max-height: 170px;
      }
    }
  }

  .home-subtitle {
    color: #fff;
    font-size: 18px;
    text-align: center;
    margin-top: 45px;
    transition: all 1s;
    max-width: 400px;

    @media only screen and (max-width: 920px) {
      color: #fff;
      font-size: 18px;
      text-align: center;
      margin-top: 25px;
      /* width: 100%; */
      display: block;
      padding: 0 35px;
    }
  }

  .button {
    background: #fff;
    text-decoration: none;
    padding: 10px 25px;
    margin-top: 15px;
    font-weight: 600;
    transition: all 0.4s cubic-bezier(0.7, 0, 0.3, 1);
    text-transform: uppercase;
    font-size: 20px;
    text-align: center;
    box-shadow: 0 8px 17px 0 rgba(19, 18, 18, 0.1),
      0 3px 5px 0 rgba(0, 0, 0, 0.1);
    position: relative;
    top: 0;

    &:hover {
      box-shadow: 0 18px 17px 0 rgba(0, 0, 0, 0.1),
        0 8px 5px 0 rgba(0, 0, 0, 0.1);
      top: -2px;
    }
  }

  @media only screen and (max-width: 1500px) {
    min-height: 100vh;
    width: 100%;
    padding: 0;
  }
}

.violencia-obstetrica {
  @media only screen and (max-width: 1500px) {
    background-color: rgba(11, 156, 66, 0.61);
    background-image: url("../assets/images/inicio/back-parto.svg");
    background-size: 420px !important;
    background-position: center right !important;
    background-repeat: no-repeat;

    &:hover {
      background-color: rgba(11, 156, 66, 0.61) !important;
    }

    .button {
      color: #559637;
    }
  }

  .home-subtitle {
    background: white;
    color: #8a3d96;
    padding: 15px;
    font-weight: 600;
  }
}

.home-item:hover {
  &.derechos-sexuales {
    background: rgba(0, 39, 88, 0.1);
  }

  &.derechos-salud-trans {
    background: rgba(249, 188, 201, 0.1);
  }

  &.violencia-obstetrica {
    background-color: rgba(94, 156, 40, 0.9);
    background-image: url("../assets/images/inicio/back-parto.svg");
    background-size: cover;
    background-position: center;

    @media only screen and (max-width: 1000px) {
      background-size: cover;
      background-position: center;
    }
  }
  &.cuidate {
    background: rgba(87, 36, 130, 0.1);
  }
}
</style>
