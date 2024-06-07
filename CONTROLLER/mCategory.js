var categoryUrl = "http://localhost:3000/category";
app.controller("categoryCtrl", function ($scope, $http) {
    $scope.categorys = []
    $http.get(categoryUrl).then(
        function (res) {
            $scope.categorys = res.data;
        }, function () {
            alert("lỗi số 4")
        }

    )
    $scope.btnDel = function (id) {
        $http.delete(`${categoryUrl}/${id}`)
            .then(function (res) {
                $scope.products = res.data
            }, function () {
                alert("Lỗi số 3")
            })
    }


})
app.controller("AddCategoryCtrl", function ($scope, $http) {
    $scope.name = "";
    $scope.length = "";
    $scope.addCategory = function () {
        $http.post(categoryUrl, {
            "name": $scope.name,
            "length": $scope.length
        }).then(function (res) {
            alert("Thêm thành công")
            return document.location = "#!/MCategory"
        }, function () {
            alert("lỗi số 6");
        })

    }
});
