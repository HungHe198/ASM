var productsUrl = "http://localhost:3000/products";
var categoryUrl = "http://localhost:3000/category";
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
        var confirmDelete = confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?");
        if (confirmDelete) {
            $http.delete(`${productsUrl}/${id}`)
                .then(function (res) {
                    $scope.products = res.data
                }, function () {
                    alert("Lỗi số 3")
                })
        }
    }


})
app.controller("addCtrl", function ($scope, $http) {
    $scope.name = "";
    $scope.urlImage = "";
    $scope.price = "";
    $scope.categories = []
    $http.get(categoryUrl).then(
        function (res) {
            $scope.categories = res.data;
        }, function () {
            alert("lỗi số 4")
        }

    )
    $scope.addProduct = function () {
        $http.post(productsUrl,
            {
                "name": $scope.name,
                "price": $scope.price,
                "urlImage": $scope.urlImage,
                "quantity": $scope.quantity,
                "category": $scope.category,
                "description": $scope.description,
                "length": $scope.length,
                
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
    $scope.categories = []
    $http.get(categoryUrl).then(
        function (res) {
            $scope.categories = res.data;
        }, function () {
            alert("lỗi số 4")
        }

    )
    $scope.id = $routeParams.id;
    console.log($scope.id);
    $scope.obj = {};
    $http.get(productsUrl + "/" + $scope.id)
    .then(function (res) {
        $scope.obj = res.data;
        console.log($scope.obj);

    },function(){
        alert("Lỗi số 5");
        
    });
    $scope.updateProduct = function(){
        var updatedProduct = {
            name: $scope.obj.name,
            urlImage: $scope.obj.urlImage,
            price: $scope.obj.price,
            quantity: $scope.obj.quantity,
            category: $scope.obj.category,
            description: $scope.obj.description,
            length: $scope.obj.length
        };
        $http.put(productsUrl + "/" + $scope.id, updatedProduct)
        .then(function (res) {
            alert("Cập nhật thành công");
           return document.location = "#!/Mproduct"
            
        },function(){
            alert("Lỗi khi cập nhật");
        });
    }
})
