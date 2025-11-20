<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda los fundamentos conceptuales y metodológicos del enfoque One Village, One Product (OVOP), conocido en Colombia como Mi Pueblo, Mi Producto, Mi Orgullo. A través del estudio de sus principios, evolución y aplicación territorial, se promueve la comprensión de esta estrategia de desarrollo local que impulsa la autogestión comunitaria, la creatividad y la valorización de los recursos propios. Asimismo, el componente orienta a los participantes en la identificación de los tesoros del territorio, la construcción de una visión colectiva de desarrollo y el fortalecimiento del liderazgo comunitario, elementos esenciales para generar procesos sostenibles basados en la identidad, el orgullo y la participación activa de las comunidades. 

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo se presenta la estructura del enfoque Mi Pueblo, Mi Producto, Mi Orgullo – OVOP Colombia, organizada en cinco ejes: fundamentos y principios del enfoque, conceptos clave de desarrollo local, ruta metodológica con sus guías, didácticas activas para su implementación y procesos de evaluación orientados a fortalecer el aprendizaje y la acción comunitaria.")
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
