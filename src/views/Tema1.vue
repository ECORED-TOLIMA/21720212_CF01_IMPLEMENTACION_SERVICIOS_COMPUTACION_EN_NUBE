<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Computación en la nube
    
    .row.justify-content-center.mb-0
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-1.order-2
            .tarjeta.tarjeta--C01.p-4
              p.mb-0(data-aos="fade-down") La computación en la nube, también llamada <em>cloud computing</em>, es un modelo que permite el acceso remoto a servicios, aplicaciones y almacenamiento a través de Internet, sin depender de un único lugar físico. Sus orígenes se remontan a las décadas de 1950 y 1960, con los primeros intentos de compartir recursos informáticos, aunque el término comenzó a difundirse en 1997 y alcanzó gran popularidad a finales de la década de 2000. Este enfoque distribuye <em>software</em> y datos en múltiples servidores, lo que brinda al usuario la posibilidad de utilizar redes con gran capacidad para gestionar información. Gracias a ello, se facilita la escalabilidad, la flexibilidad y el aprovechamiento eficiente de los recursos tecnológicos, constituyéndose en una de las bases fundamentales de la transformación digital.
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="fade-up")
              .col
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen decorativa')

    separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 1.1 Características principales
    
    p.mb-5(data-aos="fade-down") La computación en la nube presenta un conjunto de características que la convierten en una de las tecnologías más influyentes de la era digital:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img02.svg' alt='AvatarTop')
          h4.text-center Accesibilidad
          p Solo se requiere un dispositivo con conexión a Internet para acceder a los recursos.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img03.svg' alt='AvatarTop')
          h4.text-center Almacenamiento en línea
          p Los archivos y aplicaciones se alojan en servidores remotos, liberando espacio en los dispositivos locales.
        
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img04.svg' alt='AvatarTop')
          h4.text-center Escalabilidad y elasticidad
          p Los recursos pueden aumentar o disminuir automáticamente según la demanda, lo que garantiza eficiencia en costos y rendimiento.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img05.svg' alt='AvatarTop')
          h4.text-center Virtualización
          p El <em>software</em> es independiente del <em>hardware</em> físico, lo que permite ejecutar aplicaciones en diferentes plataformas.
        
        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img06.svg' alt='AvatarTop')
          h4.text-center Disponibilidad
          p La información permanece accesible en todo momento y desde cualquier lugar.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img07.svg' alt='AvatarTop')
          h4.text-center Seguridad
          p Los proveedores emplean mecanismos de cifrado, respaldo y recuperación para proteger los datos.

        .tarjeta.tarjeta--BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img08.svg' alt='AvatarTop')
          h4.text-center Autorreparación
          p Frente a fallas, la nube puede restaurar sistemas a partir de copias de seguridad recientes.
    
    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-2.order-2
            p(data-aos="fade-down") Además de estas características, la nube ofrece ventajas prácticas en la vida diaria y profesional. Permite almacenar y organizar documentos, imágenes y contactos, compartirlos con facilidad y trabajar en colaboración en tiempo real. Gracias a sus aplicaciones en línea, es posible crear y editar textos, hojas de cálculo y presentaciones sin necesidad de instalar <em>software</em> especializado, lo que optimiza el trabajo individual y en equipo.
            .tarjeta.tarjeta--C02.p-4
              .row.justify-content-center.align-items-center
                .col-2
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/temas/tema1/img10.svg', alt='Imagen decorativa')
                .col-lg-10.col-10
                  p.mb-0(data-aos="fade-down") Una de sus propiedades más valiosas es la flexibilidad, entendida como la capacidad de adaptarse rápidamente a cambios en la demanda. Este aspecto resulta crucial para empresas e instituciones, ya que posibilita aumentar o reducir recursos como almacenamiento, procesamiento o ancho de banda sin necesidad de grandes inversiones en infraestructura física.
                
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0.d-flex
            .row.justify-content-center(data-aos="fade-up")
              .col
                figure.h-100.w-100.m-0(data-aos="fade-up")
                  img.object-fit-cover(src='@/assets/curso/temas/tema1/img09.jpg', alt='Imagen decorativa')

    .row.justify-content-center
      .col-10
        .row.justify-content-center.tarjeta.tarjeta--C01.p-4.mb-0
          .col-12
            .row.justify-content-center
              .col-lg-9.col-12.order-lg-1.order-2
                p.mb-0(data-aos="fade-down") En contextos educativos, la nube facilita el acceso a materiales de aprendizaje y promueve la colaboración entre docentes y estudiantes. En el ámbito empresarial, impulsa la innovación al permitir pruebas de aplicaciones o servicios con bajo costo inicial. En general, la nube ha transformado la forma de trabajar, estudiar y comunicarse, consolidándose como una herramienta esencial para la productividad y la gestión eficiente de recursos.
              .col-lg-3.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
                .row.justify-content-center(data-aos="fade-up")
                  .col
                    figure(data-aos="fade-up")
                      img(src='@/assets/curso/temas/tema1/img11.svg', alt='Imagen decorativa')

    separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 1.2 Evolución histórica de la computación en la nube
    
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
            p(data-aos="fade-down") La evolución de la computación en la nube se ha desarrollado a lo largo de varias décadas, marcada por hitos tecnológicos que transformaron la forma en que las personas y las organizaciones almacenan, procesan y acceden a la información:
            LineaTiempoD.color-acento-botones.especial
              .row(numero="A" titulo="Décadas de 1950 y 1960 – Sistemas de tiempo compartido")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Con el auge de las mainframes, surgieron los primeros sistemas que permitían a varios usuarios conectarse a una computadora central mediante terminales. Este modelo de uso compartido maximizó recursos costosos y sentó las bases del acceso remoto.
              .row(numero="B" titulo="Década de 1970 – Virtualización")
                .col-12.mb-4.mb-md-0
                  p.mb-0 El desarrollo de máquinas virtuales permitió ejecutar múltiples entornos en una sola computadora física. Esta innovación hizo más eficiente el uso de <em>hardware</em> y abrió el camino hacia la gestión flexible de recursos, un principio esencial de la nube.
              .row(numero="C" titulo="Década de 1990 – Expansión de Internet")
                .col-12.mb-4.mb-md-0
                  p.mb-0 La masificación de Internet posibilitó que servicios y aplicaciones pudieran ofrecerse de forma remota a escala global. Aunque todavía limitados, estos servicios evidenciaron el potencial de un modelo distribuido de recursos.
              .row(numero="D" titulo="2006 – Amazon Web Services (AWS)")
                .col-12.mb-4.mb-md-0
                  p.mb-0 AWS marcó un punto de inflexión al ofrecer servicios de infraestructura bajo demanda (IaaS). Este modelo permitió a empresas y usuarios acceder a almacenamiento y procesamiento sin necesidad de invertir en infraestructura propia.
              .row(numero="E" titulo="Década de 2010 – Consolidación y diversificación")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Empresas como Google, Microsoft e IBM expandieron la nube hacia nuevas áreas como inteligencia artificial, análisis de datos, bases de datos y entornos de desarrollo, consolidándola como pilar de la transformación digital.
              .row(numero="F" titulo="2015 en adelante – Modelos híbridos y multi-nube")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Para responder a demandas de flexibilidad y seguridad, se adoptaron esquemas que combinan nubes públicas y privadas. Estos modelos permiten optimizar costos y cumplir con normativas más estrictas de protección de datos.
              .row(numero="G" titulo="2020-2025 – Automatización e inteligencia artificial")
                .col-12.mb-4.mb-md-0
                  p.mb-0 La integración de IA, aprendizaje automático y <em>big data</em> dentro de la nube facilita desde sistemas predictivos hasta seguridad avanzada, impulsando soluciones más inteligentes y personalizadas.
              .row(numero="H" titulo="Computación en el borde (Edge Computing)")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Como complemento a la nube tradicional, esta tecnología acerca el procesamiento de datos al lugar donde se generan, reduciendo la latencia y mejorando el rendimiento en aplicaciones críticas como IoT, vehículos autónomos o realidad aumentada.
          .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/img12.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-sm-10.col-12.mb-4(data-aos="fade-right")
        .tarjeta.BG02.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-auto.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema1/img13.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 En la actualidad, la computación en la nube es un ecosistema robusto que combina almacenamiento, procesamiento, colaboración en línea e inteligencia avanzada. Su constante evolución refleja la necesidad de soluciones tecnológicas más flexibles, seguras y escalables que transforman la educación, el trabajo y la vida cotidiana en la era digital.
    separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 1.3 Acceso y formas de uso
    
    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-1.order-2
            p(data-aos="fade-down") El acceso a la computación en la nube es sencillo y está diseñado para que cualquier persona pueda utilizar sus servicios sin necesidad de conocimientos técnicos avanzados. Para acceder, lo único que se necesita es una conexión a Internet y un dispositivo, como una computadora, tableta o teléfono móvil.
            .tarjeta.tarjeta--C02.p-4
              .row.justify-content-center.align-items-center
                .col-2
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/temas/tema1/img15.svg', alt='Imagen decorativa')
                .col-lg-10.col-10
                  p.mb-0(data-aos="fade-down") El proceso comienza ingresando a la plataforma o sitio web que ofrece servicios en la nube, como Google Drive, Microsoft OneDrive o Amazon Web Services. Si es la primera vez que se usa el servicio, se deberá crear una cuenta proporcionando datos personales básicos, un correo electrónico y una contraseña segura. Esta cuenta permitirá iniciar sesión y acceder a todos los recursos y aplicaciones disponibles en esa plataforma.
                
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0.d-flex
            .row.justify-content-center(data-aos="fade-up")
              .col
                figure.h-100.w-100.m-0(data-aos="fade-up")
                  img.object-fit-cover(src='@/assets/curso/temas/tema1/img14.jpg', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-2.order-2
            p(data-aos="fade-down") Una vez dentro, es posible cargar archivos, editarlos, compartirlos con otros usuarios e incluso usar aplicaciones para crear documentos, hojas de cálculo o presentaciones, todo sin necesidad de instalar programas en el dispositivo. Además, muchas plataformas permiten sincronizar automáticamente los archivos para que siempre se tenga la versión más actualizada en cualquier dispositivo que se utilice.
            .row.justify-content-center
              .col-lg-auto.col-2
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema1/img17.svg', alt='Imagen decorativa')
              .col-lg-10.col-10
                p.mb-0(data-aos="fade-down") Por último, el acceso a la nube es flexible y seguro. Se puede conectar desde cualquier lugar y en cualquier momento, siempre que se cuente con Internet, y las plataformas cuentan con medidas de seguridad para proteger la información, garantizando privacidad y control sobre los datos almacenados. Esto hace que la computación en la nube sea una solución práctica y eficiente para almacenar, gestionar y colaborar con información digital.
                
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0.d-flex
            .row.justify-content-center(data-aos="fade-up")
              .col
                figure.h-100.w-100.m-0(data-aos="fade-up")
                  img.object-fit-cover(src='@/assets/curso/temas/tema1/img16.png', alt='Imagen decorativa')
    
    p.mb-5(data-aos="fade-down") Antes de profundizar en ejemplos prácticos, resulta útil describir de manera comparativa cómo se realiza el acceso a diferentes servicios de almacenamiento en la nube. La siguiente tabla presenta los pasos básicos para ingresar y utilizar Google Drive y Microsoft OneDrive, dos de las plataformas más reconocidas a nivel global.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span <em>Acceso a servicios de almacenamiento en la nube</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 6%") Paso
                th(data-aos="fade-down")(style= "width: 42%") Google Drive
                th(data-aos="fade-down")(style= "width: 42%") Microsoft OneDrive
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 1
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Abrir el navegador <em>web</em> en el dispositivo.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Abrir el navegador <em>web</em> en el dispositivo.
              tr
                td.text-bold(data-aos="fade-down") 2
                td(data-aos="fade-down") Escribir en la barra de direcciones: drive.google.com
                td(data-aos="fade-down") Escribir en la barra de direcciones: onedrive.live.com
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 3
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Si no tienes cuenta, haz clic en "Crear cuenta" y sigue las instrucciones para registrarte con tu correo Gmail y contraseña.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Si no tienes cuenta, haz clic en "Crear cuenta" y sigue las instrucciones para registrarte con tu correo Outlook o Hotmail y contraseña.
              tr
                td.text-bold(data-aos="fade-down") 4
                td(data-aos="fade-down") Si ya tienes cuenta, haz clic en "Iniciar sesión" e ingresa tu correo y contraseña de Google.
                td(data-aos="fade-down") Si ya tienes cuenta, haz clic en "Iniciar sesión" e ingresa tu correo y contraseña de Microsoft.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 5
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Una vez dentro, verás tu almacenamiento y opciones para subir archivos, crear carpetas o documentos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Una vez dentro, verás tu almacenamiento y opciones para subir archivos, crear carpetas o documentos.
              tr
                td.text-bold(data-aos="fade-down") 6
                td(data-aos="fade-down") Puedes cargar archivos arrastrándolos a la ventana o usando el botón "Nuevo".
                td(data-aos="fade-down") Puedes cargar archivos arrastrándolos a la ventana o usando el botón "Cargar".
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 7
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Para compartir archivos, selecciona el archivo y haz clic en el icono de compartir.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Para compartir archivos, selecciona el archivo y haz clic en el icono de compartir.
              tr
                td.text-bold(data-aos="fade-down") 8
                td(data-aos="fade-down") Accede a tus archivos desde cualquier dispositivo con internet usando la misma cuenta.
                td(data-aos="fade-down") Accede a tus archivos desde cualquier dispositivo con internet usando la misma cuenta.

    .row.justify-content-center
      .col-lg-11.col-12
        p(data-aos="fade-down") Para comprender mejor cómo se aplican estas formas de acceso, resulta útil presentar un caso sencillo que demuestre la utilidad de la nube en la vida diaria.
    
    .row.justify-content-center.mb-0
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b.d-flex.align-items-center.p-3.rounded
          .tarjeta-avatar-b__img.me-3.d-flex.justify-content-center.align-items-center(style="width:70px; height:70px; border-radius:50%")
            .col-lg-10
              img(src='@/assets/curso/temas/tema1/img18.svg' alt="Imagen decorativa")(style= "width: 100%")
          .tarjeta.tarjeta--C03
            .px-0.py-4
              p.mb-0 Un aprendiz puede guardar sus apuntes en Google Drive desde el computador de su casa, revisarlos en el celular camino a clase y, al mismo tiempo, compartirlos con sus compañeros para que todos trabajen sobre el mismo documento en tiempo real.

    separador 
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 1.4 Escalabilidad y flexibilidad
    
    .row.justify-content-center.mb-5
      .col-12
        .row.justify-content-center
          .col-lg-9.col-12.order-lg-1.order-2
            p(data-aos="fade-down") La escalabilidad en la computación en la nube se refiere a la capacidad que tiene esta tecnología para aumentar o reducir recursos informáticos como almacenamiento, potencia de procesamiento y ancho de banda, de acuerdo con las necesidades de cada usuario o empresa en un momento determinado, sin afectar el rendimiento del sistema. Por ejemplo, cuando una aplicación web recibe un alto número de visitas, la nube puede asignar automáticamente más recursos para mantener la rapidez en la respuesta; y cuando la demanda disminuye, reducirlos para optimizar costos.
            p.mb-4(data-aos="fade-down") La flexibilidad consiste en la facilidad con la que la nube se adapta a diferentes contextos, permitiendo acceder a datos y aplicaciones desde cualquier lugar y dispositivo. Esta característica ofrece libertad para trabajar, aprender o comunicarse sin limitaciones físicas, con la posibilidad de modificar configuraciones o capacidades en tiempo real.
            .row.justify-content-center
              .col-lg-auto.col-2
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema1/img17.svg', alt='Imagen decorativa')
              .col-lg-10.col-10
                p.mb-0(data-aos="fade-down") Existen dos tipos principales de escalabilidad. La <b>escalabilidad vertical</b> aumenta la capacidad de un recurso, por ejemplo, añadiendo más potencia a un servidor existente. La <b>escalabilidad horizontal</b> consiste en agregar más recursos similares, como servidores adicionales para distribuir la carga de trabajo. La nube integra ambas estrategias para ajustarse a demandas crecientes o fluctuantes.
          
          .col-lg-3.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0.d-flex
            .row.justify-content-center(data-aos="fade-up")
              .col
                figure.h-100.w-100.m-0(data-aos="fade-up")
                  img.object-fit-cover(src='@/assets/curso/temas/tema1/img19.png', alt='Imagen decorativa')
    
    .tarjeta.tarjeta--C02.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-2
          figure(data-aos="fade-up")
            img(src='@/assets/curso/temas/tema1/img20.svg', alt='Imagen decorativa')
        .col-lg-11.col-10
          p.mb-0(data-aos="fade-down") Adicionalmente, la nube ofrece elasticidad, que permite escalar automáticamente sin intervención humana, ajustando los recursos según el volumen de trabajo y garantizando eficiencia en rendimiento y costos. También incorpora sistemas de equilibrio de cargas, los cuales distribuyen las tareas entre varios servidores para prevenir sobrecargas y mantener un funcionamiento continuo.
    
    p.mb-5(data-aos="fade-down") A continuación, se presentan los ejemplos de plataformas con escalabilidad y flexibilidad:

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Microsoft Azure")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/img21.jpg', alt='Imagen decorativa')
          .col-lg-6.order-lg-2.order-2
            p Proporciona escalabilidad flexible para aumentar o reducir recursos informáticos de manera rápida y sencilla. Si el proyecto o empresa crece, asigna automáticamente más servidores, almacenamiento o potencia, y si la demanda disminuye, ajusta los recursos para optimizar el gasto. Además, se integra con herramientas de Microsoft como Office 365, facilitando el trabajo remoto y el acceso seguro desde diversos dispositivos.

      .py-3.py-md-4(titulo="Google Cloud Platform (GCP)")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/img22.jpg', alt='Imagen decorativa')
          .col-lg-6.order-lg-2.order-2
            p Se destaca por su capacidad de escalado horizontal, permitiendo añadir múltiples servidores que soportan grandes cantidades de datos y usuarios sin perder rendimiento. Su flexibilidad le permite adaptarse a casos de uso que van desde aplicaciones básicas hasta proyectos de inteligencia artificial y análisis de datos. También automatiza la gestión de recursos, reduciendo costos y simplificando la operación.

      .py-3.py-md-4(titulo="Amazon Web Services (AWS)")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/img23.jpg', alt='Imagen decorativa')
          .col-lg-6.order-lg-2.order-2
            p Pionera en la computación en la nube, ofrece escalabilidad prácticamente ilimitada gracias a su sistema de escalado automático, que asigna o libera recursos en función de la demanda en tiempo real. Su flexibilidad permite elegir entre una amplia gama de servicios, personalizando configuraciones para necesidades específicas, desde máquinas virtuales hasta soluciones avanzadas de inteligencia artificial y almacenamiento masivo.

    p.mb-5(data-aos="fade-down") En este punto, resulta esencial identificar los requerimientos tecnológicos necesarios para garantizar un funcionamiento eficiente de la computación en la nube. A continuación, se presenta una tabla con los principales aspectos a considerar.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span <em>Principales requerimientos tecnológicos para la computación en la nube</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 50%") Requerimiento tecnológico
                th(data-aos="fade-down")(style= "width: 50%") Descripción
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Conexión a Internet estable
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Una red rápida y confiable para evitar interrupciones de acceso.
              tr
                td.text-bold(data-aos="fade-down") Dispositivos compatibles
                td(data-aos="fade-down") Computadoras, tabletas o teléfonos con acceso a Internet y soporte de aplicaciones en la nube.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Navegadores y sistemas actualizados
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Programas como Google Chrome o Edge en sus últimas versiones para mayor seguridad y compatibilidad.
              tr
                td.text-bold(data-aos="fade-down") Seguridad informática
                td(data-aos="fade-down") Uso de antivirus y cortafuegos para proteger datos y prevenir ataques.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Conocimientos básicos en redes
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Comprender el funcionamiento de las conexiones a Internet para un mejor uso y solución de problemas.
              tr
                td.text-bold(data-aos="fade-down") Virtualización
                td(data-aos="fade-down") Tecnología que permite ejecutar múltiples sistemas o aplicaciones en un solo equipo o servidor.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Almacenamiento escalable
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Capacidad de aumentar o reducir espacio según las necesidades.
              tr
                td.text-bold(data-aos="fade-down") Herramientas de gestión
                td(data-aos="fade-down") Programas que facilitan la administración automatizada de recursos.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Potencia de procesamiento
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Recursos suficientes para ejecutar aplicaciones o procesar datos sin retrasos.
              tr
                td.text-bold(data-aos="fade-down") Protocolos y medidas de seguridad
                td(data-aos="fade-down") Sistemas que aseguran el acceso restringido únicamente a usuarios autorizados.
    
    .row.justify-content-center.mb-0
      .col-12
        .row.justify-content-center
          .col-lg-9.col-12.order-lg-2.order-2
            p.mb-0(data-aos="fade-down") En síntesis, la escalabilidad y la flexibilidad representan dos de los mayores beneficios de la computación en la nube, ya que permiten ajustar recursos según la demanda, garantizando eficiencia y ahorro de costos. Gracias a estas características, las organizaciones pueden responder de manera inmediata a cambios en el volumen de trabajo y aprovechar servicios adaptados a sus necesidades específicas. Esto convierte a la nube en una solución clave para la innovación y la transformación digital en cualquier sector.
          .col-lg-3.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="fade-up")
              .col
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema1/img24.png', alt='Imagen decorativa')
    separador 
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up") 
      h2 1.5 Principales proveedores de servicios en la nube
    
    p.mb-5(data-aos="fade-down") En el mercado existen diferentes proveedores de servicios en la nube que ofrecen soluciones adaptadas a las necesidades de empresas, instituciones educativas y usuarios individuales. Cada uno se distingue por su enfoque, variedad de herramientas y ventajas específicas, lo que permite a las personas seleccionar la plataforma más adecuada para sus proyectos, actividades académicas o requerimientos personales.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span <em>Principales proveedores de servicios en la nube</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 16%") Proveedor
                th(data-aos="fade-down")(style= "width: 28%") ¿Qué es?
                th(data-aos="fade-down")(style= "width: 28%") ¿Para qué sirve?
                th(data-aos="fade-down")(style= "width: 28%") Ventaja principal
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Amazon Web Services (AWS)
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Plataforma líder en servicios en la nube que ofrece almacenamiento, bases de datos, aplicaciones y soluciones avanzadas.
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Permite guardar archivos, ejecutar programas y acceder a recursos sin depender de la capacidad del dispositivo personal.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Es uno de los servicios más completos y confiables del mundo, con gran disponibilidad.
              tr
                td.text-bold(data-aos="fade-down") Microsoft Azure
                td(data-aos="fade-down") Servicio de nube de Microsoft que se integra con Office 365 y múltiples herramientas empresariales.
                td.text-bold(data-aos="fade-down") Facilita el trabajo colaborativo en documentos, presentaciones y hojas de cálculo en línea.
                td(data-aos="fade-down") Resulta sencillo de usar si ya se está familiarizado con programas de Microsoft.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Google Cloud Platform (GCP)
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Plataforma en la nube de Google con servicios para almacenamiento, inteligencia artificial, <em>big data</em> y desarrollo de aplicaciones.
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Permite guardar archivos, crear documentos en línea y acceder a herramientas inteligentes.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Se integra de manera natural con Gmail, Google Drive y otros servicios ya conocidos.
              tr
                td.text-bold(data-aos="fade-down") IBM Cloud
                td(data-aos="fade-down") Proveedor de nube con un fuerte enfoque en seguridad, inteligencia artificial y soluciones para negocios y educación.
                td.text-bold(data-aos="fade-down") Ofrece aplicaciones confiables y entornos seguros para almacenar información sensible.
                td(data-aos="fade-down") Garantiza alta seguridad para proteger datos importantes en proyectos académicos o de investigación.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Oracle Cloud
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Servicio especializado en gestión de bases de datos, aplicaciones empresariales y análisis avanzado.
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Es útil para manejar grandes volúmenes de información y ejecutar procesos complejos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ideal para aprendices que trabajen con proyectos de bases de datos o análisis de datos masivos.
    .row.justify-content-center.mb-0
      .col-12
        .row.justify-content-center
          .col-lg-8.col-12.order-lg-2.order-2
            p(data-aos="fade-down") Conocer los principales proveedores de servicios en la nube permite identificar cuál se ajusta mejor a cada necesidad académica o profesional. La mayoría ofrece versiones gratuitas, cuentas de prueba o beneficios especiales, lo que facilita explorar sus plataformas sin costo inicial. Para comenzar, basta con:
            .tarjeta.tarjeta--C01.p-4
              .row.justify-content-center.align-items-center
                .col-lg-auto.col-3.order-lg-2.order-1
                  figure
                    img(src='@/assets/curso/temas/tema1/img25.svg', alt='Imagen decorativa')
                .col-lg-9.col-9.order-lg-1.order-2
                  ul.lista-ul--color.mb-0(data-aos="fade-down")
                    li.mb-2
                      i.fas.fa-cloud
                      | Ingresar a sus sitios web oficiales.
                    li.mb-2
                      i.fas.fa-cloud
                      | Crear una cuenta. 
                    li.mb-0
                      i.fas.fa-cloud
                      | Acceder a tutoriales o recursos de formación que guían en el uso de cada servicio. 
                
          .col-lg-4.col-md-6.col-12.mb-3.order-lg-1.order-1.mb-lg-0.d-flex
            .row.justify-content-center
              .col
                figure.h-100.w-100.m-0
                  img.object-fit-cover(src='@/assets/curso/temas/tema1/img26.svg', alt='Imagen decorativa')


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
