angular.module("femdangoApp").controller("movieCtrl", function($scope, mainService, commentsService, loginService, $location, movie, $firebaseObject, $firebaseArray, $route) {
    
    console.log("movie:", movie);
    console.log("id:", $route.current.params.id) 
    
    $scope.movieData = movie;
                
    
    var url = "https://femdango.firebaseio.com";
    var commentsRef = new Firebase(url + "/comments");
    $scope.comments = $firebaseArray(commentsRef);
    $scope.user = loginService.user;
    var favoritesRef = new Firebase(url + "/users/" + $scope.user.uid + "/favorites");
    var wishListRef = new Firebase(url + "/users/" + $scope.user.uid + "/wishList");
    $scope.userFavoritesList = $firebaseArray(favoritesRef);
    $scope.userWishList = $firebaseArray(wishListRef);
     
    console.log($scope.userFavoritesList);
    
    $scope.currentMovieId = commentsService.currentMovieId;

    $scope.comments = commentsService.comments;
    $scope.comments.$loaded().then(function (comments) {
            console.log(comments);
        });    
    $scope.badges = commentsService.badges;

    $scope.createComment = function() {
        var date = new Date();
        
        $scope.comments.$add({
            movieId: $route.current.params.id,
            movieTitle: $scope.movieData.title,
            createdAt : date.toLocaleString(),
            user : $scope.name,
            text : $scope.userMovieReview,
            badges:  $scope.badges
        }).then(console.log($scope.comments));  
    }
    
    //move to loginService
    $scope.favoriteListManage = function(){
    var updateFavoritesRef = favoritesRef.child($route.current.params.id);
        console.log($scope.user.favorite);
        if ($scope.user.favorite) {
        updateFavoritesRef.set({
            title: $scope.movieData.title,
            poster: $scope.movieData.posterUrl,
            movieId: $route.current.params.id,
            movieImdbId: $scope.movieData.imdbId,
//          earnedBadges: $scope.movieData.earnedBadges  
        })
        } else {
            console.log($scope.user.favorite);
        var favoritesRemoveRef = new Firebase(url + "/users/" + $scope.user.uid + "/favorites/" + $route.current.params.id);

            favoritesRemoveRef.remove();
        } 
    };
   
    $scope.wishListManage = function(){
    var updateWishListRef = wishListRef.child($route.current.params.id);
        console.log($scope.user.wish);
        if ($scope.user.wish) {
        updateWishListRef.set({
            title: $scope.movieData.title,
            poster: $scope.movieData.posterUrl,
            movieId: $route.current.params.id,
            movieImdbId: $scope.movieData.imdbId,
//          earnedBadges: $scope.movieData.earnedBadges  
        })
        } else {
            console.log($scope.user.wish);
        var wishListRemoveRef = new Firebase(url + "/users/" + $scope.user.uid + "/wishList/" + $route.current.params.id);

            wishListRemoveRef.remove();
        }
    };
    
//$scope.getFavoritesList = function() {
////    console.log($scope.searchMovieTitle);
//    commentsService.userGetFavoritesList()
//    .then(function(response) {
//        $scope.reset = true;
//        $timeout(function(){
//            $scope.reset = false;
//            $scope.userFavorites = response.results;
//        })
//    })};
//    $scope.getFavoritesList();
//      $scope.userFavoritesList = $firebaseArray(favoritesRef);
//
//$scope.getwishList = function() {
////    console.log($scope.searchMovieTitle);
//    commentsService.userGetWishList()
//    .then(function(response) {
//        $scope.reset = true;
//        $timeout(function(){
//            $scope.reset = false;
//            $scope.wishList = response.results;
//            console.log($scope.wishList);
//        })
//    })};
//    $scope.getwishList();
        
    
    
});