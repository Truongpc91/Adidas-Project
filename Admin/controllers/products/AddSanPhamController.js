window.addProduct = function($scope,$http,$location) {
    let apiProducts = "http://localhost:3000/products/";

    let idUser = localStorage.getItem('adminId');

    $scope.addProduct = () => {

        let flag = true;

        $scope.validate = {
            name:       false,
            price:      false,
            invalid_price: false,
            description:false,
            category:   false,
            image:      false,
        }

        if(!$scope.form_product || !$scope.form_product.name){
            flag = false;
            $scope.validate.name = true;
        }

        if(!$scope.form_product || !$scope.form_product.price){
            flag = false;
            $scope.validate.price = true;
        }else if(!$scope.form_product || isNaN($scope.form_product.price)){
            flag = false;
            $scope.validate.invalid_price = true;
        }

        if(!$scope.form_product || !$scope.form_product.category){
            flag = false;
            $scope.validate.category = true;
        }

        if(!$scope.form_product || !$scope.form_product.description){
            flag = false;
            $scope.validate.description = true;
        }

        if(!$scope.form_product || !$scope.form_product.image){
            flag = false;
            $scope.validate.image = true;
        }

        if(flag){
            let product = {
                name:$scope.form_product.name,
                price:$scope.form_product.price,
                description:$scope.form_product.description,
                category:$scope.form_product.category,
                image:$scope.form_product.image,
                idUser:idUser
            }

            $scope.successAddProduct = true;

            setTimeout(() => {
                $http.post(apiProducts,$scope.form_product).then(
                    (response) => { $location.path("/list-products") },
                    (error)    => { alert(error.statusText) }
                );
            }, 2000);

           

        }
       
    }
    
}