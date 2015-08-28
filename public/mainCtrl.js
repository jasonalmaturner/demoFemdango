angular.module("femdangoApp").controller("mainCtrl", function($scope, mainService, $location, movie) {
    
//    console.log(movie);
    
    $scope.movieData = movie;
//    
//$scope.getMovie = function () {
//        mainService.getMovie($scope.searchTerm)
//        .then(function(response) {
//            $scope.movieData = response;
//            console.log(response);
//                       
//        });
//    };
////$scope.getMovie = function (imbdId) {
////        mainService.getMovie(imdbId)
////        .then(function(response) {
////            $scope.movieData = response;
////            console.log(response);
////                       
////        });
////    };    
//    
//$scope.getMoviePage = function (tmdbId) {
//        mainService.getMoviePage(tmdbId)
//        .then(function(response) {
//            $scope.imdbId = response;
////            console.log($scope.imdbId);
//        });
//    $scope.getMovie($scope.imdbId);
//};
        

    
})