'use strict';

/**
 * @ngdoc function
 * @name pruebaTecnicaApp.controller:ConsultaCtrl
 * @description
 * # ConsultaCtrl
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

  //OBTENEMOS TODOS LOS USUARIOS
  pruebaHighTechRequest.get('com.entities.cardatos', '/').then(function(response) {
    console.log(response);
    self.datos = response.data;
  });

  self.refMenu = function(){
    console.log("Ir a Menu...");
    window.location.href = "#/";
  }

  self.editar = function(KPersona){
    console.log(KPersona);
    window.location.href = "#/editar";
  }

  self.eliminar = function(KPersona){
    self.KPersona = KPersona;
    console.log(self.KPersona);
    sessionStorage.setItem('delete', KPersona);
    pruebaHighTechRequest.delete('com.entities.cardatos', sessionStorage.getItem('delete')).then(function(request) {
      console.log(request);
      if (request.status == 204) {
        Swal.fire({
            title: 'Registro eliminado con éxito!',
            type: 'success',
            html: '',
            showCloseButton: false,
            showCancelButton: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
            allowOutsideClick: false
        }).then(function () {
            location.reload();
        });
      }
    });
  }

});
