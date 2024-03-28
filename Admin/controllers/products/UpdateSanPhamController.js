window.updateProduct = function($scope,$http,$routeParams) {
    let apiProducts = "http://localhost:3000/products/";

    let getId = $routeParams.id; 

    $http.get(apiProducts + getId).then(
        (response) => { $scope.form_product_update = response.data },
        (error) => {error.statusText}
    )

    console.log(getId);

    $scope.updateProduct = () => {
        
        console.log($scope.form_product_update);

        let flag = true;

        if(!$scope.form_product_update || !$scope.form_product_update.name){
            flag = false;
        }

        if(!$scope.form_product_update || !$scope.form_product_update.price){
            flag = false;
        }

        if(!$scope.form_product_update || !$scope.form_product_update.category){
            flag = false;
        }

        if(!$scope.form_product_update || !$scope.form_product_update.description){
            flag = false;
        }

        if(!$scope.form_product_update || !$scope.form_product_update.image){
            flag = false;
        }

        if(flag){
            $http.put(apiProducts + getId,$scope.form_product_update).then(
                (response) => { alert('Sửa sản phẩm thành công')},
                (error)    => { alert(error.statusText) }
            )
            window.location.href = "#!/list-products";
        }else {
            alert('Vui lòng thêm tất cả thông tin sản phẩm');
        }
       
    }
    
}