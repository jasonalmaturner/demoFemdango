//NOT IN USE

var app = angular.module("femdangoApp");


app.directive("CommentsDir", function(){
 return {
   restrict: 'EA',
     scope: {
        data: '='
     },
     controller: "commentsCtrl",
     
     templateUrl: "comments.html"
 };
 });