var app = angular.module("femdangoApp");

app.service("commentsService", function(){
   
    this.getComments = function(fb) {
//         var firebaseRef = new Firebase("https://femdango.firebaseio.com/");
        return new Firebase(fb.url + "/comments");
    };

                                        


});