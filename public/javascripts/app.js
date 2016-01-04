var app = angular.module('app', ['ngMaterial', 'ngMessages']);


app.controller('mainViewController', ['$scope', function ($scope) {

    $scope.newsposts = ["one", "two", "three"];

}]);

app.directive('ngEnter', function() {
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
