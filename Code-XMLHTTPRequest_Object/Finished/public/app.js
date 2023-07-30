var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {

    $scope.handle = '';
    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    var rulesrequest = new XMLHttpRequest();
    rulesrequest.onreadystatechange = function () {
        if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
            $scope.rules = JSON.parse(rulesrequest.responseText);
        }
    };

    // var rulesrequest = new XMLHttpRequest();
    // rulesrequest.onreadystatechange = function () {
    //     $scope.$apply(function () {
    //         if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
    //             $scope.rules = JSON.parse(rulesrequest.responseText);
    //         }
    //     });

    // };

    // rulesrequest.open('GET', 'http://localhost:3000/api', true);
    // rulesrequest.send();

}]);