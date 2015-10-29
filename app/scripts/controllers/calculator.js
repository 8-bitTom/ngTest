'use strict';

/**
 * @ngdoc function
 * @name angularExampleApp.controller:CalculatorCtrl
 * @description
 * # CalculatorCtrl
 * Controller of the angularExampleApp
 */
angular.module('angularExampleApp')
  .controller('CalculatorCtrl', function ($scope) {
    //-----------//
    //---Setup---//
    //-----------//
    $scope.calcInput = '0';
    $scope.calcPrevious = null;
    $scope.currentOperation = null;
    $scope.newInput = false;
    var calcFns = {
        '/' : function(a, b){ return a/b},
        '*' : function(a, b){ return a*b},
        '+' : function(a, b){ return a+b},
        '-' : function(a, b){ return a-b}
      };

    //-----------------------------//
    //---Scope exposed functions---//
    //-----------------------------//

    //clears everything
    $scope.allClear = function(){
      $scope.calcInput = '0';
      $scope.calcPrevious = null;
      $scope.currentOperation = null;
    };

    //preforms the math!
    $scope.calculate = function(){
      if($scope.currentOperation && $scope.calcPrevious){
        //typechange back to ints wheee JS!
        var a = $scope.calcPrevious - 0;
        var b = $scope.calcInput -0;

        //do the thing!
        $scope.calcInput = calcFns[$scope.currentOperation](a,b);

        //type convert back to a string!
        $scope.calcInput = $scope.calcInput.toString();

        //clear old vals and operations
        $scope.calcPrevious = null;
        $scope.currentOperation = null;
      }
    };

    //toggles negative value of current number
    $scope.negFlip = function(){
      var a = ($scope.calcInput - 0) * -1;
      $scope.calcInput = a.toString();
    };

    //tuns number into a percent
    $scope.toPercent = function () {
      var a = ($scope.calcInput - 0)/100;
      $scope.calcInput = a.toString();
    };

    //handles keypresses while the element is focused
    $scope.keypressCallback = function ($event) {
      $event.preventDefault(); //prevents upgly stuff happening like backspace navigation
      $event.stopPropagation(); //stops the event from "Bubbling up the dom"
      buttonLookup($event.keyCode);
    };

    //handles the delete key specifically
    $scope.deleteKey = function($event){
      $event.preventDefault();
      $event.stopPropagation();
      $scope.deleteFn();
    };

    //removes the last numer entered, if all are removed makes the current number 0
    $scope.deleteFn = function(){
      if ($scope.calcInput !== '0') {
        if($scope.calcInput.length > 1){
          $scope.calcInput = $scope.calcInput.substr(0, $scope.calcInput.length - 1);
        }else{
          $scope.calcInput = '0';
        }
      }
    };

    //adds 0-9 to the current number as string
    $scope.number = function(number){
      if($scope.calcInput !== '0' && !$scope.newInput){
        $scope.calcInput += number;
      }else{
        $scope.calcInput = number;
        $scope.newInput = false;
      }
    };

    //setup the operator and flag for entering a new calcInput
    $scope.setOperation = function(method) {
      $scope.currentOperation = method;
      $scope.calcPrevious = $scope.calcInput;
      $scope.newInput = true;
    };

    //hack for decimal button
    $scope.decimal = function(){
      buttonLookup(46);
    };

    //------------------------//
    //---Internal functions---//
    //------------------------//

    //checks for an existing decimal in a number
    function hasDecimal(numberAsString){
      var hasDecimal = false;
      if(numberAsString.indexOf('.') > 0){
        hasDecimal = true;
      }
      return hasDecimal;
    }

    //uses a hash to correctly call the right function for each keypress
    function buttonLookup(key){
      var hash = {
        12 : function (){ $scope.allClear() },
        8  : function (){ $scope.deleteFn() },
        13 : function (){ $scope.calculate() },
        61 : function (){ $scope.calculate() },
        47 : function (){ $scope.setOperation('/') },
        42 : function (){ $scope.setOperation('*') },
        43 : function (){ $scope.setOperation('+') },
        45 : function (){ $scope.setOperation('-') },
        46 : function (){
          if(!hasDecimal($scope.calcInput)){
            $scope.number('.');
          }
        },
        48 : function (){ $scope.number('0') },
        49 : function (){ $scope.number('1') },
        50 : function (){ $scope.number('2') },
        51 : function (){ $scope.number('3') },
        52 : function (){ $scope.number('4') },
        53 : function (){ $scope.number('5') },
        54 : function (){ $scope.number('6') },
        55 : function (){ $scope.number('7') },
        56 : function (){ $scope.number('8') },
        57 : function (){ $scope.number('9') }
      };
      if(hash.hasOwnProperty(key)){ //check it exists otherwise not recognized keys fill the console with errors
        hash[key]();
      }
    }
  });
