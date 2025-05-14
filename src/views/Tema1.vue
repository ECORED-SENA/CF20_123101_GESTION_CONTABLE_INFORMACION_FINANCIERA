<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Planeación estratégica
    .row.bg-c3
      .col-12
        .px-5
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c2
                p.mb-0 En este punto se desarrollan los aspectos generales de la planeación estratégica que es la base para efectuar la proyección de los Estado Financieros, es necesario, que realice un recorrido por todo el contenido y que pueda realizar los ejercicios para la comprensión y puesta en marcha de este en su ejercicio educativo.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img2.png', alt='', style="width: 400px").m-auto
          Separador
          #t_1_1
          .titulo-segundo.color-acento-contenido
            h2 1.1 Concepto
          .row.align-items-center.mb-4
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p La planeación estratégica se define como el proceso gerencial que tiene por objeto diseñar el derrotero futuro del negocio en todas y cada una de sus áreas, para lo cual es necesario conocer a profundidad su evolución histórica y la realidad actual de la empresa, tanto internamente como en su entorno. El análisis estratégico de la empresa tiene por objeto responder las siguientes preguntas:
              ul.lista-ul--color.ms-4.mb-0
                li.d-flex
                  i.fas.fa-circle-check(style="color: #5B39A6")
                  |
                  p.mb-0 ¿Por qué existe la organización?
                li.d-flex
                  i.fas.fa-circle-check(style="color: #5B39A6")
                  |
                  p.mb-0 ¿Qué hace?
                li.d-flex
                  i.fas.fa-circle-check(style="color: #5B39A6")
                  |
                  p.mb-0 ¿Cómo lo hace?
                li.d-flex
                  i.fas.fa-circle-check(style="color: #5B39A6")
                  |
                  p.mb-0 ¿Para dónde se dirige?
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img1.svg', alt='', style="width: 400px").m-auto
          .row
            .col-12
              .p-4.bg-c2(data-aos="fade-left")
                p.mb-0 Planear es pensar en el futuro y la estrategia es la guía, la forma en que se debe pensar, la cual, se debe plasmar en un plan, por lo tanto, la planeación estratégica se puede definir como la proyección del futuro utilizando un plan. Tiene por finalidad establecer los objetivos que la empresa desea alcanzar y tiene como fase inicial el análisis de la empresa a su interior con el ánimo de determinar sus debilidades y fortalezas y también de su entorno para detectar oportunidades y amenazas. Con estos cuatro elementos se construyen las estrategias que tienen por objetivo fijar la ruta por la cual la empresa debe transitar para conseguir la visión previamente fijada.
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 Planes empresariales
    p.mb-4(data-aos="fade-down") Las empresas deben elaborar tres tipos de planes según el nivel jerárquico en el que se requiere.
    .row.justify-content-center.mb-5
      .col-auto
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
          p.mb-0 #[b Figura 1.] Planes según nivel jerárquico
        figure.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img2.svg', alt='Esquema sobre planes organizacionales según el nivel jerárquico que distingue entre nivel institucional, intermedio y operacional, con sus respectivas definiciones de planeación (estratégica, táctica y operacional) y el enfoque común hacia una organización orientada al largo plazo, con acción global y concertada.', style='width: 1050px').m-auto
    .row.align-items-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c2
          p Los planes estratégicos son elaborados por la alta dirección del negocio, tienen un horizonte de cinco o más años. En él se plasman decisiones de carácter cualitativo y numérico. Éstas últimas quedan registradas en el plan financiero de la organización.
          p Los planes tácticos son propios del nivel gerencial y corresponde elaborarlos a los diferentes subgerentes de la compañía: ventas, producción, mercadeo, finanzas y recursos humanos. Son de mediano plazo entre uno y tres años.
          p.mb-0 Los planes operativos son elaborados por el nivel operativo de la empresa en cada una de las áreas, son de corto plazo.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img3.png', alt='', style="width: 480px").m-auto
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
