'use strict';

/**
 * @ngdoc function
 * @name pruebaTecnicaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pruebaTecnicaApp
 */
angular.module('pruebaTecnicaApp')
.controller('MainCtrl', function ($log, $scope, $routeParams, $location, $http, $route, $mdSidenav) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  var self = this;

  self.refConsulta = function(){
    console.log("Consultar...");
    window.location.href = "#/consulta";
  }

  self.refRegistro = function(){
    console.log("Redireccionando...");
    window.location.href = "#/registro";
  }

});
