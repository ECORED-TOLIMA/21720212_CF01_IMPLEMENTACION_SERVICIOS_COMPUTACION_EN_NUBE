export default {
  global: {
    componenteFormativo: 'Características de la computación en la nube',
    descripcionCurso:
      'Este componente aborda las características de la computación en la nube, sus modelos tradicionales y de despliegue, así como la infraestructura que la soporta. El aprendiz reconoce la evolución histórica, la escalabilidad, la flexibilidad y los requisitos técnicos, comprendiendo también las consideraciones de seguridad y la administración de recursos en diferentes entornos de nube.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Computación en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características principales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Evolución histórica de la computación en la nube',
            hash: 't_1_2',
          },
          { numero: '1.3', titulo: 'Acceso y formas de uso', hash: 't_1_3' },
          {
            numero: '1.4',
            titulo: 'Escalabilidad y flexibilidad',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Principales proveedores de servicios en la nube',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modelos tradicionales de computación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Infraestructura de modelos tradicionales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ventajas y desventajas de los modelos tradicionales',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Modelos de despliegue de la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Nube pública y sus aplicaciones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Nube privada: control y exclusividad',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Nube híbrida: análisis de costos y seguridad',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Infraestructura en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Requisitos técnicos básicos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Componentes de la infraestructura en la nube',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Consideraciones de seguridad en la nube',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Administración y optimización de recursos',
            hash: 't_4_4',
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
      tema: 'Computación en la nube',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024). <em>Servicios en la nube - Interoperabilidad</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jnyse9K-P7A',
    },
    {
      tema: 'Infraestructura de la nube',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Especificaciones técnicas para la arquitectura tecnológica en nube: introducción</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=p2URc4zjtSg',
    },
  ],
  glosario: [
    {
      termino: 'Administrador de recursos',
      significado:
        'persona o herramienta que supervisa, asigna y optimiza el uso de CPU, memoria, almacenamiento y red en la nube.',
    },
    {
      termino: '<em>Cloud computing</em> (Computación en la nube)',
      significado:
        'modelo de prestación de servicios informáticos a través de Internet, que permite acceso a recursos y aplicaciones bajo demanda.',
    },
    {
      termino: 'Escalabilidad',
      significado:
        'capacidad de aumentar o reducir recursos informáticos según la demanda, sin afectar el rendimiento del sistema.',
    },
    {
      termino: 'Firewall',
      significado:
        'sistema de seguridad que controla el tráfico de red, bloqueando accesos no autorizados y protegiendo datos en la nube.',
    },
    {
      termino: 'Hipervisor',
      significado:
        '<em>software</em> que permite crear y gestionar máquinas virtuales en un mismo servidor físico, optimizando el uso del <em>hardware</em>.',
    },
    {
      termino: 'Infraestructura como Servicio (IaaS)',
      significado:
        'modelo de nube que proporciona recursos de <em>hardware</em> y almacenamiento virtualizados, permitiendo control total sobre sistemas operativos y aplicaciones.',
    },
    {
      termino: 'Nube híbrida',
      significado:
        'modelo de nube que combina elementos de la nube pública y privada, equilibrando costos, seguridad y flexibilidad.',
    },
    {
      termino: 'Nube privada',
      significado:
        'entorno de computación en la nube exclusivo para una organización, que garantiza control, seguridad y personalización.',
    },
    {
      termino: 'Nube pública',
      significado:
        'modelo de nube donde los recursos y servicios están disponibles para cualquier usuario o empresa a través de Internet.',
    },
    {
      termino: 'Virtualización',
      significado:
        'tecnología que permite ejecutar múltiples sistemas operativos o aplicaciones en un mismo equipo físico mediante entornos virtuales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Celaya Luna, A. (2013). <em>Cloud</em>: herramientas para trabajar en la nube. ICB Editores.',
      link: '',
    },
    {
      referencia:
        'Ibáñez Carrasco, P. (2018). Informática I. Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Ibáñez Carrasco, P. (2018). Informática II. Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Menchén, A. (2016). <em>Software</em> ofimático de productividad en la nube. Rama Editorial.',
      link: '',
    },
    {
      referencia:
        'Mosco, V. (2016). La nube: <em>Big Data</em> en un mundo turbulento. Biblioteca Buridán.',
      link: '',
    },
    {
      referencia:
        'Postigo Palacios, A. (2020). Seguridad informática. Editorial Paraninfo.',
      link: '',
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
          nombre: 'Javier Eduardo Díaz Machuca',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
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
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza ',
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
