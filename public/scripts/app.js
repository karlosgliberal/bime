/*global angular*/
'use strict';

var traduccionesEs = {
  HEADLINE: '<b>hola<b>',
  VER_MAS: 'VER MÁS',
  MAS_INFORMACION: 'Más informacion',
  INSCRIBETE: 'Inscríbete',
  IMG_CABECERA: '/img/banner.png',
  MENU: {
    INICIO: 'Inicio',
    HACK: 'Hack x 24',
    QUE_ES: '¿Que es?',
    BIME: 'BIME',
    HORARIOS: 'Horarios',
    CONFERENCIAS: 'Conferencias',
    PREMIOS: 'Premios',
    COMUNIDAD: 'Comunidad',
    INFO: '+ Info'
  },
  
  PRESENTACION:{
    TITULO: '¿Que es BIME Hack a Day?',
    SUBTEXTO: 'Es el mayor encuentro­ conference del estado. Especialmente creado para fomentar la <strong>CREATIVIDAD</strong> y la invención reúne a amantes y profesionales de la Música y la Tecnología, <strong>MAKERS</strong> y <strong>HACKERS</strong>.',
    TEXTO: 'Participarán durante dos días en diferentes actividades abiertas como concursos, charlas y talleres y un hackx24 (hackaton de 24h), todo ello relacionado con la industria musical. Los asistentes poseen la oportunidad única de testear las últimas novedades del mercado así como contactar profesionalmente con grandes empresas, mostrar sus trabajos a públicos especializados y generar comunidad, Una intensa jornada de 36h donde se genera el futuro de la música, pero sobretodo donde se aprende y se comparte.'
  },

  ACTIVIDADES:{
    TITULO: 'Actividades',
    SUBTITULO_24: 'Hackathon <br> Hack x 24',
    TEXTO_24: 'Haz de tu sueño una realidad junto a tu equipo y tus empresas preferidas. Tienes 24 horas, las mejores aplicaciones serán premiadas. Las zonas de acción están divididas por <a href="/">NODOS</a>.  Sólo 100 puestos de trabajo, ¿Te vas a quedar sin el tuyo?',
    SUBTITULO_CHARLAS: 'Conferencias y Workshops',
    TEXTO_CHARLAS: 'Descubre y prueba nuevas tecnologías y técnicas de la mano de grandes profesionales. Tendrás acceso a todas estas experiencias, participa!!. El aforo es limitado así que rellena el “formulario de inscripción”  y apúntate a las que desees asistir!',
    SOLO: '100 puestos de trabajo, ¿Te vas a quedar sin el tuyo?'
  },
  PREMIOS:{
    TITULO: 'Premios'
  },
  PATROCINADORES:{
    TITULO: 'Patrocinadores'
  },
  PIE:{
    TITULO:'Sigue Bime Hack Day' 
  }
}

var traduccionesEu = {
  HEADLINE: 'Kaixo',
  VER_MAS: 'IKUSI GEIAGO',
  MAS_INFORMACION: 'Informazio geiago',
  IMG_CABECERA: '/img/banner-eu.png',
  MENU: {
    INICIO: 'Hasiera',
    NODOS: 'Nodoak',
    QUE_ES: 'Zer da?',
    BIME: 'Bime',
    HORARIOS: 'Ordutegia',
    DONDE: 'Non',
    PREMIOS: 'Sariak',
    COMUNIDAD: 'Komunitatea',
    FAQ: 'FAQ'
  },
  PRESENTACION:{
    TITULO: 'EU ¿Que es Bime hack a Day?',
    SUBTEXTO: 'EU Es el mayor encuentro­ conference del estado. Especialmente creado para fomentar la <strong>CREATIVIDAD</strong> y la invención reúne a amantes y profesionales de la Música y la Tecnología, <strong>MAKERS</strong> y <strong>HACKERS</strong>.',
    TEXTO: 'EU Participarán durante dos días en diferentes actividades abiertas como concursos, charlas y talleres y un hackx24 (hackaton de 24h), todo ello relacionado con la industria musical. Los asistentes poseen la oportunidad única de testear las últimas novedades del mercado así como contactar profesionalmente con grandes empresas, mostrar sus trabajos a públicos especializados y generar comunidad, Una intensa jornada de 36h donde se genera el futuro de la música, pero sobretodo donde se aprende y se comparte.'
  },
  PIE:{
    TITULO:'Sigue Bime Hack Day' 
  }
}

angular.module('bimeApp', ['ngGrid', 'cabecera', 'footer', 'footerInscribir', 'EnvioCorreoService', 'pascalprecht.translate', 'ngCookies'])
  .config(function ($routeProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/que-es', {
        templateUrl: 'views/que-es.html',
        controller: 'MainCtrl'
      })
      .when('/bime', {
        templateUrl: 'views/bime.html',
        controller: 'MainCtrl'
      })
      .when('/horarios', {
        templateUrl: 'views/horarios.html',
        controller: 'MainCtrl'
      })
      .when('/premios', {
        templateUrl: 'views/premios.html',
        controller: 'MainCtrl'
      })
      .when('/hackx24', {
        templateUrl: 'views/hackx24.html',
        controller: 'MainCtrl'
      })
      .when('/comunidad', {
        templateUrl: 'views/comunidad.html',
        controller: 'MainCtrl'
      })
      .when('/conferencias', {
        templateUrl: 'views/conferencias.html',
        controller: 'MainCtrl'
      })
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
 
    $translateProvider.translations('es', traduccionesEs)
    $translateProvider.translations('eu', traduccionesEu)
    $translateProvider.preferredLanguage('es');
    $translateProvider.useCookieStorage();
  });
