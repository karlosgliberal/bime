/*global angular*/
'use strict';

angular.module('bimeApp', ['ngGrid', 'EnvioCorreoService', 'pascalprecht.translate'])
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
    $translateProvider.translations({
      HEADLINE: 'Hello <a href="hool">there</a>, This is my awesome app!',
      INTRO_TEXT: 'And it has i18n support!'
    });
  });
