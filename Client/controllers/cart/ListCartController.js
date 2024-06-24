window.listCart = function($scope,$http,$location) {
    let apiCart =  "http://localhost:3000/cart/";
    let apiBill = "http://localhost:3000/bills/";
    let apiVoucher = "http://localhost:3000/vouchers/";

    $scope.actionSuccess = false;
    var totalAmount = 0;
    var coutPrice = 0;

    let voucherCode = $scope.voucherCode;

    console.log(voucherCode);
    
    $scope.listProductInCart = [];

    $scope.userId = localStorage.getItem("userId");
    
    $http.get(apiCart).then(
        (response) => { 
           response.data.filter((item) => {
            if(item.userId == $scope.userId) {
                $scope.listProductInCart.push(item);              
            }
           });
           for (let i = 0; i < $scope.listProductInCart.length; i++) {
                coutPrice = $scope.listProductInCart[i].price * $scope.listProductInCart[i].quantity; 
                totalAmount += coutPrice;
                $scope.totalAmount = totalAmount;
           };
         },
        (error)    => { error.statusText }
    );

    $scope.deleteProductCart = (id) =>{
        if(confirm('Bạn muốn xóa sản phẩm này khỏi giỏ hàng ?')) {
            $scope.actionSuccess = true;

            setTimeout(() => {
                $http.delete(apiCart + id).then(
                    (response) => { $location.path("/cart-list")},
                    (error)    => { error.statusText }
                ); 
            }, 1000);
        }   
    };

    $scope.updateCart = (quantity,id) => {
        let newQuantity = {
            quantity: quantity
        }
        $http.patch(apiCart + id,newQuantity).then(
            (response) => { $location.path('/cart-list') },
            (error)    => { error.statusText }
        );
    };

    $scope.OrderSuccessfully = false;

    let date = new Date();

    $scope.confirmPayment = () => {
        console.log( typeof $scope.methodpayment);
        console.log($scope.voucherCode);

        // $scope.billProducts = {
        //     userId: $scope.userId,
        //     totalPrice: $scope.totalAmount,
        //     methodPayment: $scope.methodpayment,
        //     status: 0,
        //     dateTime: `${date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()} - ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`,
        //     details: $scope.listProductInCart,
        // };
        // if($scope.listProductInCart.length == 0){
        //     alert('Không có gì trong giỏ hàng');
        // }else{
        //     $scope.OrderSuccessfully = true;
        //     setTimeout(() => {
        //         $http.post(apiBill, $scope.billProducts).then(
        //             (response) => { 
        //                 for (let i = 0; i < $scope.listProductInCart.length; i++) {
        //                     $http.delete(apiCart + $scope.listProductInCart[i].id).then(
        //                         (response) => { $location.path('/confirm-bill') },
        //                         (error)  => { error.statusText }
        //                     )
        //                 }
        //             },
        //             (error) => { error.statusText }
        //         );
        //     }, 2000);
        // }  
    }
}