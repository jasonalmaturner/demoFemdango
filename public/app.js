var app = angular.module("femdangoApp", ["firebase", "ngRoute", "ngPromiseExtras"]);

app.constant(function(fb) {
    url: "https://femdango.firebaseio.com/";
});
app.config(function($routeProvider){
    $routeProvider
        .when ("/", {
            templateUrl: "home.html",
            controller: "browseCtrl"
        })
        .when("/about", {
            templateUrl: "about.html",
            controller: "aboutCtrl"
        })
        .when("/browse", {
            templateUrl: "browse.html", 
            controller: "browseCtrl"
        })
               
        .when("/browse/:id", {
            templateUrl: "movie.html",
            controller: "movieCtrl",
            resolve: {
                movie: function($route, mainService){
                    return mainService.getMoviePage($route.current.params.id);
                }
            }
        })
        .when("/comments", {
            templateUrl: "comments.html",
            controller: "commentsCtrl",
            resolve: {
                commentsRef: function (commentsService) {
                    return commentsService.getComments;
                }
            }
        })
        .when("/login", {
            templateUrl: "login.html",
            controller: "loginCtrl"
        })
        .when("/passwordReset", {
            templateUrl: "passwordReset.html",
            controller: "loginCtrl"
        })
        .when("/dashboard/:userId", {
            templateUrl: "dashboard.html",
            controller: "loginCtrl"
//            resolve: {
                
//                usernameRef: function(loginService, $route){
//                    return loginService.getUser($route.current.params.userId);
//                },
//                favoritesRef: function(loginService, $route){
//                    return loginService.getFavorites($route.current.params.userId);
//                }
//            }
        })
        .when("/resultsgallery", {
            templateUrl: "resultsGallery.html",
            controller: "browseCtrl",
            resolve: {
                commentsRef: function (commentsService) {
                    return commentsService.getComments;
                }
            }
        })
        .otherwise({
            redirectTo: "/"
        })
});