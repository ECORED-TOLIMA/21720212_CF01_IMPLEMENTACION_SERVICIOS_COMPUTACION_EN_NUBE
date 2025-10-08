<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Modelos tradicionales de computación
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Los modelos tradicionales de computación representan la forma clásica en que operaban y aún operan muchos sistemas informáticos, en los que el <em>hardware</em>, <em>software</em> y datos están concentrados en un único lugar. Generalmente, todo se almacena en el computador del usuario o en servidores locales administrados directamente por la organización. Este enfoque dominó durante décadas y permitió el desarrollo de los sistemas actuales, ya que sentó las bases de la infraestructura computacional moderna.
    
    separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 2.1 Infraestructura de modelos tradicionales
    
    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center
          .col-lg-9.col-12.order-lg-2.order-2
            p(data-aos="fade-down") La infraestructura de modelos tradicionales se basa en el uso de equipos y recursos físicos instalados de manera local, generalmente en las instalaciones de una organización, institución educativa o incluso en los hogares. Este modelo ha sido la base de la informática durante muchos años, ya que permite a los usuarios tener un control directo sobre sus dispositivos y la información que gestionan.
            p.mb-0(data-aos="fade-down") En este esquema, los recursos tecnológicos dependen de la adquisición, instalación y mantenimiento de <em>hardware</em>, así como de la actualización constante de <em>software</em>. Cada equipo cuenta con componentes esenciales que garantizan su funcionamiento:
          .col-lg-3.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center
              .col(data-aos="flip-up")
                figure
                  img(src='@/assets/curso/temas/tema2/img02.png', alt='Imagen decorativa')
    
    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema2/img03.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") <b>Procesador</b> encargado de ejecutar instrucciones y operaciones, siendo el núcleo que determina la velocidad y capacidad de respuesta del sistema.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema2/img04.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") <b>Memoria</b> utilizada para almacenar temporalmente datos y programas en ejecución, lo que permite que las aplicaciones funcionen de manera fluida.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema2/img05.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") <b>Disco duro</b> destinado al almacenamiento permanente de información y <em>software</em>, ofreciendo acceso a los archivos y programas aún después de apagar el equipo.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema2/img06.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") <b>Dispositivos de entrada y salida</b> como teclado, monitor, impresora o escáner, que permiten la interacción directa con el sistema y el aprovechamiento de sus funciones.
    
    .row.justify-content-center.mb-0
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-2.order-2
            p(data-aos="fade-down") Este modelo, aunque garantiza control total sobre los recursos, implica costos elevados en adquisición, mantenimiento, consumo energético y actualización tecnológica. Además, su escalabilidad es limitada, ya que para ampliar la capacidad se requiere invertir en nuevos equipos o infraestructura física.
            .tarjeta.tarjeta--C02.p-4
              .row.justify-content-center.align-items-center
                .col-lg-auto.col-2
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/temas/tema2/img07.svg', alt='Imagen decorativa')
                .col-lg-10.col-10
                  p.mb-0(data-aos="fade-down") Estas características explican por qué los modelos tradicionales, si bien fueron fundamentales para el desarrollo inicial de la informática, han ido evolucionando hacia esquemas más flexibles y económicos, como la computación en la nube.
                
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0.d-flex
            .row.justify-content-center(data-aos="fade-up")
              .col
                figure.h-100.w-100.m-0(data-aos="fade-up")
                  img.object-fit-cover(src='@/assets/curso/temas/tema2/img08.png', alt='Imagen decorativa')
    separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 2.2 Ventajas y desventajas de los modelos tradicionales
    
    p.mb-4(data-aos="fade-down") Los modelos tradicionales de computación presentan una serie de beneficios que los hicieron dominantes durante décadas y que aún hoy resultan útiles en ciertos contextos:

    .row.justify-content-center.mb-5
      .col-lg-10.col-12.order-lg-2.order-2
        p(data-aos="fade-down") 
        .tarjeta.tarjeta--BG02.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4.col-3.order-lg-2.order-1.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img09.png', alt='Imagen decorativa')
            .col-lg-8.col-12.order-lg-1.order-2
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li.mb-2
                  i.fas.fa-cloud
                  p.mb-0 Control total el usuario o la empresa tienen dominio absoluto sobre el <em>hardware</em>, el <em>software</em> y los datos. Esto significa que pueden decidir cómo configurar sus equipos, qué programas instalar y cómo administrar la información, sin depender de terceros.
                li.mb-2
                  i.fas.fa-cloud
                  | Mayor seguridad local al no estar conectados de forma obligatoria a Internet ni utilizar servicios de proveedores externos, los datos sensibles permanecen bajo resguardo interno, reduciendo riesgos asociados al acceso remoto o a vulneraciones en la nube.
                li.mb-2
                  i.fas.fa-cloud
                  | Rendimiento estable el desempeño del sistema no se ve condicionado por la velocidad o calidad de la conexión a Internet, ya que todo el procesamiento ocurre de manera interna en el equipo o red local.
                li.mb-0
                  i.fas.fa-cloud
                  | Disponibilidad sin conexión los programas y archivos pueden utilizarse incluso sin acceso a la red, lo que resulta práctico en zonas con conectividad limitada o inestable.

    p.mb-5(data-aos="fade-down") No obstante, los modelos tradicionales también presentan limitaciones que afectan su uso en la actualidad:

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img10.svg", alt="alt").img80.m-auto
          p.mb-0 Acceso restringido la información solo puede consultarse desde el dispositivo físico o red local donde está almacenada, lo que limita la movilidad y la posibilidad de trabajar desde diferentes lugares.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img11.svg", alt="alt").img90.m-auto
          p.mb-0 Altos costos mantener esta infraestructura requiere una inversión considerable en la compra de equipos, licencias de <em>software</em> y en la contratación de personal técnico para realizar mantenimientos y actualizaciones.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img12.svg", alt="alt").img80.m-auto
          p.mb-0 Escalabilidad limitada ampliar la capacidad de almacenamiento o procesamiento implica adquirir nuevo <em>hardware</em> o instalar servidores adicionales, procesos que resultan costosos, lentos y poco flexibles.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img13.svg", alt="alt").img80.m-auto
          p.mb-0 Menor colaboración dificulta el trabajo en equipo, ya que los archivos y programas no se pueden compartir de manera ágil en entornos remotos, lo que restringe la cooperación en proyectos conjuntos.
    
    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center
          .col-lg-9.col-12.order-lg-2.order-2
            p(data-aos="fade-down") En términos prácticos, este modelo resulta útil en escenarios donde la seguridad local es prioritaria, como instituciones gubernamentales, bancos o pequeñas empresas que no requieren movilidad ni un crecimiento acelerado. Sin embargo, para organizaciones que buscan flexibilidad, acceso remoto y expansión rápida, los modelos tradicionales se convierten en un obstáculo. Estas limitaciones explican la creciente migración hacia la computación en la nube, que ofrece alternativas más escalables, colaborativas y económicas.
            .tarjeta.tarjeta--C02.p-4
              .col-12
                p.mb-0(data-aos="fade-down") En la práctica, el modelo tradicional se manifiesta en distintos escenarios cotidianos. A continuación, se presenta un ejemplo que describe cómo funciona este enfoque y cuáles son sus implicaciones en el trabajo diario:
                
          .col-lg-3.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure.h-100.w-100.m-0(data-aos="flip-up")
                  img.object-fit-cover(src='@/assets/curso/temas/tema2/img14.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-0
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b.d-flex.align-items-center.p-3.rounded
          .tarjeta-avatar-b__img.me-3.d-flex.justify-content-center.align-items-center(style="width:70px; height:70px; border-radius:50%")
            .col-lg-11(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema2/img15.svg' alt="Imagen decorativa")(style= "width: 100%")
          .tarjeta.tarjeta--C03
            .py-4
              p.mb-0 Una pequeña empresa de diseño gráfico decide trabajar con un modelo tradicional de computación. Cada diseñador tiene un computador de escritorio potente con programas instalados de manera local y los archivos se almacenan en el servidor de la oficina. Esto les permite mantener control total sobre sus proyectos y trabajar sin necesidad de Internet. Sin embargo, cuando un diseñador necesita trabajar desde casa o compartir un archivo con un cliente, se vuelve complicado, ya que la información no está disponible de manera remota y deben recurrir a dispositivos externos como memorias USB o discos portátiles.


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
