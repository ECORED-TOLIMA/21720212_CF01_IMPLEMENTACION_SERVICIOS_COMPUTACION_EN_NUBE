<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Computación en la nube
    separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 1.1 Características de la nube

    separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 1.2 Principales proveedores de servicios en la nube

    separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 1.3 Evolución histórica

    separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 1.4 Acceso

    separador 
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 1.5 Escalabilidad y accesibilidad


</template>

<script>
export default {
  name: 'Tema1',
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
