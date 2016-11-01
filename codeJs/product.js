
angular.module('product',[])
.service('productData',function(){
        return[
            {
                id:1,
                img:'../img/vivo.png',
                name:'vivo X7 Plus 全网通4G大屏手机 vivox7plus ',
                proceeds:1221,
                price:5400
            },
            {
                id:2,
                img:'../img/honor.png',
                name:'【新品发布】honor/荣耀 荣耀 NOTE 8 4G智能手机 官方正品',
                proceeds:982,
                price:22890
            },
            {
                id:3,
                img:'../img/oneplus.png',
                name:'OnePlus/一加 A3000一加手机3',
                proceeds:9833,
                price:2899
            },
            {
                id:4,
                img:'../img/oppo.png',
                name:'OPPO A59m全网通正面指纹识别拍照手机oppo a59m',
                proceeds:1799,
                price:4400
            },
            {
                id:5,
                img:'../img/vivo.png',
                name:'vivo X7 Plus 全网通4G大屏手机 vivox7plus ',
                proceeds:1221,
                price:5400
            },
            {
                id:6,
                img:'../img/honor.png',
                name:'【新品发布】honor/荣耀 荣耀 NOTE 8 4G智能手机 官方正品',
                proceeds:982,
                price:2289
            },
            {
                id:7,
                img:'../img/oneplus.png',
                name:'OnePlus/一加 A3000一加手机3',
                proceeds:9833,
                price:2899
            },
            {
                id:8,
                img:'../img/oppo.png',
                name:'OPPO A59m全网通正面指纹识别拍照手机oppo a59m',
                proceeds:1799,
                price:4400
            },
            {
                id:9,
                img:'../img/vivo.png',
                name:'vivo X7 Plus 全网通4G大屏手机 vivox7plus ',
                proceeds:1221,
                price:5400
            },
            {
                id:10,
                img:'../img/honor.png',
                name:'【新品发布】honor/荣耀 荣耀 NOTE 8 4G智能手机 官方正品',
                proceeds:982,
                price:2289
            },
            {
                id:11,
                img:'../img/oneplus.png',
                name:'OnePlus/一加 A3000一加手机3',
                proceeds:9833,
                price:2899
            },
            {
                id:12,
                img:'../img/oppo.png',
                name:'OPPO A59m全网通正面指纹识别拍照手机oppo a59m',
                proceeds:1799,
                price:4400
            },
        ]
    })
.controller('productController',function($scope,productData){
        $scope.productData=productData;
        $scope,ordeType='proceeds';
        $scope.order='-';
        $scope.changeOrder = function(type){
                $scope.orderType=type;
                if($scope.order===''){
                    $scope.order='-';
                }else{
                    $scope.order='';
                }
        };
        $scope.changeOrderByproceeds = function(){
            $scope.orderType='proceeds';
            $scope.order='-';

        };
    });