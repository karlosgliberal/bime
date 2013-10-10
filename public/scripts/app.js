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
      BUTTON_TEXT_ES: 'Booton ESPAÑOL'
    })
    .translations('eu',{
      HEADLINE: 'Kaixo',
      BUTTON_TEXT_EU: 'Boton AIAIAIAI'
    });
    $translateProvider.preferredLanguage('es');
  });
