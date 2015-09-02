var app = angular.module("femdangoApp");
app.controller("commentsCtrl", function($scope, commentsRef, $firebaseObject, $firebaseArray){
    $scope.comments = $firebaseObject(commentsRef);
    
    $scope.comments.$loaded().then(function (comments) {
        console.log(comments)})
    
    $scope.createComment = function(username, comment){
        $scope.comments.$add({
            name: name,
            userMovieReview: userMovieReview
        });
    }    
})
