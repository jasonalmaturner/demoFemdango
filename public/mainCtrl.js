angular.module("femdangoApp").controller("mainCtrl", function($scope, mainService, loginService, $location) {


    
var authObject = loginService.getloginObject();
   
    authObject.$onAuth(function(user){    
    console.log(user);
    $scope.user = user;
    if (user){
        $scope.loggedin = true
    } else {$scope.loggedin = false};
       
}); 

$scope.logout = function() {
    return loginService.logout();
};   

})