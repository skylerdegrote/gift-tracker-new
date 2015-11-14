//controllers

var app = angular.module('giftApp', ['ngRoute', 'ngMaterial']);

app.controller("SideNavController", ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    console.log("side nav Controller Hit");
    $scope.toggleSidenav = function(menuId){
        $mdSidenav(menuId).toggle();
    };
}]);


app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl : './views/home.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: './views/login.html',
            controller: 'LoginController'
        })
        .when('/register', {
            templateUrl: './views/register.html',
            controller: 'RegisterController'
        })
        .when('/userprofile', {
            templateUrl: './views/userprofile.html',
            controller: 'UserProfileController'
        })
        .when('/person', {
            templateUrl: './views/person.html',
            controller: 'PersonController'
        })
        .when('/allpersons', {
            templateUrl: './views/allpersons.html',
            controller: 'AllPersonsController'
        })
        .when('/newperson', {
            templateUrl: './views/newperson.html',
            controller: 'NewPersonController'
        })
        .when('/occasion', {
            templateUrl: './views/occasion.html',
            controller: 'OccasionController'
        })
        .when('/alloccasions', {
            templateUrl: './views/alloccasions.html',
            controller: 'AllOccasionsController'
        })
        .when('/newoccasion', {
            templateUrl: './views/newoccasion.html',
            controller: 'NewOccasionController'
        })
        .when('/newgift', {
            templateUrl: './views/newgift.html',
            controller: 'NewGiftController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);