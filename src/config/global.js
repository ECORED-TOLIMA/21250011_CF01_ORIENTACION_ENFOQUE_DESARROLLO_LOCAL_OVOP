export default {
  global: {
    componenteFormativo:
      'Bases conceptuales y didácticas del enfoque OVOP para el desarrollo local',
    descripcionCurso:
      'Este componente aborda los fundamentos teóricos y metodológicos del enfoque OVOP, su evolución en Colombia y sus principios clave. Además, desarrolla conceptos esenciales del desarrollo local, la ruta metodológica para la implementación comunitaria, estrategias didácticas activas y criterios de evaluación, fortaleciendo el aprendizaje participativo y el liderazgo territorial orientado a la transformación sostenible del entorno.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      // {
      //   clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
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
        titulo: 'Enfoque OVOP',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Evolución del enfoque OVOP',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Slogan del enfoque OVOP Colombia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Los tres principios de OVOP',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Conceptos fundamentales del enfoque OVOP',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Territorio', hash: 't_2_1' },
          { numero: '2.2', titulo: 'Comunidad', hash: 't_2_2' },
          { numero: '2.3', titulo: 'Desarrollo local', hash: 't_2_3' },
          { numero: '2.4', titulo: 'Liderazgo', hash: 't_2_4' },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Didácticas activas para la implementación del enfoque OVOP',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '3.1', titulo: 'Elementos', hash: 't_3_1' },
          {
            numero: '3.2',
            titulo: 'Tipos de didácticas activas',
            hash: 't_3_2',
          },
          { numero: '3.3', titulo: 'Recursos digitales', hash: 't_3_3' },
          { numero: '3.4', titulo: 'Ejemplos', hash: 't_3_4' },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ruta metodológica del enfoque OVOP',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Guía para el descubrimiento de los tesoros locales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Guía para la construcción del sueño colectivo OVOP',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Guía para la ideación de producto OVOP',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Guía para el estudio de Cadena de Valor Simple y selección de Mi Producto OVOP',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Guía fortalecimiento de líderes OVOP',
            hash: 't_4_5',
          },
        ],
      },

      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Evaluación de los aprendizajes en el enfoque OVOP',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '5.1', titulo: 'Objetivo de la evaluación', hash: 't_5_1' },
          { numero: '5.2', titulo: 'Tipos de evaluación', hash: 't_5_2' },
          {
            numero: '5.3',
            titulo: 'Técnicas de diseño y criterios de evaluación',
            hash: 't_5_3',
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
        download: 'downloads/CFA_XX_DU.pdf',
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
      tema: 'Enfoque OVOP',
      referencia:
        'Servicio Nacional de Aprendizaje. (s. f.). <em>OVOP Colombia</em>.',
      tipo: 'Página <em>web</em>',
      link: 'https://www.sena.edu.co/es-co/sena/Paginas/ovop_colombia.aspx',
    },
    {
      tema: 'Enfoque OVOP',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). <em>Fase 1 Metodología OVOP</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vtpHyKUBG2E',
    },
    {
      tema: 'Ruta metodológica del enfoque OVOP',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). <em>Fase 2 Metodología OVOP</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PW97mCafwkM',
    },
  ],
  glosario: [
    {
      termino: '<em>Backcasting</em>',
      significado:
        'Técnica de planificación que invierte el proceso tradicional; en lugar de predecir el futuro basándose en tendencias actuales, define primero un futuro deseado y luego trabaja hacia atrás para identificar los pasos necesarios para alcanzarlo.',
    },
    {
      termino: 'Cadena de Valor Simple OVOP',
      significado:
        'Herramienta que permite analizar los procesos y etapas de producción de un producto local, identificando actividades clave y oportunidades para mejorar la competitividad y sostenibilidad del producto.',
    },
    {
      termino: 'Comunidad',
      significado:
        'Grupo de personas en un territorio que se une en torno a un sueño colectivo, basado en la identificación y desarrollo de un producto único que representa el orgullo y promueve el desarrollo local.',
    },
    {
      termino: 'Desarrollo local endógeno',
      significado:
        'Proceso de desarrollo impulsado por las personas de la localidad, aprovechando los recursos locales, la cultura, las tradiciones y las técnicas propias de la comunidad.',
    },
    {
      termino: 'Desarrollo regional exógeno',
      significado:
        'Proceso de desarrollo promovido por actores externos, como gobiernos o empresas, utilizando recursos externos y estrategias de innovación y técnica, con menor participación local.',
    },
    {
      termino: 'Liderazgo OVOP',
      significado:
        'Capacidad de individuos o grupos para guiar, motivar y coordinar a la comunidad en la identificación y desarrollo de sus productos únicos y en la implementación de la ruta OVOP.',
    },
    {
      termino: 'Producto OVOP',
      significado:
        'Bien o servicio que refleja la identidad, cultura y recursos únicos de un territorio, promovido como distintivo para el orgullo local y el desarrollo económico y social.',
    },
    {
      termino: 'Sueño colectivo',
      significado:
        'Visión compartida de futuro deseado por una comunidad, que guía la planificación y el desarrollo de productos y acciones en el territorio.',
    },
    {
      termino: 'Territorio',
      significado:
        'Espacio social y cultural donde se identifican y potencian recursos y productos únicos que representan la identidad, la cultura y el orgullo de la comunidad.',
    },
    {
      termino: 'Tesoro local',
      significado:
        'Recurso tangible o intangible que constituye parte de la herencia de una comunidad, ya sea histórico, cultural o natural, y que se mantiene, actualiza o transmite a las generaciones presentes y futuras.',
    },
  ],
  referencias: [
    {
      referencia:
        'Calderón, N. (s. f.). <em>Capital social y desarrollo económico local: Posibilidades y límites de OVOP en Colombia</em> (Trabajo de grado, Magíster en Estudios Interdisciplinarios sobre Desarrollo). Universidad de los Andes.',
      link: '',
    },
    {
      referencia:
        'JICA, SENA y Ministerio del Trabajo. (2020). <em>Guía de fortalecimiento de líderes OVOP</em>.',
      link:
        'https://www.sena.edu.co/es-co/sena/Documents/DM_05_Guia_de_fortalecimiento_de_lideres_OVOP.pdf',
    },
    {
      referencia:
        'JICA, SENA y Ministerio del Trabajo. (2020). <em>Guía para el descubrimiento de tesoros locales</em>.',
      link:
        'https://www.sena.edu.co/es-co/sena/Documents/DM_01_Guia_para_el_redescubrimiento_de_tesoros_locales.pdf',
    },
    {
      referencia:
        'JICA, SENA y Ministerio del Trabajo. (2020). <em>Guía para la construcción del sueño colectivo OVOP</em>.',
      link:
        'https://www.sena.edu.co/es-co/sena/Documents/DM_02_Guia_para_la_construccion_del_sueno_colectivo_OVOP.pdf',
    },
    {
      referencia:
        'JICA, SENA y Ministerio del Trabajo. (2020). <em>Guía para la ideación de producto OVOP</em>.',
      link:
        'https://www.sena.edu.co/es-co/sena/Documents/DM_03_Guia_para_la_ideacion_de_Producto_OVOP.pdf',
    },
    {
      referencia:
        'JICA, SENA y Ministerio del Trabajo. (2020). <em>Guía para el estudio de Cadena de Valor Simple y selección de Mi Producto OVOP</em>.',
      link:
        'https://www.sena.edu.co/es-co/sena/Documents/DM_04_Guia_para_el_estudio_de_Cadena_de_Valor_Simple_y_seleccion_de_Mi-Producto_OVOP.pdf',
    },
    {
      referencia:
        'JICA, SENA y Ministerio del Trabajo. (2020). <em>OVOP Colombia: Estrategia de desarrollo local incluyente</em>.',
      link:
        'https://www.sena.edu.co/es-co/sena/Documents/DE_Estrategia_de_Desarrollo_Local_Incluyente_OVOP_Colombia.pdf',
    },
    {
      referencia: 'Portal Territorial. (2017). OVOP VIDEOV18 [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=AIVSLwTOhcc',
    },
    {
      referencia:
        'Rabouin, R. Aden. (2025). <em>¿Qué es el liderazgo y cuáles son las cualidades más importantes de un líder en 2025?</em>',
      link: 'https://www.aden.org/business-magazine/que-es-el-liderazgo/',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje SENA. (s. f.). OVOP Colombia.',
      link: 'https://www.sena.edu.co/es-co/sena/Paginas/ovop_colombia.aspx',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'María Cecilia Dumar Acosta',
          cargo: 'Experta temática',
          centro:
            'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
