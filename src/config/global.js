export default {
  global: {
    Name: 'Presupuesto financiero',
    Description:
      'Este componente formativo <i>Presupuesto financiero</i>, parte del programa de formación en Gestión Contable y de Información Financiera. Presenta fundamentos teóricos y prácticos para proyectar estados financieros, incluyendo planeación estratégica y financiera, cálculo de ventas, costos, gastos e inversiones, y definición de fuentes de financiación. Utiliza un caso práctico del sector alimentos, aplicando técnicas como regresión lineal y proyecciones basadas en el PIB e IPC. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Planeación estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Planes empresariales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planeación financiera',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ejercicio práctico de proyección de estados financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Proyección de ventas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Proyección de los gastos de operación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Proyección del costo de producción',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Proyección de la inversión en activos corrientes',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Inversión',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Fuentes de financiación',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Proyección de los estados financieros',
            hash: 't_3_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Planeación estratégica',
      referencia:
        'Presidencia de la República. (2015). Decreto 2420 de 2015: Por el cual se expide el DUR de las Normas de Contabilidad e Información Financiera. Diario Oficial No. 49.674.',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      tema: 'Planeación estratégica',
      referencia:
        'Congreso de Colombia. (2009). Ley 1314 de 2009: Por la cual se regulan los principios y normas de contabilidad e información financiera y de aseguramiento de la información. Diario Oficial No. 47.409.',
      tipo: 'Página web',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/1677255',
    },
    {
      tema: 'Proyección de los estados financieros',
      referencia:
        'Reuters. (2025, abril 4). Gobierno de Colombia proyecta crecimiento económico del 2,8% en 2025.',
      tipo: 'Página web',
      link:
        'https://www.reuters.com/latam/negocio/PWOKLTINR5N7XC26TW465ZMDDA-2025-04-04',
    },
    {
      tema: 'Proyección de los estados financieros',
      referencia:
        'Presidencia de la República. (2015). Decreto 2420 de 2015: Por el cual se expide el DUR de las Normas de Contabilidad e Información Financiera. Diario Oficial No. 49.674.',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
  ],
  glosario: [
    {
      termino: 'Administración',
      significado:
        'proceso de planificar, organizar, dirigir y controlar el uso de los recursos y las demás actividades, con el fin de lograr los objetivos o metas de la organización de forma eficiente y eficaz.',
    },
    {
      termino: 'Control',
      significado:
        'función administrativa que abarca el proceso de medición y evaluación del desempeño, a fin de adoptar las medidas correctivas necesarias, que debe ser un proceso permanente y regulador.',
    },
    {
      termino: 'Estados financieros',
      significado:
        'informes financieros o de cuentas anuales, que por disposición legal deben presentar las empresas para mostrar su situación económica y financiera durante un periodo determinado.',
    },
    {
      termino: 'Estrategia',
      significado:
        'herramienta de dirección que proporciona procedimientos y técnicas con fundamento científico, que aplicadas de forma permanente permiten mejorar las relaciones de la organización y su entorno. Buscando siempre cumplir la satisfacción de las necesidades de sus clientes y el logro de objetivos.',
    },
    {
      termino: 'Margen de rentabilidad bruto',
      significado:
        'representa el margen de utilidad obtenido sobre las ventas, donde sólo se recupera el costo de ventas.',
    },
    {
      termino: 'Margen rentabilidad neta',
      significado:
        'representa el margen de utilidad obtenido sobre las ventas, una vez cubierto los impuestos y las reservas.',
    },
    {
      termino: 'Meta',
      significado:
        'término definido para demostrar el cumplimiento de una meta, estas se complementan con los objetivos definidos en la estrategia.',
    },
    {
      termino: 'Objetivo',
      significado:
        'enunciado de un deseo y las acciones concretas que se proponen para alcanzarlo. Este debe ser claro, medible y observable. define de forma más abstracta y cualitativamente, lo que pretende lograr.',
    },
    {
      termino: 'Política',
      significado:
        'plan general de acción que orienta a los integrantes de una organización.',
    },
  ],
  referencias: [
    {
      referencia: 'Actualícese. (2021). Etapas para elaborar un presupuesto. ',
      link: 'https://actualicese.com/etapas-para-elaborar-un-presupuesto/',
    },
    {
      referencia:
        'Araujo Arévalo, D. (2012). Presupuestos empresariales: Eje de la planeación financiera (1.ª ed.). Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Contadores Públicos (INCP). (2021). Bolsa de valores de Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Hacienda y Crédito Público. (s.f.). Aspectos generales del proceso presupuestal colombiano. ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Normograma/Lineamiento%20Ministerio%20de%20Hacienda%20y%20Credito%20P%C3%BAblico.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Limbelys Rodríguez Cabrales',
          cargo: 'Experto temático',
          centro: 'Centro de Servicios Financieros - Regional Distrito Capital',
        },
        {
          nombre: 'Leidy Smith Moreno Mosquera',
          cargo: 'Experto temático',
          centro: 'Centro de Servicios Financieros - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
