var billUrl = "http://localhost:3000/bill";
var productUrl = "http://localhost:3000/products";
app.controller("CheckCtrl", function ($scope, $http, $routeParams) {
    //lấy id với mã
    $scope.id = $routeParams.id;
    console.log($scope.id)
    $scope.obj = {};
    $http.get(productUrl + "/" + $scope.id)
        .then(function (res) {
            $scope.obj = res.data;
            console.log($scope.obj);

        }, function () {
            alert("Lỗi số 9")
        })
    $scope.$watch('totalQuantity', function (newValue, oldValue) {
        if (newValue !== oldValue) {
            $scope.totalPrice = $scope.totalQuantity * $scope.obj.price;
        }
    });
    $scope.checkQuantity = function () {
        if ($scope.totalQuantity <= $scope.obj.quantity ) {
            $scope.quantityExceeded = true;
            console.log($scope.quantityExceeded)
            $http.post(billUrl,
                {
                    "name": $scope.Fullname,
                    "email": $scope.email,
                    "phoneNumber": $scope.phoneNumber,
                    "address": $scope.address,
                    "nameProduct": $scope.obj.name,
                    "totalQuantity": $scope.totalQuantity,
                    "price": $scope.obj.price,
                    "TotalPrice": $scope.totalPrice
                }

            ).then(function () {
                alert("Mua thành công");
                return document.location = "#!/";
            }, function () {
                alert("Lỗi số 11");
            })
            $scope.quantityNum = $scope.obj.quantity - $scope.totalQuantity;

            var updatedProduct = {
                name: $scope.obj.name,
                urlImage: $scope.obj.urlImage,
                price: $scope.obj.price,
                quantity: $scope.quantityNum,
                category: $scope.obj.category,
                description: $scope.obj.description,
                length: $scope.obj.length
            };
            $http.put(productsUrl + "/" + $scope.id, updatedProduct)
                .then(function (res) {
                    alert("Cập nhật thành công");
                    return document.location = "#!/Mproduct"

                }, function () {
                    alert("Lỗi khi cập nhật");
                });



        } else {
            $scope.quantityExceeded = false;
            console.log($scope.quantityExceeded)
            alert("Nhập số lượng nhỏ hơn hoặc bằng " + $scope.obj.quantity)
            $scope.totalQuantity = "";
        }
    };

})
app.controller("BillCtrl",function ($scope,$http) {
    $scope.bills = []
    $http.get(billUrl).then(
        function (res) {
            $scope.bills = res.data;
        }, function () {
            alert("npx json-server db.json")
        }
    )
})