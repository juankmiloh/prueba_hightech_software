'use strict';

/**
 * @ngdoc function
 * @name pruebaTecnicaApp.controller:RegistroCtrl
 * @description
 * # RegistroCtrl
 * Controller of the pruebaTecnicaApp
 */
angular.module('pruebaTecnicaApp')
.controller('RegistroCtrl', function ($log, $scope, $routeParams, $location, $http, $route, $mdSidenav, pruebaHighTechRequest) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  var self = this;

  //SE OBTIENE EL NUMERO DE REGISTROS ALMACENADOS
  pruebaHighTechRequest.get('com.entities.cardatos', '/').then(function(response) {
    console.log(response.data.length);
    self.KPersona = response.data.length + 1; //cantidad de registros almacenados
  });

  self.guardar = function(){
    console.log($('#text_usuario').val());

    self.datosPOST = {
                  "KCodtarjeta" : $('#text_notarjeta').val(),
                  "KPersona" : $('#text_usuario').val(),
                  "NApellido" : $('#text_apellido').val(),
                  "NNombre" : $('#text_nombre').val(),
                  "NNombreTarjeta" : $('#text_tarjeta').val(),
                  "OCorreo" : $('#text_correo').val()
                };

    pruebaHighTechRequest.post('com.entities.cardatos', self.datosPOST).then(function(request) {
      console.log(request.status);
      if (request.status == 204) {
        Swal.fire({
            title: 'Registros almacenados con éxito!',
            type: 'success',
            html: '',
            showCloseButton: false,
            showCancelButton: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
            allowOutsideClick: false
        }).then(function () {
            window.location.href = "#/";
        });
      }
    });

  }

  self.refMenu = function(){
    console.log("Ir a Menu...");
    window.location.href = "#/";
  }

});
