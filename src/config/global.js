export default {
  global: {
    componenteFormativo: 'Características de la computación en la nube',
    descripcionCurso:
      'Ese componente aborda una visión integral y didáctica sobre la computación en la nube, abordando sus fundamentos, características principales y evolución histórica desde sus orígenes hasta la actualidad. Explica de forma clara los modelos de despliegue: nube pública, privada y híbrida, destacando sus ventajas, desventajas y aplicaciones prácticas, así como el control y exclusividad en cada modelo. Además, presenta los aspectos esenciales de la escalabilidad y flexibilidad que hacen posible la adaptación de recursos según la demanda. Se describen los principales servicios y proveedores de la nube, con énfasis en su uso cotidiano y educativo.',
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
            titulo: 'Características de la nube',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principales proveedores de servicios en la nube',
            hash: 't_1_2',
          },
          { numero: '1.3', titulo: 'Evolución histórica', hash: 't_1_3' },
          { numero: '1.4', titulo: 'Acceso', hash: 't_1_4' },
          {
            numero: '1.5',
            titulo: 'Escalabilidad y accesibilidad',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modelos tradicionales de computación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Modelos de despliegue: nube publica, privada e hibrida',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '3.1', titulo: 'Uso de la nube publica', hash: 't_3_1' },
          { numero: '3.2', titulo: 'Control y exclusividad', hash: 't_3_2' },
          {
            numero: '3.3',
            titulo: 'Análisis de costos y seguridad en nube hibrida',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Infraestructura en la nube',
        desarrolloContenidos: true,
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
        'Tecnologia 4.0. (2022). ¿Qué es computación en la nube? | ¿Qué es cloud computing? | Explicado en 4 minutos [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=MCKdahh2lSo&ab_channel=Tecnolog%C3%ADa4.0',
    },
    {
      tema: 'Escalabilidad y accesibilidad',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024). Servicios en la nube - Interoperabilidad [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=jnyse9K-P7A&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento en la nube',
      significado:
        'Servicio que permite guardar datos y archivos en servidores remotos accesibles vía internet.',
    },
    {
      termino: 'Aplicaciones en línea',
      significado:
        'Programas que se ejecutan directamente desde internet, sin necesidad de instalación local.',
    },
    {
      termino: 'Cloud Computing (Computación en la nube)',
      significado:
        'Modelo que ofrece recursos, servicios y almacenamiento informático a través de una red pública o privada.',
    },
    {
      termino: 'Elasticidad',
      significado:
        'Capacidad de la nube para aumentar o disminuir recursos automáticamente según demanda.',
    },
    {
      termino: 'Escalabilidad',
      significado:
        'Habilidad de una infraestructura para adaptarse creando o liberando recursos al crecer o disminuir la carga.',
    },
    {
      termino: 'Modelos de despliegue',
      significado:
        'Formas de organizar servicios en la nube: pública, privada y híbrida, según propiedad y acceso de recursos.',
    },
    {
      termino: 'Multi-nube',
      significado:
        'Estrategia empresarial que utiliza múltiples servicios de nube pública y privada combinados para optimizar recursos.',
    },
    {
      termino: 'Seguridad Informática',
      significado:
        'Conjunto de medidas y tecnologías para proteger sistemas, datos y redes frente a accesos no autorizados y ataques.',
    },
    {
      termino: 'Virtualización',
      significado:
        'Tecnología que permite crear versiones virtuales de recursos informáticos, independizando el software del hardware.',
    },
  ],
  referencias: [
    {
      referencia:
        'Celaya Luna, A. (2013). Cloud: herramientas para trabajar en la nube. ICB Editores.',
      link: 'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/109471',
    },
    {
      referencia:
        'Ibáñez Carrasco, P. (2018). Informática I. Cengage Learning.',
      link: 'https://ebooks7-24-com.bdigital.sena.edu.co/?il=7696',
    },
    {
      referencia:
        'Ibáñez Carrasco, P. (2018). Informática II. Cengage Learning.',
      link: 'https://ebooks7-24-com.bdigital.sena.edu.co/?il=8950',
    },
    {
      referencia:
        'Menchén, A. (2016). Software ofimático de productividad en la nube. Rama Editorial.',
      link: 'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/110036',
    },
    {
      referencia:
        'Mosco, V. (2016). La nube: Big Data en un mundo turbulento. Biblioteca Buridán.',
      link: 'https://www-digitaliapublishing-com.bdigital.sena.edu.co/a/103946',
    },
    {
      referencia:
        'Postigo Palacios, A. (2020). Seguridad informática. Editorial Paraninfo.',
      link: 'https://ebooks7-24-com.bdigital.sena.edu.co/?il=18108',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
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
          nombre: 'Nombre_Experto',
          cargo: 'Cargo_Experto',
          centro: 'Regional_Experto',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre_Experto',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_Experto',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_Experto',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre_Experto',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_Experto',
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
