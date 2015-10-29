'use strict';

/**
 * @ngdoc service
 * @name angularExampleApp.todoList
 * @description
 * # todoList
 * Service in the angularExampleApp.
 */
angular.module('angularExampleApp')
  .service('todoList', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function privateLikeFn(param){
      return 'I do private function like things to ' + param;
    };

    var list = [];

    //for Ajax functions we would put our Restful functions here and expose them in the return statement!

    return {
      list : list,
      privateFn : function(param){
        return privateLikeFn(param);
      }
    }

  });
