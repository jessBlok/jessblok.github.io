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
                controller  : 'hireMeController'
            })
            
            .when('/mywork', {
                templateUrl : 'pages/mywork.html',
                controller  : 'aboutController'
            })
           
            .when('/reads', {
                templateUrl : 'pages/reads.html',
                controller  : 'aboutController'
            })
            
            .when('/alphabetshuffle', {
                templateUrl : 'pages/alphabetshuffle.html',
                controller  : 'shuffleController'
            });
    });



jessApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.themessage = 'click on jquery!';
        $scope.hellomessage = "this is angular.  no jquery!";
    });


jessApp.controller('jessController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Hi';
    });
    
    
    jessApp.controller('aboutController', function($scope) {
        $scope.message = 'Hi';
    });

    jessApp.controller('hireMeController', function($scope) {
        $scope.firstname = ""; //THis is just a test to get controller set up
    });
    
    
    jessApp.controller ('shuffleController', function ($scope) {
        
        $scope.arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        $scope.shuffleMe = function () {
            shuffle();
                }
        
        
    })