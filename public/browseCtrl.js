angular.module("femdangoApp").controller("browseCtrl", function($scope, mainService, $timeout) {
$scope.searchMovies = function() {
//    console.log($scope.searchMovieTitle);
    mainService.searchMovies($scope.searchMovieTitle)
    .then(function(response) {
        $scope.reset = true;
        $timeout(function(){
            $scope.reset = false;
            $scope.searchResults = response;
        })

//        console.log(response);
    })};

$scope.MoviesInTheaters = function() {
//    console.log($scope.searchMovieTitle);
    mainService.searchMoviesInTheaters()
    .then(function(response) {
        $scope.reset = true;
        $timeout(function(){
            $scope.reset = false;
            $scope.inTheaters = response.results;
        })
        

    })};
$scope.MoviesInTheaters();
    
$scope.searchMoviesComingSoon = function() {
//    console.log($scope.searchMovieTitle);
    mainService.searchMoviesComingSoon()
    .then(function(response) {
        $scope.reset = true;
        $timeout(function(){
            $scope.reset = false;
            $scope.comingSoon = response.results;
        })
        

    })};
$scope.searchMoviesComingSoon();    
})