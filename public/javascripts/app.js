    var app = angular.module('app', ['ngMaterial']);


var mainModule = angular.module('findelegator', []);

mainModule.controller('mainViewController', ['$scope', function ($scope) {

}]);

mainModule.directive('ngEnter', function() {
    return function(scope, element, attrs) {
element.bind("keydown keypress", 
    function(event) {
if(event.which === 13) {
    scope.$apply(function(){
    scope.$eval(attrs.ngEnter);
    });
    event.preventDefault();
}
    });
    };
});
