window.detailProduct = function($scope,$http,$routeParams,$location){
    let apiProduct = "http://localhost:3000/products/";
    let apiCart =  "http://localhost:3000/cart/";

    let getId = $routeParams.id;

    $scope.userId = localStorage.getItem("userId");

    $http.get(apiProduct).then(
        (response) => { $scope.listProducts = response.data },
        (error)    => { error.statusText }  
    );

    $http.get(apiCart + "?userId=" + $scope.userId).then(
        (response) => { $scope.listCartbyUserId = response.data },
        (error)    => { error.statusText }  
    );


    $http.get(apiProduct + getId).then(
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
        idProduct: "",
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
                    idProduct:  product.id,
                    name:       product.name,
                    price:      product.price,
                    quantity:   $scope.quantityProductCart,
                    image:      product.image,
                    userId:     $scope.userId
                };
                
                $http.post(apiCart,$scope.productInCart).then(
                    (response) => { $location.path(`/product/detail/${getId}`) },
                    (error) => { error.statusText}      
                )
                // let updateQuantity = {
                //     quantity:   $scope.quantityProductCart
                // }
            //    for (let i = 0; i < $scope.listCartbyUserId.length; i++) {
            //     if($scope.listCartbyUserId[i].idProduct == $scope.productInCart.idProduct){
            //         console.log($scope.listCartbyUserId[i]);
            //         // $http.patch(apiCart,$scope.productInCart).then(
            //         //     (response) => { $location.path(`/product/detail/${getId}`) },
            //         //     (error) => { error.statusText} 
            //         // )
            //         console.log("sửa");
            //         break;
            //     }else if($scope.listCartbyUserId[i].idProduct != $scope.productInCart.idProduct){
            //         //  $http.post(apiCart,$scope.productInCart).then(
            //         //     (response) => { $location.path(`/product/detail/${getId}`) },
            //         //     (error) => { error.statusText}      
            //         // )
            //         console.log("thêm");
            //     }
            //     // if($scope.listCartbyUserId[i].idProduct != $scope.productInCart.idProduct){
            //     //     // $http.post(apiCart,$scope.productInCart).then(
            //     //     //     (response) => { $location.path(`/product/detail/${getId}`) },
            //     //     //     (error) => { error.statusText}      
            //     //     // )
            //     //     console.log("thêm");
            //     // }
            //    }

            // $scope.listCartbyUserId.map((product) => {
            //     if(product.idProduct == $scope.productInCart.idProduct){
            //         console.log("update");
            //     }else{
            //         console.log("thêm mới");
            //     }
            // })
               
            }
        }) 
    }

    $scope.addToCartFastSee = (idProductFastSee) => {
        $scope.listProducts.find((product) => {
            if(product.id == idProductFastSee){
                $scope.productInCart = {
                    idProduct:  product.id,
                    name:       product.name,
                    price:      product.price,
                    quantity:   $scope.quantityProductCart,
                    image:      product.image,
                    userId:     $scope.userId
                };
                console.log($scope.productInCart);
                $http.post(apiCart,$scope.productInCart).then(
                    (response) => { $location.path(`/product/detail/${getId}`) },
                    (error) => { error.statusText}      
                )
            }
        }) 
    }

}