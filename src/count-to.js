var countTo = angular.module('countTo', [])
    .directive('countTo', ['$timeout', function ($timeout) {
        return {
            replace: false,
            scope: true,
            link: function (scope, element, attrs) {

                var e = element[0];
                var num, refreshInterval, duration, steps, step, countTo, value, increment, precision, format;

                var calculate = function () {
                    refreshInterval = 30;
                    step = 0;
                    scope.timoutId = null;
                    precision = parseInt(attrs.precision) || 0;
                    countTo = parseFloat(attrs.countTo) || 0;
                    scope.value = parseFloat(attrs.value, 10) || 0;
                    duration = parseInt(attrs.duration) || 500;

                    steps = Math.ceil(duration / refreshInterval);
                    increment = ((countTo - scope.value) / steps);
                    num = scope.value;
                    format = attrs.format=="comma"?function(number){
                        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }:function(number){ return number};
                }


                var tick = function () {
                    scope.timoutId = $timeout(function () {
                        num += increment;
                        step++;
                        if (step >= steps) {
                            $timeout.cancel(scope.timoutId);
                            num = countTo;
                            e.textContent = format(countTo.toFixed(precision));
                        } else {
                            e.textContent = format(num.toFixed(precision));
                            tick();
                        }
                    }, refreshInterval);

                }

                var start = function () {
                    if (scope.timoutId) {
                        $timeout.cancel(scope.timoutId);
                    }
                    calculate();
                    tick();
                }

                attrs.$observe('countTo', function (val) {
                    if (val) {
                        start();
                    }
                });

                attrs.$observe('value', function (val) {
                    start();
                });

                return true;
            }
        }

    }]);
