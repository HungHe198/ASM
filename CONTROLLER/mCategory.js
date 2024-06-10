var categoryUrl = "http://localhost:3000/category";
app.controller("categoryCtrl", function ($scope, $http) {
    $scope.categories = []
    $http.get(categoryUrl).then(
        function (res) {
            $scope.categories = res.data;
        }, function () {
            alert("lỗi số 4")
        }

    )
    $scope.btnDel = function (id) {
        var confirmDelete = confirm("Bạn có chắc chắn muốn xóa danh mục này không?");
        if (confirmDelete) {

            $http.delete(`${categoryUrl}/${id}`)
                .then(function (res) {
                    $scope.products = res.data
                }, function () {
                    alert("Lỗi số 3")
                })
        }
    }


})
app.controller("AddCategoryCtrl", function ($scope, $http) {
    $scope.name = "";
    $scope.addCategory = function () {
        $http.post(categoryUrl, {
            "name": $scope.name,
        }).then(function (res) {
            alert("Thêm thành công")
            return document.location = "#!/MCategory"
        }, function () {
            alert("lỗi số 6");
        })

    }
});
app.controller("UCategoryCtrl", function ($scope, $routeParams, $http) {
    $scope.id = $routeParams.id;
    console.log($scope.id);
    $scope.obj = {};
    $http.get(categoryUrl + "/" + $scope.id)
        .then(function (res) {
            $scope.obj = res.data;
            console.log($scope.obj);

        }, function () {
            alert("Lỗi số 7")
        })
    $scope.updateCategory = function () {
        var updateCategory = {
            name: $scope.obj.name
        };
        $http.put(categoryUrl + "/" + $scope.id, updateCategory)
            .then(function (res) {
                alert("Cập nhật thành công");
                return document.location = "#!/MCategory"
            }, function(){
                alert("Lỗi số 8");
            })


    }
})
