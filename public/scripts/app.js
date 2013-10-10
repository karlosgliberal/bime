/*global angular*/
'use strict';

angular.module('bimeApp', ['ngGrid', 'cabecera', 'footer', 'footerInscribir', 'EnvioCorreoService', 'pascalprecht.translate'])
  .config(function ($routeProvider, $translateProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/nodos', {
        templateUrl: 'views/nodos.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
 
    $translateProvider.translations('es',{
      HEADLINE: 'hola',
      BUTTON_TEXT_ES: 'Booton ESPAÑOL',
      CABECERA: 'Soy la cabera',
      FOOTER: 'Soy la footer',
      FOOTER_INSCRIBIR: 'Footer inscribir'
    })
    .translations('eu',{
      HEADLINE: 'Kaixo',
      BUTTON_TEXT_EU: 'Boton AIAIAIAI',
      CABECERA: 'AITOR BURUAUNDI',
      FOOTER: 'FOOTER naiz 4/4 arrolla',
      FOOTER_INSCRIBIR: 'Ni naiz footer inscribier in EUKARO'
    });

    $translateProvider.preferredLanguage('es');
  });
