window.ListBillControllers = function($scope,$http,$location) {
    let apiBills = "http://localhost:3000/bills/";

    $http.get(apiBills).then(
        (response) => { $scope.listBills = response.data },
        (error)    => { error.statusText }
    );

    $scope.confirmBills = (id) => {
        if(confirm("Xác nhận đơn hàng này ?")){
            let statusNew = {
                status: 1
            }

            $http.patch(apiBills + id, statusNew).then(
                (response) => { $location.path('/list-bills')},
                (error)    => { error.statusText }
            );
        }
    }

    $scope.detailBillProducts = (id) => {
        $http.get(apiBills + id).then(
            (response) => { $scope.detailBill = response.data.details },
            (error)    => { error.statusText }
        );
        // console.log($scope.bill);
    }

    $scope.deleteBill = (id) => {
        if(confirm("Bạn có muốn xóa ?")){
            $http.delete(apiBills + id).then(
                (response) => { $location.path('/list-bills') },
                (error)    => { error.statusText }
            );
        }
    }
}