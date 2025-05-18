<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave relacionados con la planeación estratégica y financiera.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de la planeación financiera en una empresa?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generar ventas a corto plazo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establecer caminos futuros que aseguren la generación de valor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar la nómina de trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar únicamente los gastos operativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué caracteriza a los planes estratégicos dentro de una organización?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicación en tareas operativas diarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ejecución inmediata por cualquier empleado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Horizonte de largo plazo y elaboración por la alta dirección.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Enfoque exclusivo en temas de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué técnica se utilizó para proyectar las ventas del primer año en el caso práctico?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pronóstico por juicio experto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Media móvil.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Simulación de Monte Carlo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Regresión lineal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la tasa de impuesto a la renta aplicada en el estudio del caso práctico?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '25 %.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '30 %.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '35 %.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '40 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'En la planeación financiera, ¿qué se incluye en el plan financiero de una empresa?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Proyecciones de ingresos, costos, gastos, activos, pasivos y patrimonio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solamente el presupuesto de ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inventario físico y nóminas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reglamento interno de trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál fue la participación de mercado estimada para la nueva línea de productos en el primer año?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '5 %.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '2 %.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '10 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '8 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué porcentaje representan las prestaciones sociales sobre los salarios en el estudio del caso?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '40 %.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '50 %.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '60 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '70 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué método se usa para depreciar la máquina adquirida por $5.000.000.000?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Línea recta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Suma de dígitos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Valor decreciente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducción por horas trabajadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es la política de reparto de utilidades anual?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '100 %.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '50 %.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '30 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '75 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué representa la Generación Interna de Fondos (GIF)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Recursos generados por la actividad principal de la empresa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Monto de préstamos bancarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dividendos entregados a socios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Amortización de créditos a largo plazo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La planeación estratégica se enfoca en proyectar el pasado de la empresa.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Los activos de largo plazo deben financiarse con pasivos de corto plazo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La depreciación acumulada reduce el valor contable de un activo.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'En el caso práctico, todas las ventas se proyectan a crédito con plazo de 45 días.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Los planes operativos son responsabilidad de la alta dirección.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
