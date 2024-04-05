window.addProduct = function($scope,$http,$location) {
    let apiProducts = "http://localhost:3000/products/";

    $scope.addProduct = () => {

        let flag = true;

        if(!$scope.form_product || !$scope.form_product.name){
            flag = false;
        }

        if(!$scope.form_product || !$scope.form_product.price){
            flag = false;
        }

        if(!$scope.form_product || !$scope.form_product.category){
            flag = false;
        }

        if(!$scope.form_product || !$scope.form_product.description){
            flag = false;
        }

        if(!$scope.form_product || !$scope.form_product.image){
            flag = false;
        }

        if(flag){
            $http.post(apiProducts,$scope.form_product).then(
                (response) => { alert('Thêm mới sản phẩm thành công')},
                (error)    => { alert(error.statusText) }
            )
            $location.path("/list-products");
        }else {
            alert('Vui lòng thêm tất cả thông tin sản phẩm');
        }
       
    }
    
}