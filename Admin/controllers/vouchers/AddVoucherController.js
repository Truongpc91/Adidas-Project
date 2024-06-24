// let apiVoucher = 'http://localhost:3000/vouchers';

window.AddVoucherController = function ($scope, $http) {
  $scope.addVoucher = () => {
    let fomatDate = $scope.form_voucher.dateTime.toISOString().split("T")[0];

    let Voucher = {
      code: $scope.form_voucher.code,
      name: $scope.form_voucher.name,
      discountLevel: $scope.form_voucher.discountLevel,
      category: $scope.form_voucher.category,
      dateTime: fomatDate,
    };

    $http.post(apiVoucher, Voucher).then(
      (response) => {
        alert("Thêm thành công mã giảm giá");
      },
      (error) => {
        alert(error.statusText);
      }
    );
    window.location.href = "#!/list-voucher";

    // //Biến kiểm tra trống
    // let flag = true;

    // //Kiểm tra trống
    // if(!$scope.form_user || !$scope.form_user.name){
    //     flag = false;
    //     // $scope.checkValidate.name = true;
    // }

    // if(!$scope.form_user || !$scope.form_user.email){
    //     flag = false;
    //     // $scope.checkValidate.email = true;
    // }

    // if(!$scope.form_user || !$scope.form_user.password){
    //     flag = false;
    //     // $scope.checkValidate.password = true;
    // }

    // if(flag) {
    //     $http.post(apiUser, $scope.form_user).then(
    //         (response) => {alert('Thêm thành công người dùng')},
    //         (error)    => { alert(error.statusText) }
    //     );
    //     window.location.href = "#!/list-users";
    // }
  };
};
