let apiVoucher = 'http://localhost:3000/vouchers/';

window.ListVoucherController = function($scope,$http) {
    $http.get(apiVoucher).then(
        (response) => { $scope.listVouchers = response.data },
        (error)    => { alert(error.statusText) }
    );

}