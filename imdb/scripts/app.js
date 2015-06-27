var app = angular.module("imdbApp", []);

app.config(function($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

////app.filter('unique', function () {
////    return function (input, key) {
////        var unique = {};
////        var uniqueList = [];
////        for (var i = 0; i < input.length; i++) {
////            if (typeof unique[input[i][key]] == "undefined") {
////                unique[input[i][key]] = "";
////                uniqueList.push(input[i]);
////            }
////        }
////        return uniqueList;
////    };
////});