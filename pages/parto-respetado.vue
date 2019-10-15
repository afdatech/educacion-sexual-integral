<template>
  <div class="main-container violencia-obstetrica">
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
    <div class="hero">
      <div class="featured-image">
        <img
          src="~/assets/images/parto-respetado/iso-protagonista-de-tu-parto.svg"
          alt="image-3"
          style="width: 250px"
          class="animate"
          data-aos-duration="800"
          data-aos="zoom-in"
        />
      </div>
      <div id="parto-respetado-intro" class="text-intro" style="flex: 1;align-items: center;justify-content: center;display: flex;">
        <div class="inner-text">
          <h2 style="margin-bottom: 15px">¿Qué es la violencia obstetrica?</h2>
          <p
            style="padding: 0"
          >Cualquier persona del equipo de salud puede ejercer violencia hacia la persona gestante durante la atención del embarazo, preparto, parto o cesárea, durante la interrupción legal del embarazo e incluso después.</p>
          <p
            style="padding: 0"
          >Se configura cuando cuando hay un trato deshumanizado, abuso de medicalización y patologización de los procesos naturales.</p>
          <button
            class="btn btn-primary"
            v-scroll-to="{el: '#tipos-de-violencias',duration: 1500,easing: 'ease-in-out'}"
          >Conocé algunos ejemplos</button>
        </div>
      </div>
    </div>
    <section
      class="parallax-parto"
      style=" background: #fff; "
      v-scroll-spy="{time: 1800, steps: 30}"
    >
      <article
        class="text-intro"
        id="tipos-de-violencias"
        style="    padding: 50px 0;
    background: #fff;"
      >
        <h2
          style="    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 15px;
    color: rgb(96, 112, 178);"
        >Algunos ejemplos</h2>
        <ul>
          <li>
            <img src="~/assets/images/parto-respetado/parto-con-visitas.svg" />
            <p>Impidiendo que entres con tu acompañante a las visitas, parto o cesárea.</p>
          </li>
          <li>
            <img src="~/assets/images/parto-respetado/con+sentimiento.svg" />
            <p>Realizando maniobras o intervenciones sin tu consentimiento o sin informarte sobre su realización.</p>
          </li>
          <li>
            <img src="~/assets/images/parto-respetado/contacto-con-tu-bebe.svg" />
            <p>Dificultando el contacto con tu bebé en caso de tener que permanecer separadas/separados.</p>
          </li>
          <li>
            <img src="~/assets/images/parto-respetado/analgesicos.svg" />
            <p>Minimizando tu dolor, negándote los analgésicos necesarios.</p>
          </li>
          <li>
            <img src="~/assets/images/parto-respetado/mal-trato.svg" />
            <p>Con descalificaciones, insultos o gritos.</p>
          </li>
          <li>
            <img src="~/assets/images/parto-respetado/culpabilidad.svg" />
            <p>Culpabilizándote por cualquier resultado desfavorable.</p>
          </li>
          <li>
            <img src="~/assets/images/parto-respetado/cesarea.svg" />
            <p>Sometiéndote cesáreas inncesarias.</p>
          </li>
        </ul>
      </article>

      <article class="ley-violencia-obstetrica">
        <div class="inner-law">
          <h4>
            Estas situaciones y otras representan lo que la Ley de protección integral para prevenir, sancionar y
            erradicar la violencia contra las mujeres (N° 26.485) define como VIOLENCIA OBSTÉTRICA.
          </h4>
        </div>
      </article>

      <article id="tus-derechos" class="tus-derechos">
        <div class="derechos-item flex-100">
          <h2 id="parto-respetado">Parto respetado | Ley 25 .929</h2>
          <p>
            La persona gestante es protagonista de su propio parto, tiene derecho a que se respeten sus propias decisiones sobre el embarazo, preparto, parto o cesárea, también durante la interrupción legal del embarazo e incluso después.
            Información.
          </p>
          <p>El personal médico tiene que informarte de las las distintas intervenciones médicas que pueden hacerte de manera que vos puedas elegir libremente cuál preferís cuando hay varias alternativas.</p>
          <p>Tienen que informarte cómo evoluciona tu parto, el estado de tu hijo o hija y de las diferentes actuaciones del equipo médico.</p>
        </div>
        <div class="derechos-item">
          <h2>Intimidad y Respeto</h2>
          <p>Tienen que tratarte con respeto y de modo individual. Tu intimidad tiene que estar garantizada y tienen que tener en cuenta tus pautas culturales.</p>
        </div>
        <div class="derechos-item">
          <h2>Parto Natural</h2>
          <p>Tienen que respetar tus tiempos biologicos y psicologicos. No te pueden hacer prácticas invasivas o darte medicación injustificada. Siempre que no corra riesgo tu vida o la de tu bebé, podés negarte a que te aceleren el parto. Podés decir que no a procedimientos de goteo, rotura artificial de bolsa o similares.</p>
        </div>
        <div class="derechos-item">
          <h2>Acompañamiento</h2>
          <p>Te puede acompañar una persona de tu confianza durante el trabajo de parto, el parto o cesárea y después. Esa persona no necesita ser tu pariente, lo importante es que la elijas vos.</p>
        </div>
        <div class="derechos-item">
          <h2>Permiso</h2>
          <p>Nadie puede obligarte a vos ni a tu bebé a participar de investigaciones y/o exámenes médicos sin tu permiso.</p>
        </div>
        <div class="derechos-item">
          <h2>A tu lado</h2>
          <p>Podés tener a su lado a tu hijo o hija durante todo el tiempo que estes en en el establecimiento sanitario, siempre que no requiera de cuidados especiales.</p>
        </div>
        <div class="derechos-item">
          <h2 id="derechos-del-paciente">Derechos del Paciente | Ley 26.529</h2>
          <p>Nadie puede obligarte a vos ni a tu bebé a participar de investigaciones y/o exámenes médicos sin tu permiso.</p>
        </div>
        <div class="derechos-item">
          <h2>Cobertura Obligatoria</h2>
          <p>
            El embarazo, el parto y el posparto deben ser cubiertos de
            manera obligatoria por las obras sociales y prepagas.
          </p>
        </div>
        <div class="derechos-item">
          <h2>Asistencia médica gratuita</h2>
          <p>
            La asistencia médica durante tu embarazo, parto y posparto es
            gratuita porque está dentro del Plan Médico Obligatorio.
          </p>
        </div>
        <div class="derechos-item">
          <h2>Atención médica</h2>
          <p>
            No te pueden negar la asistencia médica. Toda persona tiene
            derecho a ser asistida por médicos/médicas. Solo pueden dejar
            de atenderte cuando otro/otra médico/médica se haya hecho
            cargo.
          </p>
        </div>
        <div class="derechos-item">
          <h2>Trato digno y respetuoso</h2>
          <p>
            Tienen que tratarte bien y respetando tus convicciones
            personales, tu orientación sexual , identidad y expresión de
            género, tus condiciones socioculturales, tu pudor e intimidad.
            Las personas que te acompañan tienen el mismo derecho.
          </p>
        </div>
        <div class="derechos-item">
          <h2>Intimidad</h2>
          <p>
            Toda actividad médico - asistencial tiene que resguardar tu
            intimidad y la confidencialidad de datos sensibles.
          </p>
        </div>
        <div class="derechos-item">
          <h2>Confidencialidad</h2>
          <p>
            Los equipos médicos no pueden dar información a otras personas
            sobre tu salud. Los/las médicos/médicas que te atienden solo
            pueden informar a otros/otras acerca de tu estado de salud:
          </p>

          <ul>
            <li>Cuando tienen tu autorización.</li>
            <li>Cuando un juez o jueza se los pide.</li>
          </ul>
        </div>
        <div class="derechos-item">
          <h2>Autonomía de la Voluntad</h2>
          <p>Podés aceptar o rechazar determinadas terapias o procedimientos médicos o biológicos, con o sin expresión de causa.</p>
        </div>
        <div class="derechos-item" style="
    background: rgb(103, 110, 169);
    color: rgb(255, 255, 255);
    font-size: 22px;
    padding-right: 95px;
    flex: 1 1 60%;
">
          <p>Los niños, niñas y adolescentes tienen derecho a tomar sus propias decisiones sobre terapias o procedimientos médicos o biológicos que involucren su vida o salud de acuerdo a la Ley Nº 26.061.</p>
        </div>
        <div class="derechos-item">
          <h2>Información</h2>
          <p>
            Los/las médicos/médicas tienen que darte una explicación
            clara sobre:
          </p>
          <ul>
            <li>Tu estado de salud.</li>
            <li>Los beneficios y riesgos de los tratamientos que te recomiendan.</li>
            <li>Las consecuencias de no seguir los tratamientos recomendados. También podés negarte a recibir toda o parte de la información que no quieras conocer.</li>
          </ul>
        </div>
        <div class="derechos-item">
          <h2>Interconsulta Médica</h2>
          <p>
            Podés pedir que te den toda la información por escrito para
            hacer consultas con otros/otras médicos/médicas.
          </p>
        </div>
        <div class="derechos-item flex-100">
          <h2>Consentimiento informado</h2>
          <p>
            Después de que el/la médico/médica te explica los beneficios y
            riesgos del tratamiento recomendado, te pregunta si los
            aceptas. Si vos le decis que aceptas lo que te recomienda, esa
            aceptación se llama “consentimiento informado”. Podés hacer todas las preguntas que quieras al médico/
            médica antes de dar tu consentimiento para un tratamiento o
            intervención médica.
          </p>
          <p>
            Solo en casos excepcionales pueden atenderte sin tu
            consentimiento. Esto puede pasar cuando:
          </p>
          <ul>
            <li>Existe grave peligro para la salud pública.</li>
            <li>Está en grave peligro tu salud o tu vida y no podés dar tu consentimiento ni lo pueden dar tus representantes legales.</li>
          </ul>
          <p>
            El consentimiento informado en general se da verbalmente,
            pero debe hacerse por escrito cuando se trata de operaciones,
            internaciones y tratamientos invasivos o riesgosos.
          </p>
        </div>
        <div class="derechos-item flex-100">
          <h2>Historia clínica</h2>
          <p>
            Es el documento donde están todas las actuaciones médicas
            que te realizaron y la información sobre tu salud. La historia
            clínica es tuya. Podés pedirla en cualquier momento. Y tienen
            obligación de dártela dentro de las 48 horas de tu pedido. Si se
            trata de una urgencia, tienen obligación de dártela antes
            También pueden retirar tu historia clínica, entre otros/otras:
          </p>
          <li>Tu cónyuge o la persona que convive con vos.</li>
          <li>Tu representante legal (tu abogado/abogada, por ejemplo).</li>
          <li>Médicos/médicas que vos hayas autorizado.</li>
          <p>
            Si no quieren darte tu historia clínica podés iniciar una acción
            legal que se llama “habeas data”.
          </p>
        </div>
      </article>
      <article class="ley-proteccion">
        <h2>Ley 26.485</h2>
        <p>
          Ley de protección integral a las mujeres
          <br />Para prevenir, sancionar y
          erradicar la violencia contra
          las mujeres en los ámbitos
          en que desarrollen sus
          relaciones interpersonales
        </p>
      </article>
    </section>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  head: {
    bodyAttrs: {
      class: "parto-respetado "
    }
  },
  components: {
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
body.parto-respetado {
  position: relative;

  background-color: #89c755;

  section {
    padding: 0;
    background: #fff;
    padding-top: 100px;
    z-index: 2;
    position: relative;
  }

  .hero {
    min-height: 70vh;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
	padding-top: 10vh;
    background-color: #8cc140;

    @media only screen and (max-width: 1100px) {
      min-height: 100vh;
      height: auto !important;
      flex-direction: column;
      padding-top: 120px;
    }

    .featured-image {
		display: flex;
		flex-direction: column;
		flex: 1;
		align-items: center;
		justify-content: center;
		margin-bottom: 45px;
    }
    .inner-text {
      height: auto;
      box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.1),
        0 3px 5px 0 rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      background: #fff;
      padding: 25px;
      border-radius: 6px;
      text-align: left;
      max-width: 550px;
    }
  }

  .section-nav {
    li.active {
      border-left: 5px solid #89c755;

      a {
        color: #89c755;
      }
    }
  }

  header {
    transform: translateY(0) !important;
    //background: #ec1c5a;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  }

  .headroom--pinned header {
    //background: #89c755;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  }

  .parallax-bg {
    position: absolute;
    opacity: 0.3;
    z-index: 0;
  }
}
.container.parto-respetado {
  padding-top: 265px;
}
.parto-respetado article {
  margin: 0 auto 0;
  position: relative;
  z-index: 2;
  padding: 0 20px;

  border: 0 none;
  max-width: 100%;
}

.parto-respetado .tus-derechos {
  display: flex;
  flex-wrap: wrap;
  max-width: 1380px;
  margin: 0 auto;
  padding-top: 150px;
  .derechos-item {
    flex: 1 1 30%;
    margin: 15px;
    padding: 30px;
    background: #f9f9f9;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    @media only screen and (max-width: 560px) {
      max-width: 100%;
      flex: 1 1 100%;
    }

    h2 {
      font-size: 18px;
      text-align: left;
      padding: 0;
      font-weight: 600;
      text-transform: uppercase;
    }

    &.flex-100 {
      flex: 1 1 100%;
    }
  }
}

.text-intro {
  text-align: center;
  max-width: 1050px;
  width: 100%;
  margin: 0 auto;
  padding: 0 0;

  .subtitle {
    font-size: 20px;
    padding: 10px 35px;
  }

  p {
    padding: 0 35px;
  }

  cite {
    font-size: 20px;
    padding: 50px 35px;
    display: block;
    max-width: 650px;
    margin: 0 auto;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    max-width: 1320px;
    margin: 0 auto;
    margin-top: 0;
    li {
      flex: 1 1 20%;
      box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.1),
        0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      margin: 15px;
      padding: 35px 15px 15px;
      min-height: 100px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;

      @media only screen and (max-width: 560px) {
        max-width: 100%;
        flex: 1 1 100%;
      }

      img {
        margin-bottom: 25px;
      }
    }
  }
}

.parto-respetado-intro {
  flex: 1 1 50%;
  height: 100vh;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  padding-left: 10px;
  background: red;
}

#tipos-de-violencias {
  li {
    align-items: flex-start;
    text-align: left;
  }

  img {
    padding: 0 15px;
  }

  p {
    padding: 0 15px;
  }
}

.ley-violencia-obstetrica {
  padding: 0 !important;
  .inner-law {
    background: #6070b2;
    padding: 50px 15px;
    margin-top: 0;
    h4 {
      text-align: left;
      max-width: 660px;
      margin: 0 auto;
      font-size: 21px;
      padding: 15px;
      font-weight: 600;
      line-height: 33px;
      color: #fff;
    }
  }
}

.ley-proteccion {
  max-width: 600px !important;
  margin: 150px auto !important;
  color: #fff;
  border-bottom: 0 none;
  text-align: left;

  background: #7ea547;
  padding: 2em !important;
  p {
    font-size: 22px;
  }
}
</style>
