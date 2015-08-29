angular.module("femdangoApp").controller("loginCtrl", function($scope, loginService, $location){
//var authObject = mainService.getAuth();



var loginCallback = function(user) {
        $location.path("/dashboard/" + user.uid)
};
    
$scope.login = function() {
    return loginService.login($scope.user, loginCallback);
}

$scope.register = function () {
    return loginService.register($scope.user, loginCallback);
};

//app.controller('DashboardCtrl', function($scope, userReference, thingsReference){
//  $scope.profile = userReference;
//  $scope.things = thingsReference;
//  $scope.addThing = function(){
//    $scope.things.$add($scope.thing);
//  }
//  $scope.removeThing = function(thing){
//    $scope.things.$remove(thing);
//  }
//  $scope.update = function(){
//    $scope.profile.$save();
//  };


})