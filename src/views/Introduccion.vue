<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-down") Este componente presenta los fundamentos y herramientas esenciales del enfoque OVOP (One Village, One Product), orientado al fortalecimiento de capacidades locales para el desarrollo sostenible, la visibilización de los territorios y la generación de valor a partir de los recursos y talentos comunitarios.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.col-md-7.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/temas/intro/img01.svg', alt='Imagen decorativa')
      .col-lg-7.col-12.order-lg-2.order-2
        .tarjeta.tarjeta--C01.p-4.mb-3
          p.mb-0(data-aos="fade-down") El propósito de este componente es fortalecer las competencias para aplicar los principios y la ruta metodológica del enfoque OVOP, promoviendo el liderazgo participativo, la identificación de tesoros locales y la construcción colectiva de proyectos productivos con identidad territorial.
        p.mb-0(data-aos="fade-down") El desarrollo de los temas se realiza mediante un enfoque teórico-práctico que permite al aprendiz comprender los fundamentos, aplicar metodologías de diagnóstico y planificación comunitaria, y proponer estrategias didácticas activas que impulsen el aprendizaje colaborativo. De esta manera, se busca que el participante adquiera las capacidades necesarias para dinamizar procesos de desarrollo local y liderar iniciativas que contribuyan al bienestar de su comunidad.
    p.mb-5(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
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
