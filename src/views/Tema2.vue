<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Conceptos fundamentales del enfoque OVOP
    figure.mb-5(data-aos="fade-up") 
      img(src="@/assets/curso/temas/tema2/img01.png", alt="Imagen decorativa")
    p.mb-4(data-aos="fade-down") La filosofía del enfoque Un Pueblo, Un Producto (OVOP) busca promover el desarrollo local inclusivo y sostenible a partir de la participación activa de las comunidades y la valorización de sus recursos propios. Este modelo reconoce que cada territorio posee un conjunto de características únicas, naturales, culturales, sociales y productivas, que pueden convertirse en motores de crecimiento económico y cohesión social.
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Comprender los conceptos de territorio, comunidad y desarrollo local es fundamental para aplicar el enfoque OVOP, ya que estos permiten identificar las potencialidades de cada lugar, fortalecer la identidad colectiva y orientar las acciones hacia la autogestión y el bienestar común. A continuación, se definen y caracterizan estos conceptos esenciales.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Territorio
    p(data-aos="fade-down") En el enfoque OVOP, el territorio se entiende como un espacio social, cultural y económico en el que la comunidad desarrolla su identidad y proyecta su futuro a partir de un producto o servicio distintivo. Este espacio va más allá de su dimensión geográfica, ya que incluye las relaciones, saberes y valores que lo conforman. El territorio es, por tanto, el punto de partida para alcanzar el sueño colectivo y promover la autonomía económica y social.
    p.mb-5(data-aos="fade-down") Características clave del territorio en OVOP:
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img02.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              h4 Identidad y orgullo
              p.mb-0 El territorio representa la identidad cultural y emocional de la comunidad, que se refleja en los productos o manifestaciones que la distinguen.
              br
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img03.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              h4 Potencialidades como motor de desarrollo
              p.mb-0 Se promueve el descubrimiento o redescubrimiento de las capacidades del territorio, como la cultura, la historia o los recursos naturales, para transformarlas en oportunidades económicas sostenibles.
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img04.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              h4 Desarrollo colectivo y autogestión
              p.mb-0 El territorio es el escenario donde la comunidad trabaja unida hacia objetivos comunes, fortaleciendo la colaboración entre sus miembros y actores externos.
              br
              br
      .col-lg-5.col-12.col-lg.m-2
        .row
          .col-12.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema2/img05.png', style="width: 100%" ,alt='Imagen decorativa').m-auto
          .col-12.bg-c1.h-100
            .p-4
              h4 Mi Pueblo, Mi Producto, Mi Orgullo
              p.mb-0 Este <em>slogan</em> sintetiza la esencia del enfoque OVOP. “Mi Pueblo” representa el territorio y su identidad; “Mi Producto”, el resultado tangible de esa identidad; y “Mi Orgullo”, el sentimiento que impulsa a la comunidad a proteger, valorar y promover sus recursos como base de su desarrollo local.
    p.mb-0(data-aos="fade-down") En conjunto, estas características evidencian que el territorio, en el enfoque OVOP, no se limita a un espacio físico, sino que constituye el núcleo de la identidad colectiva y el punto de partida para el fortalecimiento del desarrollo local sostenible.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Comunidad
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img07.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Desde el enfoque OVOP, la comunidad se entiende como un grupo de personas que habita un territorio y que se une en torno a un sueño colectivo, basado en la identificación, desarrollo y promoción de un producto o servicio distintivo que representa su identidad y orgullo local. Este enfoque busca fortalecer los lazos sociales, la confianza y la cooperación entre los miembros de la comunidad, promoviendo el sentido de pertenencia, la autogestión y la valorización de sus recursos y potencialidades.
    p(data-aos="fade-down") Las comunidades son el eje central del enfoque OVOP, ya que constituyen el punto de partida para impulsar procesos de transformación social, económica y cultural. Su participación activa garantiza que las acciones de desarrollo sean sostenibles, pertinentes y coherentes con sus propias necesidades y aspiraciones.
    p.mb-5(data-aos="fade-down") Enfoque de la participación comunitaria en OVOP:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C04")
          .row(titulo="Participación inclusiva y orgullo local")
            .col-12.mb-0.mb-md-0
              p OVOP promueve la participación comunitaria incluyente en torno a los recursos del territorio, fomentando el orgullo y la conciencia sobre la importancia de construir colectivamente una visión compartida o sueño colectivo.
          .row(titulo="Inclusión social y equidad")
            .col-12.mb-0.mb-md-0
              p En los procesos de desarrollo comunitario, OVOP pone especial énfasis en la inclusión de todos los sectores poblacionales, especialmente mujeres, jóvenes, adultos mayores, personas en condición de discapacidad, comunidades indígenas, grupos étnicos, víctimas del conflicto y excombatientes, reconociendo su papel fundamental en el fortalecimiento social y productivo del territorio.
          .row(titulo="Corresponsabilidad y confianza")
            .col-12.mb-0.mb-md-0
              p La participación comunitaria busca generar corresponsabilidad, proactividad y confianza entre los miembros de la comunidad y entre estos y las instituciones públicas o privadas. Se promueve así una relación colaborativa que permita alcanzar objetivos comunes y fortalecer la gobernanza local.
          .row(titulo="Articulación de redes y sostenibilidad")
            .col-12.mb-0.mb-md-0
              p OVOP impulsa la creación y el fortalecimiento de redes tanto internas como externas a la comunidad, con el fin de articular de manera efectiva la oferta y la demanda local. Esta articulación contribuye a revitalizar la economía del territorio, generar oportunidades sostenibles y consolidar procesos de desarrollo autogestionado.
      .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema2/img06.png', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") En conjunto, la comunidad en el enfoque OVOP no solo es el sujeto beneficiario, sino el verdadero protagonista del cambio, capaz de impulsar su propio desarrollo desde el conocimiento de su entorno, la cooperación y la acción colectiva.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Desarrollo local
    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-2.order-2
        p(data-aos="fade-down") El desarrollo local se concibe como un proceso integral mediante el cual las comunidades impulsan el progreso económico, social y cultural de su territorio a partir de sus propias capacidades y recursos. En este contexto, se distinguen dos perspectivas complementarias: el desarrollo endógeno y el desarrollo exógeno.
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") El enfoque endógeno se centra en aprovechar los recursos y potencialidades internas de la región, promoviendo la participación activa de la comunidad, la valoración de sus tradiciones y el fortalecimiento de su identidad cultural. En contraste, el enfoque exógeno se orienta hacia la incorporación de capital, conocimientos y tecnologías provenientes del exterior, con el propósito de dinamizar la economía local e impulsar la innovación productiva.
        p(data-aos="fade-down") El modelo de desarrollo local endógeno entiende los procesos de crecimiento como dinámicas de cambio social que integran dimensiones económicas, culturales y comunitarias. Este enfoque implica la intervención articulada del Estado, los gobiernos locales y las comunidades en la gestión sostenible del territorio (SENA, 2020).
      .col-lg-4.order-lg-1.order-1.mb-3.col-md-5.col-7
        figure(data-aos="fade-up") 
          img(src='@/assets/curso/temas/tema2/img08.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema2/img09.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Desarrollo local endógeno
            p.mb-0(data-aos="fade-down") Proceso de desarrollo impulsado por la propia comunidad, que aprovecha los recursos locales y se basa en la cultura, las tradiciones y los saberes propios del territorio (SENA, 2020).
          .col-xl.col-lg-6.tarjeta.tarjeta--C04.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema2/img10.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center(data-aos="fade-down") Desarrollo regional exógeno
            p.mb-0(data-aos="fade-down") Proceso de desarrollo promovido por actores externos, como el gobierno o la empresa privada, que incorpora recursos financieros, innovación y asistencia técnica para fomentar la competitividad territorial (SENA, 2020).
    p.mb-0(data-aos="fade-down") En conclusión, ambos enfoques resultan esenciales para promover un desarrollo equilibrado y sostenible. El modelo endógeno refuerza la identidad y la autonomía local, mientras que el exógeno amplía las oportunidades mediante la integración con redes externas. Su articulación permite que las comunidades avancen hacia un crecimiento inclusivo, sostenible y coherente con las particularidades de su territorio.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Liderazgo
    p.mb-5(data-aos="fade-down") El liderazgo se entiende como el conjunto de habilidades que permiten conducir, orientar y acompañar a un grupo de personas hacia el logro de objetivos comunes. Un líder no solo influye en su grupo, sino que también aporta ideas innovadoras y motiva a cada integrante a desarrollar su máximo potencial. En el contexto comunitario, el liderazgo se relaciona con la capacidad de inspirar, movilizar y mantener la cohesión social en torno a una visión compartida de desarrollo.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img11.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Desde el enfoque Un Pueblo, Un Producto (OVOP), el liderazgo adquiere una connotación colectiva y transformadora. No se centra únicamente en la figura de una persona, sino en la formación de líderes locales capaces de impulsar procesos de cambio sostenibles en sus comunidades. Estos líderes promueven la participación activa, la autogestión y la toma de decisiones compartidas, elementos esenciales para fortalecer el sentido de pertenencia y la autonomía territorial.
        br
        br
        p.mb-0(data-aos="fade-down") El liderazgo en OVOP se caracteriza por ser participativo, inspirador y orientado al bien común. El líder actúa como facilitador del sueño colectivo, promoviendo la articulación entre los actores sociales, productivos e institucionales del territorio. Además, fomenta la confianza, el trabajo en equipo y la innovación local, garantizando la continuidad de las acciones más allá de los apoyos externos.
    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Características del liderazgo en el enfoque OVOP:
    .tarjeta.tarjeta--BG02.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img17.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema2/img12.svg", alt="alt").img100.m-auto
              p Promueve la participación activa de todos los miembros de la comunidad.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema2/img13.svg", alt="alt").img100.m-auto
              p Inspira confianza, compromiso y sentido de pertenencia.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema2/img14.svg", alt="alt").img100.m-auto
              p Facilita la toma de decisiones compartidas y transparentes.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema2/img15.svg", alt="alt").img100.m-auto
              p Motiva la innovación, la creatividad y la autogestión.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema2/img16.svg", alt="alt").img100.m-auto
              p Fortalece las alianzas estratégicas entre los diferentes actores del territorio.
    p.mb-0(data-aos="fade-down") De esta manera, el liderazgo se convierte en un pilar esencial para la sostenibilidad del enfoque OVOP, ya que impulsa a las comunidades a creer en su potencial, fortalecer sus capacidades internas y avanzar hacia un desarrollo local incluyente y autogestionado. Más adelante se profundizará en este concepto, destacando su relevancia para la consolidación de procesos comunitarios sólidos y duraderos.
</template>

<script>
export default {
  name: 'Tema2',
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
