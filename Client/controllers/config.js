myApp.filter('filterCategory', function(){
    return function(input,cat){ 
        let output = [];
        input.filter((product) => {
            if(product.category == cat){
                output.push(product);
            }
        })
        return output;
    }
})