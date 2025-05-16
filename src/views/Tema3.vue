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
              .p-5.bg-c2
                ul.lista-ul--color.mb-4(data-aos="fade-right")
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Costo de los estudios de factibilidad: $60.000.000.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Ventas esperadas: Se deben tomar las cifras históricas del sector de las cantidades vendidas en los últimos 5 años. Se pretende penetrar el mercado en el año 1 de proyección en un 2 %. A partir del año 2 se proyecta incrementar el volumen de ventas al ritmo del crecimiento de la economía (tome como base el PIB). El precio proyectado para el año uno de proyección es de $135.000 la unidad y para los siguientes años un incremento en precios equivalente a la inflación del año anterior. Las ventas se efectúan todas a crédito y se les otorga a los clientes un plazo de 45 días para pagar.
                .row.align-items-center.mb-4.mb-lg-0
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
                          tr.bg-c7
                            td 2
                            td.txt-p1 $1.760.000
                          tr
                            td 3
                            td.txt-p1 $1.980.000
                          tr.bg-c7
                            td 4
                            td.txt-p1 $2.340.000
                          tr
                            td 5
                            td.txt-p1 $2.687.500
                  .col-lg-4(data-aos="fade-left")
                    figure
                      img(src='@/assets/curso/tema3/img1.svg', alt='', style="width: 400px").m-auto
                ul.lista-ul--color(data-aos="fade-right")
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Costos unitarios de materia prima: $30.000.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Mano de obra directa: $20.000 por unidad (sin prestaciones).
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Las prestaciones sociales representan el 50 % de los salarios a pagar y el 80 % de ellas se pagan en efectivo durante el período.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Costos indirectos de fabricación del primer año:
                  li.d-flex.ms-5
                    i.fas.fa-circle(style="color: #FD9826")
                    |
                    p.mb-0 Mano de obra indirecta: $300.000.000.
                  li.d-flex.ms-5
                    i.fas.fa-circle(style="color: #FD9826")
                    |
                    p.mb-0 Mantenimiento: $60.000.000.
                  li.d-flex.ms-5
                    i.fas.fa-circle(style="color: #FD9826")
                    |
                    p.mb-0 Arrendamiento: $180.000.000.
                  li.d-flex.ms-5
                    i.fas.fa-circle(style="color: #FD9826")
                    |
                    p.mb-0 Servicios públicos, aseo y vigilancia:
                  li.d-flex.ms-5
                    i.fas.fa-circle(style="color: #FD9826")
                    |
                    p.mb-0 $240.000.000.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Gastos de administración y ventas: $1.000.000.000.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Se debe comprar una máquina por $5.000.000.000, cuya vida útil se estima en 10 años y se deprecia por el método línea recta.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Un banco local prestará recursos al 20 % anual. El plazo para pagarlos será de 5 años y se cancelará en cuotas iguales al final de cada año.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 La tasa de impuesto a la renta será del 35 %.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Reparto de utilidades, el 50% de las utilidades netas de cada año.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Los proveedores de materia prima conceden un plazo de 60 días para el pago.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Para el primer año de operaciones se desea mantener un efectivo mínimo equivalente a dos meses de: gastos de administración y ventas, salarios (sin prestaciones) arrendamiento, mantenimiento y otros costos fijos (mencionados antes).
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 La política de inversión en activos corrientes planeada es:
                .row
                  .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
                    ul.lista-ul--color.mb-4
                      li.d-flex.ms-5
                        i.fas.fa-circle(style="color: #FD9826")
                        |
                        p.mb-0 Cuentas por cobrar: 45 días de ventas.
                      li.d-flex.ms-5
                        i.fas.fa-circle(style="color: #FD9826")
                        |
                        p.mb-0 Materia prima: 10 días de producción.
                      li.d-flex.ms-5
                        i.fas.fa-circle(style="color: #FD9826")
                        |
                        p.mb-0 Productos en proceso: 15 días de ventas expresado en unidades equivalentes terminadas.
                      li.d-flex.ms-5
                        i.fas.fa-circle(style="color: #FD9826")
                        |
                        p.mb-0 Productos terminados: 20 días de ventas.
                      li.d-flex
                        i.fas.fa-circle-check(style="color: #5B39A6")
                        |
                        p.mb-0 Se requiere una inversión en capital de trabajo para 4 meses.
                      li.d-flex
                        i.fas.fa-circle-check(style="color: #5B39A6")
                        |
                        p.mb-0 Se presupuesta que los volúmenes de ventas crezcan al ritmo del crecimiento de la economía (PIB).
                      li.d-flex
                        i.fas.fa-circle-check(style="color: #5B39A6")
                        |
                        p.mb-0 Los precios crecerán al ritmo de la inflación.
                      li.d-flex
                        i.fas.fa-circle-check(style="color: #5B39A6")
                        |
                        p.mb-0 Se presupuesta una política de reparto de utilidades del 50 % cada año.
                    p.mb-0 #[b El primer paso para seguir es la proyección de ventas.]
                  .col-lg-4(data-aos="fade-left")
                    figure
                      img(src='@/assets/curso/tema3/img2.svg', alt='', style="width: 400px").m-auto
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 Proyección de ventas
    p.mb-5 A continuación, se observa la proyección de cada rubro requerido.
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema3/img2.png', alt='', style='width: 60px; position: relative; left: -25px').m-auto
          .col.ps-0
            h3.mb-0 Ventas en unidades
    p.mb-4 El primer rubro que se debe proyectar es el de ventas tanto en volumen como en cantidades. Existen muchas técnicas de proyección de ventas, entre otras:
    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c6
          figure.mb-3
            img(src='@/assets/curso/tema3/img4.svg', alt='', style="width: 130px").m-auto
          p.mb-0 La elaboración de encuestas, practicadas por el equipo de ventas de una empresa pequeña o mediante la contratación de expertos en el caso de empresas más grandes.
      .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
        .p-4.bg-c6
          figure.mb-3
            img(src='@/assets/curso/tema3/img5.svg', alt='', style="width: 130px").m-auto
          p.mb-0 Utilización del método de análisis de series de tiempos en el caso de que las ventas de la empresa tengan componentes cíclicos o estacionales.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0
        .p-4.bg-c6
          figure.mb-3
            img(src='@/assets/curso/tema3/img6.svg', alt='', style="width: 130px").m-auto
          p.mb-0 Empleo de factores de crecimiento basados en indicadores macroeconómicos como el PIB y el IPC.
      .col-10.col-md-6.col-lg-3
        .p-4.bg-c6
          figure.mb-3
            img(src='@/assets/curso/tema3/img7.svg', alt='', style="width: 130px").m-auto
          p.mb-0 Análisis de regresión el cual establece una relación lineal de las ventas históricas bien sea de la empresa o del sector.
    .row.bg-c3.mb-5
      .col-12
        .px-5
          .row
            .col-12
              .p-5.bg-c2
                p.mb-5 El grupo asesor GCF proyectó las ventas del primer año de operación de la nueva línea de negocios en 58.000 unidades calculadas utilizando el método de regresión lineal que sigue la siguiente metodología:
                ol.lista-ol--cuadro.lista-ol.mb-4
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span A.
                    |
                    p.mb-0 Se dispone de las ventas históricas del sector durante los últimos 5 años:
                .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                  p.mb-0 #[b Tabla 2.] Ventas anuales del sector por año histórico (en cantidades)
                .row.justify-content-center.mb-5
                  .col-lg-8
                    .tabla-a.color-acento-botones(data-aos="fade-right")
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
                          tr.bg-c7
                            td 2
                            td.txt-p1 $1.760.000
                          tr
                            td 3
                            td.txt-p1 $1.980.000
                          tr.bg-c7
                            td 4
                            td.txt-p1 $2.340.000
                          tr
                            td 5
                            td.txt-p1 $2.687.500
                ol.lista-ol--cuadro.lista-ol.mb-4
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span B.
                    |
                    p.mb-0 Se proyectan las ventas futuras del sector para los próximos años utilizando la ecuación y = mx + b, en donde:
                .row.mb-4
                  .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
                    p #[b m] es la pendiente de la línea de regresión que representa el número de unidades que aumenta y por cada unidad de x. Se calcula con la siguiente fórmula:
                    figure
                      img(src='@/assets/curso/tema3/img8.svg', alt='', style="width: 300px").m-auto
                  .col-lg-6(data-aos="fade-left")
                    p #[b b] es la intersección de #[b y] en la línea de regresión cuando #[b x] toma el valor de cero. Se calcula con la siguiente fórmula:
                    figure
                      img(src='@/assets/curso/tema3/img9.svg', alt='', style="width: 340px").m-auto
                p.mb-5 #[b x] es el número del año histórico.
                ol.lista-ol--cuadro.lista-ol.mb-4
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span C.
                    |
                    p.mb-0 Para desarrollar las fórmulas de m y b se utilizó la siguiente tabla en Excel:
                .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                  p.mb-0 #[b Tabla 3.] Ventas anuales del sector por año histórico (en cantidades)
                .row.justify-content-center.mb-4
                  .col-lg-8
                    .tabla-a.color-acento-botones(data-aos="fade-right")
                      table
                        thead
                          tr
                            th(width="25%")
                              p.mb-0 #[b AÑO]
                              p.mb-0 #[b (HISTÓRICO)]
                            th
                              p.mb-0 #[b X]
                            th
                              p.mb-0 #[b Y]
                            th
                              p.mb-0 #[b XY]
                            th
                              p.mb-0 #[b X#[sup 2]]
                        tbody.bg-white
                          tr
                            td Año 1
                            td.txt-p1 1
                            td.txt-p1 $1.600.000
                            td.txt-p1 $1.600.000
                            td.txt-p1 1
                          tr.bg-c7
                            td Año 2
                            td.txt-p1 2
                            td.txt-p1 $1.760.000
                            td.txt-p1 $3.520.000
                            td.txt-p1 4
                          tr
                            td Año 3
                            td.txt-p1 3
                            td.txt-p1 $1.980.000
                            td.txt-p1 $5.940.000
                            td.txt-p1 9
                          tr.bg-c7
                            td Año 4
                            td.txt-p1 4
                            td.txt-p1 $2.340.000
                            td.txt-p1 $9.360.000
                            td.txt-p1 16
                          tr
                            td Año 5
                            td.txt-p1 5
                            td.txt-p1 $2.687.500
                            td.txt-p1 $13.437.500
                            td.txt-p1 25
                          tr.bg-c7
                            td Sumatorias
                            td.txt-p1 15
                            td.txt-p1 $28.865.000
                            td.txt-p1 $90.715.000
                            td.txt-p1 55
                p El resumen de los datos es el siguiente:
                .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                  p.mb-0 #[b Tabla 4.] Parámetros de la regresión lineal para ventas anuales del sector
                .row.justify-content-center.mb-5
                  .col-lg-8
                    .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
                      table
                        thead
                          tr
                            th(width="25%")
                              p.mb-0 #[b Concepto]
                            th
                              p.mb-0 #[b Valor]
                        tbody.bg-white
                          tr
                            td n
                            td.txt-p1 5
                          tr.bg-c7
                            td Sumatorias de Y
                            td.txt-p1 $28.865.000
                          tr
                            td Sumatorias de X
                            td.txt-p1 15
                          tr.bg-c7
                            td Sumatorias de XY
                            td.txt-p1 $90.715.000
                          tr
                            td Sumatorias de X#[sup 2]
                            td.txt-p1 55
                          tr.bg-c7
                            td Pendiente (#[i m])
                            td.txt-p1 $275.500
                          tr
                            td intersección (#[i b])
                            td.txt-p1 $1.247.000
                ol.lista-ol--cuadro.lista-ol.mb-4
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span D.
                    |
                    p.mb-0 A continuación, se presenta la gráfica de la línea de regresión elaborada con los datos consignados anteriormente:
                .row.justify-content-center.mb-5
                  .col-lg-auto
                    .p-4.bg-white.rounded
                      .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                        p.mb-0 #[b Figura 2]. Proyección de ventas basada en regresión lineal
                      figure
                        img(src='@/assets/curso/tema3/img10.svg', alt='Gráfico de dispersión con línea de regresión lineal que proyecta ventas a futuro, incluyendo la ecuación de la recta y=275,500x+1,247,000, sobre un eje horizontal del 0 al 6 y eje vertical con valores de ventas de 500,000 a 3,000,000.', style="width: 650px").m-auto
                ol.lista-ol--cuadro.lista-ol.mb-4
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span E.
                    |
                    p.mb-0 Con los datos calculados de m y b se proyectan las ventas del sector del primer año de proyección:
                .row.mb-3
                  .col-auto
                    .p-4.bg-c8
                      p.mb-0 Ventas año 1 = $275.500 x 6 + $1.247.000 = $2.900.00
                p.mb-5 Como se tienen datos de 5 años históricos, el año uno proyectado corresponde al número 6.
                ol.lista-ol--cuadro.lista-ol.mb-0
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span F.
                    |
                    p.mb-0 De acuerdo con un estudio del mercado, la empresa podría participar con una participación del 2% de la venta del sector, por lo cual la nueva línea vendería 58.000 unidades resultado de multiplicar 2.900.000 por el 2 % de participación.
                p.ms-4.ps-2 Para los siguientes 5 años la empresa asesora determinó viable incrementar la cantidad de unidades vendidas tomando como base el crecimiento de la economía representado por el indicador Producto Interno Bruto (PIB) del cual se conocieron los siguientes datos
                .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                  p.mb-0 #[b Tabla 5.] Crecimiento en unidades del PIB por año histórico
                .row.justify-content-center.mb-5
                  .col-lg-8
                    .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
                      table
                        thead
                          tr
                            th(width="25%")
                              p.mb-0 #[b Indicador de crecimiento]
                            th
                              p.mb-0 #[b AÑO 1]
                            th
                              p.mb-0 #[b AÑO 2]
                            th
                              p.mb-0 #[b AÑO 3]
                            th
                              p.mb-0 #[b AÑO 4]
                            th
                              p.mb-0 #[b AÑO 5]
                            th
                              p.mb-0 #[b AÑO 6]
                        tbody.bg-white
                          tr
                            td Crecimiento en unidades (PIB)
                            td.txt-p1 1,00 %
                            td.txt-p1 1,20 %
                            td.txt-p1 1,50 %
                            td.txt-p1 1,50 %
                            td.txt-p1 1,50 %
                            td.txt-p1 1,50 %
                ol.lista-ol--cuadro.lista-ol.mb-0
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span G.
                    |
                    p.mb-0 Luego para el segundo año se proyectaron unas ventas de 58.580 calculados con la fórmula: 58.000 x (1 + 1 %) Para el año 3 las ventas proyectadas fueron de 58.283 unidades, calculadas así: 58.283 x (1 + 1.2 %) Note que se debe tomar el PIB del período anterior.
                .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                  p.mb-0 #[b Tabla 6.] Proyección de ventas anuales esperadas por año histórico (en unidades)
                .row.justify-content-center
                  .col-lg-8
                    .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
                      table
                        thead
                          tr
                            th(width="25%")
                              p.mb-0 #[b Concepto]
                            th
                              p.mb-0 #[b AÑO 1]
                            th
                              p.mb-0 #[b AÑO 2]
                            th
                              p.mb-0 #[b AÑO 3]
                            th
                              p.mb-0 #[b AÑO 4]
                            th
                              p.mb-0 #[b AÑO 5]
                            th
                              p.mb-0 #[b AÑO 6]
                        tbody.bg-white
                          tr
                            td Ventas esperadas anuales - unidades
                            td.txt-p1 58.000
                            td.txt-p1 58.580
                            td.txt-p1 59.283
                            td.txt-p1 60.172
                            td.txt-p1 61.075
                            td.txt-p1 61.991
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema3/img2.png', alt='', style='width: 60px; position: relative; left: -25px').m-auto
          .col.ps-0
            h3.mb-0 Precio de Venta Unitario (PVU)
    p El PVU se determinó partiendo del precio de venta histórico promedio del sector en el último año histórico de $130.000 sobre el cual se efectuaron incrementos equivalentes a la inflación proyectada utilizando los siguientes datos del Índice de Precios al Consumidor (IPC):
    .row.bg-c3.mb-5
      .col-12
        .px-5
          .row
            .col-12
              .p-5.bg-c2
                .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                  p.mb-0 #[b Tabla 7.] Crecimiento en precios (IPC) por año histórico y proyectado
                .row.justify-content-center
                  .col-lg-10
                    .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
                      table
                        thead
                          tr
                            th(width="25%")
                              p.mb-0 #[b Indicador de crecimiento]
                            th
                              p.mb-0 #[b AÑO 5 (H)]
                            th
                              p.mb-0 #[b AÑO 1 (P)]
                            th
                              p.mb-0 #[b AÑO 2 (P)]
                            th
                              p.mb-0 #[b AÑO 3 (P)]
                            th
                              p.mb-0 #[b AÑO 4 (P)]
                            th
                              p.mb-0 #[b AÑO 5 (P)]
                            th
                              p.mb-0 #[b AÑO 6 (P)]
                        tbody.bg-white
                          tr
                            td Crecimiento en precios (IPC)
                            td.txt-p1 3,85 %
                            td.txt-p1 3,20 %
                            td.txt-p1 3,20 %
                            td.txt-p1 3,00 %
                            td.txt-p1 3,00 %
                            td.txt-p1 3,00 %
                            td.txt-p1 3,00 %
                p El PVU del primer año de proyección ascendió a $135.000 resultado de multiplicar: 130.000 x (1 + 3.85 %)
                p.mb-4 Para los siguientes años se utilizó el mismo procedimiento dando como resultado los siguientes PVU:
                .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                  p.mb-0 #[b Tabla 8.] Proyección del precio de venta unitario por año histórico
                .row.justify-content-center
                  .col-lg-10
                    .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
                      table
                        thead
                          tr
                            th(width="25%")
                              p.mb-0 #[b Concepto]
                            th
                              p.mb-0 #[b AÑO 1]
                            th
                              p.mb-0 #[b AÑO 2]
                            th
                              p.mb-0 #[b AÑO 3]
                            th
                              p.mb-0 #[b AÑO 4]
                            th
                              p.mb-0 #[b AÑO 5]
                            th
                              p.mb-0 #[b AÑO 6]
                        tbody.bg-white
                          tr
                            td Precio de venta unitario
                            td.txt-p1 $135.000
                            td.txt-p1 $139.320
                            td.txt-p1 $143.778
                            td.txt-p1 $148.092
                            td.txt-p1 $152.534
                            td.txt-p1 $157.110
                p.mb-4 Con los datos de volumen de ventas y precio de venta unitario se proyectan las ventas totales del nuevo negocio. Para el año uno sería de $7.830.000.000, cifra calculada con la fórmula: 58.000 x $135.000. El siguiente es el cuadro de ventas proyectadas:
                .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                  p.mb-0 #[b Tabla 9.] Proyección de ingresos por ventas anuales
                .row
                  .col-12
                    .tabla-a.color-acento-botones(data-aos="fade-right")
                      table
                        thead
                          tr
                            th(width="15%")
                              p.mb-0 #[b Concepto]
                            th
                              p.mb-0 #[b AÑO 1]
                            th
                              p.mb-0 #[b AÑO 2]
                            th
                              p.mb-0 #[b AÑO 3]
                            th
                              p.mb-0 #[b AÑO 4]
                            th
                              p.mb-0 #[b AÑO 5]
                            th
                              p.mb-0 #[b AÑO 6]
                        tbody.bg-white
                          tr
                            td Ventas
                            td.txt-p1 $7.830.000.000
                            td.txt-p1 $8.161.365.600
                            td.txt-p1 $8.523.605.402
                            td.txt-p1 $8.910.966.985
                            td.txt-p1 $9.316.034.499
                            td.txt-p1 $9.739.428.628
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema3/img2.png', alt='', style='width: 60px; position: relative; left: -25px').m-auto
          .col.ps-0
            h3.mb-0 Proyección del costo de producción
    p.mb-5 El costo de producción está formado por la materia prima (MP) la mano de obra directa (MOD) y los costos indirectos de fabricación (CIF).
    .row.bg-c3.mb-5
      .col-12
        .px-5
          .row
            .col-12
              .p-5.bg-c2
                ul.lista-ul--color.mb-4(data-aos="fade-right")
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Para calcular el costo unitario de materia prima se parte del dato de entrada de 30.000 determinado por GCF SAS y se proyecta con el IPC. Para el primer año proyectado su valor sería de $30.960 calculado así: 30.000 x (1 + 3.2 %) y así para los demás años.
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 Para proyectar el valor de la MOD se sigue el mismo procedimiento utilizado con la MP:
                .row.mb-3
                  .col-auto
                    .p-4.bg-c8
                      p.mb-0 20.000 X (1 + 3.2 %) = 20.640
                ul.lista-ul--color.mb-5(data-aos="fade-right")
                  li.d-flex
                    i.fas.fa-circle-check(style="color: #5B39A6")
                    |
                    p.mb-0 El resumen de las proyecciones está resumido en el siguiente cuadro:
                .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                  p.mb-0 #[b Tabla 10.] Costos unitarios directos por año histórico
                .row.mb-5
                  .col-12
                    .tabla-a.color-acento-botones(data-aos="fade-right")
                      table
                        thead
                          tr
                            th(width="25%")
                              p.mb-0 #[b RUBO]
                            th
                              p.mb-0 #[b AÑO 1]
                            th
                              p.mb-0 #[b AÑO 2]
                            th
                              p.mb-0 #[b AÑO 3]
                            th
                              p.mb-0 #[b AÑO 4]
                            th
                              p.mb-0 #[b AÑO 5]
                            th
                              p.mb-0 #[b AÑO 6]
                        tbody.bg-white
                          tr
                            td Costo unitario de materia prima
                            td.txt-p1 $30.000
                            td.txt-p1 $30.960
                            td.txt-p1 $31.951
                            td.txt-p1 $32.909
                            td.txt-p1 $33.897
                            td.txt-p1 $34.913
                          tr.bg-c7
                            td Costo unitario de mano de obra directa
                            td.txt-p1 $20.000
                            td.txt-p1 $20.640
                            td.txt-p1 $21.300
                            td.txt-p1 $22.939
                            td.txt-p1 $22.598
                            td.txt-p1 $23.276
                .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                  p.mb-0 #[b Tabla 11.] Costos indirectos de fabricación por año histórico
                .row
                  .col-12
                    .tabla-a.color-acento-botones(data-aos="fade-right")
                      table
                        thead
                          tr
                            th(width="15%")
                              p.mb-0 #[b RUBO]
                            th
                              p.mb-0 #[b AÑO 1]
                            th
                              p.mb-0 #[b AÑO 2]
                            th
                              p.mb-0 #[b AÑO 3]
                            th
                              p.mb-0 #[b AÑO 4]
                            th
                              p.mb-0 #[b AÑO 5]
                            th
                              p.mb-0 #[b AÑO 6]
                        tbody.bg-white
                          tr
                            td Mano de obra indirecta
                            td.txt-p1 $300.000.000
                            td.txt-p1 $309.600.000
                            td.txt-p1 $319.507.200
                            td.txt-p1 $329.092.416
                            td.txt-p1 $338.965.188
                            td.txt-p1 $349.134.144
                          tr.bg-c7
                            td Arrendamiento
                            td.txt-p1 $180.000.000
                            td.txt-p1 $185.760.000
                            td.txt-p1 $191.704.320
                            td.txt-p1 $197.455.450
                            td.txt-p1 $203.379.113
                            td.txt-p1 $209.480.486
                          tr
                            td Mantenimiento
                            td.txt-p1 $60.000.000
                            td.txt-p1 $61.920.000
                            td.txt-p1 $63.901.440
                            td.txt-p1 $65.818.483
                            td.txt-p1 $67.793.038
                            td.txt-p1 $69.826.829
                          tr.bg-c7
                            td Servicios públicos, aseo y vigilancia
                            td.txt-p1 $240.000.000
                            td.txt-p1 $247.680.000
                            td.txt-p1 $255.605.760
                            td.txt-p1 $263.273.933
                            td.txt-p1 $271.172.151
                            td.txt-p1 $279.307.315
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 Proyección de los gastos de operación
    .row.bg-c3
      .col-12
        .px-5
          p.mb-4 Como se sabe, según el área donde se generen se pueden clasificar como de administración o de ventas. Entre los gastos de operación que el nuevo negocio planea tener se encuentran los siguientes:
          .row.justify-content-center.mb-4
            .col-lg-auto
              .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                p.mb-0 #[b Figura 3.] Clasificación de los gastos de operación: desembolsables y no desembolsables
              figure
                img(src='@/assets/curso/tema3/img11.svg', alt='abla sobre clasificación de los gastos de operación dividida en gastos desembolsables y no desembolsables, con dos categorías principales: gastos de administración y gastos de ventas.', style='width: 750px').m-auto
          p Como se puede apreciar el nombre de los gastos en la mayoría de los casos es el mismo concepto, pero se diferencian porque se generan en diferentes áreas de la empresa. La metodología para proyectar los gastos de operación, excepto las depreciaciones y amortizaciones, es la misma utilizada con la materia prima y la mano de obra directa: se toman los datos de entrada para el primer año y se proyectan con el dato del IPC.
          p #[b Para el segundo año proyectado la cifra queda en $1.032.000.000 calculada de la siguiente manera:]
          .row.mb-3
            .col-auto
              .p-4.bg-c8
                p.mb-0 Gastos de operación Año 2 = 1.000.000.000 * (1 + 3.2 %)
          p #[b La proyección para los seis años queda de la siguiente manera:]
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
            p.mb-0 #[b Tabla 12.] Gastos de administración y venta por año histórico
          .row
            .col-12
              .tabla-a.color-acento-botones(data-aos="fade-right")
                table
                  thead
                    tr
                      th(width="15%")
                        p.mb-0 #[b Concepto]
                      th
                        p.mb-0 #[b AÑO 1]
                      th
                        p.mb-0 #[b AÑO 2]
                      th
                        p.mb-0 #[b AÑO 3]
                      th
                        p.mb-0 #[b AÑO 4]
                      th
                        p.mb-0 #[b AÑO 5]
                      th
                        p.mb-0 #[b AÑO 6]
                  tbody.bg-white
                    tr
                      td Gastos de administración y venta
                      td.txt-p1 $1.000.000.000
                      td.txt-p1 $1.032.000.000
                      td.txt-p1 $1.065.024.000
                      td.txt-p1 $1.096.974.720
                      td.txt-p1 $1.129.883.962
                      td.txt-p1 $1.163.780.480
    Separador
    #t_3_3
    .titulo-segundo.color-acento-contenido
      h2 3.3 Proyección del costo de producción
    p.mb-4 Para determinar el número de unidades a producir, cifra que depende del volumen de ventas, y de las políticas sobre inventarios de productos en proceso y productos terminados. En este proceso se utiliza el conocido método de juego de inventarios de la siguiente manera:

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
