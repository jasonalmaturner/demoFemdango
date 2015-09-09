

var app = angular.module("femdangoApp").service("commentsService", function($location, $firebaseObject, $firebaseArray, $route){
    var that = this;
    
    this.currentMovieId = $route.current.params.id;
      console.log($route.current.params.name);      
    
    var url = "https://femdango.firebaseio.com";
    var commentsRef = new Firebase(url + "/comments");

    this.comments = $firebaseArray(commentsRef);
    
   this.comments.$loaded().then(function (comments) {
        console.log(comments);
    });
    
    this.badges = {
            favorite :false,
            wishList: false,
            bechdel: false,
            mako: false,
            executive: false,
            ratio: false,
            lgbt: false,
            diversity: false,
            disabilities: false
                        
        }
    
this.getbadgeCount = function (){
    
    for (var i = 0; i < comments.length; i ++) {
        for (var j = 0; j < badges.length; j++) {
            if (comments[i].badges[j] === true) {
                badgesCount++;
            };
        };
    };
};
    
 
    
});