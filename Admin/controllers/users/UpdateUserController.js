window.updateUser = function($scope,$http,$routeParams){
    let getId = $routeParams.id;

    $scope.updateUser = (id) => {

        let flag = true;
          //Biến để kiểm tra và hiển thị lỗi
        $scope.checkValidate = {
            name: false,
            email: false,
            password: false
        }

        if(!$scope.form_user_update || !$scope.form_user_update.name){
            flag = false;
        }

        if(!$scope.form_user_update || !$scope.form_user_update.email){
            flag = false;
            $scope.checkValidate.email = true;
        }

        if(!$scope.form_user_update || !$scope.form_user_update.password){
            flag = false;
            $scope.checkValidate.password = true;
        }

        if(flag){
            $http.put(apiUser + getId, $scope.form_user_update).then(
                (response) => {$rootScope.$success = true},
                (error) => { alert(error.statusText) }
            )
            window.location.href = "#!/list-users";
        }else{
            alert('Sửa người dùng thành công');
        }
        
    }
}