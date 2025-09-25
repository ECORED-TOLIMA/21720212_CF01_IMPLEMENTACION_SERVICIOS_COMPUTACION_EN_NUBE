<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Modelos de despliegue de la nube
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        figure.mb-5
          img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')
      .row.justify-content-center
        .col-lg-11.col-12
          .row.justify-content-center
            .col-lg-auto.col-2.order-lg-1.order-1.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img02.svg', alt='Imagen decorativa')
            .col-lg-10.col-12.order-lg-2.order-1
              p(data-aos="flip-up") Los modelos de despliegue en la computación en la nube definen cómo se organiza, administra y pone a disposición de los usuarios la infraestructura tecnológica y los servicios asociados. Comprender estas modalidades es fundamental, ya que cada una presenta ventajas, limitaciones y aplicaciones específicas según las necesidades de las organizaciones y de los usuarios individuales. Los tres modelos principales son la nube pública, la nube privada y la nube híbrida.
    
    separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 3.1 Nube pública y sus aplicaciones
    
    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-1.order-2
            p(data-aos="fade-down") La nube pública es un entorno en el que los servicios informáticos, como servidores, almacenamiento y aplicaciones, son ofrecidos por proveedores externos a través de Internet. Esto significa que empresas como AWS, Google Cloud o Microsoft Azure se encargan de la infraestructura, mientras que los usuarios acceden a los recursos sin necesidad de invertir en <em>hardware</em> propio ni preocuparse por el mantenimiento.
            .row.justify-content-center
              .col-lg-auto.col-2
                figure(data-aos="flip-up")
                  img(src='@/assets/curso/temas/tema3/img03.svg', alt='Imagen decorativa')
              .col-lg-10.col-10
                p.mb-0(data-aos="fade-down") Entre sus ventajas más destacadas se encuentra la facilidad de acceso, ya que cualquier persona con conexión a Internet puede utilizarla. Además, se caracteriza por su gran flexibilidad y la posibilidad de ajustar los recursos de acuerdo con las necesidades del momento. Algunos beneficios clave de la nube pública son:
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0.d-flex
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure.h-100.w-100.m-0(data-aos="flip-up")
                  img.object-fit-cover(src='@/assets/curso/temas/tema3/img04.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img05.svg", alt="alt").img100.m-auto
          p.mb-0 Reducción de costos iniciales, al pagar solo por lo que se utiliza.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img06.svg", alt="alt").img90.m-auto
          p.mb-0 Escalabilidad, que permite aumentar o disminuir recursos según la demanda.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img07.svg", alt="alt").img80.m-auto
          p.mb-0 Accesibilidad desde cualquier dispositivo, lo que favorece la colaboración y el trabajo remoto.

      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad(data-aos="flip-left")
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img08.svg", alt="alt").img90.m-auto
          p.mb-0 Mantenimiento a cargo del proveedor, que actualiza los sistemas de manera automática.
    
    p(data-aos="fade-down") Sin embargo, presenta también limitaciones que deben ser consideradas, como las preocupaciones de seguridad debido al almacenamiento de datos en entornos compartidos, y el menor control sobre la infraestructura, lo que puede ser un reto en escenarios que requieren configuraciones específicas.
    p.mb-5(data-aos="fade-down") Entre sus aplicaciones más comunes se encuentran:

    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .row.justify-content-center.mb-5
          .col-lg-8.col-12.order-lg-1.order-2
            .tarjeta.tarjeta--C01.p-4
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li.mb-4
                  i.fas.fa-cloud
                  | Almacenamiento y respaldo de información.
                li.mb-4
                  i.fas.fa-cloud
                  | Aulas virtuales y entornos de aprendizaje colaborativo.
                li.mb-4
                  i.fas.fa-cloud
                  | Desarrollo y ejecución de aplicaciones en línea.
                li.mb-4
                  i.fas.fa-cloud
                  | Procesamiento de grandes volúmenes de datos e inteligencia artificial.
                li.mb-0
                  i.fas.fa-cloud
                  | Alojamiento de sitios web y plataformas digitales.
          .col-lg-4.col-md-6.col-12.mb-3.order-lg-2.order-1.mb-lg-0.d-flex
            .row.justify-content-center
              .col
                figure.h-100.w-100.m-0
                  img.object-fit-cover(src='@/assets/curso/temas/tema3/img09.png', alt='Imagen decorativa')
        p(data-aos="fade-down") A continuación, se presenta un ejemplo que describe cómo funciona la nube pública:

        .row.justify-content-center.mb-0
          .col-12.mb-4.mb-lg-0(data-aos="fade-left")
            .tarjeta-avatar-b.d-flex.align-items-center.py-3.rounded
              .tarjeta-avatar-b__img.me-3.d-flex.justify-content-center.align-items-center(style="width:70px; height:70px; border-radius:50%")
                .col-lg-8(data-aos="flip-up")
                  img(src='@/assets/curso/temas/tema3/img10.svg' alt="Imagen decorativa")(style= "width: 100%")
              .tarjeta.tarjeta--C03
                .p-4
                  p Una empresa de comercio electrónico que maneja gran cantidad de transacciones diarias, puede utilizar Amazon Web Services (AWS) en la modalidad de nube pública para alojar su página web y gestionar su base de datos de clientes.
                  p Gracias a esta solución, la empresa evita invertir en servidores propios, que resultarían costosos de adquirir y mantener. Al mismo tiempo, obtiene la posibilidad de escalar rápidamente su capacidad de almacenamiento y procesamiento en temporadas de alta demanda, como promociones o fechas especiales de ventas.
                  p El uso de la nube pública también le permite mejorar la seguridad y disponibilidad de su plataforma, ya que los proveedores implementan sistemas de respaldo, balanceo de cargas y monitoreo constante, asegurando la continuidad del servicio sin que la organización tenga que destinar personal técnico especializado para estas tareas.
                  p.mb-0 En este caso, la nube pública se convierte en una herramienta estratégica para garantizar la eficiencia operativa y la satisfacción de los clientes, optimizando recursos y asegurando un servicio estable.

    separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 3.2 Nube privada: control y exclusividad
    
    p(data-aos="fade-down") La nube privada se caracteriza por ofrecer un entorno exclusivo en el que los recursos y servicios se encuentran dedicados a una sola organización. A diferencia de la nube pública, donde múltiples usuarios comparten la misma infraestructura, este modelo garantiza que los servidores, el almacenamiento y las aplicaciones estén reservados únicamente para la institución que los utiliza.
    p.mb-5(data-aos="fade-down") Este despliegue puede realizarse de dos formas:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C04.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="flip-up")
                  img(src='@/assets/curso/temas/tema3/img11.svg', alt='Imagen decorativa')(style="width: 85%")
              
            p.mb-0.text-white(data-aos="fade-down") En centros de datos propios, gestionados internamente por la organización, lo que otorga un control absoluto sobre la infraestructura.

          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="flip-up")
                  img(src='@/assets/curso/temas/tema3/img12.svg', alt='Imagen decorativa')(style="width: 85%")
              
            p.mb-0.text-white(data-aos="fade-down") A través de proveedores externos, que ofrecen recursos dedicados exclusivamente a una empresa o institución, pero bajo administración especializada del proveedor.
    
    p(data-aos="fade-down") La nube privada sobresale por su alto nivel de seguridad y control, ya que la organización define directamente las configuraciones, las políticas de acceso y las medidas de protección de los datos. Esto resulta esencial en sectores que manejan información altamente sensible o regulada.
    p.mb-5(data-aos="fade-down") Entre sus principales características se destacan:

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C01.p-2.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto.col-2
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema3/img13.svg", alt="Imagen decorativa")
            .col-lg-8.col-6
              p(data-aos="fade-down") Exclusividad de los recursos, sin compartir infraestructura con terceros.
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C01.p-2.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto.col-2
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema3/img17.svg", alt="Imagen decorativa")
            .col-lg-8.col-6
              p(data-aos="fade-down") Mayor control sobre el entorno tecnológico y los datos.
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C01.p-2.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto.col-2
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema3/img18.svg", alt="Imagen decorativa")
            .col-lg-8.col-6
              p(data-aos="fade-down") Posibilidad de personalizar configuraciones y políticas de seguridad.
      .col-lg-3.col-md-8.col-12.mb-3
        .tarjeta.tarjeta--C01.p-2.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto.col-2
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/tema3/img19.svg", alt="Imagen decorativa")
            .col-lg-8.col-6
              p(data-aos="fade-down") Cumplimiento más riguroso de normativas legales y sectoriales.
    
    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-1.order-2
            p(data-aos="fade-down") No obstante, este modelo también presenta limitaciones. Requiere altas inversiones en <em>hardware</em>, mantenimiento y personal especializado, lo que puede representar un costo considerable para las organizaciones. Además, su escalabilidad es restringida, ya que depende de los recursos físicos disponibles, a diferencia de la nube pública, que crece bajo demanda.
            .tarjeta.tarjeta--C02.p-4
              .row.justify-content-center.align-items-center
                .col-auto.col-2
                  figure(data-aos="flip-up")
                    img(src='@/assets/curso/temas/tema3/img14.svg', alt='Imagen decorativa')
                .col-lg-10.col-10
                  p.mb-0(data-aos="fade-down") En conclusión, la nube privada resulta adecuada para escenarios donde se administran datos sensibles, sistemas críticos o aplicaciones que requieren un alto grado de personalización y cumplimiento normativo, aunque implica mayores costos que otros modelos de despliegue.
                
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0.d-flex
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure.h-100.w-100.m-0(data-aos="flip-up")
                  img.object-fit-cover(src='@/assets/curso/temas/tema3/img15.png', alt='Imagen decorativa')
    
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo que describe cómo funciona la nube privada:

    .row.justify-content-center.mb-0
      .col-lg-10.col-12.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b.d-flex.align-items-center.py-3.rounded
          .tarjeta-avatar-b__img.me-3.d-flex.justify-content-center.align-items-center(style="width:70px; height:70px; border-radius:50%")
            .col-lg-8(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema3/img16.svg' alt="Imagen decorativa")(style= "width: 100%")
          .tarjeta.tarjeta--C03
            .p-4
              p Una entidad de salud puede implementar una nube privada para gestionar historiales clínicos electrónicos de sus pacientes. De esta forma, asegura que la información se almacene en un entorno exclusivo, con protocolos de seguridad personalizados y cumpliendo con las regulaciones de protección de datos del sector salud. Gracias a este modelo, la institución puede controlar directamente quién accede a los registros, reducir riesgos de filtración y garantizar la confidencialidad de la información médica.
    separador 
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 3.3 Nube híbrida: análisis de costos y seguridad
    
    .row.justify-content-center
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-1.order-2
            p(data-aos="fade-down") La nube híbrida combina las características más destacadas de la nube pública y privada, ofreciendo a las organizaciones un entorno flexible y equilibrado. Este modelo permite mantener datos y aplicaciones críticas en un espacio seguro y exclusivo, mientras se aprovechan los recursos de la nube pública para gestionar cargas de trabajo menos sensibles o variables.
            .row.justify-content-center.mb-0
              .col-lg-12.col-sm-10.col-12.mb-4(data-aos="fade-right")
                .tarjeta.BG02.p-4.h-100
                  .row.justify-content-center.align-items-center
                    .col-lg-2.col-4.mb-lg-0.mb-4
                      img(src='@/assets/curso/temas/tema3/img20.svg' alt="Imagen decorativa")
                    .col-lg-10
                      p.mb-0 Desde la perspectiva económica, la nube híbrida representa una optimización de costos. Las inversiones en infraestructura propia se limitan a lo esencial, mientras que los aumentos de demanda se gestionan a través de servicios públicos bajo el esquema de pago por uso. Esto reduce el gasto en <em>hardware</em> y mantenimiento, a la vez que ofrece escalabilidad inmediata.
            .row.justify-content-center
              .col-lg-auto.col-2
                figure(data-aos="flip-up")
                  img(src='@/assets/curso/temas/tema3/img03.svg', alt='Imagen decorativa')
              .col-lg-10.col-10
                p.mb-0(data-aos="fade-down") En términos de seguridad, este modelo brinda una segmentación inteligente de la información. Los datos sensibles se resguardan en la nube privada bajo controles estrictos, mientras que la información menos crítica se aloja en la nube pública, con medidas de protección adecuadas para ese nivel de riesgo. Esto permite cumplir normativas específicas sin renunciar a la flexibilidad y colaboración que proporciona la nube pública.
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0.d-flex.d-none.d-lg-block
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure.h-100.w-100.m-0(data-aos="flip-up")
                  img.object-fit-cover(src='@/assets/curso/temas/tema3/img21.png', alt='Imagen decorativa')
    
    p.mb-4(data-aos="fade-down") Las principales ventajas de la nube híbrida incluyen:    
    
    .row.justify-content-center.mb-5
      .col-lg-10.col-12.order-lg-2.order-2
        p(data-aos="fade-down") 
        .tarjeta.tarjeta--C01.p-4
          .row.justify-content-center.align-items-center
            .col-12.order-lg-1.order-2
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li.mb-4
                  i.fas.fa-cloud
                  | Optimización de costos al combinar inversión propia con servicios bajo demanda.
                li.mb-4
                  i.fas.fa-cloud
                  | Escalabilidad flexible, ajustándose a las necesidades en tiempo real.
                li.mb-4
                  i.fas.fa-cloud
                  | Segmentación de datos, diferenciando entre información crítica y no crítica.
                li.mb-4
                  i.fas.fa-cloud
                  | Continuidad del negocio, con mayor capacidad de recuperación y redundancia en caso de fallos.
                li.mb-0
                  i.fas.fa-cloud
                  | Adaptación estratégica, al permitir mover cargas de trabajo entre entornos según los objetivos de la organización.
    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center
          .col-lg-9.col-12.order-lg-2.order-2
            p(data-aos="fade-down") Sin embargo, su implementación demanda una gestión cuidadosa y personal capacitado, ya que la integración entre los dos entornos puede generar vulnerabilidades o problemas de interoperabilidad si no se maneja con las herramientas adecuadas.
            .tarjeta.tarjeta--C02.p-3
              .row.justify-content-center.align-items-center
                .col-lg-auto.col-2.order-lg-2.order-1
                  figure
                    img(src='@/assets/curso/temas/tema3/img23.svg', alt='Imagen decorativa')
                .col-lg-9.col-9.order-lg-1.order-2
                  p(data-aos="fade-down") En conclusión, la nube híbrida es una de las alternativas más adoptadas actualmente, ya que ofrece un equilibrio entre seguridad, eficiencia de costos y escalabilidad, adaptándose a las dinámicas cambiantes del entorno empresarial y educativo.
                
          .col-lg-3.col-md-6.col-12.mb-3.order-lg-1.order-1.mb-lg-0.d-flex
            .row.justify-content-center
              .col
                figure.h-100.w-100.m-0
                  img.object-fit-cover(src='@/assets/curso/temas/tema3/img22.svg', alt='Imagen decorativa')
    
    p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo que describe cómo funciona la nube hibrida:
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b.d-flex.align-items-center.py-3.rounded
          .tarjeta-avatar-b__img.me-3.d-flex.justify-content-center.align-items-center(style="width:70px; height:70px; border-radius:50%")
            .col-lg-8(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema3/img24.svg' alt="Imagen decorativa")(style= "width: 100%")
          .tarjeta.tarjeta--C03
            .p-4
              p El SENA podría implementar una nube híbrida para alojar sus plataformas de formación virtual. En este modelo, los datos sensibles relacionados con la gestión académica, matrículas y evaluaciones se mantendrían en una nube privada, garantizando control y seguridad. Al mismo tiempo, los contenidos de aprendizaje, como videos, foros o actividades interactivas, podrían alojarse en una nube pública, lo que permitiría un acceso masivo, flexible y con menor costo de almacenamiento. De esta manera, la institución optimizaría sus recursos, protegería la información confidencial de los aprendices y aseguraría la continuidad de sus servicios educativos en todo el país.
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
