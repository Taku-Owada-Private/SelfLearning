var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {

    $scope.handle = '';
    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.$watch('handle', function (newValue, oldValue) {
        console.log('変化がありました');
        console.log("旧:" + oldValue);
        console.log("新:" + newValue);
    });

    setTimeout(function () {
        $scope.$apply(function () {
            $scope.handle = 'hogehogehoge';
            console.log('changed scope!!');
        });

    }, 3000);

}]);