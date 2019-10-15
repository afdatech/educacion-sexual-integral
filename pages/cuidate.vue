<template>
  <div class="main-container">
    <div class="hero cuidate">
      <div
        v-scroll-to="{
          el: '#its',
          duration: 1500,
          easing: 'ease-in-out'
        }"
        class="featured-image"
      >
        <div class="your-element your-element3" style="width: 100%;">
          <img src="~/assets/images/inicio/iso-cuidate.svg" />
        </div>
      </div>
      <div class="center-image">
        <img
          src="~/assets/images/cuidate/salud-sexualidad-desicion.svg"
          width="450px"
          class="animate"
          data-aos-duration="800"
          data-aos="zoom-in"
        />
      </div>
    </div>
    <section id="its" style="padding: 0 !important;">
      <article class="video-intro" style="text-align: center;padding: 0;display: flex;">
        <div class="heading">
          <img
            src="~/assets/images/cuidate/its.svg"
            width="250px"
            class="animate"
            data-aos-duration="800"
            data-aos="zoom-in"
          />
          <h3>Las Infecciones de Transmisión Sexual (ITS) se transmiten a través de las secreciones vaginales, la sangre (incluso menstrual) y el semen. Para prevenirlas siempre tenés que cuidarte. Podés hacerlo usando preservativos y campo de látex.</h3>
          <h3>En los centros de salud, hospitales, obras sociales y prepagas podés acceder a la información que necesites para la prevención de las ITS, pedir y recibir gratis preservativos.</h3>
          <img
            v-scroll-to="{
          el: '#gratuitos',
          duration: 1500,
          easing: 'ease-in-out'
        }"
            src="~/assets/images/metodos-gratuitos.svg"
            style="width: 250px; margin-top: 45px;"
          />
        </div>
        <div class="video parallax-parto">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QDyQfD_SWGs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </article>

      <article
        id="consejos"
        class="parallax-parto consejos-container"
        style="background-color: #a44685 !important;"
      >
        <div class="image-title">
          <img
            src="~/assets/images/cuidate/consejos.svg"
            style="width: 300px;margin: 50px 0px 30px 0px;"
            class="animate"
            data-aos-duration="800"
            data-aos="fade-right"
          />
        </div>
        <div class="inner">
          <div class="inner-list">
            <div class="consejos-item item-does">
              <div class="image">
                <img src="~/assets/images/cuidate/misc-does.svg" alt />
              </div>
              <p
                class="description"
              >Usá el preservativo, guante o campo de látex desde el comienzo de la relación sexual, en prácticas penetrativas vaginales o anales. Tanto como si involucran pene, juguetes sexuales, o mano.</p>
            </div>
            <div class="consejos-item item-does">
              <div class="image">
                <img src="~/assets/images/cuidate/misc-does.svg" alt />
              </div>
              <p
                class="description"
              >Para prácticas sexuales entre personas que tienen vulva otro método de barrera a parte de los guantes de látex es el dedil (protector de dedo) al momento de tener contacto vaginal de manera manual.</p>
            </div>
            <div class="consejos-item item-does">
              <div class="image">
                <img src="~/assets/images/cuidate/misc-does.svg" alt />
              </div>
              <p
                class="description"
              >Si vas a practicar sexo oral en el ano, la vulva o el pene también tenés que usar estas barreras de protección.</p>
            </div>
            <div class="consejos-item item-does">
              <div class="image">
                <img src="~/assets/images/cuidate/misc-does.svg" alt />
              </div>
              <p
                class="description"
              >Si usas lubricante es importante que sean sólo de base acuosa para que no deterioren el látex.</p>
            </div>

            <div class="consejos-item item-dont">
              <div class="image">
                <img src="~/assets/images/cuidate/misc-donts.svg" alt />
              </div>
              <p
                class="description"
              >Preservativos, guantes , dedil/es o campo de látex, no se comparten, se utilizan por única vez por persona y por práctica sexual.</p>
            </div>
            <div class="consejos-item item-dont">
              <div class="image">
                <img src="~/assets/images/cuidate/misc-donts.svg" alt />
              </div>
              <p
                class="description"
              >Siempre tenés que verificar que no estén vencidos, ni deteriorados por algún motivo.</p>
            </div>
          </div>
          <div class="consejos-imagenes" style>
            <img
              src="~/assets/images/cuidate/consejo-preservativo.svg"
              style="width: 200px; margin: 50px 0"
              class="animate"
              data-aos-duration="800"
              data-aos="fade-right"
            />
            <img
              src="~/assets/images/cuidate/consejo-guante-latex.svg"
              style="width: 200px; margin: 50px 0"
              class="animate"
              data-aos-duration="800"
              data-aos="fade-right"
            />
            <img
              src="~/assets/images/cuidate/consejo-dedil.svg"
              style="width: 200px; margin: 50px 0"
              class="animate"
              data-aos-duration="800"
              data-aos="fade-right"
            />

            <img
              src="~/assets/images/cuidate/consejo-campo-latex.svg"
              style="width: 300px; margin: 50px 0"
              class="animate"
              data-aos-duration="800"
              data-aos="fade-right"
            />
          </div>
        </div>
      </article>

      <article id="gratuitos" class="metodos-gratuitos">
        <div class="inner-article">
          <img
            class="metodos-gratuitos-button"
            v-scroll-to="{
          el: '#gratuitos',
          duration: 1500,
          easing: 'ease-in-out'
        }"
            src="~/assets/images/metodos-gratuitos.svg"
          />
          <div class="metodo-its-preservativo">
            <img
              src="~/assets/images/misc-sexualidad-dots.svg"
              style="width: 860px;position: absolute;z-index: 0;bottom: 0;left: 0;"
            />
            <img src="~/assets/images/sexualidad-misc.svg" style="width: 100%; margin: 25px 0  " />
            <p>Los métodos anticonceptivos son para evitar y/o reducir la posibilidad de un embarazo no deseado. El único método que previene infecciones de transmisión sexual (ITS) es el preservativo</p>

            <div class="js-tilt btn-eleji-tu-metodo">
              <img
                v-scroll-to="{
          el: '#metodos-container',
          duration: 1500,
          easing: 'ease-in-out'
        }"
                src="~/assets/images/eleji-tu-metodo.svg"
                class="animate"
                data-aos-duration="800"
                data-aos="zoom-in"
              />
            </div>
          </div>

          <ul class="metodos-nav" v-scroll-spy-active v-scroll-spy-link>
            <li class="animated fadeInUp slow">
              <a>Preservativos</a>
            </li>
            <li class="animated fadeInUp slow">
              <a>Pastilla anticonceptiva</a>
            </li>
            <li class="animated fadeInUp slow">
              <a>Anticonceptivo inyectable</a>
            </li>
            <li class="animated fadeInUp slow">
              <a>Dispositivo intrauterino</a>
            </li>
            <li class="animated fadeInUp slow">
              <a>Anticonceptivo hormonal de emergencia</a>
            </li>
            <li class="animated fadeInUp slow">
              <a>Implante subdermico</a>
            </li>
            <li class="animated fadeInUp slow">
              <a>Anticoncepcion quirurgica</a>
            </li>
          </ul>

          <div
            id="metodos-container"
            class="metodos-container"
            v-scroll-spy="{time: 1800, steps: 30}"
          >
            <div class="metodo-item">
              <div class="image">
                <img src="~/assets/images/cuidate/preservativos.svg" style="width: auto" />
              </div>
              <div class="description">
                <p>
                  Para personas con pene y/o personas con vagina.
                  <br />
                  <b style="color: #00818b">Previenen embarazos.</b>
                </p>
                <p>* Usá siempre un nuevo para cada práctica: vaginal, anal y oral.</p>
                <p>* Usá lubricantes a base de agua (los lubricantes aceitosos dañan el preservativo).</p>
                <p>* Usalo desde el comienzo de la relación sexual.</p>
                <p>* Nunca uses dos preservativos juntos porque la fricción los puede romper.</p>
                <p>* Si usás juguetes sexuales y los compartís con otra persona, usa un preservativo diferente en cada penetración.</p>
                <p>Este es el unico metodo que evita el embarazo y también te previene de las infecciones de transmisión sexual.</p>
              </div>
            </div>
            <div class="metodo-item">
              <div class="image">
                <img src="~/assets/images/cuidate/pastillas.svg" style="width: auto" />
              </div>
              <div class="description">
                <p>Para personas con vagina y útero.</p>
                <p>Son pastillas con hormonas similares a las que se producen en el cuerpo de una persona con vágina (estrógeno y progesterona).</p>
                <p>Son efectivas si se toman todos los días en el mismo horario porque impiden la ovulación.</p>
                <p>
                  Previenen embarazos.
                  <br />No previene de infecciones de transmisión sexual.
                </p>
                <div class="meta">
                  <div class="does">
                    <img src="~/assets/images/cuidate/misc-does.svg" alt />
                    <span>Previenen embarazos.</span>
                  </div>
                  <div class="donts">
                    <img src="~/assets/images/cuidate/misc-donts.svg" alt />
                    <span>No previene de infecciones de transmisión sexual.</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="metodo-item">
              <div class="image">
                <img src="~/assets/images/cuidate/inyectable.svg" style="width: auto" />
              </div>
              <div class="description">
                <p>Para personas con vagina y útero (tienen hormonas que evitan la ovulación)</p>
                <p>Hay inyectables que se colocan una vez al mes y otras cada tres meses. Tenés que acordarte la fecha de colocación porque para que sea efectiva se debe utilizar en los plazos establecidos.</p>
                <div class="meta">
                  <div class="does">
                    <img src="~/assets/images/cuidate/misc-does.svg" alt />
                    <span>Previenen embarazos.</span>
                  </div>
                  <div class="donts">
                    <img src="~/assets/images/cuidate/misc-donts.svg" alt />
                    <span>No previene de infecciones de transmisión sexual.</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="metodo-item">
              <div class="image">
                <img src="~/assets/images/cuidate/intrauterino.svg" style="width: auto" />
              </div>
              <div class="description">
                <p>Para personas con vagina y útero.</p>
                <p>Es un pequeño objeto de plástico que está recubierto de un hilo que se coloca en el útero.</p>
                <p>Al provocar cambios en el moco del cuello del útero y sobre los espermatozoides impide su ascenso hasta el óvulo.</p>
                <p>Lo coloca y retira un/a profesional de la salud. No se requieren estudios previos y puede colocarse en cualquier día del ciclo menstrual si no hay embarazo. Dura hasta 10 años dependiendo el modelo usado y se puede retirar cuando lo desees. Es importante que recuerdes la fecha de colocación y retiro.</p>
                <div class="meta">
                  <div class="does">
                    <img src="~/assets/images/cuidate/misc-does.svg" alt />
                    <span>Previenen embarazos.</span>
                  </div>
                  <div class="donts">
                    <img src="~/assets/images/cuidate/misc-donts.svg" alt />
                    <span>No previene de infecciones de transmisión sexual.</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="metodo-item">
              <div class="image">
                <img src="~/assets/images/cuidate/ahe.svg" style="width: auto" />
              </div>
              <div class="description">
                <p>Para personas con vagina y útero.</p>
                <p>Este método anticonceptivo se usa luego de una relación sexual en la que no se usó método anticonceptivo o falló el que se usó. También se usa en caso de una violación sexual. Previenen embarazos, es de emergencia porque es la última opción. Es menos efectivo que los métodos de uso habitual y sólo es efectivo en esa relación sexual.</p>
                <p>Cuanto antes se toma es más efectiva, especialmente dentro de las 12 horas después de la relación sexual. Viene en presentaciones de una o dos pastillas.</p>
                <div class="meta">
                  <div class="does">
                    <img src="~/assets/images/cuidate/misc-does.svg" alt />
                    <span>Previenen embarazos.</span>
                  </div>
                  <div class="donts">
                    <img src="~/assets/images/cuidate/misc-donts.svg" alt />
                    <span>No previene de infecciones de transmisión sexual.</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="metodo-item">
              <div class="image">
                <img src="~/assets/images/cuidate/implante.svg" style="width: auto" />
              </div>
              <div class="description">
                <p>Para personas con vagina y útero.</p>
                <p>Consiste en una varilla de plástico finita, flexible y pequeña que se coloca en el brazo, por debajo de la piel, con anestesia local. El implante libera progestágeno una hormona que impide la ovulación. Una vez colocado dura 3 años. Agenda la fecha de colocación y de retiro.</p>
                <p>Para adolescentes y jóvenes hasta los 24 años.</p>
                <div class="meta">
                  <div class="does">
                    <img src="~/assets/images/cuidate/misc-does.svg" alt />
                    <span>Previenen embarazos.</span>
                  </div>
                  <div class="donts">
                    <img src="~/assets/images/cuidate/misc-donts.svg" alt />
                    <span>No previene de infecciones de transmisión sexual.</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="metodo-item">
              <div class="image">
                <img src="~/assets/images/cuidate/quirurgica.svg" style="width: auto" />
              </div>
              <div class="description">
                <p>Ligadura tubaria para personas con vagina y útero (se cortan o se ligan las trompas de Falopio) y vasectomía para personas con pene (cirugía en en los conductos deferentes que transportan los espermatozoides).</p>
                <p>Se trata de métodos anticonceptivos permanentes, son difíciles de revertir.</p>
                <p>Son para personas que deciden no tener hijos/as o que ya tuvieron y no quieren tener más.</p>
                <p>Es para personas mayores de edad. El único requisito es dejar constancia escrita de haber tomado la decisión con información completa y clara.</p>
                <div class="meta">
                  <div class="does">
                    <img src="~/assets/images/cuidate/misc-does.svg" alt />
                    <span>Previenen embarazos.</span>
                  </div>
                  <div class="donts">
                    <img src="~/assets/images/cuidate/misc-donts.svg" alt />
                    <span>No previene de infecciones de transmisión sexual.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="text-align: center;width: 100%;flex-direction: column;display: flex;">
          <cite>Cuándo se usa un método anticonceptivo se recomienda que consultes con profesionales de la salud.</cite>
          <img
            src="~/assets/images/cuidate/25673-gratuitos.svg"
            style="width: auto; margin: 50px 0"
            alt
          />
          <img src="~/assets/images/cuidate-siempre.svg" style="width: auto; margin: 50px 0" alt />
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import LazyYoutubeVideo from "vue-lazy-youtube-video";
export default {
  components: {
    LazyYoutubeVideo
  },
  head: {
    bodyAttrs: {
      class: "cuidate "
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
body.cuidate {
  position: relative;

  .parallax-bg {
    position: absolute;
  }

  .section-nav {
    li.active {
      border-left: 5px solid #8647ba;

      a {
        color: #8647ba;
      }
    }
  }

  header {
    transform: translateY(0) !important;
    //background: #8647ba;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  }

  .metodo-its-preservativo {
    max-width: 660px;
    margin: 0 auto 100px;
    position: absolute;
    padding: 50px 50px 0;
    text-align: center;
    right: 0;
    left: 450px;

    @media only screen and (max-width: 920px) {
      position: relative;
      left: 0;
      margin-bottom: 0;
    }

    p {
      font-size: 19px;
      margin-top: 25px;
      margin-bottom: 50px;
    }
  }
}
.hero.cuidate {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  justify-content: center;
  padding-top: 10vh;
  flex-direction: column;
  min-height: 70vh;
  background-color: #a44685;
  height: 70vh;

  @media only screen and (max-width: 920px) {
    min-height: 90vh !important;
  }

  .home-subtitle {
    color: #fff;
    max-width: 525px;
    font-size: 25px;
    line-height: 38px;
    text-align: center;
    padding-top: 55px;
  }

  .featured-image {
    max-width: 340px;
    width: 100%;
    img {
      width: 100%;
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
    cursor: pointer;
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
}

.video-wrapper {
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%; // For ratio 16:9. 75% if ratio is 4:3
  position: relative;

  embed,
  object,
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
}

.btn-eleji-tu-metodo {
  max-width: 300px;
  position: relative;
  margin: 25px auto;
  cursor: pointer;
  top: 0px;
  &:hover {
    top: 1px;
    width: 100%;
  }
}

.metodos-gratuitos {
  text-align: center;
  padding: 50px 0px 150px 0px;
  max-width: 1300px;
  text-align: left;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  .inner-article {
    width: 100%;
  }

  .metodos-nav {
    position: sticky;
    top: 190px;
    list-style-type: none;
    left: 0;
    width: 300px;

    @media only screen and (max-width: 920px) {
      position: relative;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      padding: 0;
    }
    li {
      border-right: 1px solid #ddd;
      font-size: 18px;
      transition: all 0.8s;
      padding: 10px;
      cursor: pointer;
      text-align: right;
      @media only screen and (max-width: 920px) {
        flex: 1 1 30%;
        text-align: center;
        min-height: 90px;
        border: 0 none;
        border-bottom: 1px solid #ddd;
        display: flex;
        align-items: center;
        justify-content: center;

        &.active {
          border: 0 none !important;
          border-bottom: 4px solid #a44685 !important;
        }
      }

      @media only screen and (max-width: 620px) {
        flex: 1 1 100%;
        min-height: 60px;
      }

      &.active {
        border-right: 4px solid #a44685;
        color: #a44685;
      }
    }
  }

  .metodos-container {
    padding-top: 250px;
  }

  .metodo-item {
    margin: 0 0;
    border-bottom: 1px solid #ddd;
    padding: 15px 0;
    margin-left: 299px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    border-left: 1px solid #ddd;
    background-color: rgba(124, 81, 160, 0.08);
    padding-left: 45px;
    @media only screen and (max-width: 920px) {
      margin: 0;
      padding: 105px 2em;
      min-height: auto;
    }
    .image {
      @media only screen and (max-width: 920px) {
        padding-top: 100px;
      }
    }
    p {
      padding-left: 44px;
      margin: 25px 0;
      font-size: 19px;
      max-width: 650px;
      @media only screen and (max-width: 920px) {
        margin: 15px 0;
        padding: 0;
      }
    }
    .meta {
      padding-left: 44px;
      margin: 25px 0;
      font-size: 19px;
      max-width: 650px;
      span {
        font-size: 22px;
        display: inline-block;
        padding: 10px 5px 0px 5px;
      }

      img {
        width: 15px;
        margin-right: 10px;
      }

      .does {
        color: #00818b;
      }

      .donts {
        color: #a44685;
      }
    }
  }
}
article {
  cite {
    text-align: center;
    max-width: 550px;
    margin: 25px auto;
    font-size: 20px;
    display: block;
    background: #f9f9f9;
    padding: 2em;
    border: 3px solid #a44685;
  }
}

#consejos {
  .inner {
    max-width: 1280px;
    margin: 0 auto;
    font-size: 18px;
    display: block;
    text-align: left;

    .inner-list {
      display: flex;
      flex-wrap: wrap;
    }

    .consejos-item {
      text-align: left;
      padding: 25px;
      flex: 1 1 46%;
      background: white;
      margin: 15px;
      transition: all 1s;
      box-shadow: 5px 8px 7px 0 rgba(0, 0, 0, 0.2),
        0 3px 5px 0 rgba(0, 0, 0, 0.1);
      position: relative;
      top: 0;

      @media only screen and (max-width: 560px) {
        flex: 1 1 100%;
      }

      &:hover {
        box-shadow: 10px 18px 7px 0 rgba(0, 0, 0, 0.3),
          0 3px 5px 0 rgba(0, 0, 0, 0.1);
        top: -3px;
      }

      .image {
        width: 24px;
        position: absolute;
        img {
          width: 100%;
        }
      }

      .description {
        padding-left: 50px;
      }
    }
  }
}

.center-image {
  text-align: center;
  padding: 25px 0;
  img {
    width: 100%;
  }
}

.metodos-gratuitos-button {
  width: 321px;
  position: sticky;
  z-index: 1;
  cursor: pointer;
  top: 90px;
  padding-left: 45px;
  margin-bottom: 35px;
}

.video-intro {
  text-align: center;
  padding: 0px;
  display: flex;

  @media only screen and (max-width: 920px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .video {
    margin: 0px auto;
    background-color: #007481 !important;
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 920px) {
      width: 100%;
      padding: 55px;
    }
  }

  .heading {
    margin-bottom: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 45px;

    h3 {
      max-width: 490px;
      margin: 0;
      font-size: 22px;
      padding-top: 50px;
      text-align: right;
    }
  }
}

.consejos-container {
  .inner {
    display: flex !important ;

    @media only screen and (max-width: 920px) {
      flex-direction: column-reverse;
    }

    .inner-list {
      flex: 2;

      .consejos-item {
        flex: 1 1 100% !important;
      }
    }

    .consejos-imagenes {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media only screen and (max-width: 920px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        img {
          margin: 15px;
        }
      }
    }
  }

  .image-title {
    text-align: left;
    max-width: 1250px;
    margin: 0 auto;
  }
}
</style>
