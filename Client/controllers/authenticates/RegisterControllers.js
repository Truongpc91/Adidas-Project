window.registerUserControllers = function($scope,$http,$location) {
    var apiUsers = "http://localhost:3000/users/";

    $http.get(apiUsers).then(
        (response) => { $scope.listUsers = response.data },
        (error)    => { error.statusText }
    )

    $scope.register = () => {
        console.log($scope.form_register);

        let flag = true;

        $scope.errorRegister = {
            name: false,
            email: false,
            password: false,
            user_exists: false,
        }

       $scope.successfullyRegister = {
            successfullyRegister: false,
        }

        if(!$scope.form_register || !$scope.form_register.name) {
            flag = false;
            $scope.errorRegister.name = true;
       }

       if(!$scope.form_register || !$scope.form_register.email) {
            flag = false;
            $scope.errorRegister.email = true;
       }

       if(!$scope.form_register || !$scope.form_register.password) {
            flag = false;
            $scope.errorRegister.password = true;
        }

        if(flag) {
            $http.get(apiUsers+"?email="+$scope.form_register.email).then(
                (response) => {
                    console.log(response.data); 
                    if(response.data != []){
                        $scope.successfullyRegister.successfullyRegister = true;
                            setTimeout(() => {
                                $http.post(apiUsers, $scope.form_register).then(
                                    (response) => { $location.path('/login'); },
                                    (error)   =>  { error.statusText }
                                )
                            }, 1000);   
                    }else{
                        console.log(response.data);
                        $scope.errorRegister.user_exists = true;    
                    }
                 },
                (error)   =>  { error.statusText }
            );
            // $scope.listUsers.find((user) => {
            //     if(user.email == $scope.form_register.email){
            //         if(user){
            //             console.log('k được thêm');
            //         }else{
            //             console.log('được thêm'); 
            //         }
            //     }
            // });
        }  
    }
}
