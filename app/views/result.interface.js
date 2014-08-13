/**
 * Created by crunch on 2014-08-09.
 */


angular.module('miniCalculator').controller('calcHistoryCtrl', ["$scope", "calcService", function($scope, calcService){
    $scope.calcResultArr = calcService.arrResultItem;
}]);



angular.module('miniCalculator').directive('resultInterface', function() {
    return {
        restrict: 'E',
        scope: {
            addItem: '&',
            arrItems: '='
        },
        templateUrl: 'result.interface.template.html',
//        link: function(scope, element) {
//
//        }
    };

});