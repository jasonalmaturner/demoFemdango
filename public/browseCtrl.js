angular.module("femdangoApp").controller("browseCtrl", function($scope, mainService, commentsService, loginService, $timeout, $location, $firebaseObject, $firebaseArray, $route) {
    
$scope.userData = loginService.user;

 var url = "https://femdango.firebaseio.com";
    var favoritesRef = new Firebase(url + "/users/" + $scope.userData.uid + "/favorites");
    var wishListRef = new Firebase(url + "/users/" + $scope.userData.uid + "/wishList");
    $scope.userFavoritesList = $firebaseArray(favoritesRef);
    $scope.userWishList = $firebaseArray(wishListRef);   
    console.log($scope.userFavoritesList);
    console.log($scope.userWishList);

    
$scope.searchMovies = function() {
    mainService.searchMovies($scope.searchMovieTitle)
    .then(function(response) {
        $scope.reset = true;
        $timeout(function(){
            $scope.reset = false;
            $scope.searchResults = response;
        })

    })};

$scope.MoviesInTheaters = function() {
//    console.log($scope.searchMovieTitle);
    mainService.searchMoviesInTheaters()
    .then(function(response) {
        $scope.reset = true;
        $timeout(function(){
            $scope.reset = false;
            $scope.inTheaters = response.results;
            console.log($scope.inTheaters);
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
 
    //Not yet functioning. This will allow users to click on a badge on the home page, and see popular movies
$scope.searchMoviesByBadge = function() {
//    redirected to popular movies until firebase data is connected;
    mainService.searchMoviesPopular()
    .then(function(response) {
        $scope.reset = true;
        $timeout(function(){
            $scope.reset = false;
            $scope.searchResults = response;
        })
       

    })};    

$scope.currentMovieId = commentsService.currentMovieId;

$scope.comments = commentsService.comments;
    
$scope.badges = commentsService.badges;



// $scope.getBadgeMovies = function () {
//        $scope.earnedBadgeMovies = commentsService.earnedBadgeMovies;
//    console.log("hello", $scope.earnedBadgeMovies);
//    };
//    $scope.getBadgeMovies();  
    
// $scope.getBadgeForMovie = function () {
//        for (movie in commentsService.earnedBadgeMovies) {
//            console.log(movie);
//            if (movie == $scope.currentMovieId) {
//                for (badge in movie) {
//                    if (badge 
//    
//    };
//    $scope.getBadgeMovies();    

});