'use strict';

/**
 * @ngdoc service
 * @name contractualClienteApp.pruebaHighTechService
 * @description
 * # pruebaHighTechService
 * Service in the contractualClienteApp.
 */
angular.module('pruebaHighTechService',[])
.service('pruebaHighTechRequest', function ($http) {

    // Service logic
  var path = "http://localhost:32017/REST_PRUEBA_HIGHTECH/webresources/";
  var cabecera = {
    headers: {
      'Accept': 'Application/json'
    }
  };

  // Public API here
  return {
    get: function (tabla, params) {
      return $http.get(path + tabla + params, cabecera);
    },
    post: function (tabla, elemento) {
      return $http.post(path + tabla, elemento, cabecera);
    },
    put: function (tabla, elemento) {
      return $http.put(path + tabla , elemento, cabecera);
    },
    delete: function (tabla, id) {
      return $http.delete(path + tabla + id);
    }
  };

});
