angular.module("femdangoApp").service("loginService", function($firebaseAuth) {

    var firebaseLogin = new Firebase("https://femdango.firebaseio.com/"); 
    var loginObj = $firebaseAuth(firebaseLogin);

    this.getloginObject = function(){
        return loginObj;
    };
    
//    var loginCallback = function(err, authData) {
//        if (err) {
//            switch (err.code) {
//                case "INVALID_EMAIL":
//                    console.log("invalid email");
//                case "INVALID_PASSWORD":
//                    console.log("invalid password");
//                default:
//                    console.log("error logging in");
//            };
//        } else if (authData) {
//            console.log("Logged In. UserID:" + authData.id);
//            cb(authData);
//        };
//    };
            
    this.login = function(user, cb){
        loginObj.$authWithPassword({
            email: user.email,
            password: user.password
        }).then(function(authData){
            cb(authData);
        });
                                   
    };
            
    this.register = function(user, cb){
        loginObj.$createUser({
            email: user.email,
            password: user.password
        }).then(function (userObj, error){
                if (error) {
                    switch (error.code) {
                        case "EMAIL_TAKEN":
                            console.log("This email is already in use");
                            break;
                        case "INVALID_EMAIL":
                            console.log("This email is not valid");
                            break;
                        default:
                            console.log("Error creating user:", error);
                    };
                } else {
                    console.log("User created successfully:", userObj.uid)
                    return loginObj.$authWithPassword({
                        email: user.email,
                        password: user.password
                    });
                };
        }).then(function (authData){
                    console.log("YOU ARE LOGGED IN!", authData);
                    
                    authData.timeStamp = new Date().toISOString();
                    authData.email = user.email;
                    firebaseLogin.child("users").child(authData.uid).set(authData);
                    cb(authData);
        });
                    
    };
    
   this.getThings = function(userId){
       return $firebase(new Firebase(firebaseUrl + 'users/' + userId + '/things')).$asArray();
  }
            
});
        