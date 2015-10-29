/**
 * Created with IntelliJ IDEA.
 * User: tmarra
 * Date: 8/22/14
 * Time: 2:49 PM
 * I had just made this Module a week ago, seems like a good place to use it.
 */
(function (window, angular, undefined) {
  'use strict';

  angular.module('pieDirective', [])
    .directive('pieChart', function ($interval) {
      return {
        //simple templates can be inline too!
        template: '<div class="pdContainer"><div class="q1"></div><div class="q2"></div><div class="q3"></div><div class="q4"></div></div>',
        restrict: 'E',
        scope: {
          config: '=pdConfig'
        },
        link: function (scope, element /*, attrs*/) {

          var animate = true;
          var currentP = 0;
          var animation;

          var quadArr = [element.find('.q1'), element.find('.q2'), element.find('.q3'), element.find('.q4')];

          var q1 = quadArr[0];
          var q2 = quadArr[1];
          var q3 = quadArr[2];
          var q4 = quadArr[3];

          //style the quads
          for (var j = 0; j < quadArr.length; j++) {
            quadArr[j].css({
              position: 'absolute',
              width: 0,
              height: 0,
              borderStyle: 'solid'
            });
          }

          function updatePercentage() {
            var size = scope.config.size;
            var percent = scope.config.percentage;

            //if we're animating percentage = currentP
            if (angular.isDefined(animation)) {
              if (percent > currentP) {
                currentP += 1;
              } else if (percent < currentP) {
                currentP -= 1;
              } else {
                stopUpdate();
                return;
              }

              percent = currentP;
            }

            var calculatedPosition = ( (size / 2) - Math.floor(size / 40) );
            var calc;

            element.find('.pdContainer').css({
              width: size + 'px',
              height: size + 'px',
              overflow: 'hidden',
              background: '#F5F5F8',
              border: Math.floor(size / 40) + 'px solid #eb1478',
              borderRadius: (size / 2) + 'px',
              position: 'relative'
            });

            function emptyQuad(quadArray) { //array of actual quads
              for (var i = 0; i < quadArray.length; i++) {
                quadArray[i].css({
                  borderWidth: '0px'
                });
              }
            }

            function fillQuad(quadArray) { //array of quad numbers
              for (var i = 0; i < quadArray.length; i++) {
                var centerPoint = calculatedPosition + 'px';
                var fullsize = size + 'px';
                var empty = '0px';
                var src;

                var position = {
                  borderTopWidth: fullsize,
                  borderRightWidth: fullsize,
                  borderBottomWidth: empty,
                  borderLeftWidth: empty
                };

                if (quadArray[i] > 3) {
                  src = {
                    bottom: centerPoint,
                    left: centerPoint,
                    borderTopWidth: fullsize,
                    borderRightWidth: empty,
                    borderBottomWidth: empty,
                    borderLeftWidth: fullsize,
                    borderColor: 'transparent transparent transparent #eb1478 '
                  };

                  angular.extend(position, src);

                  q4.css(position);
                } else if (quadArray[i] > 2) {
                  src = {
                    bottom: centerPoint,
                    right: centerPoint,
                    borderTopWidth: empty,
                    borderRightWidth: empty,
                    borderBottomWidth: fullsize,
                    borderLeftWidth: fullsize,
                    borderColor: 'transparent transparent #eb1478 transparent'
                  };

                  angular.extend(position, src);

                  q3.css(position);
                } else if (quadArray[i] > 1) {
                  src = {
                    top: centerPoint,
                    right: centerPoint,
                    borderTopWidth: '0px',
                    borderRightWidth: fullsize,
                    borderBottomWidth: fullsize,
                    borderLeftWidth: empty,
                    borderColor: 'transparent #eb1478 transparent transparent'
                  };

                  angular.extend(position, src);

                  q2.css(position);
                } else {
                  src = {
                    top: centerPoint,
                    left: centerPoint,
                    borderColor: '#eb1478 transparent transparent transparent'
                  };

                  angular.extend(position, src);

                  q1.css(position);
                }
              }
            }

            if (percent > 100) {
              fillQuad([1, 2, 3, 4]);
            } else if (percent > 87.5) {
              fillQuad([1, 2, 3]);

              calc = (size / 12.5) * (percent - 75);
              q4.css({
                bottom: calculatedPosition + 'px',
                left: calculatedPosition + 'px',
                borderTopWidth: (calc - size) + 'px',
                borderRightWidth: '0px',
                borderBottomWidth: (size - (calc - size)) + 'px',
                borderLeftWidth: size + 'px',
                borderColor: 'transparent transparent transparent #eb1478'
              });

            } else if (percent > 75) {
              fillQuad([1, 2, 3]);
              calc = (size / 12.5) * (percent - 75);
              q4.css({
                bottom: calculatedPosition + 'px',
                left: calculatedPosition + 'px',
                borderTopWidth: size + 'px',
                borderRightWidth: calc + 'px',
                borderBottomWidth: '0px',
                borderLeftWidth: '0px',
                borderColor: '#eb1478 transparent transparent transparent'
              });

            } else if (percent > 62.5) {
              fillQuad([1, 2]);
              calc = (size / 12.5) * (percent - 50);

              q3.css({
                bottom: calculatedPosition + 'px',
                right: calculatedPosition + 'px',
                borderTopWidth: '0px',
                borderRightWidth: (size - (calc - size)) + 'px',
                borderBottomWidth: size + 'px',
                borderLeftWidth: (calc - size) + 'px',
                borderColor: 'transparent transparent #eb1478 transparent'
              });

              emptyQuad([q4]);
            } else if (percent > 50) {
              fillQuad([1, 2]);

              calc = (size / 12.5) * (percent - 50);

              q3.css({
                bottom: calculatedPosition + 'px',
                right: calculatedPosition + 'px',
                borderTopWidth: calc + 'px',
                borderRightWidth: '0px',
                borderBottomWidth: '0px',
                borderLeftWidth: size + 'px',
                borderColor: 'transparent transparent transparent #eb1478'
              });

              emptyQuad([q4]);
            } else if (percent > 37.5) {
              calc = ( (size * 2) - ( size / 12.5) * (percent - 25) );

              fillQuad([1]);

              q2.css({
                top: calculatedPosition + 'px',
                right: calculatedPosition + 'px',
                borderTopWidth: calc + 'px',
                borderRightWidth: size + 'px',
                borderBottomWidth: size + 'px',
                borderLeftWidth: '0px',
                borderColor: 'transparent #eb1478 transparent transparent'
              });

              emptyQuad([q3, q4]);
            } else if (percent > 25) {
              calc = (size / 12.5) * (percent - 25);

              q1.css({
                top: calculatedPosition + 'px',
                left: calculatedPosition + 'px',
                borderTopWidth: size + 'px',
                borderRightWidth: size + 'px',
                borderBottomWidth: '0px',
                borderLeftWidth: '0px',
                borderColor: '#eb1478 transparent transparent transparent'
              });

              q2.css({
                top: calculatedPosition + 'px',
                right: calculatedPosition + 'px',
                borderTopWidth: size + 'px',
                borderRightWidth: calc + 'px',
                borderBottomWidth: '0px',
                borderLeftWidth: '0px',
                borderColor: 'transparent #eb1478 transparent transparent'
              });

              emptyQuad([q3, q4]);

            } else if (percent > 12.5) {
              calc = ( (size * 2) - ( size / 12.5) * (percent) );

              q1.css({
                top: calculatedPosition + 'px',
                left: calculatedPosition + 'px',
                borderWidth: size + 'px ' + size + 'px ' + '0px ' + calc + 'px',
                borderColor: '#eb1478 transparent transparent transparent'
              });

              emptyQuad([q2, q3, q4]);

            } else {
              calc = ( (size / 12.5) * percent);
              q1.css({
                top: calculatedPosition + 'px',
                left: calculatedPosition + 'px',
                borderWidth: calc + 'px ' + size + 'px ' + '0 ' + size + 'px',
                borderColor: '#eb1478 transparent transparent transparent'
              });

              emptyQuad([q2, q3, q4]);

            }
          }

          scope.$watch('config.percentage', function (newValue, oldValue) {
            if (newValue !== oldValue) {
              if (animate) {
                currentP = oldValue - 0;

                animation = $interval(function () {
                  if (currentP !== scope.config.percentage) {
                    updatePercentage();
                  } else {
                    stopUpdate();
                  }

                }, 5);

              } else {
                updatePercentage();
              }

            }
          });

          scope.$watch('config.size', function (newValue, oldValue) {
            if (newValue !== oldValue) {
              updatePercentage();
            }
          });

          function stopUpdate() {
            if (angular.isDefined(animation)) {
              $interval.cancel(animation);
              animation = undefined;
            }
          }

          // listen on DOM destroy (removal) event, and cancel the next UI update
          // to prevent updating time after the DOM element was removed.
          element.on('$destroy', function () {
            $interval.cancel(animation);
          });


          updatePercentage();
        }
      };
    });
})(window, window.angular);