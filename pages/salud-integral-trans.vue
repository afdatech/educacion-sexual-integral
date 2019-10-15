<template>
  <div class="main-container">
    <ul class="article-nav section-nav" v-scroll-spy-active v-scroll-spy-link>
      <li class="animated fadeInUp slow">
        <a>Ley de identidad</a>
      </li>
      <li class="animated fadeInUp slow">
        <a>Tus derechos</a>
      </li>
      <li class="animated fadeInUp slow">
        <a>Libre desarrollo</a>
      </li>
      <li class="animated fadeInUp slow">
        <a>Atención médica</a>
      </li>
    </ul>

    <div class="hero salud-trans" id="video" style="padding-top:30px; display: none"></div>

    <section
      id="ley-identidad"
      style="padding: 0 0; background: #fff; "
      v-scroll-spy="{time: 1800, steps: 30}"
    >
      <article class="ley-identidad">
        <div class="video-intro">
          <div class="heading">
            <a
              class="js-tilt misexualidad your-element"
              v-scroll-to="{
          el: '#element',
          duration: 1000,
          easing: 'ease-in-out'
 }"
              style="transform-style: preserve-3d; text-align: center; margin-top: 55px; display: block"
            >
              <img
                src="~/assets/images/salud-trans/derecho-ala-salud-trans.svg"
                width="400px"
                style="margin-bottom: 15px"
              />
            </a>

            <h3
              class="animate"
              style="text-align: center;color: #08143c;font-size: 27px;padding: 0px 0px 10px;font-weight: 600;"
            >¿Sabías que existe una ley que te protege?</h3>
            <img
              src="~/assets/images/salud-trans/ley-26743.svg"
              style="width: 350px; margin: 15px 0"
            />
            <p>
              Cada persona puede decidir, desarrollar y expresar libremente su
              identidad de genero de acuerdo a su propia autopercepción
            </p>
            <img
              src="~/assets/images/salud-trans/conoce-tus-derechos.svg"
              alt
              v-scroll-to="{
          el: '#conoce-tus-derechos',
          duration: 1000,
          easing: 'ease-in-out'
 }"
              style="width: 350px; margin: 15px 0; cursor: pointer;"
            />
            <div
              class="yellow-arrow animated bounce delay-2s slow infinite"
              v-scroll-to="{
          el: '#conoce-tus-derechos',
          duration: 1500,
          easing: 'ease-in-out'
        }"
            >
              <img src="~/assets/images/yellow-arrow.svg" style="width: 50px" />
            </div>
          </div>
          <div class="video parallax-parto">
            <iframe
              style="
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    height: 315px;
"
              width="560"
              height="515"
              src="https://www.youtube.com/embed/cHBmLQIU5bA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </article>
      <article id="conoce-tus-derechos" class="tus-derechos">
        <div style="max-width: 100%; margin: 0 auto; text-align: left;">
          <div class="inner-list">
            <div class="heading-derechos">
              <img
                src="~/assets/images/salud-trans/escudo-salud-trans.svg"
                width="150px"
                style="cursor: pointer; max-width: 150px; margin: 0 auto;"
              />
              <img
                src="~/assets/images/salud-trans/title-conoce-tus-derechos.svg"
                style="cursor: pointer;"
                class="title-conoce-tus-derechos"
                width="500px"
              />
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud-trans/arrow-ejemplos.svg" alt />
              </div>
              <p
                class="description"
              >Recibir atención médica sin discriminación, con trato digno y respetuoso.</p>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud-trans/arrow-ejemplos.svg" alt />
              </div>
              <p class="description">Reconocimiento de tu identidad de género autopercibida.</p>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud-trans/arrow-ejemplos.svg" alt />
              </div>
              <p
                class="description"
              >A que te llamen por el nombre que elegiste, aunque no coincida con el que dice tu DNI.</p>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud-trans/arrow-ejemplos.svg" alt />
              </div>
              <p
                class="description"
              >A decidir libremente sobre tu cuerpo y salud: nadie puede condicionar tu construcción corporal y la de tu expresión de género.</p>
            </div>
          </div>
        </div>
      </article>
      <article class="atencion-medica">
        <div style="max-width: 100%; margin: 0 auto; text-align: left; padding-top: 50px;">
          <div class="inner-list inner-ejemplos">
            <div class="heading-derechos">
              <img
                src="~/assets/images/salud-trans/centro-medico-doctore.svg"
                alt
                width="200px"
                style="margin-top: 45px"
              />
              <img
                src="~/assets/images/salud-trans/centro-medico.svg"
                width="500px"
                style="margin-top: 45px"
              />
              <h2 style="display: none" id="atencion-medica">Atención médica</h2>
              <h3>Durante el proceso de atención tienen que garantizarte el respeto a tu identidad de género y esto significa:</h3>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
              </div>
              <p class="description">Preguntar cuál es tu nombre y llamarte por el mismo.</p>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
              </div>
              <p
                class="description"
              >Nombrarte y referirse a vos de acuerdo el género que expresaste.</p>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
              </div>
              <p
                class="description"
              >En todos los registros médicos que se usen (planilla de turnos, historia clínica, etc) tienen que incluir el nombre que expresaste.</p>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
              </div>
              <p
                class="description"
              >No tienen que usar clasificaciones patologizantes, ni tampoco pueden prescribirse tratamiento y/o evaluaciones psicológicas o psiquiátricas por tu identidad o expresión de género.</p>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
              </div>
              <p
                class="description"
              >Si tienen que internarte lo tienen que hacer en salas acordes con el género que expresaste y con tu consentimiento, bajo condiciones adecuadas de privacidad y seguridad.</p>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
              </div>
              <p
                class="description"
              >La privacidad y confidencialidad en tu consulta siempre tiene que estar asegurada.</p>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
              </div>
              <p
                class="description"
              >Tienen que darte información de una manera clara y comprensible.</p>
            </div>
            <div class="consejos-item">
              <div class="image">
                <img src="~/assets/images/salud/arrow-ejemplos.svg" alt />
              </div>
              <p
                class="description"
              >No tienen que presuponer tu orientación sexual ni tampoco prácticas sexuales.</p>
            </div>
          </div>
        </div>
      </article>
      <article class="acceso-plan-medico-obligatorio">
        <div class="inner">
          <h1>Acceso al Plan Médico Obligatorio</h1>
          <p class="subtitle">
            Las prestaciones de salud contempladas en la Ley 26.743 están
            incluidas en el Plan Médico Obligatorio (PMO). Tenes que poder
            acceder a ellas en todo el sistema
            de salud (público, privado y obras
            sociales)
          </p>
        </div>
      </article>

      <article style="text-align: center" class="libre-desarollo-personal">
        <div class="comic">
          <div class="animate" data-aos="zoom-in-up">
            <img src="~/assets/images/salud-trans/globo-rosa.svg" width="400px" alt />
          </div>
          <div class="animate" data-aos="zoom-in-up">
            <img src="~/assets/images/salud-trans/globo-celeste.svg" width="300px" alt />
          </div>
          <div class="diversidad-trans">
            <img src="~/assets/images/salud-trans/diversidad-trans.svg" width="100%" alt />
          </div>
        </div>
        <img src="~/assets/images/salud-trans/libre-desarrollo-hormonizacion.svg" width="400px" alt />
        <div
          id="libre-desarrollo"
          style="max-width: 600px; margin: 0 auto; text-align: left; padding-top: 50px;"
        >
          <p>Si sos mayor de 18 años y deseas acceder a la hormonización tenes como único requisito dar tu consentimiento informado, sin necesidad de autorización judicial o administrativa.</p>
          <p>Si sos menor de 18 años, la solicitud la tienen que hacer tus representantes legales con tu expresa conformidad.</p>
          <p>Si tus representantes legales se niegan, tenes que pedir que intervenga a un/a abogado/a del niño/a (Ley 26.061) para recurrir a la vía sumarísima para que los/as jueces/ zas correspondientes resuelvan teniendo en cuenta los principios de capacidad progresiva e interés superior del niño/a o joven.</p>
          <p>La autoridad judicial deberá expedirse en un plazo no mayor de sesenta (60) días contados a partir de la solicitud de conformidad.</p>
          <p>
            Las personas comienzan a construir sus identidades y/o expresiones de género desde muy temprana edad.
            <b>El Art.12 de la Ley de Identidad de Género</b> establece que los/as niños/as y jóvenes deben ser tratados de acuerdo al género expresado y por el nombre que eligieron.
          </p>
          <p>El proceso de consentimiento informado significa que el equipo de salud tiene que brindar un espacio de diálogo, que respete tu privacidad, en el que te brinden información clara, precisa y oportuna sobre tu estado de salud y sobre cuáles son los procedimientos más seguros para vos.</p>
          <p>Si vas a iniciar un proceso de modificación corporal los equipos de salud tienen que informarte sobre los alcances y los límites de la hormonización, como así también sobre los posibles efectos adversos y los beneficios que esta práctica tuvo en personas con experiencias similares.</p>
          <p>Tenes derecho a elegir si tener o no hijos/as, cuantos/as, cuándo y con quién. Por eso antes de iniciar la hormonización los/as profesionales de la salud te tienen que informar claramente cuáles son los efectos que esos procedimientos pueden producir en tu fertilidad y acerca de la preservación de gametos.</p>
          <p>
            <b>El uso de siliconas líquidas o aceites puede tener consecuencias graves para tu salud. La administración de hormonas tiene que realizarse con asesoramiento médico.</b>
          </p>
          <p>
            <b>Para prevenir VIH y otras ITS podes usar preservativo y/o campo de látex. Los preservativos y métodos anticonceptivos se entregan gratis en centros de salud, hospitales, obras sociales y prepagas. Ley 25. 673</b>
          </p>
        </div>
      </article>
      <article style="
    border-bottom: 1px solid #ddd;

">
        <div
          style="max-width: 1280px; margin: 0px auto; text-align: left; padding-top: 50px; display: flex; flex-wrap: wrap;"
        >
          <cite>Existen tantas expresiones e identidades de género como personas en el mundo. Lo que importa es tu experiencia singular y no las convenciones culturales y sociales hegemónicas sobre los estereotipos de género.</cite>
          <cite>
            Ley 26.743 de Identidad de Género reconoce la
            <br />identidad de género como un derecho humano y fundamental.
          </cite>
          <cite>La identidad de género es la vivencia interna e individual del género tal como cada persona la siente, la cual puede corresponder o no con el sexo asignado al nacer, incluye la vivencia personal del cuerpo. Esto puede involucrar o no la modificación corporal siempre que sea libremente elegido.</cite>
          <cite>No todas las personas trans tienen las mismas expectativas sobre su construcción corporal, ni todas desean llevar a cabo modificaciones. Tomá tus decisiones con autonomía para construir tu expresión de género libre de estereotipos y prejuicios.</cite>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: "salud-trans "
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
body.salud-trans {
  position: relative;

  header {
    transform: translateY(0) !important;
    background: #fff !important;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);

    nav#main-menu a {
      color: #333;
    }

    .beta {
      fill: #555;
    }
  }

  article {
    padding-top: 0;
    padding-bottom: 70px;
  }

  .section-nav {
    li.active {
      border-left: 5px solid #5bcbf5;

      a {
        color: #5bcbf5;
      }
    }
  }

  .bm-burger-button .line-style {
    background-color: #333;
  }

  .headroom--pinned header {
    background: #fff !important;
  }

  .parallax-bg {
    position: absolute;
  }
}

.hero.salud-trans {
  animation: colorchange 10s infinite; /* animation-name followed by duration in seconds*/
  /* you could also use milliseconds (ms) or something like 2.5s */
  -webkit-animation: colorchange 10s infinite; /* Chrome and Safari */
  background-color: #5bcbf5;
  z-index: 2;
  align-items: center;
  position: relative;
  justify-content: center;
  background-position: bottom center;
  min-height: 50vh !important;
  height: 50vh !important;
  margin-bottom: 145px;

  .section-nav {
    background: #f9f9f9;
  }
}

@keyframes colorchange {
  0% {
    background-color: #5bcbf5;
  }
  50% {
    background-color: #f6a6e2;
  }

  100% {
    background-color: #5bcbf5;
  }
}

@-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */ {
  0% {
    background-color: #5bcbf5;
  }
  50% {
    background-color: #f6a6e2;
  }

  100% {
    background-color: #5bcbf5;
  }
}

.ley-identidad {
  padding: 0 !important;
  min-height: 100vh;

  .video-intro {
    min-height: 100vh;
  }

  .heading {
    align-items: center !important;
    background: #f8f8f8;

    p {
      font-size: 25px;
    }
  }

  .video.parallax-parto {
    background-color: #b9d2ea !important;
  }

  .bajada {
    position: relative;
    text-align: center;
    height: auto;
    background: rgb(187, 199, 215);
    padding: 55px 45px;
    margin-top: 60px;
    h3 {
      font-size: 22px;
      position: relative;
      z-index: 1;
      font-weight: 600;
    }

    p {
      color: #333;
      position: relative;
      z-index: 1;
      padding: 15px 0 0 0;
      width: 100%;
      font-size: 23px;
    }

    img {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
    }
  }
}

.acceso-plan-medico-obligatorio {
  padding: 80px 0 !important;
  color: #fff;
  text-align: center;

  display: flex;
  animation: colorchange 15s infinite; /* animation-name followed by duration in seconds*/
  /* you could also use milliseconds (ms) or something like 2.5s */
  -webkit-animation: colorchange 15s infinite; /* Chrome and Safari */
  background-color: #5bcbf5;
  z-index: 2;
  align-items: center;
  position: relative;
  justify-content: center;
  background-position: bottom center;
  min-height: 50vh !important;
  height: 50vh !important;
  margin-bottom: 145px;

  .inner {
    max-width: 880px;
    margin: 0 auto;
  }

  h1 {
    font-size: 35px;
  }

  .subtitle {
    font-size: 25px;
    word-spacing: 0;
    padding: 25px 0;
  }
}

#conoce-tus-derechos {
  background: #f9f9f9;
  padding-top: 65px;
}

.tus-derechos {
  padding-top: 0;

  .heading-derechos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .title-conoce-tus-derechos {
      padding: 25px 0;
      height: 90px;
    }
  }

  h2 {
    text-align: center;

    padding: 25px;
    width: 100%;
  }

  h3 {
    text-align: center;

    font-size: 22px;
    width: 100%;
    margin: 0 auto;
    padding: 25px;
  }

  .inner-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 1280px;
    margin: 0 auto;

    .consejos-item {
      padding: 15px 25px;
      max-width: 50%;
      flex: 1 1 40%;
      text-align: center;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      background: #fff;
      color: #373b75;
      font-weight: 600;
      min-height: 110px;
      margin: 15px;
      position: relative;

      @media only screen and (max-width: 560px) {
        max-width: 100%;
        flex: 1 1 100%;
        padding: 15px 0;
      }
    }

    .image {
      position: absolute;
      top: 13px;
      left: 30px;
      @media only screen and (max-width: 560px) {
        left: 0;
      }
    }

    .description {
      padding-left: 50px;
      text-align: left;
    }
  }
}

.atencion-medica {
  //background-color: #6e72b5 !important;
  max-width: 100% !important;
  padding: 10px 50px !important;
  background: #f9f9f9;
  border-top: 1px solid #ddd;

  @media only screen and (max-width: 560px) {
    padding: 50px 15px !important;
  }

  .heading-derechos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .title-conoce-tus-derechos {
      padding: 25px 0;
      height: 90px;
    }
  }

  h2 {
    text-align: center;
    //color: #fff;
    padding: 25px;
    width: 100%;
  }

  h3 {
    text-align: center;
    font-size: 30px;
    width: 100%;
    margin: 0 auto;
    padding: 45px 0 45px 0;
    color: #08143c;
    max-width: 800px;
    font-weight: 500;
  }

  .inner-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 1280px;
    margin: 0 auto;

    .consejos-item {
      padding: 15px 25px;
      max-width: 50%;
      flex: 1 1 40%;
      text-align: center;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      background: #fff;
      color: #373b75;
      font-weight: 600;
      min-height: 110px;
      margin: 15px;
      position: relative;

      @media only screen and (max-width: 560px) {
        max-width: 100%;
        flex: 1 1 100%;
      }
    }

    .image {
      position: absolute;
      top: 13px;
      left: 30px;
    }

    .description {
      padding-left: 50px;
      text-align: left;
    }
  }
}

.libre-desarollo-personal {
  max-width: 1000px !important;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 0 !important;

  .diversidad-trans {
    width: 100%;
    min-height: 260px;
    overflow: hidden;
    position: relative;
  }

  h3 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 27px;
    color: #4f8dcb;
  }
  p {
    font-size: 18px;
  }
}

.comic {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 95px;
  margin-top: 95px;

  .globo-celeste,
  .globo-rosa {
    margin-bottom: 25px;
    img {
      flex: 1;
    }
  }

  .globo-rosa {
    flex: 2;
  }

  .globo-celeste {
    flex: 1 1 14%;
  }
}
</style>
