var app = angular.module("femdangoApp", ["firebase", "ngRoute", "ngPromiseExtras"]);


app.config(function($routeProvider){
    $routeProvider
        .when ("/", {
            templateUrl: "home.html",
            controller: "homeCtrl"
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
            controller: "mainCtrl",
            resolve: {
                movie: function($route, mainService){
                    return mainService.getMoviePage($route.current.params.id)
                }
            }
        })
        .when("/browse/bestOfWomen", {
            templateUrl: "bestof.html",
        })
               
        .when("/login", {
            templateUrl: "login.html",
            controller: "loginCtrl"
        })
        .when("/passwordReset", {
            templateUrl: "passwordReset.html",
            controller: "loginCtrl"
        })
               
        .otherwise({
            redirectTo: "/"
        })
})