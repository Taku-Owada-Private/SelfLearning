var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', '$timeout', function ($scope, $filter, $http, $timeout) {

    $scope.handle = '';
    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $http.

    // $http.get('/api')
    //     .then(function (result) {
    //         $scope.rules = result.data;
    //     })
    //     .catch(function (err) {
    //         console.log(err);
    //     });

    // $scope.newRule = '';
    // $scope.addRule = function () {

    //     $http.post('/api', {
    //             rulename: $scope.newRule
    //         })
    //         .then(function (result) {
    //             $scope.newRule = '';
    //             $scope.rules.push(result.data);
    //         })
    //         .catch(function (err) {
    //             console.log(err);
    //         });

    // }

}]);