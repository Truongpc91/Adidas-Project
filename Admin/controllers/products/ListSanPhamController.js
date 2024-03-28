window.listProducts = function($scope,$http,$routeParams) {
    let apiProducts = "http://localhost:3000/products/";

    $scope.hideDescription = false;

    $http.get(apiProducts).then(
        (response) => { $scope.listProducts = response.data },
        (error)    => { alert(error.statusText) }
    )
    
    $scope.getId = (id) => {
        $scope.getId = id;
        console.log($scope.getId);
    }

    $scope.deleteProduct = (id) => {
        $http.delete(apiProducts + id).then(
            (response) => { alert('Xóa sản phẩm thành công') },
            (error)    => { alert(error.statusText) }
        ) 
    }
}