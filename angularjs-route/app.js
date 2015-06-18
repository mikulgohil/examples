// create the module and name it myApp
        // also include ngRoute for all our routing needs
    var myApp = angular.module('myApp', ['ngRoute']);

    // configure our routes

    myApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    myApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.title = "Welcome to Home Page";
        $scope.subtitle = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim";
        $scope.description = "http://placehold.it/567x226/00b9f2/ffffff";
    });

    myApp.controller('aboutController', function($scope) {
        $scope.title = "Welcome to About Page";
        $scope.subtitle = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim";
        $scope.description = "http://placehold.it/567x226/ff4445/ffffff";
    });

    myApp.controller('contactController', function($scope) {
        $scope.title = "Welcome to Contact Page";
        $scope.subtitle = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim";
        $scope.description = "http://placehold.it/567x226/ffd56c/ffffff";
    });