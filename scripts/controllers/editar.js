'use strict';

/**
 * @ngdoc function
 * @name pruebaTecnicaApp.controller:EditarCtrl
 * @description
 * # EditarCtrl
 * Controller of the pruebaTecnicaApp
 */
angular.module('pruebaTecnicaApp')
.controller('EditarCtrl', function ($log, $scope, $routeParams, $location, $http, $route, $mdSidenav, pruebaHighTechRequest) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  var self = this;

  self.kpersona = $routeParams.KPersona; //Recibe el valor del id del Usuario por medio de la URL
  self.datos = {};

  //OBTENEMOS LOS DATOS DEL USUARIO
  pruebaHighTechRequest.get('com.entities.cardatos', '/' + self.kpersona).then(function(response) {
    //console.log(response);
    self.datos.KPersona = response.data.KPersona;
    self.datos.NNombre = response.data.NNombre;
    self.datos.NApellido = response.data.NApellido;
    self.datos.OCorreo = response.data.OCorreo;
    self.datos.KCodtarjeta = response.data.KCodtarjeta;
    self.datos.NNombreTarjeta = response.data.NNombreTarjeta;
  });

  console.log(self.datos);

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

    pruebaHighTechRequest.put('com.entities.cardatos', self.datosPOST, self.kpersona).then(function(request) {
      console.log(request);
      if (request.status == 204) {
        Swal.fire({
            title: 'Registros actualizados con éxito!',
            type: 'success',
            html: '',
            showCloseButton: false,
            showCancelButton: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
            allowOutsideClick: false
        }).then(function () {
            window.location.href = "#/consulta";
        });
      }
    });

  }

  self.refMenu = function(){
    console.log("Ir a Menu...");
    window.location.href = "#/consulta";
  }

});
