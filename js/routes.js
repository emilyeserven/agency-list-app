(function() {
    angular.module('AgencyList')
    .config(function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: './templates/pages/home/index.html'
        })
        .when('/listings', {
            templateUrl: './templates/pages/listings/index.html'
        })
        .when('/listings', {
            templateUrl: './templates/pages/listings/index.html'
        });
    });
})();
