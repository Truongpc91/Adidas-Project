window.detailProduct = function($scope,$http,$routeParams,$location){
    let apiUsers = "http://localhost:3000/products/";
    let apiCart =  "http://localhost:3000/cart/";

    let getId = $routeParams.id;
    $scope.userId = localStorage.getItem("userId");

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

    $scope.productInCart = {
        name:"",
        price:"",
        quantity:"",
        image:"",
        userId:""
    };

    $scope.addToCart = (idProduct) => {
        $scope.listProducts.find((product) => {
            if(product.id == idProduct){
                $scope.productInCart = {
                    name:       product.name,
                    price:      product.price,
                    quantity:   $scope.quantityProductCart,
                    image:      product.image,
                    userId:     $scope.userId
                };
                $http.post(apiCart,$scope.productInCart).then(
                    (response) => { window.location.href = "#!/" },
                    (error) => { error.statusText}      
                )
            }
        })
        
    }

}