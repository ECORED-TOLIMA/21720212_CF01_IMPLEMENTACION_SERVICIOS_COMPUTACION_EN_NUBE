<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'tema_actividad_didactica',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado referente a los temas desarrollados en el componente formativo y elija entre verdadero y falso según corresponda.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'La computación en la nube significa que los datos se almacenan solo en la computadora personal del usuario.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto, Los datos se almacenan en servidores distribuidos en internet, no solo en el dispositivo local.',
          mensaje_incorrecto:
            'Incorrecto, En realidad, la computación en la nube permite guardar tus datos en servidores por internet, no solo en tu dispositivo.',
        },
        {
          id: 2,
          texto:
            'Para usar la nube solo se necesita un dispositivo con conexión a internet.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, con solo un dispositivo y conexión a internet puedes acceder a la nube.',
          mensaje_incorrecto:
            'Incorrecto, La nube se accede a través de internet, por lo que un dispositivo conectado es esencial.',
        },
        {
          id: 3,
          texto:
            'La nube es capaz de repararse automáticamente si ocurre alguna falla.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, la nube utiliza respaldos automáticos para recuperarse cuando hay problemas.',
          mensaje_incorrecto:
            'Incorrecto, La nube cuenta con sistemas de autor reparación para mantener la continuidad del servicio.',
        },
        {
          id: 4,
          texto:
            'Los programas en la nube solo funcionan en un sistema operativo específico.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto, la virtualización permite que se usen en cualquier sistema operativo o dispositivo.',
          mensaje_incorrecto:
            'Incorrecto, Gracias a la virtualización, puedes acceder a la nube desde diferentes plataformas y sistemas operativos.',
        },
        {
          id: 5,
          texto:
            'En la nube puedes crear y editar documentos sin instalar programas adicionales.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, puedes usar herramientas en línea para trabajar directamente en la nube.',
          mensaje_incorrecto:
            'Incorrecto, Las plataformas en la nube ofrecen editores en línea que no requieren instalación.',
        },
        {
          id: 6,
          texto:
            'La nube solo guarda archivos, pero no permite colaborar en tiempo real con otras personas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto, La nube permite que múltiples usuarios colaboren simultáneamente en documentos compartidos.',
          mensaje_incorrecto:
            'Incorrecto, En la nube puedes trabajar junto con otros en tiempo real, facilitando la colaboración.',
        },
        {
          id: 7,
          texto:
            'Los datos almacenados en la nube están disponibles solo en el dispositivo donde se guardaron.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto, los datos están disponibles en cualquier dispositivo con acceso a internet.',
          mensaje_incorrecto:
            'Incorrecto, Puedes acceder a tus datos desde cualquier dispositivo conectado a internet.',
        },
        {
          id: 8,
          texto:
            'La nube ofrece escalabilidad para aumentar o disminuir recursos según la demanda.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, esta capacidad se llama elasticidad y es una gran ventaja de la nube.',
          mensaje_incorrecto:
            'Incorrecto, La cloud computing adapta sus recursos al uso real, optimizando costos y rendimiento.',
        },
        {
          id: 9,
          texto: 'Usar la nube requiere comprar y mantener servidores físicos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto, En la nube, el proveedor se encarga de la infraestructura, facilitando su uso sin comprar hardware.',
          mensaje_incorrecto:
            'Incorrecto, No necesitas instalar servidores físicos, el proveedor del servicio los administra por ti.',
        },
        {
          id: 10,
          texto:
            'La nube no garantiza ninguna medida de seguridad para proteger tus datos.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto, Los proveedores implementan medidas de seguridad como cifrado y autenticación para proteger tus datos.',
          mensaje_incorrecto:
            'Incorrecto, La seguridad es prioridad en la nube, con cifrado y controles para mantener protegida tu información.',
        },
        {
          id: 11,
          texto:
            'Puedes acceder a tus archivos en la nube desde cualquier lugar con conexión a internet.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, esa es una gran ventaja para trabajar o estudiar a distancia.',
          mensaje_incorrecto:
            'Incorrecto, La nube facilita la movilidad al dar acceso remoto seguro a tus archivos.',
        },
        {
          id: 12,
          texto:
            'Debes pagar una tarifa fija mensual, aunque no uses los servicios de la nube.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto, La mayoría de los servicios en la nube funcionan con pago por uso, lo que optimiza costos.',
          mensaje_incorrecto:
            'Incorrecto, En la nube se paga en función de lo que realmente usas, sin gastos fijos innecesarios.',
        },
        {
          id: 13,
          texto:
            'La nube es una tecnología reciente, desarrollada solo después del 2010.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto, La idea de la nube tiene raíces desde las décadas de 1950 y 1960 con el tiempo compartido.',
          mensaje_incorrecto:
            'Incorrecto, La computación en la nube se ha desarrollado a lo largo de varias décadas.',
        },
        {
          id: 14,
          texto:
            'Con la nube, tus archivos no se pierden, aunque se dañe tu computadora.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, Al almacenar en la nube, tus datos quedan seguros aun si tu dispositivo falla.',
          mensaje_incorrecto:
            'Incorrecto, Backup automático en la nube protege tus datos frente a fallas en el dispositivo local.',
        },
        {
          id: 15,
          texto:
            'Solo las grandes empresas pueden usar servicios de computación en la nube.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto, La nube es accesible para usuarios individuales, estudiantes y empresas de todos los tamaños.',
          mensaje_incorrecto:
            'Incorrecto, La nube democratiza el acceso a recursos tecnológicos para todos los usuarios.',
        },
        {
          id: 16,
          texto:
            'Puedes trabajar en documentos de manera colaborativa con personas que estén en diferentes lugares.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto, La colaboración remota es una de las ventajas más importantes de la nube.',
          mensaje_incorrecto:
            'Incorrecto, La nube permite que tú y otros usuarios editen documentos simultáneamente desde distintos sitios.',
        },
        {
          id: 17,
          texto:
            'La cloud computing elimina la necesidad de tener un sistema operativo en tu dispositivo.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto. Siempre se necesita un sistema operativo que permita acceder a la nube vía navegador o app.',
          mensaje_incorrecto:
            'Incorrecto, La nube funciona con programas que se ejecutan sobre sistemas operativos instalados en dispositivos.',
        },
        {
          id: 18,
          texto:
            'La nube posibilita almacenar grandes cantidades de información sin preocuparte por el espacio limitado en tu equipo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. el almacenamiento en la nube es virtualmente ilimitado y flexible.',
          mensaje_incorrecto:
            'Respuesta incorrecta, En la nube puedes ampliar almacenamiento sin necesidad de añadir hardware local.',
        },
        {
          id: 19,
          texto:
            'No es necesario preocuparse por la seguridad al usar servicios de la nube.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Es importante usar contraseñas seguras y seguir buenas prácticas para proteger la información en la nube.',
          mensaje_incorrecto:
            'Respuesta incorrecta, La seguridad en la nube depende también de los usuarios al proteger su acceso y datos.',
        },
        {
          id: 20,
          texto:
            'La computación en la nube permite a las empresas reducir costos al evitar la compra y mantenimiento de infraestructura física propia.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. La nube ofrece servicios bajo demanda, evitando gastos grandes en hardware y permitiendo pagar solo por lo que se usa.',
          mensaje_incorrecto:
            'Respuesta incorrecta, La nube permite reducir costos porque el proveedor se encarga de la infraestructura, evitando que las empresas tengan que invertir en equipos físicos propios.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
