'use strict';

/**
 * @ngdoc function
 * @name pruebaTecnicaApp.controller:ConsultaCtrl
 * @description
 * # MainCtrl
 * Controller of the pruebaTecnicaApp
 */
angular.module('pruebaTecnicaApp')
.controller('ConsultaCtrl', function ($log, $scope, $routeParams, $location, $http, $route, $mdSidenav, pruebaHighTechRequest) {
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

  pruebaHighTechRequest.get('com.entities.carpersona', '/').then(function(response_persona) {
    console.log(response_persona);
    self.KPersona = response_persona.data.KPersona;
  });

  pruebaHighTechRequest.get('com.entities.carpersona', '/1').then(function(response_persona) {
    //console.log(response_persona);
    self.KPersona = response_persona.data.KPersona;
    //console.log(self.KPersona);
    pruebaHighTechRequest.get('com.entities.cartarjetacredito', '/').then(function(response_tarjeta) {
      console.log(response_tarjeta);
      self.KPersonaTarjeta = response_tarjeta.data[0].KPersona.KPersona;

      for (var i in response_tarjeta.data) {
        if (self.KPersona == response_tarjeta.data[i].KPersona.KPersona) {
          console.log("cod_persona -> " + response_tarjeta.data[i].KPersona.KPersona);
        }
      }

    });
  });

});
