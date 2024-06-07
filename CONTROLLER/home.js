var productsUrl = "http://localhost:3000/products";
app.controller("homeCtrl", function ($scope,$http) {
    $scope.products = []
    $http.get(productsUrl).then(
        function (res) {
            $scope.products = res.data;
        },function(){
            alert("lỗi số 1")
        }
    )
})