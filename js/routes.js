angular.module('agencyList')
.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: './templates/pages/home/index.html'
    })
    .when('/listings', {
        templateUrl: './templates/pages/listings/index.html',
        controller: 'ListingController'
    })
    .when('/agency/:itemId', {
        templateUrl: './templates/pages/agency/index.html',
        controller: 'AgencyController'
    })
    .otherwise({
        redirectTo: '/listings'
    });
});
