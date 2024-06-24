let apiVoucher = 'http://localhost:3000/vouchers/';
let apiUser = 'http://localhost:3000/users/';

window.voucherController = function($scope,$http) {
    $http.get(apiVoucher).then(
        (response) => { $scope.listVouchers = response.data },
        (error)    => { alert(error.statusText) }
    );

    let idUser = localStorage.getItem('userId');

    $http.get(apiUser + idUser).then(
        (response) => { $scope.user = response.data },
        (error)    => { alert(error.statusText) }
    );

    $scope.takenVoucher = (id) => {
        console.log(id);
        console.log(idUser);

        let prevVoucherTaken = $scope.user.voucherTaken;
        
        let newVoucherTaken = {
            ...prevVoucherTaken,
            id
        }

        console.log(newVoucherTaken);

        let userNewVoucher = {
            name: $scope.user.name,
            email: $scope.user.email,
            password: $scope.user.password,
            position: $scope.user.position,
            voucherTaken: newVoucherTaken
        }

        console.log(userNewVoucher);
    }
}