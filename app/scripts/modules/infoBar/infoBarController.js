'use strict';

angular.module('mpInfoBar').controller('InfoBarCtrl',
  function($scope){

    function divisor(int, div){
      if (div > 1) {
        if (int % div === 0) {
          return div;
        } else {
          return divisor(int, div - 1);
        }
      } else {
        return 1;
      }
    }

    //sets the counting increments automagically
    if(!angular.isDefined( $scope.baseVal) ){
      //BEWARE OF USING THIS IS YOUR MAX VALUE IS LARGE AND PRIME!!!
      var check = $scope.maxVal - 0; //make sure JS knows it's an int

      //find an evenly divisible whole number that's roughly 1/10th the max val but no less than 1;
      $scope.base = divisor(check, Math.ceil(check / 10));
    }else{
      $scope.base = $scope.baseVal;
    }

    $scope.barOffset = 100 - (($scope.base / $scope.maxVal) + 1);
    $scope.fixer = {'width' : $scope.barOffset + '%'};
    $scope.barWidth = '0%';
    $scope.segmentWidth = {'width': calcPercentage($scope.base, $scope.maxVal) + '%'};
    $scope.baseUnits = [];
    $scope.processedUnits = [];
    $scope.overLimit = false;
    var singleUnitWidth = calcPercentage($scope.base, ($scope.maxVal + $scope.base));
    $scope.unitWidth = {'width': singleUnitWidth + '%'};

    function calcPercentage(a, b){
      return ((a/b) * 100);
    }

    //sets all the widths correctly
    function processUnits(){
      var barWidth = $scope.curVal;

      for(var i = 0; i < $scope.maxVal; i += $scope.base){
        $scope.processedUnits.push(i);
      }

      $scope.baseUnits = $scope.processedUnits.slice(0);
      $scope.processedUnits.push($scope.maxVal);

      if($scope.curVal > $scope.maxVal){
        $scope.overLimit = true;
        barWidth = $scope.maxVal;
      }

      $scope.barWidth = {'width': calcPercentage(barWidth, $scope.maxVal) + '%'};
    }

    //set all the widths correctly
    processUnits();

    var correctWidth = 90 / ($scope.baseUnits.length) * $scope.processedUnits.length ;

    if ($scope.processedUnits.length < 10) {
      $scope.fixer = {
        'width': correctWidth + '%',
        'margin-left': ( (correctWidth / $scope.processedUnits.length )/2 -5) *-1 + '%'
      }
    }else{
      $scope.fixer = {
        'width': correctWidth + '%'//accounts for 5% difference between bar and labels
      }
    }

    $scope.$watch('curVal', function(newVal, oldVal){
      $scope.barWidth = {'width': calcPercentage($scope.curVal, $scope.maxVal) + '%'};
    });
  });
