angular.module("femdangoApp").service("loginService", function($firebaseAuth) {

    var firebaseLogin = new Firebase("https://femdango.firebaseio.com"); 
    var loginObj = $firebaseAuth(firebaseLogin);
    var that = this;
    this.user = firebaseLogin.getAuth();
    
    this.getloginObject = function(){
        return loginObj;
    };
    
    var loginCallback = function(err, authData) {
        if (err) {
            switch (err.code) {
                case "INVALID_EMAIL":
                    console.log("invalid email");
                case "INVALID_PASSWORD":
                    console.log("invalid password");
                default:
                    console.log("error logging in");
            };
        } else if (authData) {
            console.log("Logged In. UserID:" + authData.id);
            cb(authData);
        };
    };
            
    this.login = function(user, cb){
        loginObj.$authWithPassword({
            email: user.email,
            password: user.password
        }).then(function(authData){
            that.user = authData;
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
    
    this.resetPassword = function(user){
        firebaseLogin.resetPassword({
            email: user.password.email  
        }, function(error) {
            if(error) {
                switch (error.code) {
                    case "INVALID_USER":
                        console.log("This account doesn't exist");
                        break;
                    default:
                        console.log("Error resettting password:", error);
                }
            } else {
                alert("Password reset successful. Email will arrive shortly!");
                that.resetPasswordForm = true;
            }
        });
    };
    
    this.logout = function(user){
        firebaseLogin.unauth();
        console.log("logged out");
    
    };
//this will connect to movieCtrl and add/remove movie images (with links to movieIds) to the favorites array
//   this.favoriteListManage = function(movieId) {
//       if (favoritesList.movieId){
//           $remove.movieId;
//       }else {
//           $add.movieId
//       };
//       
//   }
   //this will connect to dashboard and return an array of favorites, in a slick slider.
    this.userGetFavoritesList = function(user){
        return $firebase(new Firebase(firebaseUrl + 'users/' + userId + '/favorites')).$asArray();
  }
            
});
        