//controllers

var app = angular.module('giftApp', ['ngRoute', 'ngMaterial']);




app.controller("SideNavController", ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    console.log("side nav Controller Hit");
    $scope.toggleSidenav = function(menuId){
        $mdSidenav(menuId).toggle();
    };
}]);

app.controller('RegisterController', ['$scope', '$mdToast', '$animate',
    function($scope, $mdToast, $animate) {
        console.log("Login Controller Hit");
        //3. we decide where the toast will display on the view
        $scope.toastPosition = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };

        //2. the method looks for the position that we want to display the toast
        $scope.getToastPosition = function() {
            return Object.keys($scope.toastPosition)
                .filter(function(pos) { return $scope.toastPosition[pos]; })
                .join(' ');
        };

        //1. The send button will call this method
        this.addUser = function() {
            $mdToast.show(
                $mdToast.simple()
                    .content('Thanks for your Message ' + this.firstname + ' You Rock!')
                    .position($scope.getToastPosition())
                    .hideDelay(3000)
            );
        };
    }



]); //end register controller



//home controller
app.controller("HomeController", ['$scope', function($scope){
    console.log("home Controller Hit");
}]);


//new gift controller
app.controller("NewGiftController", ['$scope', function($scope){
    console.log("new gift Controller Hit");
}]);


//new person controller
app.controller("NewPersonController", ['$scope', function($scope){
    console.log("new person Controller Hit");
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
            //controller: 'RegisterController'
        })
        .when('/userprofile', {
            templateUrl: './views/userprofile.html',
            //controller: 'UserProfileController'
        })
        .when('/person', {
            templateUrl: './views/person.html',
            //controller: 'PersonController'
        })
        .when('/allpersons', {
            templateUrl: './views/allpersons.html',
            //controller: 'AllPersonsController'
        })
        .when('/newperson', {
            templateUrl: './views/newperson.html',
            //controller: 'NewPersonController'
        })
        .when('/occasion', {
            templateUrl: './views/occasion.html',
            //controller: 'OccasionController'
        })
        .when('/alloccasions', {
            templateUrl: './views/alloccasions.html',
            //controller: 'AllOccasionsController'
        })
        .when('/newoccasion', {
            templateUrl: './views/newoccasion.html',
            //controller: 'NewOccasionController'
        })
        .when('/newgift', {
            templateUrl: './views/newgift.html',
            //controller: 'NewGiftController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);


