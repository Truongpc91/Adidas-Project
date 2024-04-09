let apiUser = "http://localhost:3000/users/";

window.listUsers = function($scope,$http,$rootScope,$location) {
    $http.get(apiUser).then(
        (response) => { $scope.listUsers = response.data },
        (error)    => { alert(error.statusText) }
    );

    $scope.getId = (id) => {$scope.getId = id};

    $scope.deleteUser = (id) => {
        $scope.successAction = true;

        setTimeout(() => {
            $http.delete(apiUser + id).then(
                (response) => { "#!/list-users" },
                (error)    => { alert(error.statusText) }
            ); 
        }, 2000);
    };

    $scope.showUser = (id) => {
        // for (let i = 0; i < $rootScope.listUsers.length; i++) {
        //     if ($rootScope.listUsers[i].id == id) {
        //         return $scope.user = $rootScope.listUsers[i];   
        //     }     
        // };
        $scope.listUsers.forEach((user) => {
            if (user.id == id) {
                $scope.user = user;
            }
        });
    };

    $scope.getUser = (id) => {
        $http.get(apiUser + id).then(
            (response) => { 
                $rootScope.form_user_update = response.data;
            },
            (error) => { alert(error.statusText) }
        )
    };

    $scope.resetPassword = (id) => {

        if(confirm('Tạo lại mật khẩu người dùng này ?')){
            let newPassword = {
                password: "0123456"
            }
    
            $scope.successAction = true;
    
            setTimeout(() => {
                $http.patch(apiUser + id,newPassword).then(
                    (response) => { $location.path('/list-users') },
                    (error) => { alert(error.statusText) }
                ) ;
            }, 2000);
        }
    }
}