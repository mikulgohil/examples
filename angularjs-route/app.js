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
    myApp.controller('mainController', function($scope,userService) {
        $scope.sortType     = "productName"; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order

        // create a message to display in our view
        $scope.title = "Welcome to Home Page";
        $scope.subtitle = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim";
        $scope.description = "http://placehold.it/567x226/00b9f2/ffffff";
        $scope.data = userService.data;

        
        $scope.add = function(){
            userService.data.push({
                id : $scope.data_id,
                productName : $scope.data_productName,
                productCode : $scope.data_productCode,
                description : $scope.data_description,
                cost : $scope.data_cost
            })

            $scope.data_id = "";
            $scope.data_productName = "";
            $scope.data_productCode = "";
            $scope.data_description = "";
            $scope.data_cost = "";

        }

        $scope.remove = function(index){
            userService.data.splice(index, 1);
        }



        // Paging 

            $scope.currentPage = 1; //current page
            $scope.maxSize = 5; //pagination max size
            $scope.entryLimit = 5; //max rows for data table

            /* init pagination with $scope.data */
            $scope.noOfPages = Math.ceil($scope.data.length/$scope.entryLimit);
            console.log($scope.noOfPages); 

            


            // $scope.$watch('productFilter', function(term) {
            //     // Create $scope.filtered and then calculat $scope.noOfPages, no racing!
            //     $scope.filtered = filterFilter($scope.data, term);
            //     $scope.noOfPages = Math.ceil($scope.filtered.length/$scope.entryLimit);
            // });

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