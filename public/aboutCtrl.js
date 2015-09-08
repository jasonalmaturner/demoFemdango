angular.module("femdangoApp").controller("aboutCtrl", function($scope, $firebaseObject, $firebaseArray) {
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

    var url = "https://femdango.firebaseio.com";
    var EmailsRef = new Firebase(url + "/contactMeEmails");
    $scope.contactMeEmails = $firebaseArray(EmailsRef);  
    
$scope.sendEmail = function(emailAddress, emailText){
        $scope.contactMeEmails.$add({
            emailFrom: emailAddress,
            emailBody: emailText
        }).then(alert("Thanks for the note. We will get back to you soon!"));
            
    }
    
    
})