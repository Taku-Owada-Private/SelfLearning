var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {
   $scope.name = 'たく';
   $scope.handle = '';
   $scope.lowercasehandle = function () {
      return $filter('lowercase')($scope.handle);
   };


}]);

var tb = document.getElementById("name");

console.log(tb);

t

