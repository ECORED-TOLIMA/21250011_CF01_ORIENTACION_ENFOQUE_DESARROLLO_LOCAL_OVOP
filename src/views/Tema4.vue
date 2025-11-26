<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Ruta metodológica del enfoque OVOP
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La ruta metodológica del enfoque Un Pueblo, Un Producto (OVOP) orienta el proceso de implementación de la estrategia de desarrollo local incluyente, permitiendo que las comunidades avancen de manera organizada, participativa y sostenible hacia la construcción de su sueño colectivo. Esta metodología fue estructurada por el SENA (2020) en doce guías prácticas, que explican paso a paso las fases, actividades y herramientas necesarias para que las comunidades reconozcan sus potencialidades, fortalezcan sus capacidades locales y promuevan el desarrollo territorial.
    p.mb-5(data-aos="fade-down") Cada fase tiene un propósito específico, pero todas están interrelacionadas, conformando un proceso continuo de aprendizaje, acción y consolidación. La ruta metodológica se desarrolla en cinco fases principales, que se describen a continuación:
    .tarjeta.tarjeta--BG04.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-down")
        .row(titulo="Fase 1")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Preparación
            p En esta etapa se establecen las condiciones iniciales para la implementación de la estrategia. Se identifican los actores clave, se define el territorio de intervención y se realiza un diagnóstico participativo de las potencialidades locales. Además, se genera un espacio de sensibilización comunitaria para introducir el enfoque OVOP y fortalecer la motivación colectiva.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img02.jpg', alt='Imagen decorativa')
        .row(titulo="Fase 2")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Introducción
            p Su objetivo es promover el conocimiento del enfoque OVOP en la comunidad y crear las bases para la construcción del sueño colectivo. Se fomenta la participación de los diferentes grupos poblacionales y se fortalecen las capacidades locales para garantizar que el proceso sea inclusivo y representativo.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img03.jpg', alt='Imagen decorativa')
        .row(titulo="Fase 3")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Planificación y desarrollo
            p En esta fase se definen las estrategias y acciones que orientarán el desarrollo del producto o servicio representativo del territorio. Incluye la identificación de los “tesoros locales”, la planificación de actividades productivas, la definición de roles comunitarios y la elaboración de un plan de trabajo con metas claras y alcanzables.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img04.jpg', alt='Imagen decorativa')
        .row(titulo="Fase 4")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Establecimiento
            p Consiste en la implementación de las acciones definidas en la fase anterior. Aquí se consolidan las alianzas entre actores institucionales, productivos y comunitarios, y se promueve la autogestión de los procesos. Es una etapa clave para fortalecer las capacidades técnicas, organizativas y comerciales del grupo comunitario.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img05.jpg', alt='Imagen decorativa')
        .row(titulo="Fase 5")
          .col-lg-6.mb-4.mb-md-0.order-lg-2.order-2
            h4 Sostenimiento
            p Busca garantizar la continuidad de los resultados alcanzados. Se enfoca en la generación de capacidades locales permanentes, la creación de redes colaborativas, el posicionamiento del producto en mercados más amplios y la consolidación de un liderazgo compartido que mantenga vivo el sueño colectivo.
          .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img06.jpg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") La metodología se organiza en temas estratégicos, y cada guía práctica (DM) se relaciona con un componente del proceso:
    .row.mb-5(data-aos="flip-down")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img07.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Diagnostico
        ul.lista-ul.mb-0(data-aos="fade-down")
          li.mb-0
            i.lista-ul__vineta
            p.mb-0 DM 01
          li.mb-0
            i.lista-ul__vineta
            p.mb-0 DM 08
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img08.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Desarrollo comunitario
        ul.lista-ul.mb-0(data-aos="fade-down")
          li.mb-0
            i.lista-ul__vineta
            p.mb-0 DM 02
          li.mb-0
            i.lista-ul__vineta
            p.mb-0 DM 05
          li.mb-0
            i.lista-ul__vineta
            p.mb-0 DM 10
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img09.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Negocio colectivo
        ul.lista-ul.mb-0(data-aos="fade-down")
          li.mb-0
            i.lista-ul__vineta
            p.mb-0 DM 03
          li.mb-0
            i.lista-ul__vineta
            p.mb-0 DM 04
          li.mb-0
            i.lista-ul__vineta
            p.mb-0 DM 06
          li.mb-0
            i.lista-ul__vineta
            p.mb-0 DM 07
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img10.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Comercialización y promoción
        ul.lista-ul.mb-0(data-aos="fade-down")
          li.mb-0
            i.lista-ul__vineta
            p.mb-0 DM 11
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img11.svg' alt='AvatarTop')
        p.text-center.text-bold(data-aos="fade-down") Marca territorial
        ul.lista-ul.mb-0(data-aos="fade-down")
          li.mb-0
            i.lista-ul__vineta
            p.mb-0 DM 09
    p.mb-0(data-aos="fade-down") Esta organización permite relacionar cada fase con las herramientas y guías prácticas disponibles, facilitando la implementación ordenada de la estrategia y asegurando que cada tema clave reciba la atención necesaria para promover el desarrollo local sostenible.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-down")
      h2 4.1 Guía para el descubrimiento de los tesoros locales
    p.mb-5(data-aos="fade-down") Los tesoros son bienes tangibles o intangibles, recursos naturales o culturales, productos o servicios. Pueden considerarse tesoros las danzas, artes, leyendas, patrimonio arqueológico, actividades tradicionales, personajes de la comunidad o conocimientos ancestrales, entre otros elementos que existen en el territorio o que merecen ser recuperados por su valor social y cultural.
    .row.justify-content-center.mb-0
      .col-12
        .row.justify-content-center
          .col-lg-10.col-12.order-lg-2.order-2
            .tarjeta.tarjeta--C05.p-2.mb-5
              .row.justify-content-center.align-items-center
                .col-lg-2.col-8.col-md-7.order-lg-1.order-1.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema4/img12.svg', alt='Imagen decorativa')
                .col-lg-9.col-12.order-lg-2.order-2
                  p(data-aos="fade-down") La identificación de tesoros parte de las comunidades, las cuales, una vez reconocen estos recursos, desarrollan sus propias propuestas. El liderazgo nace desde la comunidad, y las decisiones para su aprovechamiento deben surgir de la misma, pues el enfoque OVOP promueve procesos de autogestión y creatividad. En este sentido, el sentimiento de orgullo y confianza se convierte en un elemento dinamizador que impulsa la creación de valor y el fortalecimiento de los recursos locales.
    p.mb-5(data-aos="fade-down") Estos tesoros o recursos se clasifican en:
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 a) Recursos naturales
    figure.mb-5
      img(src="@/assets/curso/temas/tema4/img13.png", alt="Imagen decorativa")
    p.mb-5(data-aos="fade-down") Elementos de la naturaleza existentes en áreas geográficas que, por su belleza o particularidad, tienen potencial para convertirse en atractivos turísticos.
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 b) Recursos productivos
    figure.mb-5
      img(src="@/assets/curso/temas/tema4/img14.png", alt="Imagen decorativa")
    p.mb-5(data-aos="fade-down") Asociados a la vocación productiva del territorio, especialmente en actividades agrícolas, artesanales o manufactureras que fortalecen el desarrollo económico local.
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 c) Recursos culturales
    p.mb-5(data-aos="fade-down") Conjunto de bienes y manifestaciones culturales materiales e inmateriales que expresan la identidad, la historia y las prácticas sociales de la comunidad. Dentro de esta categoría se incluyen:
    .desktop
      .row.mb-5
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img15.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Patrimonio material
                p.mb-0 Engloba los bienes con existencia física, como edificaciones, monumentos o infraestructuras, que poseen un valor histórico, estético o arquitectónico.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img16.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Patrimonio inmaterial
                p.mb-0 Comprende las tradiciones, expresiones orales, rituales, festividades, conocimientos ancestrales y prácticas sociales que se transmiten de generación en generación y reflejan la esencia cultural de la comunidad.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img17.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Festividades
                p.mb-0 Son expresiones artísticas y culturales mediante las cuales la comunidad celebra sus tradiciones, creencias y valores, consolidando su identidad colectiva.
        .col-6.col-md-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img18.png')})`}")
              .tarjeta-slide__contenido.p-auto.p-xl-5
                h4 Grupos de especial interés
                p.mb-0 Incluyen comunidades indígenas, afrodescendientes, raizales y otros colectivos étnicos, cuyo patrimonio cultural y modos de vida representan una riqueza invaluable para el territorio.
    .movil
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG08.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema4/img15_1.png', alt='Imagen decorativa')
            h4 Patrimonio material
            p.mb-0 Engloba los bienes con existencia física, como edificaciones, monumentos o infraestructuras, que poseen un valor histórico, estético o arquitectónico.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG08.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema4/img16_1.png', alt='Imagen decorativa')
            h4 Patrimonio inmaterial
            p.mb-0 Comprende las tradiciones, expresiones orales, rituales, festividades, conocimientos ancestrales y prácticas sociales que se transmiten de generación en generación y reflejan la esencia cultural de la comunidad.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG08.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema4/img17_1.png', alt='Imagen decorativa')
            h4 Festividades
            p.mb-0 Son expresiones artísticas y culturales mediante las cuales la comunidad celebra sus tradiciones, creencias y valores, consolidando su identidad colectiva.
      .row.justify-content-center.align-items-center.mb-5
        .col-md-10.col-12
          .tarjeta.tarjeta--BG08.p-4
            figure.mb-3
              img(src='@/assets/curso/temas/tema4/img18_1.png', alt='Imagen decorativa')
            h4 Grupos de especial interés
            p.mb-0 Incluyen comunidades indígenas, afrodescendientes, raizales y otros colectivos étnicos, cuyo patrimonio cultural y modos de vida representan una riqueza invaluable para el territorio.
    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-5(data-aos="fade-down") Desde el enfoque OVOP, es fundamental analizar la potencialidad de estos recursos, entendiendo que deben ser potenciadores del desarrollo local, no solo en términos de competitividad, sino también de inclusión social. Para ello, se recomienda que los tesoros identificados sean evaluados con base en las siguientes variables:
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img19.svg' alt='AvatarTop')
          h4.text-center Uso
          p Grado de utilidad o aprovechamiento del recurso.
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img20.svg' alt='AvatarTop')
          h4.text-center Unicidad
          p Singularidad del recurso o producto en el ámbito regional, nacional o internacional.
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img21.svg' alt='AvatarTop')
          h4.text-center Dueño
          p Naturaleza comunitaria o pública del recurso.
        .tarjeta.tarjeta--BG03.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema4/img22.svg' alt='AvatarTop')
          h4.text-center Participación
          p Cantidad de personas del territorio que pueden beneficiarse del aprovechamiento del tesoro.
    p(data-aos="fade-down") La valoración de estas variables permite priorizar los recursos con mayor potencial transformador y fortalecer la planificación estratégica del territorio. De esta manera, se fomenta la participación activa de las comunidades en la toma de decisiones y se orienta el proceso hacia un desarrollo sostenible, inclusivo y basado en el orgullo local.
    p.mb-5(data-aos="fade-down") Con el fin de orientar el desarrollo práctico de esta guía, se presenta una ficha técnica que detalla las actividades, tiempos, materiales y metodologías sugeridas para facilitar el proceso participativo de identificación y valoración de los tesoros locales. Esta herramienta permite organizar el taller de manera estructurada, asegurando la participación activa de la comunidad y la obtención de resultados significativos para el desarrollo del territorio.
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span <em>Ficha técnica para el desarrollo de la guía de tesoros locales</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(colspan="3")(data-aos="fade-down") ENFOQUE DE DESARROLLO LOCAL OVOP COLOMBIA
            tbody
              tr
                th(colspan="3").text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") GUIA PARA EL REDESCUBRIMIENTO DE TESOROS LOCALES
              tr
                td(colspan="3")(data-aos="fade-down")(style="background-color: #F6F6F6") <b>Objetivo del taller</b>: identificar los tesoros locales del territorio y valorar su potencial para el desarrollo local a través de procesos participativos.
              tr
                td(colspan="3").text-bold(data-aos="fade-down") Condiciones previas:
                  ul.lista-ul.mb-0(data-aos="fade-down")
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Reconocimiento de las personas interesadas del municipio en conocer el potencial del enfoque OVOP para el desarrollo de su territorio.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Conformación de un grupo base.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Ficha técnica del municipio.
            tbody(style="background-color:#D9E6FF")
              tr
                th(colspan="3")(data-aos="fade-down") Agenda y resultados esperados
            tbody
              tr
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Actividad
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Tiempo
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Resultados
              tr
                td.text-bold(data-aos="fade-down") Registro de participantes.
                td(data-aos="fade-down") 15 minutos
                td(data-aos="fade-down") Registro de asistencia.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Introducción.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 30 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sensibilización alrededor de los conceptos OVOP a desarrollar para este taller:
                  ul.lista-ul.mb-0(data-aos="fade-down") 
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Desarrollo endógeno.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Tesoros locales.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Orgullo.
              tr
                td(data-aos="fade-down") <b>Identificación de tesoros</b>: el facilitador debe guiar esta actividad, motivando a los participantes para que propongan sus propias ideas. Cada grupo listará una serie de recursos locales, los cuales procederá a la clasificación de cada uno de los tesoros, en recursos naturales, culturales o productivos.
                td(data-aos="fade-down") 60 minutos
                td(data-aos="fade-down") 
                  ul.lista-ul.mb-0(data-aos="fade-down") 
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Listado de tesoros locales del municipio (mínimo 5).
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Mapa de ubicación de los tesoros locales. 
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Calendario de ocurrencia de hechos o actividades identificadas como tesoros.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <b>Imagen del territorio</b>: el facilitador de cada grupo entrega 3 rótulos, para que cada persona los ponga en los tres (3) tesoros que considera tienen mayor potencial según su propio criterio. Al hacer su elección, los participantes pueden explicar su punto de vista sobre los tesoros que han seleccionado para que los demás miembros del grupo puedan entender también su importancia.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 60 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6")
                  ul.lista-ul.mb-0(data-aos="fade-down") 
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Frases o <em>slogans</em> que identifican su municipio.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Listado de cinco tesoros con mayor potencialidad.
              tr
                td.text-bold(data-aos="fade-down") Retroalimentación y cierre del taller.
                td(data-aos="fade-down") 30 minutos
                td(data-aos="fade-down") Conclusiones y pasos siguientes.
            tbody(style="background-color:#D9E6FF")
              tr
                th(colspan="3")(data-aos="fade-down") Materiales y recursos empleados
            tbody(style="background-color:#D9E6FF")
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Ejemplo de lista de chequeo de materiales
            tbody
              tr
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Material
                th(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Cantidades / Descripción
              tr
                td(data-aos="fade-down") Tarjetas de cartulina.
                td(colspan="2")(data-aos="fade-down") 100 de cada color (rojo, azul, amarillo y verde) 7,5 x 12,5 cm.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <em>post-it</em> pequeño.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 2 paquetes de colores.
              tr
                td(data-aos="fade-down") Marcador punta gruesa.
                td(colspan="2")(data-aos="fade-down") 20 negros, 4 rojos y que sean borrables.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Marcador punta fina.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 20 negros.
              tr
                td(data-aos="fade-down") Cinta de papel.
                td(colspan="2")(data-aos="fade-down") 2 de 24 mm de anchos y 2 de 48 mm de ancho.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Rótulos adhesivos.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 100 de cada color (4 colores diferentes).
              tr
                td(data-aos="fade-down") Papel <em>bond</em>.
                td(colspan="2")(data-aos="fade-down") 20 pliegos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Hojas en blanco.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 20 tamaño carta.
              tr
                td(data-aos="fade-down") Lapiceros.
                td(colspan="2")(data-aos="fade-down") 20 negros.
            tbody(style="background-color:#D9E6FF")
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Ejemplo de lista de chequeo de impresiones
            tbody
              tr
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Documento / Formato
                th(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Cantidades / Descripción
              tr
                td(data-aos="fade-down") Mapa en blanco.
                td(colspan="2")(data-aos="fade-down") Tamaño pliego con división política de zona urbana y rural.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Objetivos del taller.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Tamaño pliego.
              tr
                td(data-aos="fade-down") Reglamento del taller.
                td(colspan="2")(data-aos="fade-down") Tamaño pliego.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Agenda del día.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Tamaño pliego.
              tr
                td(data-aos="fade-down") Formato de calendario.
                td(colspan="2")(data-aos="fade-down") Medio pliego.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Listado de asistencia.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Tamaño carta.
              tr
                td(data-aos="fade-down") Cuestionarios.
                td(colspan="2")(data-aos="fade-down") Copias igual a # de participantes.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Guía del taller.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Copias igual a # de participantes.
            tbody(style="background-color:#D9E6FF")
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Metodologías sugeridas
            tbody
              tr
                td(colspan="3").text-bold(data-aos="fade-down") 
                  ul.lista-ul.mb-0(data-aos="fade-down")
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Lluvia de ideas.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Cartografía social.
            tbody(style="background-color:#D9E6FF")
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Después del taller
            tbody
              tr
                td(colspan="3").text-bold(data-aos="fade-down") Digitar y organizar los resultados del taller. También se sugiere elaborar un informe ejecutivo del taller que contenga la siguiente información:
                  ul.lista-ul.mt-3(data-aos="fade-down")
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Lista de asistencia.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Dinámica del taller.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Dificultades y aciertos.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Resultados.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Conclusiones y recomendaciones.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Revisar la evaluación del taller y establecer acciones de mejora.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Compartir esta información con los asistentes para recibir su retroalimentación. Esto se puede realizar vía correo electrónico, en cartelera pública si es posible o en la siguiente reunión.
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .tarjeta.tarjeta--C02.p-4(data-aos="fade-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/temas/tema1/img13.svg")
            .col
              .row.justify-content-center.align-items-center
                .col.mb-sm-0.mb-4
                  p Para profundizar en las orientaciones metodológicas, se recomienda consultar y descargar el documento:
                  p.text-bold DM_01_Guía_para_el_redescubrimiento_de_tesoros_locales.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/DM_01_Guia_para_el_redescubrimiento_de_tesoros_locales.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-down")
      h2 4.2 Guía para la construcción del sueño colectivo OVOP
    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2
        p(data-aos="fade-down") Dentro de la ruta metodológica de OVOP Colombia, la construcción del sueño colectivo representa un paso esencial en la “Fase 2”, correspondiente a la definición del producto o productos del territorio. Su propósito es generar valor en torno a “Mi Producto”, fortaleciendo la identidad, la visión compartida y el compromiso comunitario con el desarrollo local.
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") El sueño colectivo se concibe como una visión deseada del territorio en el futuro, construida de manera participativa. A través de este proceso, las comunidades expresan sus aspiraciones y definen de forma conjunta el rumbo que desean para su desarrollo. Esta visión se convierte en un motor de transformación, que inspira la acción y orienta la planificación estratégica de las iniciativas locales.
        p(data-aos="fade-down") En el enfoque OVOP Colombia, el sueño colectivo se construye mediante la metodología de <em>backcasting</em>, la cual parte del futuro deseado para definir los pasos necesarios desde el presente. A diferencia del forecasting, que proyecta el futuro desde las condiciones actuales, el <em>backcasting</em> propone imaginar un escenario ideal y trabajar hacia su materialización. Este enfoque estimula la creatividad, la innovación y el sentido de posibilidad dentro de las comunidades.
      .col-lg-4.order-lg-2.order-1.mb-3.col-md-5.col-7
        figure(data-aos="flip-down") 
          img(src='@/assets/curso/temas/tema4/img23.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span <em>Perspectiva de <em>backcasting</em></em>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema4/img24.svg', alt='La figura 2 presenta el modelo de planificación de <em>backcasting</em> en el cual la comunidad define una meta futura deseable, el “sueño colectivo”, y a partir de ella planifica las acciones necesarias desde el presente para alcanzarla. Se contrasta con la perspectiva de forecasting, que pronostica el futuro basándose en las condiciones y recursos actuales. El enfoque OVOP adopta el <em>backcasting</em> para orientar el desarrollo local desde una visión compartida de futuro.')
            figcaption Nota. Tomado de la Guía 2 OVOP Colombia (SENA, JICA, MinCIT, 2020).
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema4/img25.svg', alt='La figura 2 presenta el modelo de planificación de <em>backcasting</em> en el cual la comunidad define una meta futura deseable, el “sueño colectivo”, y a partir de ella planifica las acciones necesarias desde el presente para alcanzarla. Se contrasta con la perspectiva de forecasting, que pronostica el futuro basándose en las condiciones y recursos actuales. El enfoque OVOP adopta el <em>backcasting</em> para orientar el desarrollo local desde una visión compartida de futuro.')
          figcaption Nota. Tomado de la Guía 2 OVOP Colombia (SENA, JICA, MinCIT, 2020).
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img26.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Como parte de las experiencias que expone la aplicación del enfoque OVOP en Colombia, se destaca el caso de “Mompox: Vivir es arte”, una iniciativa que refleja cómo las comunidades pueden construir una visión compartida de su territorio a partir de sus recursos culturales, artísticos y sociales.
        br
        br
        p.mb-0 En esta experiencia, los actores locales unieron esfuerzos para proyectar un futuro basado en la identidad patrimonial y el arte como motor de desarrollo. La actividad permitió materializar el sueño colectivo mediante un proceso participativo de planeación, fortaleciendo la cohesión social y el sentido de pertenencia al territorio.
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span <em>Aproximación visión territorial</em>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema4/img27.svg', alt='La figura 3 representa la experiencia territorial “Mompox: vivir es arte”, donde la comunidad construye su visión de futuro a partir de su identidad cultural, creatividad y sentido de pertenencia. Incluye elementos como el territorio, la cultura, los valores y las aspiraciones colectivas, que evidencian la aplicación de la metodología participativa del enfoque OVOP.')
            figcaption Nota. Tomado de la Guía 2 OVOP Colombia (SENA, JICA, MinCIT, 2020 ).
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema4/img28.svg', alt='La figura 3 representa la experiencia territorial “Mompox: vivir es arte”, donde la comunidad construye su visión de futuro a partir de su identidad cultural, creatividad y sentido de pertenencia. Incluye elementos como el territorio, la cultura, los valores y las aspiraciones colectivas, que evidencian la aplicación de la metodología participativa del enfoque OVOP.')
          figcaption Nota. Tomado de la Guía 2 OVOP Colombia (SENA, JICA, MinCIT, 2020 ).
    p.mb-5(data-aos="fade-down") Para llevar a cabo este proceso de manera estructurada, es fundamental contar con una guía que oriente cada etapa de trabajo comunitario. A continuación, se presenta la ficha técnica que describe las actividades, recursos y condiciones necesarias para facilitar la construcción participativa del sueño colectivo en los territorios.
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span <em>Ficha técnica para el desarrollo de la construcción del sueño colectivo</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(colspan="3")(data-aos="fade-down") ENFOQUE DE DESARROLLO LOCAL OVOP COLOMBIA
            tbody
              tr
                th(colspan="3").text-bold(data-aos="fade-down") GUIA PARA LA CONSTRUCCIÓN DEL SUEÑO COLECTIVO
              tr
                td(colspan="3").text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") <b>Objetivo del taller</b>: construir y concertar el sueño colectivo del territorio.
              tr
                td(colspan="3").text-bold(data-aos="fade-down") <b>Condiciones previas:</b>
                  ul.lista-ul.mb-0(data-aos="fade-down")
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Investigación general del municipio o ficha técnica municipal.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Listado largo de tesoros locales.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Listado de propuestas de <em>slogans</em> del municipio.
            tbody(style="background-color:#D9E6FF")
              tr
                th(colspan="3")(data-aos="fade-down") Agenda y resultados esperados
            tbody
              tr
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Actividad
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Tiempo
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Resultados
              tr
                td.text-bold(data-aos="fade-down") Registro de participantes.
                td(data-aos="fade-down") 15 minutos
                td(data-aos="fade-down") Registro de asistencia.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Introducción.
                  ul.lista-ul.mb-0(data-aos="fade-down") 
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 El instructor (SENA) explicará el objetivo de este taller.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 60 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ruta metodológica OVOP.
              tr
                td.text-bold(data-aos="fade-down") Construcción del sueño colectivo: 
                  ul.lista-ul.mb-0(data-aos="fade-down") 
                    li.mb-3
                      i.lista-ul__vineta
                      p.mb-0 El facilitador explicará en qué consiste el sueño colectivo, el cual se utilizará como base para determinar “Mi Producto”.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Los participantes se organizarán en equipos de trabajo, se encargarán de realizar un “mapa de los sueños”, el cual trata de un mapa que represente y dé a conocer los logros de la comunidad.
                td(data-aos="fade-down") 60 minutos
                td(data-aos="fade-down") Concepto y construcción de sueño colectivo.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Receso.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 60 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Espacio de descanso.
              tr
                td.text-bold(data-aos="fade-down") Conclusión y cierre del taller.
                td(data-aos="fade-down") 30 minutos
                td(data-aos="fade-down") Conclusiones y pasos siguientes.
            tbody(style="background-color:#D9E6FF")
              tr
                th(colspan="3")(data-aos="fade-down") Materiales y recursos empleados
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Ejemplo de lista de chequeo de materiales
            tbody
              tr
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Material
                th(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Cantidades / Descripción
              tr
                td(data-aos="fade-down") Tarjetas de cartulina.
                td(colspan="2")(data-aos="fade-down") 100 de cada color (rojo, azul, amarillo y verde) 7,5 x 12,5 cm.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <em>post-it</em> pequeño.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 2 paquetes de colores.
              tr
                td(data-aos="fade-down") Marcador punta gruesa.
                td(colspan="2")(data-aos="fade-down") 20 negros, 4 rojos y que sean borrables.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Marcador punta fina.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 20 negros.
              tr
                td(data-aos="fade-down") Cinta de papel.
                td(colspan="2")(data-aos="fade-down") 2 de 24 mm de anchos y 2 de 48 mm de ancho.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Rótulos adhesivos.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 100 de cada color (4 colores diferentes).
              tr
                td(data-aos="fade-down") Papel <em>bond</em>.
                td(colspan="2")(data-aos="fade-down") 20 pliegos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Hojas en blanco.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 20 tamaño carta.
              tr
                td(data-aos="fade-down") Lapiceros.
                td(colspan="2")(data-aos="fade-down") 20 negros.
            tbody(style="background-color:#D9E6FF")
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Ejemplo de lista de chequeo de impresiones
            tbody
              tr
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Documento / Formato
                th(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Cantidades / Descripción
              tr
                td(data-aos="fade-down") Mapa en blanco.
                td(colspan="2")(data-aos="fade-down") Tamaño pliego con división política de zona urbana y rural.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Objetivos del taller.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Tamaño pliego.
              tr
                td(data-aos="fade-down") Reglamento del taller.
                td(colspan="2")(data-aos="fade-down") Tamaño pliego.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Agenda del día.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Tamaño pliego.
              tr
                td(data-aos="fade-down") Formato de calendario.
                td(colspan="2")(data-aos="fade-down") Medio pliego.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Listado de asistencia.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Tamaño carta.
              tr
                td(data-aos="fade-down") Cuestionarios.
                td(colspan="2")(data-aos="fade-down") Copias igual a # de participantes.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Guía del taller.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Copias igual a # de participantes.
            tbody(style="background-color:#D9E6FF")
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Metodologías sugeridas
            tbody
              tr
                td(colspan="3").text-bold(data-aos="fade-down") 
                  ul.lista-ul.mb-0(data-aos="fade-down")
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 “Mapa de los sueños” es un mapa que representa y da a conocer los logros de la comunidad.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Uso del concepto <em>backcasting</em>.
            tbody(style="background-color:#D9E6FF")
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Después del taller
            tbody
              tr
                td(colspan="3").text-bold(data-aos="fade-down") Digitar y organizar los resultados del taller. También se sugiere elaborar un informe ejecutivo del taller que contenga la siguiente información:
                  ul.lista-ul.mb-0.mt-3(data-aos="fade-down")
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Lista de asistencia.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Dinámica del taller.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Dificultades y aciertos.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Resultados. 
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Conclusiones y recomendaciones. 
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Revisar la evaluación del taller y establecer acciones de mejora.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Compartir esta información con los asistentes para recibir su retroalimentación. Esto se puede realizar vía correo electrónico, en cartelera pública si es posible o en la siguiente reunión.
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .tarjeta.tarjeta--C02.p-4(data-aos="fade-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/temas/tema1/img13.svg")
            .col
              .row.justify-content-center.align-items-center
                .col.mb-sm-0.mb-4
                  p Con el fin de fortalecer los conocimientos y orientar el desarrollo práctico de esta fase, se recomienda consultar el documento <b>DM_02_Guia_para_la_construccion_del_sueno_colectivo_OVOP</b>, donde se describen las estrategias didácticas y los recursos necesarios para la formulación del sueño colectivo en los territorios.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/DM_02_Guia_para_la_construccion_del_sueno_colectivo_OVOP.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-down")
      h2 4.3 Guía para la ideación de producto OVOP
    .row.justify-content-center.mb-4
      .col-lg-10.order-lg-2.order-2
        p(data-aos="fade-down") En el enfoque Un Pueblo, Un Producto (OVOP), la ideación del producto constituye una fase esencial dentro de la ruta metodológica, pues representa el momento en el que la comunidad transforma sus recursos, conocimientos y creatividad en propuestas concretas de valor para el territorio. Este proceso busca impulsar la generación de ideas innovadoras que fortalezcan la identidad local y promuevan el desarrollo sostenible.
        p.mb-0(data-aos="fade-down") En esta etapa, las comunidades reflexionan sobre sus recursos, potencialidades y aspiraciones colectivas para definir qué producto o servicio puede representar mejor su identidad y contribuir a su desarrollo local. Comprender los conceptos de idea, creación de valor e innovación es fundamental, ya que estos orientan la manera en que se construyen propuestas sostenibles, inclusivas y coherentes con la filosofía OVOP.
      .col-lg-2.order-lg-1.order-1.mb-3.col-md-5.col-7
        figure(data-aos="flip-down") 
          img(src='@/assets/curso/temas/tema4/img29.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-8.col-12.mb-md-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C04")
          .row(titulo="Idea")
            .col-12.mb-0.mb-md-0
              p Se concibe como la expresión de un pensamiento o propuesta que introduce una forma nueva de crear, ofrecer o experimentar algo. En el marco del enfoque OVOP, cualquier persona puede generar ideas, sin importar su nivel técnico o profesional, ya que se reconoce y valora la diversidad de saberes y perspectivas presentes en la comunidad. No obstante, la generación de ideas requiere preparación, análisis y un conocimiento profundo del territorio y de los recursos disponibles. En este sentido, la ideación se configura como un proceso participativo que impulsa la creatividad colectiva y fomenta la construcción de soluciones innovadoras orientadas al desarrollo local.
          .row(titulo="Creación de valor")
            .col-12.mb-0.mb-md-0
              p Dentro del enfoque OVOP, la creación de valor implica que las comunidades y las instituciones reflexionen sobre cómo aprovechar y potenciar los recursos disponibles en su territorio. Este proceso busca transformar recursos tangibles e intangibles, como los culturales, históricos, arquitectónicos, productivos o ambientales, en productos o servicios que generen beneficios económicos, sociales y culturales.
              p La comunidad debe reconocer dos caminos posibles: crear valor, que significa generar algo completamente nuevo (pasar de 0 a 1), o agregar valor, que consiste en mejorar o transformar algo ya existente (pasar de 1 en adelante). Ambas vías contribuyen a la construcción de productos locales con proyección global, en coherencia con el principio OVOP de “pensar global y actuar local”.
          .row(titulo="Innovación")
            .col-12.mb-0.mb-md-0
              p En el marco del enfoque OVOP, se entiende como el proceso mediante el cual se introducen cambios o mejoras significativas que generan beneficios sostenibles para la comunidad. Puede manifestarse en productos, servicios o procesos, y suele surgir de la combinación entre elementos tradicionales y nuevas ideas, tecnologías o métodos. La innovación fortalece la competitividad local, promueve la sostenibilidad y contribuye a mejorar la calidad de vida de las comunidades, al tiempo que potencia su capacidad de adaptación frente a los cambios del entorno.
      .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema4/img30.png', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") Con el propósito de orientar el proceso práctico de esta fase, se presenta la ficha técnica correspondiente a la ideación de productos. Esta herramienta metodológica ofrece una guía estructurada para el desarrollo del taller, detallando los objetivos, condiciones previas, actividades, tiempos, materiales y metodologías recomendadas. Su aplicación facilita la organización del trabajo comunitario, la generación de ideas colectivas y la construcción de propuestas innovadoras alineadas con el enfoque OVOP.
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span <em>Ficha técnica para el desarrollo de la ideación de productos</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(colspan="3")(data-aos="fade-down") ENFOQUE DE DESARROLLO LOCAL OVOP COLOMBIA
            tbody
              tr
                th(colspan="3").text-bold(data-aos="fade-down") GUIA PARA LA IDEACIÓN DE PRODUCTOS
              tr
                td(colspan="3").text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") <b>Objetivo del taller</b>: generar ideas de productos a partir de los recursos y con el sueño colectivo de su territorio para el desarrollo local.
              tr
                td(colspan="3").text-bold(data-aos="fade-down") <b>Condiciones previas:</b>
                  ul.lista-ul.mb-0(data-aos="fade-down")
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Investigación general del municipio o ficha técnica municipal.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Listado largo de tesoros locales.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Listado de propuestas de <em>slogans</em> del municipio.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Listado de tesoros locales con mayor potencial.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Texto descriptivo del sueño colectivo y las descritas previamente en el documento “Estrategia de Desarrollo Local Incluyente OVOP”.
            tbody(style="background-color:#D9E6FF")
              tr
                th(colspan="3")(data-aos="fade-down") Agenda y resultados esperados
            tbody
              tr
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Actividad
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Tiempo
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Resultados
              tr
                td.text-bold(data-aos="fade-down") Registro de participantes.
                td(data-aos="fade-down") 15 minutos
                td(data-aos="fade-down") Registro de asistencia.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Introducción.
                  ul.lista-ul.mb-0(data-aos="fade-down") 
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Contextualizar a los participantes de manera general sobre el proceso que se ha realizado para la implementación del enfoque OVOP.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Por medio de una lluvia de ideas el instructor retomara conceptos vistos en el taller anterior.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 30 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Reconocer qué es la idea, creación de valor y el concepto de “Amplia variedad y bajo volumen”.
                  p Sensibilización alrededor de los conceptos OVOP a desarrollar para este taller:
                  ul.lista-ul.mb-0(data-aos="fade-down") 
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Desarrollo Endógeno.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Creación de valor.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Amplia variedad y bajo volumen.
              tr
                td.text-bold(data-aos="fade-down") Semilla de ideas.
                  ul.lista-ul.mb-0(data-aos="fade-down") 
                    li.mb-3
                      i.lista-ul__vineta
                      p.mb-0 Explicar a los participantes la metodología para la ideación de productos
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Las semillas de ideas constan de cuatro componentes; target, problema, recursos y solución
                td(data-aos="fade-down") 60 minutos
                td(data-aos="fade-down") Ficha de semillas de idea (ver guía).
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Idea de producto.
                  ul.lista-ul.mb-0(data-aos="fade-down") 
                    li.mb-3
                      i.lista-ul__vineta
                      p.mb-0 Una vez terminan de escribir y modificar, cada grupo pasará de una idea semilla a una idea de producto realizando un chequeo teniendo en cuenta el instrumento SCAMPER.
                    li.mb-3
                      i.lista-ul__vineta
                      p.mb-0 Socializar
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 60 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ficha de idea de producto (ver guía).
              tr
                td.text-bold(data-aos="fade-down") Retroalimentación y cierre del taller.
                td(data-aos="fade-down") 30 minutos
                td(data-aos="fade-down") Conclusiones y pasos siguientes.
            tbody(style="background-color:#D9E6FF")
              tr
                th(colspan="3")(data-aos="fade-down") Materiales y recursos empleados
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Ejemplo de lista de chequeo de materiales
            tbody
              tr
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Material
                th(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Cantidades / Descripción
              tr
                td(data-aos="fade-down") Tarjetas de cartulina.
                td(colspan="2")(data-aos="fade-down") 100 de cada color (rojo, azul, amarillo y verde) 7,5 x 12,5 cm.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <em>post-it</em> pequeño.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 2 paquetes de colores.
              tr
                td(data-aos="fade-down") Marcador punta gruesa.
                td(colspan="2")(data-aos="fade-down") 20 negros, 4 rojos y que sean borrables.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Marcador punta fina.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 20 negros.
              tr
                td(data-aos="fade-down") Cinta de papel.
                td(colspan="2")(data-aos="fade-down") 2 de 24 mm de anchos y 2 de 48 mm de ancho.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Rótulos adhesivos.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 100 de cada color (4 colores diferentes).
              tr
                td(data-aos="fade-down") Papel <em>bond</em>.
                td(colspan="2")(data-aos="fade-down") 20 pliegos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Hojas en blanco.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 20 tamaño carta.
              tr
                td(data-aos="fade-down") Lapiceros.
                td(colspan="2")(data-aos="fade-down") 20 negros.
            tbody(style="background-color:#D9E6FF")
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Ejemplo de lista de chequeo de impresiones
            tbody
              tr
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Documento / Formato
                th(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Cantidades / Descripción
              tr
                td(data-aos="fade-down") Mapa en blanco.
                td(colspan="2")(data-aos="fade-down") Tamaño pliego con división política de zona urbana y rural.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Objetivos del taller.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Tamaño pliego.
              tr
                td(data-aos="fade-down") Reglamento del taller.
                td(colspan="2")(data-aos="fade-down") Tamaño pliego.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Agenda del día.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Tamaño pliego.
              tr
                td(data-aos="fade-down") Formato de calendario.
                td(colspan="2")(data-aos="fade-down") Medio pliego.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Listado de asistencia.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Tamaño carta.
              tr
                td(data-aos="fade-down") Cuestionarios.
                td(colspan="2")(data-aos="fade-down") Copias igual a # de participantes.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Guía del taller.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Copias igual a # de participantes.
            tbody(style="background-color:#D9E6FF")
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Metodologías sugeridas
            tbody
              tr
                td(colspan="3").text-bold(data-aos="fade-down") 
                  ul.lista-ul.mb-0(data-aos="fade-down")
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Lista de Chequeo SCAMPER.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Lluvia de ideas.
            tbody(style="background-color:#D9E6FF")
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Después del taller
            tbody
              tr
                td(colspan="3").text-bold(data-aos="fade-down") Digitar y organizar los resultados del taller. También se sugiere elaborar un informe ejecutivo del taller que contenga la siguiente información:
                  ul.lista-ul.mb-0.mt-3(data-aos="fade-down")
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Lista de asistencia.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Dinámica del taller.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Dificultades y aciertos.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Resultados. 
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Conclusiones y recomendaciones. 
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Revisar la evaluación del taller y establecer acciones de mejora.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Compartir esta información con los asistentes para recibir su retroalimentación. Esto se puede realizar vía correo electrónico, en cartelera pública si es posible o en la siguiente reunión.
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .tarjeta.tarjeta--C02.p-4(data-aos="fade-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/temas/tema1/img13.svg")
            .col
              .row.justify-content-center.align-items-center
                .col.mb-sm-0.mb-4
                  p Para profundizar en los conceptos y metodologías de esta fase, se recomienda consultar la <b>DM_03_Guia_para_la_ideacion_de_Producto_OVOP</b>, donde se presentan las estrategias didácticas y recursos necesarios para desarrollar propuestas de valor que respondan a las aspiraciones colectivas de cada territorio.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/DM_03_Guia_para_la_ideacion_de_Producto_OVOP.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-down")
      h2 4.4 Guía para el estudio de Cadena de Valor Simple y selección de Mi Producto OVOP
    p.mb-5(data-aos="fade-down") El análisis de la cadena de valor constituye una herramienta fundamental para comprender cómo se generan los procesos productivos, económicos y sociales en el territorio, y cómo cada actor aporta a la creación de valor. En el marco del enfoque OVOP, esta etapa permite identificar oportunidades para fortalecer la competitividad local, mejorar la distribución de beneficios y orientar las estrategias hacia un desarrollo equitativo y sostenible.
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 a) Cadena de valor y su análisis
    .row.justify-content-center.mb-0
      .col-12
        .row.justify-content-center
          .col-lg-10.col-12.order-lg-2.order-2
            .tarjeta.tarjeta--C01.p-4.mb-5
              .row.justify-content-center.align-items-center
                .col-lg-4.col-8.col-md-7.order-lg-1.order-1.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema4/img31.svg', alt='Imagen decorativa')
                .col-lg-8.col-12.order-lg-2.order-2
                  p(data-aos="fade-down") Es un modelo teórico propuesto por Michael Porter que permite describir las actividades de una organización o empresa para generar valor tanto para el cliente como para sí misma. Desde el enfoque OVOP, analizar la cadena de valor de los productos locales facilita determinar la creación de valor agregado, su relación con la generación de ingresos y la distribución de beneficios entre los actores que participan en la producción. Esta información es clave para orientar la planificación comunitaria y fortalecer el desarrollo económico del territorio.
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 b) Economía sana según el enfoque OVOP
    p.mb-5(data-aos="fade-down") Se refiere a un modelo local en el que la comunidad se empodera para crear valor, innovar y mejorar continuamente sus procesos. Este enfoque busca superar las dificultades estructurales de la economía local, incrementando la competitividad territorial y la calidad de vida de sus habitantes. Una economía sana se caracteriza por la equidad en la distribución de beneficios, el fortalecimiento del consumo interno y la generación de un crecimiento sostenible que beneficie a toda la comunidad.
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 c) Productos OVOP y productos estrella
    .row.justify-content-center.mb-5
      .col-lg-7.order-lg-2.order-2
        p(data-aos="fade-down") Los productos OVOP son aquellos que reúnen características fundamentales para promover el desarrollo local y empoderar a las comunidades. Para que un producto sea considerado como OVOP, debe surgir de un proceso participativo que identifique los recursos locales y los transforme en tesoros, es decir, bienes con potencial de aprovechamiento comunitario.
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Los productos potenciales son aquellos recursos o bienes que tienen valor agregado o pueden generarlo, incrementando los ingresos de la comunidad y la competitividad del territorio. Sin embargo, solo se consideran productos OVOP aquellos cuya producción o comercialización involucra activamente a la comunidad y representa la identidad del territorio.
        p(data-aos="fade-down") Por su parte, los productos estrella son aquellos con alta participación en el mercado y potencial de crecimiento sostenido. En el enfoque OVOP, estos productos se denominan “Mi Producto”, ya que simbolizan la consolidación del desarrollo local con impacto global.
      .col-lg-5.order-lg-1.order-1.mb-3.col-md-5.col-7
        figure(data-aos="flip-down") 
          img(src='@/assets/curso/temas/tema4/img32.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span <em>Transición de recursos locales a productos OVOP</em>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema4/img33.svg', alt='La figura 4 representa el proceso de transformación de los recursos locales en productos OVOP. Inicia con la conciencia comunitaria, continúa con la identificación de recursos locales, su valoración como recursos potenciales, el agregado de valor para generar productos potenciales, la comercialización comunitaria y finalmente la consolidación de productos OVOP.')
            figcaption Nota. Tomado de la Guía 4 OVOP Colombia (SENA, JICA, MinCIT, 2020 ).
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema4/img34.svg', alt='La figura 4 representa el proceso de transformación de los recursos locales en productos OVOP. Inicia con la conciencia comunitaria, continúa con la identificación de recursos locales, su valoración como recursos potenciales, el agregado de valor para generar productos potenciales, la comercialización comunitaria y finalmente la consolidación de productos OVOP.')
          figcaption Nota. Tomado de la Guía 4 OVOP Colombia (SENA, JICA, MinCIT, 2020 ).
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 d) Temas preliminares
    p.mb-5(data-aos="fade-down") Dentro de la ruta metodológica de OVOP se presentan diversas herramientas que facilitan la obtención de resultados preliminares. Después del análisis de la cadena de valor, existen pasos adicionales que fortalecen el proceso de desarrollo territorial. Estos incluyen el estudio de la estructura productiva local, la evaluación de recursos estratégicos y la revisión de información económica.
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span <em>Asuntos preliminares y posteriores al análisis de la cadena de valor</em>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema4/img35.svg', alt='En la figura 5 se presentan las fases del proceso OVOP: Fase I, evaluación de “Mi Pueblo”, identificación de recursos locales e ideación de productos; Fase II, análisis de productos potenciales, formación de redes de negocio colectivo y definición del producto OVOP; y Fase III, gestión del producto, presentación a la comunidad y elaboración del plan de negocio basado en la estrategia de marca territorial. Cada fase incluye actividades y resultados esperados como fichas técnicas, listados de tesoros locales y modelos de negocio.')
            figcaption Nota. Tomado de la Guía 4 OVOP Colombia (SENA, JICA, MinCIT, 2020).
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema4/img36.svg', alt='En la figura 5 se presentan las fases del proceso OVOP: Fase I, evaluación de “Mi Pueblo”, identificación de recursos locales e ideación de productos; Fase II, análisis de productos potenciales, formación de redes de negocio colectivo y definición del producto OVOP; y Fase III, gestión del producto, presentación a la comunidad y elaboración del plan de negocio basado en la estrategia de marca territorial. Cada fase incluye actividades y resultados esperados como fichas técnicas, listados de tesoros locales y modelos de negocio.')
          figcaption Nota. Tomado de la Guía 4 OVOP Colombia (SENA, JICA, MinCIT, 2020).
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 e) Ficha técnica municipal
    p.mb-4(data-aos="fade-down") Para estimar el impacto de “Mi Producto” en la economía local, es necesario recopilar información geográfica, económica y social del territorio donde se desarrolla la iniciativa.
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .tarjeta.tarjeta--C02.p-4(data-aos="fade-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/temas/tema4/img37.svg")
            .col
              .row.justify-content-center.align-items-center
                .col.mb-sm-0.mb-4
                  p La ficha técnica municipal consolida datos relevantes sobre la composición poblacional, los hogares, la extensión territorial y las principales actividades económicas, lo que permite contextualizar los resultados del análisis de la cadena de valor. Para ampliar la información, consultar el documento anexo: <b>Ficha_de_analisis_cadena_de_valor_para_instructores_OVOP.</b>
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Ficha_de_analisis_cadena_de_valor_para_instructores_OVOP.xlsx')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 f) Resultados de descubrimiento de tesoros locales
    p.mb-4(data-aos="fade-down") En las primeras fases del enfoque OVOP se lleva a cabo el redescubrimiento de los recursos territoriales, valorando aquellos que la comunidad reconoce como tesoros locales. Estos deben analizarse según su identidad, unicidad y potencial de aprovechamiento, con el fin de determinar cuáles podrían transformarse en productos OVOP. Los resultados de este ejercicio deben documentarse, pues constituyen la base para el análisis de la cadena de valor y reflejan la perspectiva comunitaria frente a sus recursos.
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 g) Información de productos potenciales
    .row.justify-content-center.mb-0
      .col-lg-7.order-lg-1.order-2
        p(data-aos="fade-down") Para medir el impacto de un producto en el desarrollo local, se requiere seleccionar al menos dos productos potenciales, es decir, tesoros con valor agregado o posibilidad de generarlo, que puedan ser producidos o comercializados por la comunidad.        
        p(data-aos="fade-down") Analizar productos que aún no están en el mercado permite aprovechar la creatividad surgida en las fases anteriores, identificando oportunidades para convertirlos en productos estrella que impulsen la economía local. La información básica de cada producto potencial debe incluir:
        .tarjeta.tarjeta--C01.p-4.mb-3
          ul.lista-ul.mb-0(data-aos="fade-down")
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Proceso de producción paso a paso y costos.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Ventas actuales (cantidad, precio y clientes).
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 Emprendimientos o personas responsables del producto.
      .col-lg-5.order-lg-2.order-1.mb-3.col-md-5.col-7
        figure(data-aos="flip-down") 
          img(src='@/assets/curso/temas/tema4/img38.png', alt='Imagen decorativa')
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 h) Elaboración de una Cadena de Valor Simple
    p(data-aos="fade-down") La cadena de valor describe las actividades que permiten conducir un producto o servicio desde su concepción hasta la entrega al consumidor final, incluyendo su disposición o reciclaje. En el enfoque OVOP se propone trabajar con una Cadena de Valor Simple, compuesta por cuatro fases o eslabones que facilitan la comprensión y planificación de los procesos productivos.
    p.mb-5(data-aos="fade-down") Estas etapas reflejan la integración de la comunidad en cada fase, desde la producción hasta la comercialización, promoviendo la generación de valor compartido, como se presenta en la siguiente figura:
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span <em>Cuatro eslabones de una Cadena de Valor Simple</em>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema4/img39.svg', alt='La figura 6 representa una cadena de valor simple')
            figcaption Nota. Adaptado de la Guía 5 OVOP Colombia (SENA, JICA, MinCIT, 2020 ).
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema4/img40.svg', alt='La figura 6 representa una cadena de valor simple')
          figcaption Nota. Adaptado de la Guía 4 OVOP Colombia (SENA, JICA, MinCIT, 2020).
    p(data-aos="fade-down") Con los conocimientos descritos se busca comprender los conceptos fundamentales de la Guía para el estudio de Cadena de Valor Simple, fortaleciendo las capacidades comunitarias para la planificación y el desarrollo local.
    p.mb-5(data-aos="fade-down") En la guía de Cadena de Valor Simple se proponen dos metodologías para el análisis de la misma, sin embargo, se deja a discreción del instructor integrar otras metodologías que considere pertinente para tal fin, que hagan parte del ecosistema formativo del SENA.
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span <em>Ficha técnica para el desarrollo de la Cadena de Valor Simple y selección de Mi Producto</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(colspan="3")(data-aos="fade-down") ENFOQUE DE DESARROLLO LOCAL OVOP COLOMBIA
            tbody
              tr
                th(colspan="3").text-bold(data-aos="fade-down") GUIA PARA EL ESTUDIO DE CADENA DE VALOR SIMPLE Y SELECCION DE MI PRODUCTO OVOP
              tr
                td(colspan="3").text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") <b>Objetivo del taller</b>: que los participantes comprendan y construyan la Cadena de Valor Simple de su producto o servicio, identificando los eslabones clave, actores involucrados y oportunidades de mejora.
              tr
                td(colspan="3").text-bold(data-aos="fade-down") <b>Condiciones previas:</b>
                  ul.lista-ul.mb-0(data-aos="fade-down")
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Ficha técnica municipal.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Resultados del descubrimiento de tesoros locales.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Información de productos potenciales.
            tbody(style="background-color:#D9E6FF")
              tr
                th(colspan="3")(data-aos="fade-down") Agenda y resultados esperados
            tbody
              tr
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Actividad
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Tiempo
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Resultados
              tr
                td.text-bold(data-aos="fade-down") Registro de participantes.
                td(data-aos="fade-down") 15 minutos
                td(data-aos="fade-down") Registro de asistencia.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Introducción.
                  ul.lista-ul.mb-0(data-aos="fade-down") 30 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Descripción general de la guía.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
              tr
                td.text-bold(data-aos="fade-down") Desarrollo de la cadena de valor según la metodología utilizada.
                td(data-aos="fade-down") 60 minutos
                td(data-aos="fade-down") Estructura de la cadena de valor.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Retroalimentación y conclusiones
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 30 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Conclusiones y pasos siguientes.
            tbody(style="background-color:#D9E6FF")
              tr
                th(colspan="3")(data-aos="fade-down") Materiales y recursos empleados
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Ejemplo de lista de chequeo de materiales
            tbody
              tr
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Material
                th(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Cantidades / Descripción
              tr
                td(data-aos="fade-down") Tarjetas de cartulina.
                td(colspan="2")(data-aos="fade-down") 100 de cada color (rojo, azul, amarillo y verde) 7,5 x 12,5 cm.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <em>post-it</em> pequeño.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 2 paquetes de colores.
              tr
                td(data-aos="fade-down") Marcador punta gruesa.
                td(colspan="2")(data-aos="fade-down") 20 negros, 4 rojos y que sean borrables.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Marcador punta fina.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 20 negros.
              tr
                td(data-aos="fade-down") Cinta de papel.
                td(colspan="2")(data-aos="fade-down") 2 de 24 mm de anchos y 2 de 48 mm de ancho.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Rótulos adhesivos.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 100 de cada color (4 colores diferentes).
              tr
                td(data-aos="fade-down") Papel <em>bond</em>.
                td(colspan="2")(data-aos="fade-down") 20 pliegos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Hojas en blanco.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 20 tamaño carta.
              tr
                td(data-aos="fade-down") Lapiceros.
                td(colspan="2")(data-aos="fade-down") 20 negros.
            tbody(style="background-color:#D9E6FF")
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Ejemplo de lista de chequeo de impresiones
            tbody
              tr
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Documento / Formato
                th(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Cantidades / Descripción
              tr
                td(data-aos="fade-down") Mapa en blanco.
                td(colspan="2")(data-aos="fade-down") Tamaño pliego con división política de zona urbana y rural.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Objetivos del taller.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Tamaño pliego.
              tr
                td(data-aos="fade-down") Reglamento del taller.
                td(colspan="2")(data-aos="fade-down") Tamaño pliego.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Agenda del día.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Tamaño pliego.
              tr
                td(data-aos="fade-down") Formato de calendario.
                td(colspan="2")(data-aos="fade-down") Medio pliego.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Listado de asistencia.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Tamaño carta.
              tr
                td(data-aos="fade-down") Cuestionarios.
                td(colspan="2")(data-aos="fade-down") Copias igual a # de participantes.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Guía del taller.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Copias igual a # de participantes.
            tbody(style="background-color:#D9E6FF")
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Metodologías sugeridas
            tbody
              tr
                td(colspan="3").text-bold(data-aos="fade-down") 
                  ul.lista-ul.mb-0(data-aos="fade-down")
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Lean Canvas.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Análisis de Cadena de Valor Simple.
            tbody(style="background-color:#D9E6FF")
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Después del taller
            tbody
              tr
                td(colspan="3").text-bold(data-aos="fade-down") Digitar y organizar los resultados del taller. También se sugiere elaborar un informe ejecutivo del taller que contenga la siguiente información:
                  ul.lista-ul.mb-0.mt-3(data-aos="fade-down")
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Lista de asistencia.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Dinámica del taller.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Dificultades y aciertos.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Resultados. 
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Conclusiones y recomendaciones. 
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Revisar la evaluación del taller y establecer acciones de mejora.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Compartir esta información con los asistentes para recibir su retroalimentación. Esto se puede realizar vía correo electrónico, en cartelera pública si es posible o en la siguiente reunión.
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .tarjeta.tarjeta--C02.p-4(data-aos="fade-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/temas/tema1/img13.svg")
            .col
              .row.justify-content-center.align-items-center
                .col.mb-sm-0.mb-4
                  p Para ampliar la información y acceder a las actividades propuestas, se recomienda consultar la guía <b>DM_04_Guia_para_el_estudio_de_Cadena_de_Valor_Simple_y_seleccion_de_Mi_Producto_OVOP.</b>
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/DM_04_Guia_para_el_estudio_de_Cadena_de_Valor_Simple_y_seleccion_de_Mi-Producto.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    separador
    #t_4_5.titulo-segundo.color-acento-contenido.mb-0(data-aos="flip-down")
      h2 4.5 Guía fortalecimiento de líderes OVOP
    .row.BG05.align-items-center.pt-5.pb-5.mb-4
      .col-lg-12.col-11.px-lg-5.px-4 
        p(data-aos="fade-down") Esta guía consta de cinco módulos y tiene como objetivo orientar a los instructores de OVOP Colombia en la transferencia de conocimientos hacia la comunidad, para fortalecer las competencias de los líderes comunitarios. De esta manera, los participantes pueden convertirse en líderes OVOP, capaces de promover el desarrollo local mediante la autogestión, la participación y la creatividad.
        .row.justify-content-center.mb-0(data-aos="flip-down")
          .col-lg-10.col-12
            .titulo-sexto.color-acento-contenido
              h5 Tabla 6.
              span <em>Módulos de la Guía fortalecimiento de líderes OVOP</em>
            .tabla-a.color-acento-contenido
              table
                thead
                  tr
                    th(data-aos="fade-down")(style= "width: 50%") Módulo
                    th(data-aos="fade-down")(style= "width: 50%") Contenido
                tbody
                  tr
                    td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 1
                    td(data-aos="fade-down")(style="background-color: #F6F6F6") Generalidades de OVOP
                  tr
                    td.text-bold(data-aos="fade-down")(style="background-color: #FFFFFF") 2
                    td(data-aos="fade-down")(style="background-color: #FFFFFF") Liderazgo colectivo
                  tr
                    td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 3
                    td(data-aos="fade-down")(style="background-color: #F6F6F6") Herramientas para fortalecer orgullo y confianza
                  tr
                    td.text-bold(data-aos="fade-down")(style="background-color: #FFFFFF") 4
                    td(data-aos="fade-down")(style="background-color: #FFFFFF") Planificación participativa
                  tr
                    td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 5
                    td(data-aos="fade-down")(style="background-color: #F6F6F6") Construcción de buenas prácticas
              figcaption Nota. Tomado de la Guía 5 OVOP Colombia (SENA, JICA, MinCIT, 2020).
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 a) Liderazgo colectivo.
    p(data-aos="fade-down") En el enfoque OVOP, los miembros de cada territorio se convierten en actores clave del cambio positivo, promoviendo una visión de desarrollo basada en la autogestión, la creatividad y la cooperación. Un liderazgo efectivo en este contexto requiere que los líderes comprendan profundamente la filosofía OVOP, para que su contribución impacte de manera sostenible a la comunidad.
    p.mb-4(data-aos="fade-down") El liderazgo colectivo implica que varios líderes asuman roles complementarios dentro de la comunidad, fomentando la participación y fortaleciendo las capacidades locales.
    .col-lg-4.col-md-5.col-auto
      .titulo-sexto.color-acento-contenido01.etiqueta01
        h5 Elementos fundamentales para ser un líder OVOP
    ul.lista-ul.mb-4(data-aos="fade-down")
      li.mb-0
        i.lista-ul__vineta
        p.mb-0 Entiende y cree en OVOP: aunque una persona sea carismática, si no cree en OVOP, se le dificulta ser líder de OVOP.
      li.mb-0
        i.lista-ul__vineta
        p.mb-0 Cree y amplía la visión de sus comunidades: permite que sus comunidades imaginen sus posibilidades personales y colectivas en el territorio.
      li.mb-0
        i.lista-ul__vineta
        p.mb-0 Conoce de su propia comunidad: OVOP no es únicamente para mejorar los productos o servicios de la comunidad. OVOP es desarrollo incluyente. El conocimiento de las personas de su propio territorio es fundamental para lograr el desarrollo incluyente. 
      li.mb-0 
        i.lista-ul__vineta
        p.mb-0 Actúa por sí mismo: busca apoyo para fortalecer el conocimiento en la comunidad y aumenta las actividades tales como ferias, eventos, y charlas para estudiantes. 
    p.mb-5(data-aos="fade-down") Tipos de Lideres OVOP Colombia y sus características: en la experiencia del proyecto de OVOP Colombia, se ha presentado dificultades para generar buenos resultados con solo un líder. En cambio, contando con varios líderes de diferentes tipos, colaborando con los miembros de la comunidad y las entidades públicas generando sinergias, hay mayor probabilidad de lograr el objetivo de manera efectiva. Los tipos de líderes que pueden contribuir al desarrollo local son los siguientes:
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      .col-lg-10.col-12.mb-5.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row.mb-0(numero="1" titulo="Liderazgo colectivo")
            .col-12.mb-0
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul.mb-0(data-aos="fade-down")(style="color:#1E2AD5")
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Entiende a su comunidad - dinámica social, historia y cultura, tesoros y recursos naturales, sueños y necesidades. 
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Organiza y concientiza a las personas de acuerdo a sus potencialidades y habilidades, generando apoyos mutuos de acuerdo con los principios de OVOP. 
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Es capaz de retroalimentar y comunicarse de manera adecuada con su comunidad. 
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Estimula de manera positiva las actuaciones de la comunidad. 
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Realiza actividades de integración con otras poblaciones.
            .col-12.mb-0(data-aos="flip-down")
              figure
                img(src='@/assets/curso/temas/tema4/img41.jpg', alt='Imagen decorativa')
          .row(numero="2" titulo="Líder empresarial")
            .col-12.mb-0
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul.mb-0(data-aos="fade-down")(style="color:#1E2AD5")
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Genera procesos de innovación y diversificación alrededor de productos o servicios. 
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Tiene perspectiva a largo plazo sobre su territorio y las potencialidades del mismo. 
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Desarrolla estrategias para posicionar un producto o servicio - marketing territorial. 
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Diseña estrategias, administra recursos y dirige alternativas para superar obstáculos. 
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Actúa bajo principios de transparencia y credibilidad. 
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Tiene conocimientos y habilidades sobre un tema específico o sector(es), por ejemplo: lácteo o turismo.
            .col-12.mb-0(data-aos="flip-down")
              figure
                img(src='@/assets/curso/temas/tema4/img42.jpg', alt='Imagen decorativa')
          .row(numero="3" titulo="Líder Institucional")
            .col-12.mb-0
              .tarjeta.tarjeta--blanca.p-4
                ul.lista-ul.mb-0(data-aos="fade-down")(style="color:#1E2AD5")
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Tiene credibilidad ante las entidades públicas o privadas y conocimiento de las rutas o procedimiento de las entidades. 
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Sabe cómo generar acuerdos o hacer negociaciones que beneficien a su comunidad. 
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Genera empatía y confianza con las instituciones. 
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Asume responsabilidades institucionales, tales como la corresponsabilidad en los procesos de desarrollo. 
                  li.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Cree en la institucionalidad.
            .col-12.mb-0(data-aos="flip-down")
              figure
                img(src='@/assets/curso/temas/tema4/img43.jpg', alt='Imagen decorativa')
    p.mb-5(data-aos="fade-down") A continuación, se presentan las acciones esenciales para el fortalecimiento del liderazgo colectivo:
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span <em>Acciones para el liderazgo colectivo</em>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema4/img44.svg', alt='La figura 7 presenta tres acciones clave del liderazgo OVOP: actualizarse, comunicarse y delegar. Estas promueven la planificación y revisión de actividades, la comunicación con otros líderes y la delegación de tareas para fortalecer el trabajo colectivo.')
            figcaption Nota. Adaptado de la Guía 5 OVOP Colombia (SENA, JICA, MinCIT, 2020).
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema4/img45.svg', alt='La figura 7 presenta tres acciones clave del liderazgo OVOP: actualizarse, comunicarse y delegar. Estas promueven la planificación y revisión de actividades, la comunicación con otros líderes y la delegación de tareas para fortalecer el trabajo colectivo.')
          figcaption Nota. Adaptado de la Guía 5 OVOP Colombia (SENA, JICA, MinCIT, 2020 ).
    p.mb-5(data-aos="fade-down") Para el taller de clasificación de los tipos de liderazgo remítase a la guía OVOP correspondiente.
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 b) Fortalecimiento del orgullo y la confianza.
    p.mb-5(data-aos="fade-down") En OVOP Colombia, fortalecer el orgullo y la confianza sobre el territorio es esencial para consolidar la identidad y cohesión comunitaria. Este proceso implica reconocer los valores, la historia y los recursos que hacen única a cada comunidad.
    .row.justify-content-center
      .col-lg-10.col-12
        .cajon.cajon.C01.p-4.mb-3
          .row.justify-content-center
            .col-lg-10.col-12
              p.mb-3(data-aos="fade-down") Fortalecer la confianza, implica:
              ul.lista-ul.mb-0.mt-3(data-aos="fade-down")
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 <b>Redes de solidaridad</b>: espacio de intercambio de ideas, información entre los actores comunitarios permitiendo la transformación de sus recursos en productos. 
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 <b>Valor agregado</b>: desarrollo de una estrategia colectiva sobre un producto o servicio.
    p.mb-5(data-aos="fade-down") Conceptos claves para fortalecer el orgullo y la confianza:
    .tarjeta.tarjeta--BG06.p-md-5.p-4.mb-5(data-aos="flip-down")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-1.order-2
              h4 Tesoro
              p En OVOP, se considera tesoro aquello que es la herencia de una comunidad, que ya desapareció o que se mantiene actualizado o transmitido a las generaciones presentes y futuras. Son recursos tangibles o intangibles. Se incluyen recursos culturales, tales como: danzas, artes, leyendas, patrimonio arqueológico, y paisaje natural o ambiental. El tesoro del territorio debe ser el orgullo de la comunidad, no de un individuo.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img46.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-1.order-2
              h4 Valor agregado
              p Es una característica o servicio extra que se le da a un recurso, con el fin de aumentar su valor comercial. Esta característica o servicio adicional o agregado hace de este recurso un producto único o estrella. OVOP pone importancia en fortalecer la alianza dentro y fuera de la comunidad.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img47.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-1.order-2
              h4 Productos únicos o estrellas
              p Significa normalmente un producto originario de un lugar determinado que tiene ventaja competitiva, en una región o un país. Sin embargo, aunque los productos tengan una característica especial, no se pueden convertir automáticamente en un producto de OVOP. En OVOP, se desarrollarán estos productos en la comunidad, con una visión positiva/ proactiva, mediante el trabajo conjunto de las entidades gubernamentales y privadas, para convertir su propio producto en el producto único o estrella.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img48.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .cajon.cajon.C02.p-4.mb-0
          .row.justify-content-center
            .col-lg-11.col-12
              p.mb-3(data-aos="fade-down") Con el fin realizar el taller para construir el orgullo y la confianza remitirse al taller práctico <b>"Construimos nuestro orgullo y confianza"</b> que se encuentra en la guía de estudio.
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 c) Construir buenas prácticas para el desarrollo comunitario incluyente.
    p.mb-5(data-aos="fade-down") Para consolidar la sostenibilidad del enfoque OVOP, es necesario promover buenas prácticas de gestión comunitaria. Una herramienta clave es el ciclo PHVA (Planificar, Hacer, Verificar y Actuar), que permite administrar de forma participativa los planes de acción locales.
    .row.justify-content-center.mb-5(data-aos="flip-down")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span <em>Ciclo de PHVA - Planificar, Hacer, Verificar, y Actuar</em>
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema4/img49.svg', alt='La figura 8 representa el ciclo PHVA, conformado por cuatro etapas: planificar, hacer, verificar y actuar, utilizadas para gestionar y mejorar continuamente las acciones comunitarias en OVOP.')
            figcaption Nota.Tomado de la Guía 5 OVOP Colombia (SENA, JICA, MinCIT, 2020).
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema4/img50.svg', alt='La figura 8 representa el ciclo PHVA, conformado por cuatro etapas: planificar, hacer, verificar y actuar, utilizadas para gestionar y mejorar continuamente las acciones comunitarias en OVOP.')
          figcaption Nota.Tomado de la Guía 5 OVOP Colombia (SENA, JICA, MinCIT, 2020).
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema4/img51.svg", alt="alt").img130.m-auto
          h4.text-center Planificar
          p.mb-0 Definir objetivos, actividades, responsables, aliados y plazos.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema4/img52.svg", alt="alt").img130.m-auto
          h4.text-center Hacer
          p.mb-0 Ejecutar las actividades del plan de acción comunitario.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema4/img53.svg", alt="alt").img130.m-auto
          h4.text-center Verificar
          p.mb-0 Hacer seguimiento y evaluar avances.
      .col-xl-3.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema4/img54.svg", alt="alt").img130.m-auto
          h4.text-center Actuar
          p.mb-0 Realizar los ajustes necesarios en tiempo, recursos o contenidos.
    p.mb-5(data-aos="fade-down") Para facilitar la aplicación práctica de los contenidos y promover el desarrollo de habilidades de liderazgo en los territorios, se presenta la siguiente ficha técnica. Este recurso sirve como guía operativa para planificar, ejecutar y evaluar los talleres de fortalecimiento de líderes OVOP, garantizando una formación integral basada en la participación activa, la reflexión y la construcción colectiva del conocimiento.
    .row.justify-content-center.mb-5
      .col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span <em>Ficha técnica para el desarrollo del fortalecimiento de líderes OVOP</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(colspan="3")(data-aos="fade-down") ENFOQUE DE DESARROLLO LOCAL OVOP COLOMBIA
            tbody
              tr
                th(colspan="3").text-bold(data-aos="fade-down") GUIA DE FORTALECIMIENTO DE LIDERES OVOP
              tr
                td(colspan="3").text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") <b>Objetivo del taller</b>: profundizar en el entendimiento del concepto básico de OVOP.
              tr
                td(colspan="3").text-bold(data-aos="fade-down") <b>Condiciones previas:</b>
                  ul.lista-ul.mb-0(data-aos="fade-down")
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Participantes: el facilitador de OVOP Colombia invita al grupo base con los líderes comunitarios.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Logística: el salón debe tener capacidad para trabajar con más de 20 personas, mobiliario (sillas, pupitres y mesas), pizarra, marcadores/colores, lápices, cinta de enmascarar, papelógrafos para escribir y colocar en la pared, proyector o vídeo beam, etc.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 La orientación de este taller está organizada por cinco módulos para facilitar la orientación a los facilitadores, se remienda iniciar por el módulo 1. Sin embargo, se deja a discreción del facilitador aplicar los módulos de acuerdo a las necesidades de la comunidad.
            tbody(style="background-color:#D9E6FF")
              tr
                th(colspan="3")(data-aos="fade-down") Agenda y resultados esperados
            tbody
              tr
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Actividad
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Tiempo
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Resultados
              tr
                td.text-bold(data-aos="fade-down") Registro de participantes.
                td(data-aos="fade-down") 15 minutos
                td(data-aos="fade-down") Registro de asistencia.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Introducción.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 30 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Descripción general de la guía.
              tr
                td(colspan="3").text-bold(data-aos="fade-down") Módulo I
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <b>Parte I</b>: conceptos claves, el facilitador de OVOP Colombia presentará el concepto básico de OVO.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 20 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sensibilización de conceptos.
              tr
                td(data-aos="fade-down") 
                  p <b>Parte II</b>: los participantes se dividirán en dos (2) grupos (del mismo municipio o mixto). Cada participante, iniciará dibujando un bien o producto (arquitectura, fiesta, naturaleza, etc.) que se encuentra en su comunidad y que lo haga sentirse orgulloso o especial.
                  p Los integrantes expondrán su dibujo a los otros participantes en el mismo grupo, explicando por qué sienten orgullo o consideran especial ese bien o producto. 
                  p Posteriormente, cada grupo escogerá el bien o producto que les haya parecido más impactante y socializará.
                td(data-aos="fade-down") 60 minutos
                td(data-aos="fade-down") Sensibilización de conceptos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <b>Parte III</b>: estudio de caso, se mostrará el video producido por DNP “Estrategia alternativa para el desarrollo local incluyente” y el video IRODORI.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 20 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sensibilización de conceptos.
              tr
                td(data-aos="fade-down") 
                  p <b>Parte IV</b>: retroalimentación, en este espacio los participantes realizarán primero una reflexión, después trabajarán el formato de evaluación que se encuentra en la guía.
                td(data-aos="fade-down") 20 minutos
                td(data-aos="fade-down") Sensibilización de conceptos.
              tr
                td(colspan="3").text-bold(data-aos="fade-down") Módulo II
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <b>Parte I</b>: conceptos claves, socializar el concepto de “liderazgos colectivos” que es clave para lograr el mayor avance en el desarrollo comunitario.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 20 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sensibilización del concepto de liderazgo colectivo.
              tr
                td(data-aos="fade-down") 
                  p <b>Parte II</b>: taller práctico, presenta la comprensión del papel de líder OVOP y el funcionamiento de los liderazgos colectivos.
                  p Discutir quien asumirá las responsabilidades en cada estrategia aplicar.
                  p Socializar los resultados.
                td(data-aos="fade-down") 60 minutos
                td(data-aos="fade-down") Cada participante se identifica con el tipo de líder con el que se sienta cómodo, y escribe su nombre en el formato siguiente. Después, cada grupo de liderazgo identifique tres estrategias para solucionar el problema.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <b>Parte III</b>: estudio de casos, presentar un estudio de caso donde se evidencien los diferentes tipos de liderazgo.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 20 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sensibilización de conceptos.
              tr
                td(data-aos="fade-down") 
                  p <b>Parte IV</b>: retroalimentación.
                td(data-aos="fade-down") 15 minutos
                td(data-aos="fade-down") Conclusiones y cierre.
              tr
                td(colspan="3").text-bold(data-aos="fade-down") Módulo III
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <b>Parte I</b>: conceptos clave.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 30 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sensibilización de conceptos.
              tr
                td(data-aos="fade-down") 
                  p <b>Parte II</b>: taller práctico “Elaboremos un proyecto juntos para el futuro de nuestro territorio”.
                  p Los participantes del taller conforman varios grupos de trabajo. Luego, facilitadores explican los puntos expuestos en la guía para trabajar en la elaboración del proyecto.
                td(data-aos="fade-down") 20 minutos
                td(data-aos="fade-down") Imaginar del sueño colectivo.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <b>Parte III</b>: estudio de casos, los facilitadores comparten algunos proyectos que han contribuido a la construcción del sueño colectivo de otros municipios, para ampliar el conocimiento.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 40 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sensibilización de conceptos.
              tr
                td(data-aos="fade-down") 
                  p <b>Parte IV</b>: retroalimentación.
                td(data-aos="fade-down") 15 minutos
                td(data-aos="fade-down") Conclusiones y cierre.
              tr
                td(colspan="3").text-bold(data-aos="fade-down") Módulo IV: fortalecimiento nuestro orgullo y confianza
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <b>Parte I</b>: conceptos clave. En el módulo 4, el (experto o instructor o responsable) desarrollará la técnica para fortalecer el orgullo y la confianza de la comunidad.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 30 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sensibilización de conceptos.
              tr
                td(data-aos="fade-down") 
                  p <b>Parte II</b>: taller práctico "Construimos nuestro orgullo y confianza".
                  p En este taller, se va a identificar los productos basados en el <em>slogan</em> de OVOP Colombia: "Mi Pueblo, Mi Producto, Mi Orgullo". 
                  p Los participantes conforman grupos de trabajo.
                  p Cada grupo muestra las características del municipio (la iniciativa) basado en el <em>slogan</em> de OVOP - "Mi Pueblo, Mi Producto, Mi Orgullo". Se trabajará en un pliego de papel <em>bond</em>.
                td(data-aos="fade-down") 25 minutos
                td(data-aos="fade-down") Listado de nuevos productos descubiertos en la comunidad.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
                  p <b>Parte III</b>: Las herramientas para fortalecer nuestro orgullo y confianza.
                  p La guía, sugiere tres herramientas. El facilitador puede adaptar otras según las condiciones y necesidades de la comunidad.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 20 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sensibilización en herramientas para fortalecer el orgullo y confianza comunitarios.
              tr
                td(data-aos="fade-down") 
                  p <b>Parte IV</b>: retroalimentación.
                td(data-aos="fade-down") 15 minutos
                td(data-aos="fade-down") Conclusiones y cierre.
              tr
                td(colspan="3").text-bold(data-aos="fade-down") Módulo V: construyamos buenas prácticas para el desarrollo comunitario incluyente
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <b>Parte I</b>: conceptos clave, socializar los conceptos de PHVA.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 30 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sensibilización de conceptos.
              tr
                td(data-aos="fade-down") 
                  p <b>Parte II</b>: taller práctico, se conformará un grupo de trabajo.
                  p Cada grupo presentará la idea del proyecto. Se trabajará en un pliego de papel <em>bond</em>: las actividades específicas, responsable, aliados estratégicos, recursos (técnicos/financieros).
                td(data-aos="fade-down") 40 minutos
                td(data-aos="fade-down") Se seleccionará uno para un grupo vulnerable, por ejemplo: mujeres, jóvenes, campesinos, etc. Se socializará o compartirá el resultado a otros grupos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
                  p <b>Parte III</b>: estudio de casos, los facilitadores comparten algunos proyectos que han contribuido a la construcción del sueño colectivo de otros municipios.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 20 minutos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Socializar casos de éxito.
              tr
                td(data-aos="fade-down") 
                  p <b>Parte IV</b>: Retroalimentación y cierre del taller.
                td(data-aos="fade-down") 30 minutos
                td(data-aos="fade-down") Conclusiones y pasos siguientes.
            tbody(style="background-color:#D9E6FF")
              tr
                th(colspan="3")(data-aos="fade-down") Materiales y recursos empleados
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Ejemplo de lista de chequeo de materiales
            tbody
              tr
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Material
                th(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Cantidades / Descripción
              tr
                td(data-aos="fade-down") Tarjetas de cartulina.
                td(colspan="2")(data-aos="fade-down") 100 de cada color (rojo, azul, amarillo y verde) 7,5 x 12,5 cm.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") <em>post-it</em> pequeño.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 2 paquetes de colores.
              tr
                td(data-aos="fade-down") Marcador punta gruesa.
                td(colspan="2")(data-aos="fade-down") 20 negros, 4 rojos y que sean borrables.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Marcador punta fina.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 20 negros.
              tr
                td(data-aos="fade-down") Cinta de papel.
                td(colspan="2")(data-aos="fade-down") 2 de 24 mm de anchos y 2 de 48 mm de ancho.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Rótulos adhesivos.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 100 de cada color (4 colores diferentes).
              tr
                td(data-aos="fade-down") Papel <em>bond</em>.
                td(colspan="2")(data-aos="fade-down") 20 pliegos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Hojas en blanco.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") 20 tamaño carta.
              tr
                td(data-aos="fade-down") Lapiceros.
                td(colspan="2")(data-aos="fade-down") 20 negros.
            tbody(style="background-color:#D9E6FF")
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Ejemplo de lista de chequeo de impresiones
            tbody
              tr
                th(data-aos="fade-down")(style="background-color: #F6F6F6") Documento / Formato
                th(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Cantidades / Descripción
              tr
                td(data-aos="fade-down") Mapa en blanco.
                td(colspan="2")(data-aos="fade-down") Tamaño pliego con división política de zona urbana y rural.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Objetivos del taller.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Tamaño pliego.
              tr
                td(data-aos="fade-down") Reglamento del taller.
                td(colspan="2")(data-aos="fade-down") Tamaño pliego.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Agenda del día.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Tamaño pliego.
              tr
                td(data-aos="fade-down") Formato de calendario.
                td(colspan="2")(data-aos="fade-down") Medio pliego.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Listado de asistencia.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Tamaño carta.
              tr
                td(data-aos="fade-down") Cuestionarios.
                td(colspan="2")(data-aos="fade-down") Copias igual a # de participantes.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Guía del taller.
                td(colspan="2")(data-aos="fade-down")(style="background-color: #F6F6F6") Copias igual a # de participantes.
            tbody(style="background-color:#D9E6FF")
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Metodologías sugeridas
            tbody
              tr
                td(colspan="3").text-bold(data-aos="fade-down") 
                  ul.lista-ul.mb-0(data-aos="fade-down")
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Ciclo PHVA.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Encuestas de evaluación.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Estudio de casos.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Talleres prácticos.
            tbody(style="background-color:#D9E6FF")
              tr
                td.text-bold(colspan="3")(data-aos="fade-down") Después del taller
            tbody
              tr
                td(colspan="3").text-bold(data-aos="fade-down") Digitar y organizar los resultados del taller. También se sugiere elaborar un informe ejecutivo del taller que contenga la siguiente información:
                  ul.lista-ul.mb-0.mt-3(data-aos="fade-down")
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Lista de asistencia.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Dinámica del taller.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Dificultades y aciertos.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Resultados. 
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Conclusiones y recomendaciones. 
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Revisar la evaluación del taller y establecer acciones de mejora.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Compartir esta información con los asistentes para recibir su retroalimentación. Esto se puede realizar vía correo electrónico, en cartelera pública si es posible o en la siguiente reunión.
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .tarjeta.tarjeta--C02.p-4(data-aos="fade-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/temas/tema1/img13.svg")
            .col
              .row.justify-content-center.align-items-center
                .col.mb-sm-0.mb-4
                  p Para ampliar la información y acceder a las actividades propuestas, se recomienda consultar la guía <b>DM_05_Guia_de_fortalecimiento_de_lideres_OVOP.</b>
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/DM_05_Guia_de_fortalecimiento_de_lideres_OVOP.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
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
