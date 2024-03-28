let apiUser = "http://localhost:3000/users/";

window.listUsers = function($scope,$http,$rootScope) {
    $http.get(apiUser).then(
        (response) => { $scope.listUsers = response.data },
        (error)    => { alert(error.statusText) }
    );

    $scope.getId = (id) => {$scope.getId = id};

    $scope.deleteUser = (id) => {
        $http.delete(apiUser + id).then(
            (response) => { "#!/list-users" },
            (error)    => { alert(error.statusText) }
        ); 
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
    }
}