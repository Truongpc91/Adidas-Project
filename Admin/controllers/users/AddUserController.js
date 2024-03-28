window.addUser = function($scope,$http,$rootScope){

    $scope.addUser = () => {
        //Biến kiểm tra trống
        let flag = true;

        // //Biến để kiểm tra và hiển thị lỗi
        // $scope.checkValidate = {
        //     name: false,
        //     email: false,
        //     password: false
        // }

        //Kiểm tra trống
        if(!$scope.form_user || !$scope.form_user.name){
            flag = false;
            // $scope.checkValidate.name = true;
        }

        if(!$scope.form_user || !$scope.form_user.email){
            flag = false;
            // $scope.checkValidate.email = true;
        }

        if(!$scope.form_user || !$scope.form_user.password){
            flag = false;
            // $scope.checkValidate.password = true;
        }
        
        if(flag) {
            $http.post(apiUser, $scope.form_user).then(
                (response) => {alert('Thêm thành công người dùng')},
                (error)    => { alert(error.statusText) }
            );
            window.location.href = "#!/list-users";
        }
    }
};
