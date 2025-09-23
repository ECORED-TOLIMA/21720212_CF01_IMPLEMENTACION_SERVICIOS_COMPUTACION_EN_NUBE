<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center(style="display: flex; width: 100%; margin: auto;")
          .col-lg-10.col-12.order-lg-2.order-2
            p(data-aos="fade-down") Este componente presenta los aspectos esenciales de la computación en la nube, incluyendo su definición, evolución histórica, modelos tradicionales y modelos de despliegue. El propósito es que el aprendiz comprenda el funcionamiento, las ventajas y las limitaciones de la nube informática, así como los requisitos técnicos y de seguridad que sustentan su infraestructura. Para alcanzar este objetivo, se analizan las características de acceso, escalabilidad y flexibilidad, se comparan diferentes enfoques de implementación y se revisan los componentes fundamentales que garantizan la administración y optimización de recursos en entornos de nube pública, privada e híbrida. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
          .col-lg-2.order-lg-1.order-1.mb-lg-0.d-none.d-lg-block
            .row.justify-content-center(data-aos="fade-up")
              .col
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/intro/img01.svg', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
