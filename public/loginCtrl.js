angular.module("femdangoApp").controller("loginCtrl", function($scope, loginService, $location){

$scope.user = {};
$scope.resetPasswordForm = true;

$scope.userData = loginService.user;
//    console.log($scope.userData);

var loginCallback = function(user) {
//    console.log("callback:", user.uid);
        $location.path("/dashboard/" + user.uid);
        $scope.loggedin = true; 
};
    
$scope.login = function() {
    return loginService.login($scope.user, loginCallback);
}

$scope.register = function () {
    return loginService.register($scope.user, loginCallback);
};

$scope.showResetPassword = function () {
    $scope.resetPasswordForm = !($scope.resetPasswordForm);
    console.log($scope.resetPasswordForm);
}  

    
$scope.resetPassword = function (user) {
    return loginService.resetPassword($scope.user);
}
    


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