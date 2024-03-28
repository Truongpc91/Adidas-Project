window.productsClient = function($scope,$http) {
    let apiProducts = "http://localhost:3000/products/";

    $http.get(apiProducts).then(
        (response) => {
            $scope.productsClient = response.data
        },
        (error)    => { error.statusText }
    )
    
}