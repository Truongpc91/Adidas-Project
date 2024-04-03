window.productsClient = function($scope,$http) {
    let apiProducts = "http://localhost:3000/products/";

    $http.get(apiProducts).then(
        (response) => {
            $scope.productsClient = response.data
        },
        (error)    => { error.statusText }
    ) 

   
}

// myApp.filterCategory('filterCategory', () => (input,category) => input.filter(product => product.category == category));

// myApp.filter('filterCategory', function(){
//     return function(input,cat){ // employee
//         let output = [];
//         input.filter((product) => {
//             if(product.category == cat){
//                 output.push(product);
//             }
//         })
//         return output;
//     }
// })