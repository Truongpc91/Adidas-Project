myApp.controller('headerAdmin', function($scope){
    $scope.Logout = () => {
        if(confirm("Bạn muốn đăng xuất ?")) {
            localStorage.removeItem("adminId");
            localStorage.removeItem("adminName");
            window.location.href = "./"
        }
    }
})