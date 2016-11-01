
var cartController = function ($scope){
    $scope.cart=[
        {
            id:1000,
            name:'iphone5s',
            quantity:3,
            price:4300
        },
        {
            id:3300,
            name:'iphone6',
            quantity:80,
            price:3300
        },
        {
            id:10,
            name:'macbook',
            quantity:4,
            price:14300
        },
        {
            id:1030,
            name:'ipad',
            quantity:6,
            price:6800
        }
    ];
    /*var findIndex = function(id){
        var index=-1;
        angular.forEach($scope.cart,function(item,key){
            if(item.id===id){
                index=key;
            };
            return index;

        })
    }*/
    /* */
    $scope.totalPrice = function(){
        var total=0;
        angular.forEach($scope.cart,function(item){
            total += item.quantity * item.price;
        })
        return total;
    }


    $scope.totalQuantity = function(){
        var total=0;
        angular.forEach($scope.cart,function(item){
            total += parseInt(item.quantity);
        })
        return total;
    }

    $scope.remove = function (id){
        var index=-1;
        angular.forEach($scope.cart,function(item,key){
            if(item.id===id){
                index=key;
            };
        })
            if(index!== -1){
                $scope.cart.splice(index,1);
            }



    };
    $scope.removeAll = function(){
        var flag=confirm('确定要删除全部商品？');
        if(flag){
            $scope.cart = {};

        }

    }
    $scope.pay = function (id){
        var index=-1;
        angular.forEach($scope.cart,function(item,key){
            if(item.id===id){
                index=key;
            };
        })
            if(index!== -1){
                var flag=confirm('确定要付款？');
                if(flag){
                    $scope.cart.splice(index,1);

                }

            }



    }
    $scope.payAll = function(){
        var flag=confirm('确定要付款？');
        if(flag){
            $scope.cart = {};

        }

    };



    $scope.add = function(id){
        var index=-1;
        angular.forEach($scope.cart,function(item,key){
            if(item.id===id){
                index=key;
            };


        })
        if(index!== -1){
            ++$scope.cart[index].quantity;
        }



    }


    $scope.minus = function(id){
        var index=-1;
        angular.forEach($scope.cart,function(item,key){
            if(item.id===id){
                index=key;
            };


        })
        if(index!==-1){
            var item=$scope.cart[index];
            if(item.quantity>1){

            }
            --$scope.cart[index].quantity;
        }


    }
    $scope.$watch('cart',function(newValue,oldValue){
        angular.forEach(newValue,function(item,key){
            if(item.quantity<1){

                var flag=confirm('确定要删除该商品？');
                if(flag){
                    $scope.remove(item.id);

                }else{
                    item.quantity=oldValue[key].quantity;
                }
                return;
            }
        })
    },true);


}