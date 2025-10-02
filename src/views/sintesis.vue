<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p(data-aos="fade-down") El componente formativo aborda la comprensión y aplicación de la computación en la nube, destacando sus características principales, evolución histórica, formas de acceso, escalabilidad y flexibilidad, así como los principales proveedores de servicios. Se analiza la comparación con los modelos tradicionales de computación, incluyendo infraestructura, ventajas y limitaciones, y se presentan los distintos modelos de despliegue de la nube: pública, privada e híbrida, enfatizando control, seguridad y optimización de costos.
    p.mb-5(data-aos="fade-down") Además, se examina la infraestructura necesaria para el funcionamiento de la nube, abarcando requisitos técnicos básicos, componentes físicos y virtuales, consideraciones de seguridad y estrategias de administración y optimización de recursos. Este enfoque permite a los usuarios comprender cómo gestionar información, aplicaciones y servicios digitales de manera segura, eficiente y escalable, facilitando el acceso remoto, la colaboración y el aprovechamiento de tecnologías modernas en contextos educativos y profesionales.
    

    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se describe la computación en la nube y su relación con los modelos tradicionales, destacando sus características, evolución y formas de acceso. Se presentan los distintos modelos de despliegue como pública, privada e híbrida, así como sus ventajas, limitaciones y aplicaciones prácticas. Asimismo, se aborda la infraestructura necesaria para su funcionamiento, incluyendo requisitos técnicos, componentes físicos y virtuales, seguridad y administración de recursos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
