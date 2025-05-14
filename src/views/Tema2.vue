<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Planeación financiera
    .row.bg-c3
      .col-12
        .px-5
          .row.align-items-center.mb-4
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c4
                p.mb-0 Hace parte de la planeación estratégica, su objetivo fundamental es establecer los caminos que debe transitar la compañía en el futuro para asegurar la generación de valor de la empresa y el crecimiento de la riqueza para los accionistas, para lo cual es necesario centrar los esfuerzos en incluir los principales componentes de las políticas de inversión y de financiación.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img1.png', alt='', style="width: 400px").m-auto
          p.mb-4(data-aos="fade-down") #[b El plan financiero se cuantifica proyectado los ingresos, costos, gastos, activos, pasivos y patrimonio para un mediano o largo plazo. Se puede seguir el siguiente orden:]
          .row.align-items-center
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c2
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Monto discriminado de las inversiones requeridas por la empresa tanto para desarrollar la operación en forma eficiente como para los nuevos proyectos de inversión, de acuerdo con las estrategias empresariales consignadas en el plan estratégico.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Determinación de las fuentes de financiación que garanticen la estructura de capital más adecuada en cuanto a plazos, tasas de interés, riesgo, capacidad de pago y demás condiciones propias del endeudamiento tanto con pasivo como con patrimonio. Se deben seguir las políticas de financiación consignadas en el plan estratégico.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Proyección de ventas anuales en cantidades y en precios.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Proyección de costos anuales discriminado por cada uno de los elementos del costo de producción.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Proyección de gastos de operación.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Proyección del estado de flujo de efectivo requerido que necesitará la operación.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Proyección del estado financiero de resultados.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Proyección del estado financiero de situación financiera.
            .col-lg-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img1.svg', alt='', style="width: 440px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
