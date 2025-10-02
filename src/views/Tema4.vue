<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Infraestructura en la nube
    
    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center
          .col-lg-6.col-12.order-lg-2.order-2
            .tarjeta.tarjeta--C01.p-4
              p(data-aos="fade-down") La infraestructura de la nube es el conjunto de recursos físicos y virtuales que permiten ofrecer servicios informáticos a través de Internet. Su importancia radica en que transforma la manera en que empresas, instituciones y usuarios individuales acceden y gestionan datos, aplicaciones y plataformas digitales. Para comprender su funcionamiento, es necesario analizar los requisitos técnicos básicos, los componentes principales, las consideraciones de seguridad y la administración eficiente de recursos.
          .col-lg-6.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0.d-flex
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure.h-100.w-100.m-0(data-aos="flip-up")
                  img.object-fit-cover(src='@/assets/curso/temas/tema4/img01.png', alt='Imagen decorativa')
    separador 
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 4.1 Requisitos técnicos básicos
    
    p.mb-4(data-aos="fade-down") Para que una infraestructura de nube opere de manera eficiente, es necesario contar con condiciones mínimas que aseguren conectividad, estabilidad y disponibilidad de los servicios. Estos requisitos permiten que las aplicaciones funcionen sin interrupciones y que los usuarios tengan una experiencia fluida. Entre los principales se encuentran:
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema4/img02.png", alt="alt").img400.m-auto
      .col-lg-9
        SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema4/img03.svg", alt="alt").img100.m-auto
            h4.titulo-1 Conexión a Internet de alta velocidad y redundante
            p.mb-0 Una infraestructura en la nube depende directamente de la conectividad. Por ello, se requiere una red de banda ancha con redundancia (enlaces de respaldo) para evitar caídas del servicio y garantizar continuidad.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema4/img04.svg", alt="alt").img100.m-auto
            h4.titulo-1 Centros de datos con sistemas de energía ininterrumpida y refrigeración avanzada
            p.mb-0 Estos elementos aseguran la operación constante de servidores y equipos de red, evitando fallos por cortes eléctricos o sobrecalentamiento.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema4/img05.svg", alt="alt").img100.m-auto
            h4.titulo-1 <em>Hardware</em> especializado
            p.mb-0 Se utilizan servidores de alto rendimiento, unidades de almacenamiento masivo y procesadores optimizados para manejar múltiples solicitudes de manera simultánea.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema4/img06.svg", alt="alt").img100.m-auto
            h4.titulo-1 Redes de comunicación robustas
            p.mb-0 El uso de <em>routers</em>, switches y equilibradores de carga permite distribuir el tráfico entre diferentes servidores, mejorando la eficiencia y reduciendo tiempos de respuesta.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema4/img07.svg", alt="alt").img100.m-auto
            h4.titulo-1 Tecnologías de virtualización
            p.mb-0 Herramientas como hipervisores y contenedores facilitan la creación de entornos virtuales, optimizando los recursos físicos y garantizando la flexibilidad para escalar según la demanda.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6.col-lg-8
                img(src="@/assets/curso/temas/tema4/img08.svg", alt="alt").img100.m-auto
            h4.titulo-1 Sistemas de respaldo y seguridad
            p.mb-0 Copias de seguridad automáticas, cifrado de datos y <em>firewalls</em> especializados son fundamentales para proteger la información y mantener la integridad de los servicios
    
    
    .row.justify-content-center.mb-0
      .col-lg-11.col-12
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center
            .col-lg-auto.col-2.order-lg-1.order-1
              figure
                img(src='@/assets/curso/temas/tema4/img09.svg', alt='Imagen decorativa')
            .col-lg-10.col-9.order-lg-2.order-2
              p(data-aos="fade-down") En el ámbito educativo, cumplir con estos requisitos es indispensable para asegurar que cientos o incluso miles de aprendices, estudiantes, instructores y docentes puedan acceder de manera simultánea a plataformas de formación virtual, videoconferencias, bibliotecas digitales o laboratorios remotos, sin interrupciones y con altos estándares de seguridad.

    separador 
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 4.2 Componentes de la infraestructura en la nube
    
    p.mb-5(data-aos="fade-down") La infraestructura en la nube está compuesta por un conjunto de recursos físicos y virtuales que interactúan para garantizar el funcionamiento continuo, seguro y escalable de los servicios. Entre los principales componentes se destacan:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img10.svg' alt='AvatarTop')
          h4.text-center Servidores físicos y virtuales
          p Los servidores constituyen la base del procesamiento de datos, ejecución de aplicaciones y almacenamiento de bases de datos. Los entornos virtuales permiten optimizar recursos y atender de manera simultánea múltiples solicitudes de usuarios.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img11.svg' alt='AvatarTop')
          h4.text-center Redes
          p Incluyen equipos físicos como <em>routers</em> y switches, así como redes definidas por <em>software</em> (SDN), que proporcionan conexiones seguras, rápidas y gestionables de forma centralizada, incluso a nivel global.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img12.svg' alt='AvatarTop')
          h4.text-center Sistemas de almacenamiento
          p Se ofrecen diferentes modalidades como almacenamiento en bloques, en archivos o en objetos, lo que brinda escalabilidad y flexibilidad según las necesidades de cada organización o aplicación.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img13.svg' alt='AvatarTop')
          h4.text-center Plataformas de gestión y automatización
          p Herramientas que permiten monitorear, administrar y desplegar recursos en la nube de manera eficiente. También facilitan la automatización de procesos, reduciendo tiempos y errores en la operación.
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img14.svg' alt='AvatarTop')
          h4.text-center Infraestructura del centro de datos
          p Incluye aspectos críticos como sistemas de seguridad física, control de acceso, extinción de incendios, refrigeración avanzada y energía redundante. Estos elementos aseguran la continuidad operativa y reducen riesgos de fallas.
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12.mb-4.mb-lg-0(data-aos="fade-left")
        p(data-aos="fade-down") En conjunto, estos componentes crean un entorno confiable, flexible y escalable que soporta el crecimiento de las organizaciones, garantizando disponibilidad, rendimiento y seguridad en los servicios ofrecidos.
        .tarjeta-avatar-b.d-flex.align-items-center.py-3.rounded
          .tarjeta-avatar-b__img.me-3.d-flex.justify-content-center.align-items-center(style="width:70px; height:70px; border-radius:50%")
            .col-lg-11(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema4/img15.svg' alt="Imagen decorativa")(style= "width: 100%")
          .tarjeta.tarjeta--C03
            .px-2.py-3
              p En el ámbito educativo, por ejemplo, instituciones como el SENA requieren de esta infraestructura para sostener plataformas de formación virtual, videoconferencias, sistemas de gestión del aprendizaje y simuladores especializados, asegurando que los aprendices accedan sin interrupciones a los contenidos y herramientas de aprendizaje.

    separador 
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 4.3 Consideraciones de seguridad en la nube
    
    .row.justify-content-center.mb-0
      .col-12
        .row.justify-content-center.mb-5
          .col-lg-8.col-12.order-lg-1.order-2
            p.mb-4(data-aos="fade-down") La seguridad constituye uno de los pilares más relevantes en la adopción de la nube, ya que busca garantizar la confidencialidad, integridad y disponibilidad de los datos. Las organizaciones deben aplicar un conjunto de medidas preventivas y correctivas que minimicen riesgos y aseguren la continuidad de los servicios. Entre las prácticas más comunes se encuentran:
            .tarjeta.tarjeta--C01.p-4
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li.mb-2
                  i.fas.fa-cloud
                  | Cifrado de datos tanto en tránsito como en reposo.
                li.mb-2
                  i.fas.fa-cloud
                  p.mb-0 <em>Firewalls</em> virtuales y segmentación de redes para evitar accesos indebidos.
                li.mb-2
                  i.fas.fa-cloud
                  | Gestión de identidades y accesos (IAM) con autenticación multifactor.
                li.mb-2
                  i.fas.fa-cloud
                  | Principio de privilegio mínimo, donde cada usuario accede solo a los recursos que necesita.
                li.mb-2
                  i.fas.fa-cloud
                  | Modelo de confianza cero, que parte de la premisa de que ningún sistema o usuario es confiable por defecto.
                li.mb-2
                  i.fas.fa-cloud
                  | Planes de respuesta a incidentes y auditorías continuas.
                li.mb-0
                  i.fas.fa-cloud
                  | Cumplimiento de estándares internacionales, como ISO 27001 o NIST.
          .col-lg-4.col-md-6.col-12.mb-3.order-lg-2.order-1.mb-lg-0.d-flex
            .row.justify-content-center
              .col
                figure.h-100.w-100.m-0
                  img.object-fit-cover(src='@/assets/curso/temas/tema4/img16.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center.mb-5(style="display: flex; width: 100%; margin: auto;")
          .col-lg-8.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
            p(data-aos="fade-down") Más allá de las prácticas específicas, es fundamental que las instituciones y empresas adopten un proceso estructurado de seguridad en la nube, el cual puede comprender los siguientes pasos:
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Evaluación de riesgos y requisitos")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Identificar los datos y aplicaciones que se trasladarán a la nube, clasificando la información según su nivel de sensibilidad y analizando las posibles amenazas.
              .row(numero="2" titulo="Definición de políticas y controles de seguridad")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Establecer reglas claras de acceso, responsabilidades compartidas entre proveedor y organización, y lineamientos de cumplimiento normativo.
              .row(numero="3" titulo="Implementación de medidas de protección")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Aplicar cifrado, segmentación de redes, <em>firewalls</em>, gestión de identidades y controles de autenticación.
              .row(numero="4" titulo="Monitoreo y auditoría continua")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Supervisar accesos y tráfico de red en tiempo real, detectar anomalías y responder oportunamente a incidentes.
              .row(numero="5" titulo="Capacitación y concienciación")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Formar a usuarios y administradores en buenas prácticas de ciberseguridad para reducir riesgos humanos.
              .row(numero="6" titulo="Mejora continua")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Actualizar políticas, procesos y controles frente a nuevas vulnerabilidades y aprendizajes obtenidos de incidentes previos.
          .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema4/img17.png', alt='Imagen decorativa')
        
        p(data-aos="fade-down") Este enfoque permite establecer un entorno confiable y adaptable, que responde tanto a las demandas técnicas como a los requisitos normativos de sectores sensibles.
        p.mb-4(data-aos="fade-down") A continuación, se presenta un ejemplo de seguridad en la nube:
        
        .row.justify-content-center.mb-0
          .col-12.mb-4.mb-lg-0(data-aos="fade-left")
            .tarjeta-avatar-b.d-flex.align-items-center.py-3.rounded
              .tarjeta-avatar-b__img.me-3.d-flex.justify-content-center.align-items-center(style="width:70px; height:70px; border-radius:50%")
                .col-lg-11(data-aos="flip-up")
                  img(src='@/assets/curso/temas/tema4/img18.svg' alt="Imagen decorativa")(style= "width: 100%")
              .tarjeta.tarjeta--C03
                .px-2.py-3
                  p En el SENA, la implementación de la nube implica proteger datos académicos, resultados de evidencias y la información personal de aprendices e instructores. Para ello, se aplican controles de acceso con autenticación multifactor, políticas de privilegio mínimo en las plataformas educativas y planes de recuperación ante incidentes. De esta manera, se garantiza la continuidad del aprendizaje virtual, evitando filtraciones o manipulaciones indebidas de la información institucional.
    separador 
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 4.4 Administración y optimización de recursos
    
    .row.justify-content-center.mb-5
      .col-12.order-lg-2.order-2
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.align-items-center
            .col-auto.col-2.d-none.d-lg-block
              figure(data-aos="fade-up")
                img(src='@/assets/curso/temas/tema4/img19.svg', alt='Imagen decorativa')
            .col-lg-9.col-10
              p.mb-0(data-aos="fade-down") La administración eficiente de los recursos en la nube resulta esencial para garantizar la continuidad de los servicios, reducir costos y evitar desperdicios de infraestructura. La optimización no solo implica un uso racional de CPU, memoria y almacenamiento, sino también la implementación de políticas y herramientas que permitan responder de manera flexible a las demandas cambiantes de los usuarios.
    
    p.mb-5(data-aos="fade-down") Entre las estrategias más utilizadas se destacan:

    .row.justify-content-center.mb-5
      .col-12
        .tarjeta.tarjeta--C01.p-3
          .row.justify-content-center.align-items-center
            .col-lg-3.col-2.order-lg-2.order-1.d-none.d-lg-block
              figure(data-aos="fade-up")
                img(src='@/assets/curso/temas/tema4/img20.png', alt='Imagen decorativa')
            .col-lg-9.col-10.order-lg-1.order-2
              ul.lista-ul--color.mb-0(data-aos="fade-down")
                li.mb-4
                  i.fas.fa-cloud
                  | Monitoreo constante de recursos como CPU, memoria, almacenamiento y tráfico de red, con el fin de detectar anomalías y ajustar el rendimiento en tiempo real.
                li.mb-4
                  i.fas.fa-cloud
                  | Escalabilidad automática, que permite aumentar o disminuir recursos en función de la demanda, evitando tanto la saturación como el sobredimensionamiento innecesario.
                li.mb-4
                  i.fas.fa-cloud
                  | Políticas de respaldo y recuperación ante desastres o fallos, que garantizan la continuidad operativa y reducen el riesgo de pérdida de información crítica.
                li.mb-4
                  i.fas.fa-cloud
                  | Auditoría y control de costos, especialmente bajo el modelo pay-as-you-go, en el que se paga únicamente por los recursos utilizados.
                li.mb-0
                  i.fas.fa-cloud
                  | Uso de herramientas de orquestación, que automatizan procesos de despliegue, configuración y gestión, reduciendo la carga administrativa y minimizando errores humanos.
    
    
    p.mb-4(data-aos="fade-down") En instituciones educativas, la correcta administración y optimización de la nube asegura que plataformas de formación virtual, aulas en línea y sistemas administrativos funcionen sin interrupciones, incluso en momentos de alta concurrencia como inscripciones masivas o periodos de evaluación.

    .row.justify-content-center.mb-0
      .col-12.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b.d-flex.align-items-center.py-3.rounded
          .tarjeta-avatar-b__img.me-3.d-flex.justify-content-center.align-items-center(style="width:70px; height:70px; border-radius:50%")
            .col-lg-10(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema4/img21.svg' alt="Imagen decorativa")(style= "width: 100%")
          .tarjeta.tarjeta--C03
            .px-0.py-4
              p Durante los procesos de inscripción en el SENA, miles de aprendices acceden simultáneamente a las plataformas virtuales. Gracias a la escalabilidad automática y al monitoreo constante de recursos, es posible evitar caídas del sistema y garantizar un acceso fluido. Además, mediante políticas de respaldo y auditorías de consumo, se optimizan los costos operativos, asegurando que los recursos tecnológicos estén disponibles justo cuando más se necesitan.

</template>

<script>
export default {
  name: 'Tema4',
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
