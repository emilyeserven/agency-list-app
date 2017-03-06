angular.module('agencyList');
agencyList.controller('ListingController', ['$scope', '$http', function($scope, $http) {
    $http.get('./js/agencies.json').then(function(data) {
        $scope.agencies = data.data;
        $scope.agency_name = "";
        $scope.agency_category = "";
        $scope.agency_locations = "";
    });
}]);
