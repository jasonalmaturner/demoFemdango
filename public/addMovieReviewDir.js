//NOT IN Use

app.directive("addMovieReview", function($timeout){
 return {
   restrict: 'EA',
     scope: {
        data: '='
     },
     link:{},
     controller: "commentsCtrl",
     templateUrl: "comments.html"
 }
});