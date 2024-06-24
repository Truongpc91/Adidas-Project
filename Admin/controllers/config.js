myApp.filter('filterStatus', function(){
   return function(input) {
    return input == 0 ? "Đơn hàng mới" : "Đã xác nhận" 
   }
});

myApp.filter('filterMethodPayment', function(){
    return function(input) {
     if(input == "cash"){
        return "Tiền mặt"
     }else if(input == "visa"){
        return "Thẻ Visa"
     }
     else{
        return "Chuyển khoản"
     }
    }
 })

 myApp.filter('filterCategoryVouchers', function(){
   return function(input) {
    if(input == 0){
       return "Giảm tiền mặt"
    }
    else{
       return "Phần trăm giá"
    }
   }
})


