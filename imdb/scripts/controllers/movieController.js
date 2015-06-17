app.controller("movieController", ["$scope", "$http", function ($scope, $http) {
    $scope.query = "";
    $scope.showMovieResults = false;
    $scope.showMovieDetails = false;
    $scope.showErrorMessage = false;
    $scope.selectedYear = 0;

    $scope.searchIMDB = function () {
        if ($scope.query !== null && $scope.query !== "") {
            $http({
                method: "GET",
                url: "http://www.omdbapi.com/?s=" + $scope.query,
                headers: { "Content-Type": "text/html" }
            })
            .success(function (data, status, headers, config) {
                $scope.movies = data.Search;
                console.log(headers);
                $scope.showMovieResults = true;
                $scope.showErrorMessage = false;
            })
            .error(function (data, status, headers, config) {
                $scope.error = "An error has occurred while loading movies!";
                $show.showMovieResults = false;
                $show.showErrorMessage = true;
            });
        }
    }
    
    $scope.getMovieDetails = function(id) {
        if (id !== null) {
            $http({
                method: "GET",
                url: "http://www.omdbapi.com/?i=" + id,
                headers: { "Content-Type": "text/html" }
            })
            .success(function (data, status, headers, config) {
                $scope.movieDetails = data;
                console.log(data);
                $scope.showMovieDetails = true;
            })
            .error(function (data, status, headers, config) {
                $scope.error = "An error has occurred while loading movie details!";
                $scope.showMovieDetails = false;
            });
        }
    }
}]);