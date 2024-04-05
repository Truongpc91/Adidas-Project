myApp.controller("header", function ($scope) {
    $scope.userId = localStorage.getItem("userId");
    $scope.name = localStorage.getItem("userName");
    console.log($scope.name);

    $scope.Logout = () => {
        if(confirm("Bạn muốn đăng xuất ?")) {
            localStorage.removeItem("userName");
            localStorage.removeItem("userId");
    
            window.location.href = "#!/login";
        }   
    }
});
