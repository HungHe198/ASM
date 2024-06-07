var productsUrl = "http://localhost:3000/products";
app.controller("MproductCtrl", function ($scope, $http) {
    $scope.products = []
    $http.get(productsUrl).then(
        function (res) {
            $scope.products = res.data;
        }, function () {
            alert("lỗi số 1")
        }

    )
    $scope.btnDel = function (id) {
        $http.delete(`${productsUrl}/${id}`)
            .then(function (res) {
                $scope.products = res.data
            }, function () {
                alert("Lỗi số 3")
            })
    }


})
app.controller("addCtrl", function ($scope, $http) {
    $scope.name = "";
    $scope.urlImage = "";
    $scope.price = "";
    $scope.addProduct = function () {
        $http.post(productsUrl,
            {
                "name": $scope.name,
                "price": $scope.price,
                "urlImage": $scope.urlImage,
                "quantity": $scope.quantity
            }
        ).then(function (res) {
            alert("Thêm thành công!");
            return document.location = "#!/Mproduct"
        }, function () {
            alert("Lỗi số 2");
        })
    }
})
app.controller("updateCtrl", function ($scope,$http,$routeParams) {
    $scope.id = $routeParams.id;
    console.log($scope.id);
    $scope.obj = {};
    $http.get(productsUrl + "/" + $scope.id)
    .then(function (res) {
        $scope.obj = res.data;
        console.log($scope.obj);

    },function(){
        alert("Lỗi số 5");
        
    }
)
})
