var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function ($scope, $timeout) {
   
    $scope.name = 'ケン';
    
    $timeout(function() {
        $scope.name = '田中';
    }, 3000);
    
}]);

