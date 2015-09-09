////NOT IN UsE
//
//var app = angular.module("femdangoApp");
//app.controller("commentsCtrl", function($scope,  $firebaseObject, $firebaseArray, commentsService, $route){
//    
//    var url = "https://femdango.firebaseio.com";
//    var firebaseRef = new Firebase(url + "/comments");
//
//    $scope.comments = $firebaseArray(firebaseRef);
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
////            movieId: $route.current.params.id,
//            createdAt : date.toLocaleString(),
//            user : $scope.name,
//            text : $scope.userMovieReview,
//            badges:  $scope.badges
//        }).then(console.log($scope.comments));    
//    };  
//   
//   
//        
//});
