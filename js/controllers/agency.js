angular.module('agencyList');
agencyList.controller('AgencyController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('./js/agencies.json').then(function(data) {
        $scope.agencies = data.data;
        $scope.whichItem = $routeParams.itemId;
    });
}]);
