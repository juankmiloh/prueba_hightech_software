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
  var path = "http://localhost:32017/REST_HIGHTECH/webresources/";
  var cabecera = {
    headers: {
      'Accept': 'Application/json',
      'Content-Type': 'application/json'
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
    put: function (tabla, elemento, id) {
      return $http.put(path + tabla + '/' + id, elemento, cabecera);
    },
    delete: function (tabla, id) {
      return $http.delete(path + tabla + '/' + id);
    }
  };

});
