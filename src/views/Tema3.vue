<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="flip-up")
        span 3
      h1 Ejercicio práctico de proyección de estados financieros
    .row.bg-c3
      .col-12
        .px-5
          .row.align-items-center.mb-4
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c4
                p.mb-0 Una empresa del sector de alimentos procesados está planeando abrir una nueva línea de productos y desea determinar cuál sería el monto de la inversión requerida, las posibles fuentes de financiamiento, el impacto de las políticas de cartera, inventarios, endeudamiento y reparto de utilidades sobre la situación financiera del nuevo negocio. Para tal fin ha contratado los servicios de la firma Gestión Contable y Financiera Asesores S.A.S (GCF) para que efectúe las proyecciones financieras de la nueva unidad de negocios para los próximos 6 años.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema3/img1.png', alt='', style="width: 400px").m-auto
          p.mb-4 Dentro del trabajo desarrollado por la empresa asesora, se conocieron los siguientes datos extractados del estudio de factibilidad elaborado:
          .row
            .col-12
              .p-4.bg-c2
                ul.lista-ul--color.mb-4(data-aos="fade-right")
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Costo de los estudios de factibilidad: $60.000.000.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Ventas esperadas: Se deben tomar las cifras históricas del sector de las cantidades vendidas en los últimos 5 años. Se pretende penetrar el mercado en el año 1 de proyección en un 2%. A partir del año 2 se proyecta incrementar el volumen de ventas al ritmo del crecimiento de la economía (tome como base el PIB). El precio proyectado para el año uno de proyección es de $135.000 la unidad y para los siguientes años un incremento en precios equivalente a la inflación del año anterior. Las ventas se efectúan todas a crédito y se les otorga a los clientes un plazo de 45 días para pagar.
                .row.align-items-center
                  .col-lg-8
                    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                      p.mb-0 #[b Tabla 1.] Ventas anuales del sector por año histórico (en cantidades)
                    .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
                      table
                        thead
                          tr
                            th(width="25%")
                              p.mb-0 #[b AÑO]
                              p.mb-0 #[b (HISTÓRICO)]
                            th
                              p.mb-0 #[b VENTAS ANUALES EN]
                              p.mb-0 #[b CANTIDADES DEL SECTOR]
                        tbody.bg-white
                          tr
                            td 1
                            td.txt-p1 $1.600.000
                          tr
                            td 2
                            td.txt-p1 $1.760.000
                          tr
                            td 3
                            td.txt-p1 $1.980.000
                          tr
                            td 4
                            td.txt-p1 $2.340.000
                          tr
                            td 5
                            td.txt-p1 $2.687.500
                  .col-lg-4(data-aos="fade-left")
                    figure
                      img(src='@/assets/curso/tema3/img1.svg', alt='', style="width: 400px").m-auto


</template>

<script>
export default {
  name: 'Tema3',
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
