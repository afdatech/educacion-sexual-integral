<template>
  <div class="main-container derechos-sexuales">
    <ul class="article-nav section-nav" v-scroll-spy-active v-scroll-spy-link>
      <li class="animated fadeInUp slow">
        <a>Tus derechos</a>
      </li>
      <li class="animated fadeInUp slow">
        <a>Acordate</a>
      </li>
      <li class="animated fadeInUp slow">
        <a>Leyes que te protegen</a>
      </li>
    </ul>

    <section
      style="padding: 0 0; background: #fff; min-height: 100vh "
      v-scroll-spy="{time: 1800, steps: 30}"
    >
      <article
        class="video-intro parallax-parto"
        style="text-align: center;padding: 0px;display: flex;max-width: 100%;min-height: 70vh;background-color: rgb(58, 66, 147) !important;"
      >
        
        <div
          class="video"
          style="background-color: transparent !important;justify-content: center;align-items: center;display: flex;align-items: center;justify-content: center;width: 100%;padding: 15px;"
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nD3v_FVn1uE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </article>

      <article id="consejos" style="padding-top: 100px;background-color: #fff !important; ">
        <div class="inner mi-sexualidad-container">
          <div class="center-image image-heading">
            <img
              v-scroll-to="{
          el: '#consejos',
          duration: 1500,
          easing: 'ease-in-out'
        }"
              src="~/assets/images/tus-derechos-sexuales.svg"
            />
          </div>
          <h4 class="sexualidad-subtitle">
            Si tenés entre 13 y 16 años podes pedir y recibir atención
            profesional de salud sin que alguien te acompañe.
          </h4>
          <h4 class="sexualidad-subtitle">
            Podes decidir por vos mismo/a la realización o no de tratamientos
            o prácticas médicas excepto que impliquen un
            riesgo grave para tu salud o tu vida.
          </h4>
          <h2 class="sexualidad-ejemplos">Algunos ejemplos</h2>
          <div class="inner-list inner-ejemplos">
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
              </div>
              <p class="description">Apto físico.</p>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
              </div>
              <p class="description">Test y diagnóstico de VIH.</p>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
              </div>
              <p class="description">Anticonceptivos</p>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
              </div>
              <p class="description">Atención para control de su salud.</p>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
              </div>
              <p class="description">Vacunas.</p>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
              </div>
              <p class="description">Acceder a la interrupción legal del embarazo.</p>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
              </div>
              <p
                class="description"
              >Recibir tratamientos ( por cuadros de gastroenterocolitis, gripe, neumopatía, por fracturas,etc)</p>
            </div>
          </div>
          <h2 class="sexualidad-ejemplos">Tienen obligación de atenderte siempre y no pueden negarté</h2>
          <div class="inner-list inner-ejemplos">
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
              </div>
              <p class="description">
                Información sobre prevención en salud sexual y
                salud reproductiva
              </p>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
              </div>
              <p class="description">
                El suministro o la colocación del método
                anticonceptivo que pediste.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article>
        <div class="div" style="text-align: center; padding: 85px 0 15px">
          <img src="~/assets/images/si-se-niegan-que-pasa.svg" alt width="350" />
        </div>
        <p>
          Si el personal médico que te atiende te dice que no te
          puede brindar un servicio porque no tenés aptitud suficiente, tienen la obligación de dejar constancia fundada en la
          historia clínica.
        </p>
        <p>
          Si una persona del equipo de salud te niega o limita de
          manera injustificada la prestación que pediste está
          vulnerando tu derecho a la salud. Esta negativa tenés
          que denunciarla y puede dar lugar a una acción legal de
          mala praxis o abandono de persona contra la persona que
          intervino.
        </p>
      </article>
      <article class="article-acordate">
        <div id="acordate" class="div" style="text-align: center; padding: 85px 0 15px">
          <img src="~/assets/images/acordate-que.svg" alt width="350" />
        </div>
        <p>
          Entre 13 y 16 años solo necesitas que te acompañen
          dando su consentimiento tus representantes legales o una
          persona allegada a vos, para la realización de tratamientos
          médicos u actos médicos que impliquen un riesgo grave
          para tu salud o tu vida.
        </p>
        <p>
          El/la profesional de salud es quien va a evaluar si hay
          gravedad en los tratamientos o actos médicos que
          impliquen un riesgo para tu salud o para tu vida. Esa
          evaluación tiene que estar basada en evidencia científica.
        </p>
      </article>
      <article class="article-desacuerdo">
        <h3>
          ¿Qué pasa si tus representantes legales no están
          de acuerdo con vos en los casos en que
          necesitas su acompañamiento?
        </h3>
        <p>
          Ante desacuerdo resuelva el/la médico/a. Para tomar esta
          decisión siempre tiene que tener en cuenta tu voluntad
          sobre las terapias o tratamientos y el interés superior del
          niño, niña y adolescente.
        </p>
        <cite>
          Ningún servicio te puede negar la atención por la edad, orientación
          sexual, país de origen, aspecto físico o por no tener DNI.
        </cite>
      </article>
      <article class="servicios-salud">
        <h2>Tus derechos cuando te atendes en un servicio de salud:</h2>
        <div class="inner-list inner-ejemplos">
          <div class="consejos-item">
            <div class="image">
              <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
            </div>
            <p class="description">Recibir atención sin discriminación.</p>
          </div>
          <div class="consejos-item">
            <div class="image">
              <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
            </div>
            <p class="description">
              Que te escuchen en un espacio de confianza y respeto donde puedas
              expresar tu orientación sexual libremente.
            </p>
          </div>
          <div class="consejos-item">
            <div class="image">
              <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
            </div>
            <p class="description">
              Recibir información en un lenguaje sencillo y claro, no
              patologizante ni discriminatorio.
            </p>
          </div>
          <div class="consejos-item">
            <div class="image">
              <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
            </div>
            <p class="description">
              No tienen que presuponer tu orientación sexual ni prácticas
              sexuales.
            </p>
          </div>
          <div class="consejos-item">
            <div class="image">
              <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
            </div>
            <p class="description">
              Tienen que asegurar la privacidad, la confidencialidad y
              respeto por tu intimidad.
            </p>
          </div>
          <div class="consejos-item">
            <div class="image">
              <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
            </div>
            <p class="description">
              Llamarte por tu nombre de elección, aunque no hayas hecho el
              cambio en el DNI.
            </p>
          </div>
          <div class="consejos-item">
            <div class="image">
              <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
            </div>
            <p class="description">
              Nombrar y referirse a vos de acuerdo al género expresado,
              sin discriminar.
            </p>
          </div>
          <div class="consejos-item">
            <div class="image">
              <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
            </div>
            <p class="description">
              No tienen que prescribir tratamientos ni evaluaciones psicológicas
              o psiquiátricas por tuidentidad de género o su expresión.
            </p>
          </div>
          <div class="consejos-item">
            <div class="image">
              <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
            </div>
            <p class="description">
              Internar a las personas en salas de acuerdo con el género
              autopercibido, garantizando seguridad y privacidad.
            </p>
          </div>
          <div class="consejos-item">
            <div class="image">
              <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
            </div>
            <p class="description">
              Acceder a consultas y atención gratis sobre salud sexual y
              salud reproductiva.
            </p>
          </div>
          <div class="consejos-item">
            <div class="image">
              <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
            </div>
            <p class="description">
              Elegir qué método anticonceptivo usar y recibirlo gratis
              en hospitales, centros de salud, obras sociales y prepagas.
            </p>
          </div>
          <div class="consejos-item">
            <div class="image">
              <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
            </div>
            <p class="description">
              Recibir atención de calidad y buen trato en el embarazo y el
              parto o después de un aborto.
            </p>
          </div>
          <div class="consejos-item">
            <div class="image">
              <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
            </div>
            <p
              class="description"
            >Acceder a la prevención y al tratamiento del VIH y de otras infecciones de transmisión sexual.</p>
          </div>
          <cite>
            A partir de los 16 años se te considera como una persona
            adulta para las decisiones que tengan que ver con el
            cuidado de tu cuerpo.
          </cite>
        </div>
      </article>
      <article class="leyes-que-te-protegen parallax-parto">
        <h2 id="leyes-que-te-protegen">¿Qué leyes te protegen?</h2>
        <div class="inner-list">
          <div class="consejos-item">Constitución Nacional.</div>
          <div class="consejos-item">
            Tratado Internacionales de Derechos Humanos.
            <small>(Art. 75 inc.22 CN)</small>
          </div>
          <div class="consejos-item">
            Código Civil y Comercial
            <small>(Arts. 25 y 26)</small>
          </div>
          <div class="consejos-item">
            Código Penal
            <small>(Art. 86)</small>
          </div>
          <div
            class="consejos-item"
          >Ley No 26.061 de Protección Integral de los Derechos de Niñas, Niños y Adolescentes</div>
          <div class="consejos-item">Derechos de Niñas, Niños y Adolescentes</div>
          <div
            class="consejos-item"
          >Ley N° 25.673 de Salud Sexual y Reproductiva y su Decreto Reglamentario 1282/2003</div>
          <div class="consejos-item">Ley N° 26.743 de Identidad de Género</div>
          <div class="consejos-item">Ley N° 26.657 de Protección de la Salud Mental</div>
          <div class="consejos-item">Ley No 23.798 de Lucha contra el Sida</div>
          <div class="consejos-item">Ley No 26.150 de Educación Sexual Integral</div>
          <div class="consejos-item">Resolución 65/2015 del Ministerio de Salud.</div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import misexualidad from "~/components/misexualidad.vue";
import LazyYoutubeVideo from "vue-lazy-youtube-video";

export default {
  head: {
    bodyAttrs: {
      class: "derechos-sexuales "
    }
  },
  components: {
    misexualidad,
    LazyYoutubeVideo,
    Logo
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

<style lang="scss" >
body.derechos-sexuales {
  .hero {
    position: relative;
    background-color: #6e72b5;

    z-index: 2;
  }

  header {
    transform: translateY(0) !important;
    //background: #6e72b5;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  }

  .section-nav {
    li.active {
      border-left: 5px solid #6e72b5;

      a {
        color: #6e72b5;
      }
    }
  }

  .parallax-bg {
    position: absolute;
    opacity: 0.3;
  }

  .bm-burger-button {
    z-index: 99;
    position: fixed !important;
  }
}
.main-container {
  h1.title {
    text-align: center;
    padding-top: 65px;
  }
}

.derechos-sexuales .hero {
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.derechos-sexuales article {
  margin: 0 auto;
  max-width: 900px;
  padding-bottom: 50px;
  padding-top: 0;

  p {
    max-width: 550px;
    margin: 0 auto 15px;
    font-size: 18px;
    padding: 0 15px;
  }
}
.container.derechos-sexuales {
  padding-top: 65px;
}

.inner-ejemplos {
  max-width: 930px;
  margin: 0 auto;
  .consejos-item {
    flex: 1 1 40%;
  }
}

.atender-obligatorio {
  text-align: center;
}

.mi-sexualidad-container {
  .image-heading {
    img {
      max-width: 350px;
      width: 100%;
    }
  }

  .consejos-item {
    box-shadow: 5px 8px 7px 0 rgba(0, 0, 0, 0), 0 3px 5px 0 rgba(0, 0, 0, 0) !important;
    padding: 10px 15px !important;
    margin: 10px 15px 0 !important;
    &:hover {
      box-shadow: 1px 8px 7px 0 rgba(0, 0, 0, 0), 0 3px 1px 0 rgba(0, 0, 0, 0.1) !important;
    }
    p {
      margin: 0;
    }
  }

  .sexualidad-subtitle {
    text-align: left;
    max-width: 100%;
    margin: 10px auto;
    padding: 0 90px 15px 80px;

    @media only screen and (max-width: 920px) {
      padding: 15px;
    }
  }
  .sexualidad-ejemplos {
    margin: 55px 0 0 0;
    text-align: left;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
    padding-left: 79px;
    color: #6e72b5;
    @media only screen and (max-width: 920px) {
      padding: 15px;
    }
  }
}

.article-acordate {
  background: #e2e2e2;
  max-width: 100% !important;
  padding: 50px 0 120px !important;
  margin-bottom: 70px !important;

  .div {
    text-align: left;
    padding: 85px 0px 35px;
    max-width: 544px;
    margin: 0 auto;
  }
  p {
    font-weight: 600;
    text-align: left;
    font-size: 22px;
  }
}

.article-desacuerdo {
  h3 {
    font-size: 22px;
    text-align: left;
    color: #6e72b5;
    padding: 85px 0px 35px;
    max-width: 544px;
    margin: 0 auto;
    font-weight: 600;
  }

  cite {
    border-color: #6e72b5;
    text-align: left;
  }
}

.servicios-salud {
  h2 {
    text-align: center;
    color: #6e72b5;
    padding: 25px;
  }

  .inner-list {
    display: flex;
    flex-wrap: wrap;

    .consejos-item {
      padding: 15px;
      max-width: 50%;
      @media only screen and (max-width: 560px) {
        max-width: 100%;
        flex: 1 1 100%;
      }
    }

    .image {
      position: absolute;
    }

    .description {
      padding-left: 50px;
    }
  }
  cite {
    border-color: #6e72b5;
    text-align: left;
  }
}

.leyes-que-te-protegen {
  background-color: #6e72b5 !important;
  max-width: 100% !important;
  padding: 100px 50px !important;
  
	@media only screen and (max-width: 560px) {
padding: 50px 15px !important;
	}
  h2 {
    text-align: center;
    color: #fff;
    padding: 25px;
  }

  .inner-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 1380px;
    margin: 0 auto;

    .consejos-item {
      padding: 15px 25px;
      max-width: 50%;
      flex: 1 1 30%;
      text-align: center;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: #fff;
      color: #373b75;
      font-weight: 600;
      min-height: 110px;
      margin: 15px;

      @media only screen and (max-width: 560px) {
        max-width: 100%;
        flex: 1 1 100%;
      }
    }

    .image {
      position: absolute;
    }

    .description {
      padding-left: 50px;
    }
  }
}
</style>

