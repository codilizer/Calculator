'use strict';

angular.module('calc').directive('resultInterface', function() {
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