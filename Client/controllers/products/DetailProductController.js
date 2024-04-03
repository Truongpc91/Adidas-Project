window.detailProduct = function($scope,$http,$routeParams){
    let apiUsers = "http://localhost:3000/products/";

    let getId = $routeParams.id;

    $http.get(apiUsers).then(
        (response) => { $scope.listProducts = response.data },
        (error)    => { error.statusText }  
    );


    $http.get(apiUsers + getId).then(
        (response) => { $scope.product = response.data },
        (error)    => { error.statusText }  
    );
    
    $scope.detailProduct_EndPage = (id) => {
        $scope.listProducts.filter((product) => {
           if(product.id == id){
               $scope.productDetailCategory = product;
           }
        })
    }

}