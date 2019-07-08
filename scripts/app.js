'use strict';

/**
 * @ngdoc overview
 * @name pruebaTecnicaApp
 * @description
 * # pruebaTecnicaApp
 *
 * Main module of the application.
 */
angular
  .module('pruebaTecnicaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'treeControl',
    'ngMaterial',
    'ngMessages',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.rowEdit',
    'ui.grid.cellNav',
    'ui.grid.treeView',
    'ui.grid.selection',
    'ui.grid.pagination',
    'ui.grid.exporter',
    'ui.grid.autoResize',
    'ngStorage',
    'ngWebSocket',
    'angularMoment',
    'pascalprecht.translate',
    'pruebaHighTechService'
  ])
  .run(function(amMoment) {
    amMoment.changeLocale('es');
  })
  .config(['$locationProvider','$routeProvider','$httpProvider',function($locationProvider, $routeProvider, $httpProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
    $locationProvider.hashPrefix("");
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/registro', {
      templateUrl: 'views/registro.html',
      controller: 'RegistroCtrl',
      controllerAs: 'registro'

    })
    .when('/consulta', {
      templateUrl: 'views/consulta.html',
      controller: 'ConsultaCtrl',
      controllerAs: 'consulta'

    })
    .when('/editar/:KPersona', {
      templateUrl: 'views/editar.html',
      controller: 'EditarCtrl',
      controllerAs: 'editar'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
