angular.module("femdangoApp").controller("movieCtrl", function($scope, mainService, commentsService, $location, movie, $firebaseObject, $firebaseArray, $route) {
    
    console.log("movie:", movie);
    console.log("id:", $route.current.params.id) 
    
    $scope.movieData = movie;
    
//    $scope.currentMovieId = $route.current.params.id;
            
    
    var url = "https://femdango.firebaseio.com";
    var commentsRef = new Firebase(url + "/comments");

    $scope.comments = $firebaseArray(commentsRef);
//    
//    $scope.comments.$loaded().then(function (comments) {
//        console.log(comments);
//    });
//    
//    $scope.badges = {
//            favorite :false,
//            wishList: false,
//            bechdel: false,
//            mako: false,
//            executive: false,
//            ratio: false,
//            lgbt: false,
//            diversity: false,
//            disabilities: false
//                        
//        }
//    
//    $scope.createComment = function() {
//        var date = new Date();
//        
//        $scope.comments.$add({
//            movieId: $route.current.params.id,
//            createdAt : date.toLocaleString(),
//            user : $scope.name,
//            text : $scope.userMovieReview,
//            badges:  $scope.badges
//        }).then(console.log($scope.comments));  
//    } 
//    
//   
$scope.currentMovieId = commentsService.currentMovieId;

$scope.comments = commentsService.comments;
    
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
})