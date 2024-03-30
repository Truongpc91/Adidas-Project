window.CheckLogin = function($scope,$http,$rootScope){
    var apiUsers = "http://localhost:3000/users/";

    $http.get(apiUsers).then(
        (response) => { $scope.listUsers = response.data },
        (error)    => { error.statusText }
    );

    $scope.Login = () => {
        let flag = true;

       $scope.errorLogin = {
            email: false,
            password: false,
            non_email_password: false
       }

       $scope.successfullyLogin = {
            admin: false,
            user: false
        }

       if(!$scope.form_login || !$scope.form_login.email) {
            flag = false;
            $scope.errorLogin.email = true;
       }

       if(!$scope.form_login || !$scope.form_login.password) {
            flag = false;
            $scope.errorLogin.password = true;
        }

       if(flag){
            $scope.listUsers.find((user) => {
                if(user.email == $scope.form_login.email && user.password == $scope.form_login.password){
                    if(user.position == true){
                        $rootScope.admin = user;
                    }
                    if(user.position == false){
                        $rootScope.user = user;
                    }
                }
            });

            if(!$rootScope.user && !$rootScope.admin){
                $scope.errorLogin.non_email_password = true;
            }else{
                if($rootScope.user){
                    $scope.successfullyLogin.user = true;
                    setTimeout(() => {
                        window.location.href = "#!/"; 
                    }, 2000);   
                }
                if($rootScope.admin){
                    $scope.successfullyLogin.admin = true;
                    
                    setTimeout(() => {
                        window.location.href = "../Admin/index.html"; 
                    }, 2000);
                }
            }
       }  
    }
}
