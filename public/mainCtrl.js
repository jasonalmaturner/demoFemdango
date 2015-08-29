angular.module("femdangoApp").controller("mainCtrl", function($scope, mainService, loginService, $location) {

var authObject = loginService.getloginObject();
    
    authObject.$onAuth(function(user){
    console.log(user);
    $scope.user = user.password;
});    
    
    
})