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
                              p.mb-0 #[b Año]
                              p.mb-0 #[b (Histórico)]
                            th
                              p.mb-0 #[b Ventas anuales en]
                              p.mb-0 #[b cantidades del sector]
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
                .row.justify-content-center.mb-5
                  .col-lg-8
                    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                      p.mb-0 #[b Tabla 2.] Ventas anuales del sector por año histórico (en cantidades)
                    .tabla-a.color-acento-botones(data-aos="fade-right")
                      table
                        thead
                          tr
                            th(width="25%")
                              p.mb-0 #[b Año]
                              p.mb-0 #[b (Histórico)]
                            th
                              p.mb-0 #[b Ventas anuales en]
                              p.mb-0 #[b cantidades del sector]
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
                      img(src='@/assets/curso/tema3/img8.svg', alt='Fórmula que calcula la pendiente de una recta de regresión, donde m es igual a la diferencia entre el producto de n por la suma de xy y el producto de las sumas de x y de y, dividida entre la diferencia del producto de n por la suma de x al cuadrado y el cuadrado de la suma de x.', style="width: 300px").m-auto
                  .col-lg-6(data-aos="fade-left")
                    p #[b b] es la intersección de #[b y] en la línea de regresión cuando #[b x] toma el valor de cero. Se calcula con la siguiente fórmula:
                    figure
                      img(src='@/assets/curso/tema3/img9.svg', alt='Fórmula  que calcula la ordenada al origen de una recta de regresión, donde b es igual a la diferencia entre el producto de la suma de y por la suma de x al cuadrado y el producto de las sumas de x y de xy, dividida entre la diferencia del producto de n por la suma de x al cuadrado y el cuadrado de la suma de x.', style="width: 340px").m-auto
                p.mb-5 #[b x] es el número del año histórico.
                ol.lista-ol--cuadro.lista-ol.mb-4
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span C.
                    |
                    p.mb-0 Para desarrollar las fórmulas de m y b se utilizó la siguiente tabla en Excel:
                .row.justify-content-center.mb-4
                  .col-lg-8
                    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                      p.mb-0 #[b Tabla 3.] Ventas anuales del sector por año histórico (en cantidades)
                    .tabla-a.color-acento-botones(data-aos="fade-right")
                      table
                        thead
                          tr
                            th(width="25%")
                              p.mb-0 #[b Año]
                              p.mb-0 #[b (Histórico)]
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
                .row.justify-content-center.mb-5
                  .col-lg-8
                    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                      p.mb-0 #[b Tabla 4.] Parámetros de la regresión lineal para ventas anuales del sector
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
                    p.mb-0 De acuerdo con un estudio del mercado, la empresa podría participar con una participación del 2 % de la venta del sector, por lo cual la nueva línea vendería 58.000 unidades resultado de multiplicar 2.900.000 por el 2 % de participación.
                p.ms-4.ps-2 Para los siguientes 5 años la empresa asesora determinó viable incrementar la cantidad de unidades vendidas tomando como base el crecimiento de la economía representado por el indicador Producto Interno Bruto (PIB) del cual se conocieron los siguientes datos
                .row.justify-content-center.mb-5
                  .col-lg-8
                    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                      p.mb-0 #[b Tabla 5.] Crecimiento en unidades del PIB por año histórico
                    .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
                      table
                        thead
                          tr
                            th(width="25%")
                              p.mb-0 #[b Indicador de crecimiento]
                            th
                              p.mb-0 #[b Año 1]
                            th
                              p.mb-0 #[b Año 2]
                            th
                              p.mb-0 #[b Año 3]
                            th
                              p.mb-0 #[b Año 4]
                            th
                              p.mb-0 #[b Año 5]
                            th
                              p.mb-0 #[b Año 6]
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
                .row.justify-content-center
                  .col-lg-8
                    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                      p.mb-0 #[b Tabla 6.] Proyección de ventas anuales esperadas por año histórico (en unidades)
                    .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
                      table
                        thead
                          tr
                            th(width="25%")
                              p.mb-0 #[b Concepto]
                            th
                              p.mb-0 #[b Año 1]
                            th
                              p.mb-0 #[b Año 2]
                            th
                              p.mb-0 #[b Año 3]
                            th
                              p.mb-0 #[b Año 4]
                            th
                              p.mb-0 #[b Año 5]
                            th
                              p.mb-0 #[b Año 6]
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
                .row.justify-content-center
                  .col-lg-10
                    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                      p.mb-0 #[b Tabla 7.] Crecimiento en precios (IPC) por año histórico y proyectado
                    .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
                      table
                        thead
                          tr
                            th(width="25%")
                              p.mb-0 #[b Indicador de crecimiento]
                            th
                              p.mb-0 #[b Año 5 (H)]
                            th
                              p.mb-0 #[b Año 1 (P)]
                            th
                              p.mb-0 #[b Año 2 (P)]
                            th
                              p.mb-0 #[b Año 3 (P)]
                            th
                              p.mb-0 #[b Año 4 (P)]
                            th
                              p.mb-0 #[b Año 5 (P)]
                            th
                              p.mb-0 #[b Año 6 (P)]
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
                .row.justify-content-center
                  .col-lg-10
                    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                      p.mb-0 #[b Tabla 8.] Proyección del precio de venta unitario por año histórico
                    .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
                      table
                        thead
                          tr
                            th(width="25%")
                              p.mb-0 #[b Concepto]
                            th
                              p.mb-0 #[b Año 1]
                            th
                              p.mb-0 #[b Año 2]
                            th
                              p.mb-0 #[b Año 3]
                            th
                              p.mb-0 #[b Año 4]
                            th
                              p.mb-0 #[b Año 5]
                            th
                              p.mb-0 #[b Año 6]
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
                              p.mb-0 #[b Año 1]
                            th
                              p.mb-0 #[b Año 2]
                            th
                              p.mb-0 #[b Año 3]
                            th
                              p.mb-0 #[b Año 4]
                            th
                              p.mb-0 #[b Año 5]
                            th
                              p.mb-0 #[b Año 6]
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
                              p.mb-0 #[b Rubro]
                            th
                              p.mb-0 #[b Año 1]
                            th
                              p.mb-0 #[b Año 2]
                            th
                              p.mb-0 #[b Año 3]
                            th
                              p.mb-0 #[b Año 4]
                            th
                              p.mb-0 #[b Año 5]
                            th
                              p.mb-0 #[b Año 6]
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
                              p.mb-0 #[b Rubro]
                            th
                              p.mb-0 #[b Año 1]
                            th
                              p.mb-0 #[b Año 2]
                            th
                              p.mb-0 #[b Año 3]
                            th
                              p.mb-0 #[b Año 4]
                            th
                              p.mb-0 #[b Año 5]
                            th
                              p.mb-0 #[b Año 6]
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
                img(src='@/assets/curso/tema3/img11.svg', alt='Tabla sobre clasificación de los gastos de operación dividida en gastos desembolsables y no desembolsables, con dos categorías principales: gastos de administración y gastos de ventas.', style='width: 750px').m-auto
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
                        p.mb-0 #[b Año 1]
                      th
                        p.mb-0 #[b Año 2]
                      th
                        p.mb-0 #[b Año 3]
                      th
                        p.mb-0 #[b Año 4]
                      th
                        p.mb-0 #[b Año 5]
                      th
                        p.mb-0 #[b Año 6]
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
    .row.justify-content-center.mb-4
      .col-lg-7
        .row.justify-content-center
          .col-10.col-md-7.col-lg.bg-c2
            .row.align-items-center.h-100
              .col
                .p-4
                  p.mb-4 #[b Inventario inicial]
                  p.mb-0 (+) Unidades a producir 
                  p.mb-0 (-) Inventario final 
                  p.mb-0 (=) Unidades a vender
          .col-10.col-md-7.col-lg-auto.px-0
            figure
              img(src='@/assets/curso/tema3/img4.png', alt='', style="width: 400px").m-auto
    p.mb-4 Como lo que se desea determinar es el número de unidades a producir, se despeja la ecuación anterior:
    .row.justify-content-center.mb-4
      .col-lg-7
        .row.justify-content-center
          .col-10.col-md-7.col-lg.bg-c2
            .row.align-items-center.h-100
              .col
                .p-4
                  p.mb-4 #[b Unidades a vender]
                  p.mb-0 (+) Inventario inicial
                  p.mb-0 (-) Inventario final
                  p.mb-0 (=) Unidades a producir
          .col-10.col-md-7.col-lg-auto.px-0
            figure
              img(src='@/assets/curso/tema3/img5.png', alt='', style="width: 400px").m-auto
    p.mb-4 Ahora bien, el caso plantea que al final del periodo presupuestado quedan no sólo unidades de productos terminados sino también de productos en proceso, por lo cual se efectúa un doble juego de inventarios como se ilustra a continuación:.mb-0
    .row.justify-content-center.mb-4
      .col-lg-9
        .row.justify-content-center
          .col-10.col-md-8.col-lg.bg-c2
            .row.align-items-center.h-100
              .col
                .p-4
                  p.mb-4 #[b Unidades para vender]
                  p.mb-0 (-) Inventario inicial de productos en proceso
                  p.mb-0 (-) Inventario final de productos terminados
                  p.mb-0 (+) Inventario final de productos en proceso
                  p.mb-0 (-) Inventario final de productos terminados
                  p.mb-0 (=) Unidades a producir
          .col-10.col-md-8.col-lg-auto.px-0
            figure
              img(src='@/assets/curso/tema3/img6.png', alt='', style="width: 440px").m-auto
    p.mb-4 Si se tiene en cuenta que es el primer año de operaciones de la nueva línea de negocio, los valores de inventarios iniciales serán cero. Para calcular las cantidades de inventarios finales se utilizan los índices de rotación, que para el caso de los productos terminados es de 18, dato calculado con base en el dato de entrada que indica que la empresa tardaría en promedio 20 días en vender sus nuevos productos:
    figure.mb-4
      img(src='@/assets/curso/tema3/img12.svg', alt='Fórmula para calcular la rotación de productos terminados. Se presenta de la siguiente manera: Rotación de productos terminados = (Días del año / Días de ventas) = (360 / 20) = 18. Esto indica que los productos terminados rotan 18 veces al año, suponiendo un año comercial de 360 días y un periodo promedio de 20 días de ventas por rotación.', style="width: 700px").m-auto
    p.mb-4 La rotación de productos en proceso es de 24 calculado con la siguiente fórmula:
    figure.mb-4
      img(src='@/assets/curso/tema3/img13.svg', alt='Fórmula para calcular la rotación de productos en proceso. La expresión mostrada es: Rotación de productos en proceso = (Días del año / Días de ventas) = (360 / 15) = 24. Esto significa que los productos en proceso rotan 24 veces al año, asumiendo un año comercial de 360 días y un ciclo promedio de 15 días por rotación.', style="width: 700px").m-auto
    p.mb-4 Recuerde que una política de inventario de productos terminados de 20 días significa que el gerente de ventas espera que el proceso de venta dure máximo 20 días, por consiguiente, al final del periodo proyectado quedarán unidades terminadas para 20 días de ventas. ¿Cuál es ese número de unidades?
    figure.mb-4
      img(src='@/assets/curso/tema3/img14.svg', alt='Fórmula para calcular el inventario final de productos terminados. Se expresa de la siguiente manera: Inventario final de productos terminados = (Ventas proyectadas / Rotación de productos terminados). En la fórmula se sustituyen los valores: 58,000 dividido entre 18, lo cual da como resultado 3,222. Esto representa que, con ventas proyectadas de 58,000 unidades y una rotación de productos terminados de 18 veces al año, el inventario final necesario será de aproximadamente 3,222 unidades.', style="width: 700px").m-auto
    p.mb-4 De igual manera se calcula el número de unidades terminadas equivalentes al inventario final de productos en proceso:
    figure.mb-4
      img(src='@/assets/curso/tema3/img15.svg', alt='Fórmula para calcular el inventario final de productos terminados, mostrada como: Inventario final de productos terminados = (Ventas proyectadas / Rotación de productos terminados). En este caso, se presentan los siguientes valores: 58,000 dividido entre 24, lo cual da como resultado 2,417. Esto indica que, con ventas proyectadas de 58,000 unidades y una rotación de productos terminados de 24 veces al año, el inventario final requerido será de aproximadamente 2,417 unidades.', style="width: 700px").m-auto
    p.mb-4 Con los datos anteriores se calcula el número de unidades a producir para el año uno, bajo el siguiente esquema:
    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
          p.mb-0 #[b Tabla 13.] Cálculo de unidades a producir
        .tabla-a.color-acento-botones(data-aos="fade-right")
          table
            thead
              tr
                th
                  p.mb-0 #[b Concepto]
                th
                  p.mb-0 #[b Valor]
            tbody.bg-white
              tr
                td (+) Unidades a vender
                td.txt-p1 58.000
              tr.bg-c7
                td (-) Inventario inicial de productos en proceso
                td.txt-p1 -
              tr
                td (-) Inventario inicial de productos terminados
                td.txt-p1 -
              tr.bg-c7
                td (+) Inventario final de productos en proceso
                td.txt-p1 2.417
              tr
                td (+) Inventario final de productos terminados
                td.txt-p1 3.222
              tr.bg-c7
                td (=) Unidades a producir
                td.txt-p1 63.639
    p.mb-4 Así quedaría para los seis años de proyección:
    .row.mb-4
      .col-12
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
          p.mb-0 #[b Tabla 14.] Presupuesto de unidades a producir por año histórico
        .tabla-a.color-acento-botones(data-aos="fade-right")
          table
            thead
              tr
                th
                  p.mb-0 #[b Concepto]
                th
                  p.mb-0 #[b Año 1]
                th
                  p.mb-0 #[b Año 2]
                th
                  p.mb-0 #[b Año 3]
                th
                  p.mb-0 #[b Año 4]
                th
                  p.mb-0 #[b Año 5]
                th
                  p.mb-0 #[b Año 6]
            tbody.bg-white
              tr
                td (+) Unidades a vender
                td.txt-p1 58.000
                td.txt-p1 58.580
                td.txt-p1 59.283
                td.txt-p1 60.172
                td.txt-p1 61.075
                td.txt-p1 61.991
              tr.bg-c7
                td (-) Inventario inicial de productos en proceso
                td.txt-p1 -
                td.txt-p1 2.417
                td.txt-p1 2.441
                td.txt-p1 2.470
                td.txt-p1 2.507
                td.txt-p1 2.545
              tr
                td (-) Inventario inicial de productos terminados
                td.txt-p1 -
                td.txt-p1 3.222
                td.txt-p1 3.254
                td.txt-p1 3.294
                td.txt-p1 3.343
                td.txt-p1 3.393
              tr.bg-c7
                td (+) Inventario final de productos en proceso
                td.txt-p1 2.417
                td.txt-p1 2.441
                td.txt-p1 2.470
                td.txt-p1 2.507
                td.txt-p1 2.545
                td.txt-p1 2.583
              tr
                td (+) Inventario final de productos terminados
                td.txt-p1 3.222
                td.txt-p1 3.254
                td.txt-p1 3.294
                td.txt-p1 3.343
                td.txt-p1 3.393
                td.txt-p1 3.444
              tr.bg-c7
                td (=) Unidades a producir
                td.txt-p1 63.639
                td.txt-p1 58.636
                td.txt-p1 59.352
                td.txt-p1 60.258
                td.txt-p1 61.163
                td.txt-p1 62.080
    p.mb-4 Con los datos anteriores se proyecta el estado de costo de producción:
    .row.mb-4
      .col-12
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
          p.mb-0 #[b Tabla 15.] Costo total de producción por año histórico
        .tabla-a.color-acento-botones(data-aos="fade-right")
          table
            thead
              tr
                th
                  p.mb-0 #[b Concepto]
                th
                  p.mb-0 #[b Año 1]
                th
                  p.mb-0 #[b Año 2]
                th
                  p.mb-0 #[b Año 3]
                th
                  p.mb-0 #[b Año 4]
                th
                  p.mb-0 #[b Año 5]
                th
                  p.mb-0 #[b Año 6]
            tbody.bg-white
              tr
                td Materia prima
                td.txt-p1 $1.909.170.000
                td.txt-p1 $1.815.370.560
                td.txt-p1 $1.896.339.133
                td.txt-p1 $1.983.045.080
                td.txt-p1 $2.073.212.782
                td.txt-p1 $2.167.424.767
              tr.bg-c7
                td Mano de obra directa
                td.txt-p1 $1.272.780.000
                td.txt-p1 $1.210.247.040
                td.txt-p1 $1.264.226.089
                td.txt-p1 $1.322.030.054
                td.txt-p1 $1.382.141.855
                td.txt-p1 $1.444.949.845
              tr
                td Mano de obra indirecta
                td.txt-p1 $300.000.000
                td.txt-p1 $309.600.000
                td.txt-p1 $319.507.200
                td.txt-p1 $329.092.416
                td.txt-p1 $338.965.188
                td.txt-p1 $349.134.144
              tr.bg-c7
                td Prestaciones sociales
                td.txt-p1 $786.390.000
                td.txt-p1 $759.923.520
                td.txt-p1 $791.866.644
                td.txt-p1 $825.561.235
                td.txt-p1 $860.553.522
                td.txt-p1 $897.041.994
              tr
                td Arrendamiento
                td.txt-p1 $180.000.000
                td.txt-p1 $185.760.000
                td.txt-p1 $191.704.320
                td.txt-p1 $197.455.450
                td.txt-p1 $203.379.113
                td.txt-p1 $209.480.486
              tr.bg-c7
                td Mantenimiento
                td.txt-p1 $60.000.000
                td.txt-p1 $61.920.000
                td.txt-p1 $63.901.440
                td.txt-p1 $65.818.483
                td.txt-p1 $67.793.038
                td.txt-p1 $69.826.829
              tr
                td Otros CIF
                td.txt-p1 $240.000.000
                td.txt-p1 $247.680.000
                td.txt-p1 $255.605.760
                td.txt-p1 $263.273.933
                td.txt-p1 $271.172.151
                td.txt-p1 $279.307.315
              tr.bg-c7
                td Total costos en efectivo
                td.txt-p1 $4.748.340.000
                td.txt-p1 $4.590.501.120
                td.txt-p1 $4.783.150.586
                td.txt-p1 $4.986.276.651
                td.txt-p1 $5.197.217.649
                td.txt-p1 $5.417.165.380
              tr
                td Costo de depreciación
                td.txt-p1 $500.000.000
                td.txt-p1 $500.000.000
                td.txt-p1 $500.000.000
                td.txt-p1 $500.000.000
                td.txt-p1 $500.000.000
                td.txt-p1 $500.000.000
              tr.bg-c7
                td Total costo de producción
                td.txt-p1 $5.248.340.000
                td.txt-p1 $5.090.501.120
                td.txt-p1 $5.283.150.586
                td.txt-p1 $5.486.276.651
                td.txt-p1 $5.197.717.649
                td.txt-p1 $5.417.665.380
    p.mb-4 A continuación, se describe el proceso de cálculo de las cifras anteriores:
    .row.justify-content-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        .p-4.bg-c2
          p #[b Materia prima (M.P.)]
          figure
            img(src='@/assets/curso/tema3/img16.svg', alt='', style="width: 450px").m-auto
      .col-lg-5
        .p-4.bg-c4
          p #[b Mano de obra directa (M.O.D.)]
          figure
            img(src='@/assets/curso/tema3/img17.svg', alt='', style="width: 450px").m-auto
    .row.justify-content-center
      .col-lg-10
        .p-4.bg-c9
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 La mano de obra indirecta (M.O.I.) es un dato de entrada dado por el estudio de factibilidad con un monto de $300.000.000 para el primer año, valor que crece con el IPC y que para el segundo año de proyección quedaría así:
          figure.mb-4
            img(src='@/assets/curso/tema3/img18.svg', alt='', style="width: 300px").m-auto
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 El valor de las prestaciones sociales se ha proyectado en un 50% de las nóminas de producción. Para el primer año su valor se calculó como sigue:
          figure.mb-4
            img(src='@/assets/curso/tema3/img19.svg', alt='', style="width: 460px").m-auto
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 Para el cálculo de los rubros arrendamiento, mantenimiento, servicios públicos, aseo y vigilancia, se tienen en cuenta los datos de entrada dado por el estudio de factibilidad para el primer año, y luego se sigue la metodología de hacerlos crecer para el resto de los años con el IPC.
    Separador
    #t_3_4
    .titulo-segundo.color-acento-contenido
      h2 3.4 Proyección de la inversión en activos corrientes
    p.mb-4 Es necesario valorar el monto requerido de inversión en inventarios y cartera comercial.
    .row.justify-content-center
      .col-lg-10
        .p-4.bg-c9
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 El valor del rubro productos en proceso se calcula multiplicando el valor del inventario final de productos en proceso por el valor del costo unitario en efectivo.
          .row.justify-content-center.mb-4
            .col-auto
              .p-3.bg-c8
                p.text-center.mb-0 2.417 𝑋 74.614 = 180.314.265
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 El valor del costo unitario sale de dividir el costo de producción en efectivo entre el número de unidades a producir:
          .row.justify-content-center.mb-4
            .col-auto
              .p-3.bg-c8
                p.text-center.mb-0 4.748.340.000 / 2.417 = 74.614
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 El valor del rubro productos terminados se calcula multiplicando el valor del inventario final de productos terminados por el valor del costo unitario en efectivo:
          .row.justify-content-center.mb-4
            .col-auto
              .p-3.bg-c8
                p.text-center.mb-0 3.222 𝑋 74.614 = 240.405.278
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 El valor del inventario final de materia prima es igual a la división entre la mano de obra directa consumida y la rotación de materia prima:
          .row.justify-content-center.mb-4
            .col-auto
              .p-3.bg-c8
                p.text-center.mb-0 1.272.780.000 / 36 = 53.032.500
          p Ahora bien, para calcular la rotación de materia prima se dividen los días del año entre el plazo que la empresa estima va a estar almacenada la materia prima, que para este caso son 10 días, luego 360 entre 10 da como resultado 36.
          p.mb-4 #[b La inversión proyectada en inventarios queda como observa en el siguiente cuadro:]
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
            p.mb-0 #[b Tabla 16.] Inversión en inventarios por año histórico
          .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
            table
              thead
                tr
                  th
                    p.mb-0 #[b Concepto]
                  th
                    p.mb-0 #[b Año 1]
                  th
                    p.mb-0 #[b Año 2]
                  th
                    p.mb-0 #[b Año 3]
                  th
                    p.mb-0 #[b Año 4]
                  th
                    p.mb-0 #[b Año 5]
                  th
                    p.mb-0 #[b Año 6]
              tbody.bg-white
                tr
                  td Productos en proceso
                  td.txt-p1 $180.341.265
                  td.txt-p1 $191.101.256
                  td.txt-p1 $199.056.172
                  td.txt-p1 $207.451.219
                  td.txt-p1 $216.256.870
                  td.txt-p1 $225.395.267
                tr.bg-c7
                  td Productos terminados
                  td.txt-p1 $240.405.278
                  td.txt-p1 $254.749.482
                  td.txt-p1 $265.461.956
                  td.txt-p1 $276.629.208
                  td.txt-p1 $288.314.168
                  td.txt-p1 $300.527.023
                tr
                  td Rotación del inventario de Materia Prima (360 / días de inventario de Materia Prima)
                  td.txt-p1 36
                  td.txt-p1 36
                  td.txt-p1 36
                  td.txt-p1 36
                  td.txt-p1 36
                  td.txt-p1 36
                tr.bg-c7
                  td Inventario final de Materia prima (Costo total de M.P. a consumir / Rotación de M.P.)
                  td.txt-p1 $53.032.500
                  td.txt-p1 $50.426.960
                  td.txt-p1 $52.676.087
                  td.txt-p1 $55.084.586
                  td.txt-p1 $57.589.244
                  td.txt-p1 $60.206.244
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 Para el cálculo del valor de la cartera comercial que va a quedar al final del año basta dividir el valor de las ventas entre la rotación de cartera.
          .row.justify-content-center.mb-4
            .col-auto
              .p-3.bg-c8
                p.text-center.mb-0 7.830.000.000 / 8 = 978.750.000
          p.mb-4.ps-4.ms-1 La rotación de cartera se calcula dividiendo los días del año entre el plazo que la empresa estima va a dar a sus clientes ya que se estima que todas las ventas se efectuarán a crédito con un plazo de 45 días, luego 360 entre 45 da como resultado 8.
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 Una cosa es el valor final de la cartera y otra es la inversión requerida en cartera, valor que se calcula dividiendo el monto de la cartera entre el precio de venta unitario para luego multiplicarlo por el costo de producción unitario en efectivo. Queda de la siguiente manera:
          .row.justify-content-center.mb-4
            .col-auto
              .p-3.bg-c8
                p.text-center.mb-0 (978.750.000 / 135.000) 𝑋 74.614 = 540.949.182
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 Si la empresa vende en el primer año la suma de $7.830.000.000 y el valor de la cartera final es de $978.750.000, significa que la diferencia, $6.851.250.000 se recaudó en el año. Dato importante que va a alimentar el estado de flujo de efectivo, mientras que el valor de ventas alimenta el estado de resultados y el saldo de cartera va a parar al Estado de Situación financiera.
    Separador
    #t_3_5
    .titulo-segundo.color-acento-contenido
      h2 3.5 Inversión
    p.mb-4 En este punto se calcula la inversión que la empresa requiere efectuar para montar la nueva línea de negocio al igual que las fuentes de financiación.
    .row.justify-content-center
      .col-lg-10
        .p-4.bg-c9
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 #[b Inversión en efectivo:] tal cual lo dicen los datos de entrada se prevé que para iniciar operaciones sin contratiempos de flujo de caja es necesario tener en cuenta al momento de calcular la inversión inicial una cantidad de dinero que soporte la operación durante los primeros dos meses para poder pagar los gastos de operación, los salarios, el arrendamiento, el mantenimiento y los gastos de servicios públicos, de aseo y vigilancia. Dichos valores se calculan dividiendo el valor anual de cada gasto entre los doce meses del año y el resultado se multiplica por 2.
          p.mb-4.ps-4.ms-1 El resultado es el siguiente:
          .row.justify-content-center.mb-4
            .col-lg-9
              .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                p.mb-0 #[b Tabla 17.] Inversión mínima en efectivo - Año 1
              .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
                table
                  thead
                    tr
                      th
                        p.mb-0 #[b Concepto]
                      th
                        p.mb-0 #[b Valor]
                  tbody.bg-white
                    tr
                      td Gastos de administración y ventas
                      td.txt-p1 $166.666.667
                    tr.bg-c7
                      td Salarios
                      td.txt-p1 $262.130.000
                    tr
                      td Arrendamiento
                      td.txt-p1 $30.000.000
                    tr.bg-c7
                      td Mantenimiento
                      td.txt-p1 $10.000.000
                    tr
                      td Servicios públicos, de aseo y vigilancia
                      td.txt-p1 $40.000.000
                    tr.bg-c7
                      td Total efectivo requerido mínimo
                      td.txt-p1 $508.796.667
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 #[b Inversión total requerida:] Se calcula recogiendo los cálculos efectuados anteriormente. 
          p.mb-4.ps-4.ms-1 El dato es el siguiente:
          .row.justify-content-center
            .col-lg-9
              .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                p.mb-0 #[b Tabla 18.] Inversión inicial en activos - Año 1
              .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
                table
                  thead
                    tr
                      th
                        p.mb-0 #[b Concepto]
                      th
                        p.mb-0 #[b Valor]
                  tbody.bg-white
                    tr
                      td Efectivo
                      td.txt-p1 $508.796.667
                    tr.bg-c7
                      td Cuentas por cobrar
                      td.txt-p1 $540.949.182
                    tr
                      td Inventario de materia prima
                      td.txt-p1 $53.032.500
                    tr.bg-c7
                      td Inventario de productos en proceso
                      td.txt-p1 $180.341.265
                    tr
                      td Inventario de productos terminados
                      td.txt-p1 $240.405.278
                    tr.bg-c7
                      td Cargos diferidos
                      td.txt-p1 $60.000.000
                    tr
                      td Maquinaria
                      td.txt-p1 $5.000.000.000
                    tr.bg-c7
                      td Total
                      td.txt-p1 $6.583.524.892
    Separador
    #t_3_6
    .titulo-segundo.color-acento-contenido
      h2 3.6 Fuentes de financiación
    p La financiación y la inversión son dos de las principales decisiones financieras que deben tomar los socios con asesoría del grupo directivo de la empresa. Las empresas tienen cuatro fuentes de financiación: los pasivos, aportes de capital, desinversiones y la generación interna de fondos.
    p.mb-4 Los pasivos pueden ser:
    .row.justify-content-center.mb-4
      .col-lg-auto
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
          p.mb-0 #[b Figura 4.] Clasificación de los pasivos
        figure
          img(src='@/assets/curso/tema3/img26.svg', alt='', style='width: 900px').m-auto
    p.mb-4 El #[b aporte de capital] en las sociedades anónimas se realiza mediante la emisión de acciones comunes, las cuales otorgan a su poseedor derechos #[b económicos y políticos:]
    .row.justify-content-center.mb-4
      .col-md-8.col-lg-5.mb-4.mb-lg-0
        .p-4.bg-c10
          p #[b Derechos económicos]
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 Participación en las utilidades de la empresa (dividendos).
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 Valorización: beneficio por la diferencia entre el precio de compra y el de venta.
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 Derecho preferencial a comprar nuevas acciones emitidas por la empresa (derechos de suscripción).
      .col-md-8.col-lg-5
        .p-4.bg-c11.h-100
          p #[b Derechos políticos]
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 Participación y voto en la Asamblea General de Accionistas.
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 Derecho a revisar los libros de la sociedad dentro de los plazos establecidos.
    p.mb-4 En contraste, en las demás sociedades, los aportes se denominan #[b cuotas partes de interés] (Bolsa de Valores de Colombia, s.f.). Por otra parte, las #[b desinversiones] corresponden a la venta de activos fijos no esenciales para la operación normal de la empresa. El objetivo de esta práctica es #[b financiar el capital de trabajo], liberando recursos que pueden ser utilizados más eficientemente.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La #[b Generación Interna de Fondos (GIF)] se refiere a los recursos que la empresa genera en el ejercicio de su actividad principal. Esta se calcula sumando a la #[b utilidad neta] del ejercicio los #[b costos y gastos sin salida de caja], como las #[b depreciaciones]. Esta fuente de financiación es clave para el crecimiento sostenible, ya que permite realizar #[b inversiones estratégicas] como ampliación de planta, incorporación tecnológica o expansión hacia mercados internacionales.
    p.mb-4 Es fundamental establecer una #[b política clara de financiación de los activos]. La estructura de capital debe adecuarse a la naturaleza temporal de los activos:
    .row.justify-content-center.mb-4
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img27.svg' alt='')
          .tarjeta.bg-c8.p-4
            p.mt-3 #[b Activos de corto plazo:]
            p.mb-0 Deben financiarse con #[b pasivos de corto plazo].
      .col-10.col-md-6.col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img28.svg' alt='')
          .tarjeta.bg-c8.p-4
            p.mt-3 #[b Activos de largo plazo:]
            p.mb-0 Deben financiarse con una combinación adecuada entre #[b pasivo financiero de largo plazo] y #[b aportes de capital].
    p.mb-4 A continuación, se resume la estrategia financiera más recomendable:
    .row.justify-content-center.mb-4
      .col-md-8.col-lg-5.mb-4.mb-lg-0
        .p-4.bg-c9
          figure.mb-3
            img(src='@/assets/curso/tema3/img29.svg', alt='', style="width: 160px").m-auto
          p #[b Capital de trabajo]
          p.mb-0 Proveedores (hasta donde el mercado lo permita), flujo de caja bruto, préstamos de corto plazo, emisión de papeles comerciales.
      .col-md-8.col-lg-5
        .p-4.bg-c11.h-100
          figure.mb-3
            img(src='@/assets/curso/tema3/img30.svg', alt='', style="width: 160px").m-auto
          p #[b Activos de largo plazo]
          p.mb-0 Aportes de capital, obligaciones financieras de largo plazo, emisión de bonos, y Generación Interna de Fondos (GIF).
    p.mb-4 La propuesta financiera de la empresa asesora es la siguiente:
    .row.justify-content-center.mb-4
      .col-lg-10
        .row.justify-content-center
          .col-10.col-md-9.col-lg.bg-c2
            .row.align-items-center.h-100
              .col
                .p-4
                  p.mb-4 La propuesta financiera de la empresa asesora es la siguiente:
                  p.mb-0 #[b $327.033.750] financiados por #[b proveedores].
                  p.mb-0 #[b $2.502.596.457] mediante un #[b crédito bancario].
                  p.mb-0 #[b $3.753.894.685] cubiertos con #[b aporte de los accionistas].
          .col-10.col-md-9.col-lg-auto.px-0
            figure
              img(src='@/assets/curso/tema3/img8.png', alt='', style="width: 486px").m-auto
    p.mb-4 El valor financiado por los proveedores se obtuvo dividiendo el valor de las compras de materia prima a crédito del primer año entre la #[b rotación de proveedores], indicador que mide la eficiencia en el manejo del crédito comercial recibido.
    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
          p.mb-0 #[b Tabla 19.] Compras a crédito de materia prima - Año 1
        .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
          table
            thead
              tr
                th
                  p.mb-0 #[b Concepto]
                th
                  p.mb-0 #[b Valor]
            tbody.bg-white
              tr
                td Consumo de materia prima
                td.txt-p1 $1.909.170.000
              tr.bg-c7
                td (-) Inventario inicial de materia prima
                td.txt-p1 -
              tr
                td (+) Inventario final de materia prima
                td.txt-p1 $53.032.500
              tr.bg-c7
                td (=) Compras a crédito
                td.txt-p1 $1.962.202.500
    figure.mb-4
      img(src='@/assets/curso/tema3/img31.svg', alt='Fórmula que calculan la rotación de proveedores dividiendo los 360 días del año entre un plazo de 60 días, obteniendo un resultado de 6; luego, se calcula la financiación con proveedores dividiendo 1.962.202.500 entre 6, lo que da como resultado 327.033.750.', style="width: 700px").m-auto
    p.mb-4 Por lo tanto, la financiación total queda de la siguiente manera:
    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
          p.mb-0 #[b Tabla 20.] Fuentes de financiamiento - Año 1
        .tabla-a.color-acento-botones(data-aos="fade-right")
          table
            thead
              tr
                th
                  p.mb-0 #[b Concepto]
                th
                  p.mb-0 #[b Valor]
            tbody.bg-white
              tr
                td Proveedores
                td.txt-p1 $327.033.750
              tr.bg-c7
                td Saldo por financiar
                td.txt-p1 $6.256.491.142
              tr
                td Crédito bancario
                td.txt-p1 $2.502.596.457
              tr.bg-c7
                td Política de financiamiento
                td.txt-p1 40 %
              tr
                td Acreedores financieros
                td.txt-p1 $2.502.596.456
              tr.bg-c7
                td Socios
                td.txt-p1 $3.753.894.685
              tr
                td Total financiado
                td.txt-p1
    p.mb-4 Financiación bancaria: Los $2.502.596.457 se financian con una entidad bancaria a una tasa del 20 % para cancelar en cuotas anuales iguales durante 5 años. La tabla de amortización se muestra a continuación:
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
      p.mb-0 #[b Tabla 21.] Tabla de amortización del crédito
    .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
      table
        thead
          tr
            th
              p.mb-0 #[b Concepto]
            th
              p.mb-0 #[b Año 1]
            th
              p.mb-0 #[b Año 2]
            th
              p.mb-0 #[b Año 3]
            th
              p.mb-0 #[b Año 4]
            th
              p.mb-0 #[b Año 5]
        tbody.bg-white
          tr
            td Abono a intereses
            td.txt-p1 $500.519.291
            td.txt-p1 $433.259.657
            td.txt-p1 $352.548.097
            td.txt-p1 $255.694.224
            td.txt-p1 $139.469.577
          tr.bg-c7
            td Abono a capital
            td.txt-p1 $336.298.169
            td.txt-p1 $403.557.803
            td.txt-p1 $484.269.364
            td.txt-p1 $581.123.237
            td.txt-p1 $697.347.884
          tr
            td Saldo de capital
            td.txt-p1 $2.166.298.169
            td.txt-p1 $1.762.740.484
            td.txt-p1 $1.278.471.120
            td.txt-p1 $697.347.884
            td.txt-p1 $0
          tr.bg-c7
            td Valor de la cuota
            td.txt-p1 $836.817.461
            td.txt-p1 $836.817.461
            td.txt-p1 $836.817.461
            td.txt-p1 $836.817.461
            td.txt-p1 $836.817.461
    p.mb-4 El valor de la cuota se calcula con la siguiente fórmula:
    figure.mb-4
      img(src='@/assets/curso/tema3/img32.svg', alt='Fórmula para calcular el valor de un pago periódico, donde se multiplica el valor presente por la tasa de interés y se divide entre uno menos uno más la tasa de interés elevada a la potencia negativa del número de periodos. En el ejemplo, se calcula el pago como 2.502.596.457 por 20 % dividido entre 1 menos (1 + 20 %) elevado a la -5, dando un resultado de 836.817.461.', style="width: 570px").m-auto
    p.mb-4 Cada vez que se cancele una cuota se abona una parte a intereses y el resto a la deuda.
    .row
      .col-lg-4.mb-4.mb-lg-0
        p Para el primer año el valor del interés es iguales a:
        .row
          .col-12
            .p-3.bg-c8
              p.text-center.mb-0 2.502.596.457 𝑋 20 % = 500.519.291
      .col-lg-4.mb-4.mb-lg-0
        p Por consiguiente, el saldo se abona a capital:
        .row
          .col-12
            .p-3.bg-c8
              p.text-center.mb-0 836.817.461 - 500.519.291 = 336.298.169
      .col-lg-4
        p Al final del primer año el saldo de la deuda es igual a:
        .row
          .col-12
            .p-3.bg-c8
              p.text-center.mb-0 2.502.596.457 - 336.298.169 = 2.166.298.287
    Separador
    #t_3_7
    .titulo-segundo.color-acento-contenido
      h2 3.7 Proyección de los estados financieros
    p.mb-4 El último paso es proyectar los estados financieros para lo cual ya se tienen todos los componentes que se han calculado a lo largo de todo el estudio. Basta tomar los datos de las variables que componen cada uno de ellos.
    .row.justify-content-center
      .col-12
        .p-4.bg-c9
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 #[b Iniciamos con el costo de ventas]
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
            p.mb-0 #[b Tabla 22.] Cálculo del costo de ventas por año histórico
          .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
            table
              thead
                tr
                  th
                    p.mb-0 #[b Concepto]
                  th
                    p.mb-0 #[b Año 1]
                  th
                    p.mb-0 #[b Año 2]
                  th
                    p.mb-0 #[b Año 3]
                  th
                    p.mb-0 #[b Año 4]
                  th
                    p.mb-0 #[b Año 5]
                  th
                    p.mb-0 #[b Año 6]
              tbody.bg-white
                tr
                  td Inventario inicial de productos en proceso
                  td.txt-p1 -
                  td.txt-p1 $199.331.193
                  td.txt-p1 $211.916.114
                  td.txt-p1 $219.864.233
                  td.txt-p1 $228.253.436
                  td.txt-p1 $237.061.932
                tr.bg-c7
                  td (+) Costo de producción
                  td.txt-p1 $5.248.340.000
                  td.txt-p1 $5.090.501.120
                  td.txt-p1 $5.283.150.587
                  td.txt-p1 $5.486.276.650
                  td.txt-p1 $5.697.217.649
                  td.txt-p1 $5.917.165.380
                tr
                  td (-) Inventario final de productos en proceso
                  td.txt-p1 $199.331.193
                  td.txt-p1 $211.916.114
                  td.txt-p1 $219.864.233
                  td.txt-p1 $288.253.436
                  td.txt-p1 $237.061.932
                  td.txt-p1 $246.199.069
                tr.bg-c7
                  td (=) Costo de productos terminados
                  td.txt-p1 $5.049.008.807
                  td.txt-p1 $5.077.916.199
                  td.txt-p1 $5.275.202.468
                  td.txt-p1 $5.477.887.447
                  td.txt-p1 $5.688.409.154
                  td.txt-p1 $5.908.028.243
                tr
                  td (+) Inventario inicial de productos terminados
                  td.txt-p1 -
                  td.txt-p1 $265.719.943
                  td.txt-p1 $282.496.941
                  td.txt-p1 $293.211.653
                  td.txt-p1 $304.368.264
                  td.txt-p1 $316.051.526
                tr.bg-c7
                  td (-) Inventario final de productos terminados
                  td.txt-p1 $265.719.943
                  td.txt-p1 $282.496.941
                  td.txt-p1 $293.211.653
                  td.txt-p1 $304.368.264
                  td.txt-p1 $316.051.526
                  td.txt-p1 $328.265.425
                tr
                  td Total costo de ventas
                  td.txt-p1 $4.783.288.864
                  td.txt-p1 $5.061.139.202
                  td.txt-p1 $5.264.487.756
                  td.txt-p1 $5.466.730.836
                  td.txt-p1 $5.676.892.526
                  td.txt-p1 $5.895.814.345
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 #[b Luego se proyecta el estado de resultados]
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
            p.mb-0 #[b Tabla 23.] Estado de resultados proyectado por año
          .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
            table
              thead
                tr
                  th
                    p.mb-0 #[b Concepto]
                  th
                    p.mb-0 #[b Año 1]
                  th
                    p.mb-0 #[b Año 2]
                  th
                    p.mb-0 #[b Año 3]
                  th
                    p.mb-0 #[b Año 4]
                  th
                    p.mb-0 #[b Año 5]
                  th
                    p.mb-0 #[b Año 6]
              tbody.bg-white
                tr
                  td Ventas
                  td.txt-p1 $7.830.000.000
                  td.txt-p1 $8.161.365.600
                  td.txt-p1 $8.523.605.402
                  td.txt-p1 $8.910.966.985
                  td.txt-p1 $9.316.034.499
                  td.txt-p1 $9.739.428.628
                tr.bg-c7
                  td (-) Costos de ventas
                  td.txt-p1 $4.783.288.864
                  td.txt-p1 $5.061.139.202
                  td.txt-p1 $5.264.487.756
                  td.txt-p1 $5.466.730.836
                  td.txt-p1 $5.676.892.526
                  td.txt-p1 $5.895.814.345
                tr
                  td Utilidad bruta
                  td.txt-p1 $3.046.711.136
                  td.txt-p1 $3.100.226.398
                  td.txt-p1 $3.259.117.646
                  td.txt-p1 $3.444.236.149
                  td.txt-p1 $3.639.308.607
                  td.txt-p1 $3.843.614.284
                tr.bg-c7
                  td (-) Gastos de administración y ventas
                  td.txt-p1 $1.000.000.000
                  td.txt-p1 $1.032.000.000
                  td.txt-p1 $1.065.024.000
                  td.txt-p1 $1.096.974.720
                  td.txt-p1 $1.129.883.962
                  td.txt-p1 $1.163.780.480
                tr
                  td (-) Amortización de diferidos
                  td.txt-p1 $12.000.000
                  td.txt-p1 $12.000.000
                  td.txt-p1 $12.000.000
                  td.txt-p1 $12.000.000
                  td.txt-p1 $12.000.000
                  td.txt-p1 $12.000.000
                tr.bg-c7
                  td Utilidad operativa
                  td.txt-p1 $2.034.711.136
                  td.txt-p1 $2.056.226.398
                  td.txt-p1 $2.182.093.646
                  td.txt-p1 $2.335.261.429
                  td.txt-p1 $2.497.424.646
                  td.txt-p1 $2.667.833.803
                tr
                  td (-) Intereses
                  td.txt-p1 $500.519.291
                  td.txt-p1 $433.259.657
                  td.txt-p1 $352.548.097
                  td.txt-p1 $255.694.224
                  td.txt-p1 $139.469.577
                  td.txt-p1 $0
                tr.bg-c7
                  td Utilidad antes de impuestos
                  td.txt-p1 $1.534.191.845
                  td.txt-p1 $1.622.966.741
                  td.txt-p1 $1.829.545.549
                  td.txt-p1 $2.079.567.205
                  td.txt-p1 $2.357.955.069
                  td.txt-p1 $2.667.833.803
                tr
                  td (-) Impuestos
                  td.txt-p1 $521.625.227
                  td.txt-p1 $551.808.692
                  td.txt-p1 $622.045.487
                  td.txt-p1 $707.052.850
                  td.txt-p1 $801.704.723
                  td.txt-p1 $911.143.493
                tr.bg-c7
                  td Utilidad neta
                  td.txt-p1 $1.012.566.618
                  td.txt-p1 $1.071.158.049
                  td.txt-p1 $1.207.500.063
                  td.txt-p1 $1.372.514.355
                  td.txt-p1 $1.556.250.346
                  td.txt-p1 $1.756.690.310
          p.mb-4 El valor del gasto por la amortización de diferidos se calcula dividiendo el valor pagado por los estudios de factibilidad entre los años señalados por la empresa para amortizarlos:
          .row.justify-content-center.mb-4
            .col-auto
              .p-3.bg-c8
                p.text-center.mb-0 #[i Amortización de diferidos] = 60.000.000 / 65 = 12.000.000
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 #[b Estado de utilidades retenidas]
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
            p.mb-0 #[b Tabla 24.] Estado de utilidades retenidas
          .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
            table
              thead
                tr
                  th
                    p.mb-0 #[b Concepto]
                  th
                    p.mb-0 #[b Año 1]
                  th
                    p.mb-0 #[b Año 2]
                  th
                    p.mb-0 #[b Año 3]
                  th
                    p.mb-0 #[b Año 4]
                  th
                    p.mb-0 #[b Año 5]
                  th
                    p.mb-0 #[b Año 6]
              tbody.bg-white
                tr
                  td Utilidades al inicio del año
                  td.txt-p1 -
                  td.txt-p1 $405.026.647
                  td.txt-p1 $833.489.867
                  td.txt-p1 $1.316.489.892
                  td.txt-p1 $1.865.495.634
                  td.txt-p1 $2.487.995.772
                tr.bg-c7
                  td (+) Utilidades del presente ejercicio
                  td.txt-p1 $1.012.566.618
                  td.txt-p1 $1.071.158.049
                  td.txt-p1 $1.207.500.063
                  td.txt-p1 $1.372.514.355
                  td.txt-p1 $1.556.250.346
                  td.txt-p1 $1.756.690.310
                tr
                  td (=) Utilidades disponibles para reparto
                  td.txt-p1 $1.012.566.618
                  td.txt-p1 $1.476.184.696
                  td.txt-p1 $2.040.989.929
                  td.txt-p1 $2.689.004.247
                  td.txt-p1 $3.421.745.979
                  td.txt-p1 $4.256.686.082
                tr.bg-c7
                  td (-) Reservas
                  td.txt-p1 $101.256.662
                  td.txt-p1 $107.115.805
                  td.txt-p1 $120.750.006
                  td.txt-p1 $137.251.436
                  td.txt-p1 $155.625.035
                  td.txt-p1 $176.869.031
                tr
                  td (=) Utilidad a disposición de la asamblea
                  td.txt-p1 $911.309.956
                  td.txt-p1 $1.369.068.891
                  td.txt-p1 $1.920.239.923
                  td.txt-p1 $2.551.752.811
                  td.txt-p1 $3.266.120.945
                  td.txt-p1 $4.079.817.051
                tr.bg-c7
                  td (-) Dividendos decretados
                  td.txt-p1 $506.283.309
                  td.txt-p1 $535.579.025
                  td.txt-p1 $603.750.031
                  td.txt-p1 $686.257.178
                  td.txt-p1 $778.125.173
                  td.txt-p1 $884.345.155
                tr
                  td (=) Utilidad a disposición de los accionistas
                  td.txt-p1 $405.026.647
                  td.txt-p1 $833.489.867
                  td.txt-p1 $1.316.489.892
                  td.txt-p1 $1.865.495.634
                  td.txt-p1 $2.487.995.772
                  td.txt-p1 $3.195.471.896
          p.mb-4 Se debe recordar, que la reserva legal equivale al 10% de las utilidades netas de cada año y que de las utilidades líquidas de cada ejercicio deberá repartirse por lo menos el 50%, salvo que los asociados dispongan lo contrario, en cuyo caso, se requerirá del voto afirmativo de un número plural de asociados, que representen por lo menos el 78% de las acciones o cuotas partes de interés.
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 #[b Flujo de efectivo]
          p El siguiente paso es elaborar el estado de flujo de efectivo presupuestado para lo cual se debe tener en cuenta los ingresos y los egresos de dinero.
          p.mb-4 Los ingresos y los egresos de dinero tienen tres fuentes:
          .row.justify-content-center.mb-4
            .col-lg-auto
              .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                p.mb-0 #[b Figura 5.] Clasificación de ingresos y egresos según la actividad económica
              figure
                img(src='@/assets/curso/tema3/img37.svg', alt='Esquema sobre clasificación de ingresos y egresos de dinero según la actividad económica, dividido en tres categorías: operativa, inversión y financiación.', style="width: 800px").m-auto
          p.mb-4 Veamos por ejemplo cómo se reparte el valor de las ventas en los diferentes estados financieros:
          .row.justify-content-center.mb-4
            .col-lg-10
              .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
                p.mb-0 #[b Tabla 25.] Resumen de operaciones y su impacto en los estados financieros - Año 1
              .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
                table
                  thead
                    tr
                      th
                        p.mb-0 #[b Operación]
                      th
                        p.mb-0 #[b Valor]
                      th
                        p.mb-0 #[b Estado financiero]
                  tbody.bg-white
                    tr
                      td Ventas a crédito
                      td.txt-p1 $7.830.000.000
                      td.txt-p1 Resultados 
                    tr.bg-c7
                      td Los clientes quedan debiendo 45 días
                      td.txt-p1 $978.750.000
                      td.txt-p1 Situación Financiera 
                    tr
                      td Los clientes pagaron 320 días
                      td.txt-p1 $6.851.250.000
                      td.txt-p1 Flujo de Efectivo
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
            p.mb-0 #[b Tabla 26.] Efectivo generado por las operaciones
          .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
            table
              thead
                tr
                  th
                    p.mb-0 #[b Concepto]
                  th
                    p.mb-0 #[b Año 1]
                  th
                    p.mb-0 #[b Año 2]
                  th
                    p.mb-0 #[b Año 3]
                  th
                    p.mb-0 #[b Año 4]
                  th
                    p.mb-0 #[b Año 5]
                  th
                    p.mb-0 #[b Año 6]
              tbody.bg-white
                tr
                  td Recaudo de cartera
                  td.txt-p1 $6.851.250.000
                  td.txt-p1 $8.119.944.900
                  td.txt-p1 $8.478.325.427
                  td.txt-p1 $8.862.546.787
                  td.txt-p1 $9.265.401.060
                  td.txt-p1 $9.686.504.362
                tr.bg-c7
                  td Pagos de materia prima
                  td.txt-p1 $1.634.168.750
                  td.txt-p1 $1.837.671.267
                  td.txt-p1 $1.884.284.387
                  td.txt-p1 $1.970.976.026
                  td.txt-p1 $2.060.673.464
                  td.txt-p1 $2.154.321.045
                tr
                  td Sueldos y salarios
                  td.txt-p1 $1.572.780.000
                  td.txt-p1 $1.519.847.040
                  td.txt-p1 $1.583.733.289
                  td.txt-p1 $1.651.122.470
                  td.txt-p1 $1.721.107.043
                  td.txt-p1 $1.794.083.989
                tr.bg-c7
                  td Prestaciones sociales
                  td.txt-p1 $629.112.000
                  td.txt-p1 $765.216.816
                  td.txt-p1 $785.478.020
                  td.txt-p1 $818.822.317
                  td.txt-p1 $853.555.064
                  td.txt-p1 $889.744.300
                tr
                  td Arrendamiento
                  td.txt-p1 $180.000.000
                  td.txt-p1 $185.760.000
                  td.txt-p1 $191.704.320
                  td.txt-p1 $197.455.450
                  td.txt-p1 $203.379.113
                  td.txt-p1 $209.480.486
                tr.bg-c7
                  td Mantenimiento
                  td.txt-p1 $60.000.000
                  td.txt-p1 $61.920.000
                  td.txt-p1 $63.901.440
                  td.txt-p1 $65.818.483
                  td.txt-p1 $67.793.038
                  td.txt-p1 $69.826.829
                tr
                  td Otros costos indirectos
                  td.txt-p1 $240.000.000
                  td.txt-p1 $247.680.000
                  td.txt-p1 $255.605.760
                  td.txt-p1 $263.273.933
                  td.txt-p1 $271.172.151
                  td.txt-p1 $279.307.315
                tr.bg-c7
                  td Gastos de administración y ventas
                  td.txt-p1 $1.000.000.000
                  td.txt-p1 $1.032.000.000
                  td.txt-p1 $1.065.024.000
                  td.txt-p1 $1.096.974.720
                  td.txt-p1 $1.129.883.962
                  td.txt-p1 $1.163.780.480
                tr
                  td Pago de impuestos
                  td.txt-p1 -
                  td.txt-p1 $521.625.227
                  td.txt-p1 $551.808.692
                  td.txt-p1 $622.045.487
                  td.txt-p1 $707.052.850
                  td.txt-p1 $801.704.723
                tr.bg-c7
                  td Total egresos operativos
                  td.txt-p1 $5.317.060.750
                  td.txt-p1 $6.171.720.350
                  td.txt-p1 $6.381.539.908
                  td.txt-p1 $6.686.488.884
                  td.txt-p1 $7.014.616.684
                  td.txt-p1 $7.362.249.168
                tr
                  td Efectivo generado por operaciones
                  td.txt-p1 $1.534.189.250
                  td.txt-p1 $1.948.224.550
                  td.txt-p1 $2.096.785.519
                  td.txt-p1 $2.176.057.903
                  td.txt-p1 $2.250.784.375
                  td.txt-p1 $2.324.255.194
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
            p.mb-0 #[b Tabla 27.] Efectivo provisto por actividades de financiación
          .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
            table
              thead
                tr
                  th
                    p.mb-0 #[b Concepto]
                  th
                    p.mb-0 #[b Año 0 (Inicio)]
                  th
                    p.mb-0 #[b Año 1]
                  th
                    p.mb-0 #[b Año 2]
                  th
                    p.mb-0 #[b Año 3]
                  th
                    p.mb-0 #[b Año 4]
                  th
                    p.mb-0 #[b Año 5]
                  th
                    p.mb-0 #[b Año 6]
              tbody.bg-white
                tr
                  td Aportes de socios
                  td.txt-p1 $3.753.894.685
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                tr.bg-c7
                  td Préstamos bancarios
                  td.txt-p1 $2.502.596.457
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                tr
                  td (-) Abono a préstamo
                  td.txt-p1 -
                  td.txt-p1 $336.298.169
                  td.txt-p1 $403.557.803
                  td.txt-p1 $484.269.364
                  td.txt-p1 $581.123.237
                  td.txt-p1 $697.347.884
                  td.txt-p1 -
                tr.bg-c7
                  td (-) Intereses
                  td.txt-p1 -
                  td.txt-p1 $500.519.291
                  td.txt-p1 $433.259.657
                  td.txt-p1 $352.548.097
                  td.txt-p1 $255.694.224
                  td.txt-p1 $139.469.577
                  td.txt-p1 -
                tr
                  td (-) Dividendos decretados
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 $506.283.309
                  td.txt-p1 $535.579.025
                  td.txt-p1 $603.750.031
                  td.txt-p1 $686.257.178
                  td.txt-p1 $778.125.173
                tr.bg-c7
                  td Efectivo provisto neto
                  td.txt-p1 $6.256.491.142
                  td.txt-p1 $836.817.461
                  td.txt-p1 $1.343.100.769
                  td.txt-p1 $1.372.396.485
                  td.txt-p1 $1.440.567.492
                  td.txt-p1 $1.523.074.638
                  td.txt-p1 $778.125.173
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
            p.mb-0 #[b Tabla 28.] Efectivo demandado por actividades de inversión
          .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
            table
              thead
                tr
                  th
                    p.mb-0 #[b Concepto]
                  th(width="20%")
                    p.mb-0 #[b Año 0 (Inicio)]
                  th
                    p.mb-0 #[b Año 1]
                  th
                    p.mb-0 #[b Año 2]
                  th
                    p.mb-0 #[b Año 3]
                  th
                    p.mb-0 #[b Año 4]
                  th
                    p.mb-0 #[b Año 5]
                  th
                    p.mb-0 #[b Año 6]
              tbody.bg-white
                tr
                  td Compra de maquinaria
                  td.txt-p1 $5.000.000.000
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                tr.bg-c7
                  td Estudio de factibilidad
                  td.txt-p1 $60.000.000
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                tr
                  td Total inversión
                  td.txt-p1 $5.060.000.000
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
            p.mb-0 #[b Tabla 29.] Aumento y saldo de efectivo
          .tabla-a.color-acento-botones.mb-4(data-aos="fade-right")
            table
              thead
                tr
                  th
                    p.mb-0 #[b Concepto]
                  th
                    p.mb-0 #[b Año 1]
                  th
                    p.mb-0 #[b Año 2]
                  th
                    p.mb-0 #[b Año 3]
                  th
                    p.mb-0 #[b Año 4]
                  th
                    p.mb-0 #[b Año 5]
                  th
                    p.mb-0 #[b Año 6]
              tbody.bg-white
                tr
                  td Aumento de efectivo
                  td.txt-p1 $697.371.789
                  td.txt-p1 $605.123.781
                  td.txt-p1 $724.389.034
                  td.txt-p1 $735.490.411
                  td.txt-p1 $727.709.737
                  td.txt-p1 $1.546.130.021
                tr.bg-c7
                  td Efectivo inicial
                  td.txt-p1 $1.196.491.142
                  td.txt-p1 $1.893.862.931
                  td.txt-p1 $2.498.986.712
                  td.txt-p1 $3.223.375.746
                  td.txt-p1 $3.958.866.156
                  td.txt-p1 $4.686.575.894
                tr
                  td Efectivo final
                  td.txt-p1 $1.893.862.931
                  td.txt-p1 $2.498.986.712
                  td.txt-p1 $3.223.375.746
                  td.txt-p1 $3.958.866.156
                  td.txt-p1 $4.686.575.894
                  td.txt-p1 $6.232.705.914
          p Para el primer año de actividades no hay efectivo inicial.
          p El aumento del efectivo es la sumatoria del efectivo generado por la operación más el efectivo provisto por las actividades de financiación menos el efectivo que demandan las actividades de inversión.
          p El valor del efectivo final se lleva al estado de Situación Financiera en la cuenta de efectivo
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-circle-check(style="color: #5B39A6")
              |
              p.mb-0 Finalmente, ya está todo listo para elaborar el estado de situación financiera (Balance general) proyectado, que resume el movimiento y saldo de cada una de las operaciones efectuadas por la empresa.
          .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-down")
            p.mb-0 #[b Tabla 28.] Efectivo demandado por actividades de inversión
          .tabla-a.color-acento-botones(data-aos="fade-right")
            table
              thead
                tr
                  th(colspan="8")
                    p.mb-0 #[b Estado de situación  financiera a 31 de diciembre]
                tr
                  th
                    p.mb-0 #[b Concepto]
                  th(width="20%")
                    p.mb-0 #[b Año 0 (Inicio)]
                  th
                    p.mb-0 #[b Año 1]
                  th
                    p.mb-0 #[b Año 2]
                  th
                    p.mb-0 #[b Año 3]
                  th
                    p.mb-0 #[b Año 4]
                  th
                    p.mb-0 #[b Año 5]
                  th
                    p.mb-0 #[b Año 6]
              tbody.bg-white
                tr
                  td Activos
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                tr
                  td Efectivo
                  td.txt-p1 $1.196.491.142
                  td.txt-p1 $1.893.862.931
                  td.txt-p1 $2.498.986.712
                  td.txt-p1 $3.223.375.746
                  td.txt-p1 $3.958.866.156
                  td.txt-p1 $4.686.575.894
                  td.txt-p1 $6.232.705.914
                tr
                  td Cuentas por cobrar
                  td.txt-p1 -
                  td.txt-p1 $978.750.000
                  td.txt-p1 $1.020.170.700
                  td.txt-p1 $1.065.450.675
                  td.txt-p1 $1.113.870.873
                  td.txt-p1 $1.164.504.312
                  td.txt-p1 $1.217.428.579
                tr
                  td Materias primas
                  td.txt-p1 -
                  td.txt-p1 $53.032.500
                  td.txt-p1 $50.426.960
                  td.txt-p1 $52.676.087
                  td.txt-p1 $55.084.586
                  td.txt-p1 $57.589.244
                  td.txt-p1 $60.206.244
                tr
                  td Productos en proceso
                  td.txt-p1 -
                  td.txt-p1 $199.331.193
                  td.txt-p1 $211.916.114
                  td.txt-p1 $219.864.233
                  td.txt-p1 $228.253.436
                  td.txt-p1 $237.061.932
                  td.txt-p1 $246.199.069
                tr
                  td Productos terminados
                  td.txt-p1 -
                  td.txt-p1 $265.719.943
                  td.txt-p1 $282.496.941
                  td.txt-p1 $293.211.653
                  td.txt-p1 $304.368.264
                  td.txt-p1 $316.051.526
                  td.txt-p1 $328.265.425
                tr
                  td Total activos corrientes
                  td.txt-p1 $1.196.491.142
                  td.txt-p1 $3.390.696.568
                  td.txt-p1 $4.063.997.427
                  td.txt-p1 $4.854.578.394
                  td.txt-p1 $5.660.443.315
                  td.txt-p1 $6.461.782.907
                  td.txt-p1 $8.084.805.230
                tr
                  td Cargos diferidos
                  td.txt-p1 $60.000.000
                  td.txt-p1 $48.000.000
                  td.txt-p1 $36.000.000
                  td.txt-p1 $24.000.000
                  td.txt-p1 $12.000.000
                  td.txt-p1 -
                  td.txt-p1 -
                tr
                  td Maquinaria
                  td.txt-p1 $5.000.000.000
                  td.txt-p1 $5.000.000.000
                  td.txt-p1 $5.000.000.000
                  td.txt-p1 $5.000.000.000
                  td.txt-p1 $5.000.000.000
                  td.txt-p1 $5.000.000.000
                  td.txt-p1 $5.000.000.000
                tr
                  td Depreciación acumulada
                  td.txt-p1 -
                  td.txt-p1 $500.000.000
                  td.txt-p1 $1.000.000.000
                  td.txt-p1 $1.500.000.000
                  td.txt-p1 $2.000.000.000
                  td.txt-p1 $2.500.000.000
                  td.txt-p1 $3.000.000.000
                tr
                  td Total activos no corrientes
                  td.txt-p1 $5.060.000.000
                  td.txt-p1 $4.548.000.000
                  td.txt-p1 $4.036.000.000
                  td.txt-p1 $3.524.000.000
                  td.txt-p1 $3.012.000.000
                  td.txt-p1 $2.500.000.000
                  td.txt-p1 $2.000.000.000
                tr.bg-c7
                  td Total activos 
                  td.txt-p1 $6.256.491.142
                  td.txt-p1 $7.938.696.568
                  td.txt-p1 $8.099.997.427
                  td.txt-p1 $8.378.578.394
                  td.txt-p1 $8.672.443.315
                  td.txt-p1 $8.961.782.907
                  td.txt-p1 $10.084.805.230
                tr
                  td Pasivos
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                tr
                  td Proveedores
                  td.txt-p1 -
                  td.txt-p1 $327.033.750
                  td.txt-p1 $302.127.503
                  td.txt-p1 $316.431.377
                  td.txt-p1 $330.908.930
                  td.txt-p1 $345.952.907
                  td.txt-p1 $361.673.628
                tr
                  td Obligaciones financieras
                  td.txt-p1 $2.502.596.457
                  td.txt-p1 $2.166.298.287
                  td.txt-p1 $1.762.740.484
                  td.txt-p1 $1.278.471.120
                  td.txt-p1 $697.347.884
                  td.txt-p1 -
                  td.txt-p1 -
                tr
                  td Impuestos por pagar
                  td.txt-p1 -
                  td.txt-p1 $521.625.227
                  td.txt-p1 $551.808.692
                  td.txt-p1 $622.045.487
                  td.txt-p1 $707.052.850
                  td.txt-p1 $801.704.723
                  td.txt-p1 $911.143.493
                tr
                  td Dividendos por pagar
                  td.txt-p1 -
                  td.txt-p1 $506.283.309
                  td.txt-p1 $535.579.025
                  td.txt-p1 $603.750.031
                  td.txt-p1 $686.257.178
                  td.txt-p1 $778.125.173
                  td.txt-p1 $884.345.155
                tr
                  td Prestaciones
                  td.txt-p1 -
                  td.txt-p1 $157.278.000
                  td.txt-p1 $151.984.704
                  td.txt-p1 $158.373.329
                  td.txt-p1 $165.112.247
                  td.txt-p1 $172.110.704
                  td.txt-p1 $179.408.399
                tr.bg-c7
                  td Total pasivos
                  td.txt-p1 $2.502.596.457
                  td.txt-p1 $3.678.518.573
                  td.txt-p1 $3.304.240.408
                  td.txt-p1 $2.979.071.344
                  td.txt-p1 $2.586.679.089
                  td.txt-p1 $2.097.893.507
                  td.txt-p1 $2.336.570.675
                tr
                  td Patrimonio
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                  td.txt-p1 -
                tr
                  td Capital
                  td.txt-p1 $3.753.894.685
                  td.txt-p1 $3.753.894.685
                  td.txt-p1 $3.753.894.685
                  td.txt-p1 $3.753.894.685
                  td.txt-p1 $3.753.894.685
                  td.txt-p1 $3.753.894.685
                  td.txt-p1 $3.753.894.685
                tr
                  td Reservas
                  td.txt-p1 -
                  td.txt-p1 $101.256.662
                  td.txt-p1 $208.372.467
                  td.txt-p1 $329.122.473
                  td.txt-p1 $466.373.908
                  td.txt-p1 $621.998.943
                  td.txt-p1 $798.867.974
                tr
                  td Utilidades Retenidas
                  td.txt-p1 -
                  td.txt-p1 $405.026.647
                  td.txt-p1 $833.489.867
                  td.txt-p1 $1.316.489.892
                  td.txt-p1 $1.865.495.634
                  td.txt-p1 $2.487.995.772
                  td.txt-p1 $3.195.471.896
                tr.bg-c7
                  td Total patrimonio
                  td.txt-p1 $3.753.894.685
                  td.txt-p1 $4.260.177.994
                  td.txt-p1 $4.795.757.019
                  td.txt-p1 $5.399.507.050
                  td.txt-p1 $6.085.764.227
                  td.txt-p1 $6.863.889.400
                  td.txt-p1 $7.748.235.555
                tr.bg-c7
                  td Total pasivos y patrimonio
                  td.txt-p1 $6.256.491.142
                  td.txt-p1 $7.938.696.568
                  td.txt-p1 $8.099.997.427
                  td.txt-p1 $8.378.578.394
                  td.txt-p1 $8.672.443.315
                  td.txt-p1 $8.961.782.907
                  td.txt-p1 $10.084.805.230

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
