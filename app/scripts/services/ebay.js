'use strict';

/**
 * @ngdoc service
 * @name angularExampleApp.ebay
 * @description
 * # ebay
 * Service in the angularExampleApp.
 */
angular.module('angularExampleApp')
  .service('ebay', function ($http, $q) {

    var baseUrl = 'http://svcs.ebay.com/services/search/FindingService/v1';

    var ajaxCall = function (httpConfig) {

      var deferred = $q.defer();

      $http(httpConfig)
        .success(function (data) {
          deferred.resolve(data);
        })
        .error(function (data, status) {
          deferred.reject(data);
        });

      return deferred.promise;
    };

    var search = function(searchTerms){
      var params = {
        "OPERATION-NAME" : 'findItemsByKeywords',
        "SERVICE-VERSION" : '1.0.0',
        "SECURITY-APPNAME": 'ThomasMa-395c-4bcb-a69a-ae4878d5a644',
        "GLOBAL-ID" : 'EBAY-US',
        "RESPONSE-DATA-FORMAT" : 'JSON',
        "REST-PAYLOAD" : '',
        "paginationInput.entriesPerPage" : 50,
        "callback" : 'JSON_CALLBACK',
        "keywords" : searchTerms
      };

      var config = {
        method: 'jsonp',
        url: baseUrl,
        params: params,
        headers: {isArray: false}
      };

      return ajaxCall(config);
    };

    return{
      search : function (keywords) {
        return search(keywords);
      }
    }
  }
);
