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
        '<b>Objetivo</b>: lea cada enunciado referente a los temas desarrollados en el componente formativo y elija entre verdadero y falso según corresponda.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'El enfoque OVOP tuvo su origen en Japón, en la prefectura de Ōita.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 2,
          texto:
            'El gobernador Hiramatsu Morihiko fue el impulsor del enfoque OVOP.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 3,
          texto:
            'El principio central del enfoque OVOP es depender de la ayuda externa para el desarrollo local.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 4,
          texto:
            'El lema “Mi Pueblo, Mi Producto, Mi Orgullo” representa la versión japonesa original del enfoque.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 5,
          texto:
            'El enfoque OVOP promueve la autogestión y el aprovechamiento sostenible de los recursos locales.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 6,
          texto:
            'En Colombia, el enfoque OVOP se implementó con el apoyo de la Agencia de Cooperación Internacional del Japón (JICA).',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 7,
          texto:
            'Uno de los tres principios del enfoque OVOP es pensar globalmente y actuar localmente.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 8,
          texto:
            'El territorio, la comunidad, el desarrollo local y el liderazgo son conceptos fundamentales del enfoque OVOP.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 9,
          texto:
            'La guía de descubrimiento de los tesoros locales busca identificar recursos naturales únicamente.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 10,
          texto:
            'La construcción del sueño colectivo permite a la comunidad definir una visión compartida de desarrollo.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 11,
          texto:
            'La ideación de producto OVOP se centra en copiar productos exitosos de otros territorios.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 12,
          texto:
            'La Cadena de Valor Simple ayuda a seleccionar el producto OVOP más representativo del territorio.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 13,
          texto:
            'El fortalecimiento del liderazgo comunitario es opcional dentro del enfoque OVOP.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 14,
          texto:
            'Las didácticas activas facilitan la participación, la creatividad y el aprendizaje colaborativo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 15,
          texto:
            'Los recursos digitales no son recomendables en la implementación del enfoque OVOP.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 16,
          texto:
            'Los ejemplos prácticos de didácticas activas ayudan a contextualizar el aprendizaje en los territorios.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 17,
          texto:
            'El objetivo de la evaluación en el enfoque OVOP es únicamente calificar los resultados.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 18,
          texto:
            'Los tipos de evaluación incluyen diagnóstica, formativa y sumativa.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 19,
          texto:
            'Los criterios de evaluación deben diseñarse con base en los resultados de aprendizaje esperados.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 20,
          texto:
            'La evaluación en el enfoque OVOP busca fomentar la mejora continua y la reflexión sobre la práctica comunitaria.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un buen dominio de los conceptos sobre el enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, sus principios fundamentales, la ruta metodológica, las didácticas activas y los procesos de evaluación del aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
