angular.module("femdangoApp").controller("browseCtrl", function($scope, mainService, commentsService, $timeout) {

    
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

   
$scope.searchMoviesPopular = function() {
    mainService.searchMoviesPopular()
    .then(function(response) {
    $scope.reset = true;
    $timeout(function(){
        $scope.reset = false;
        $scope.popularMovies = response.results
    });
    });
};
$scope.searchMoviesPopular();
 
    $scope.userFavoritesList = function() {
    mainService.userGetFavoritesList()
    .then(function(response) {
        $scope.reset = true;
        $timeout(function(){
            $scope.reset = false;
            $scope.userFavorites = response.results;
        })
        

    })};
$scope.searchMoviesComingSoon();  
    
$scope.searchMoviesByBadge = function() {
//    redirected to popular movies until firebase data is connected;
    mainService.searchMoviesPopular()
    .then(function(response) {
        $scope.reset = true;
        $timeout(function(){
            $scope.reset = false;
            $scope.searchResults = response;
        })
       

//        console.log(response);
    })};    

$scope.currentMovieId = commentsService.currentMovieId;

$scope.comments = commentsService.comments;
    
$scope.badges = commentsService.badges;
      
})