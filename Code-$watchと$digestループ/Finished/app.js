var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {

    $scope.handle = '';
    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.$watch('handle', function(newValue, oldValue) {
        console.log('変化がありました！');
        console.log('旧：', oldValue);
        console.log('新：', newValue);
    });
    
    $timeout(function() {
        
        $scope.handle = 'hogehogehogehoge';
        console.log('スコープが変わりました！');
        
    }, 3000);

}]);