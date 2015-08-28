angular.module("femdangoApp").controller("aboutCtrl", function($scope) {
$scope.femdango = true;
    
$scope.femdangoShow = function(){
    $scope.femdango = true;
    $scope.bechdel = false;
    $scope.resources = false;
    $scope.contact = false;
};
$scope.bechdelShow = function(){
    $scope.bechdel = true;
    $scope.femdango = false;
    $scope.resources = false;
    $scope.contact = false;
};
$scope.resourcesShow = function(){
    $scope.resources = true;
    $scope.femdango = false;
    $scope.bechdel = false;
    $scope.contact = false;
};
$scope.contactShow = function(){
    $scope.contact = true;
    $scope.femdango = false;
    $scope.resources = false;
    $scope.bechdel = false;
};
//    $scope.sendEmail = function(){}
})