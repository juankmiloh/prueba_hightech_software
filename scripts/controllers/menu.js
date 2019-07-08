'use strict';

/**
 * @ngdoc function
 * @name pruebaTecnicaApp.controller:menuCtrl
 * @description
 * # menuCtrl
 * Controller of the pruebaTecnicaApp
 */
angular.module('pruebaTecnicaApp')
.controller('menuCtrl', function ($location, $http, $scope, $translate, $route, $mdSidenav) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

    $scope.refRegistro = function() {
      console.log("anama!");
    };

});
