<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5.pb-5
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p El presente componente brinda las bases conceptuales y prácticas que permitirán efectuar la proyección de los estados financieros de resultados, flujo de efectivo y balance general.
              .row
                .col-12
                  .p-4.bg-c2
                    p.mb-0 #[b Nota aclaratoria:] las tablas que se toman como referencia en los ejemplos en cada uno de los temas desarrollados, elaboradas mediante el programa Excel, son derivadas de los mismos, por lo tanto, no se numeran y la elaboración es propia del autor del presente componente.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img2.png', alt='', style="width: 400px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
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
