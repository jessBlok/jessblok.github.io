/*global angular*/

var jessApp = angular.module("jessApp", ['ngRoute']);

jessApp.config(function($routeProvider, $locationProvider)  {

$routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/aboutme', {
                templateUrl : 'pages/aboutme.html',
                controller  : 'aboutController'
            })

            // route for the hireme page
            .when('/hireme', {
                templateUrl : 'pages/hireme.html',
                controller  : 'contactController'
            })
            
            .when('/mywork', {
                templateUrl : 'pages/mywork.html',
                controller  : 'aboutController'
            })
           
            .when('/reads', {
                templateUrl : 'pages/reads.html',
                controller  : 'aboutController'
            })

  
    });



jessApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Hi';
    });


jessApp.controller('jessController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Hi';
    });
    
    
    jessApp.controller('aboutController', function($scope) {
        $scope.message = 'Hi';
    });

    jessApp.controller('hiremeController', function($scope) {
        $scope.message = 'Hi';
    });