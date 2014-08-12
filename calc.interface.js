/**
 * Created by crunch on 2014-08-09.
 */
angular.module('miniCalculator').controller('calcInterfaceCtrl', ["$scope", "calcService", function($scope, calcService){
    $scope.calcExpression = "";
    $scope.clickNum = function() {
        console.log("click num! num : ");
    }
    $scope.calc = function() {
        console.log("calc() invoked!");
        console.log("calcExpression : {{calcExpression}}");
        calcService.doTest();
        console.log($scope.calcExpression);
        calcService.expression = $scope.calcExpression;
        calcService.doCalc();
        //calcService.doCalc(calcExpression);
        $scope.calcExpression = "";

    }
}]);

angular.module('miniCalculator').directive('calcInterface', function() {
    return{
        restrict: 'E',
        scope:        {
            //clickNum: '&clickNum'
            directiveCalcExpression: '=ctrlExpression',
            calc: "&"
        },
        templateUrl: 'calc.interface.template.html',
        link: function(scope, element) {
            scope.clickExpBtn = function(event) {
                //console.log("clikc num!, message:{{message}}");
                var inputExp = event.currentTarget.innerHTML;
                console.log(inputExp);
                scope.directiveCalcExpression += inputExp;
                //scope.directiveCalcExpression = "aaa";
            }

            scope.clickEqual = function(scope, element) {
                console.log("click equal!");
                scope.calc();
            }
        }
    };
});