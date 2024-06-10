

var productsUrl = "http://localhost:3000/products";
app.controller("homeCtrl", function ($scope, $http) {
    $scope.products = []
    $http.get(productsUrl).then(
        function (res) {
            $scope.products = res.data;
        }, function () {
            alert("npx json-server db.json")
        }
    )
})
app.controller("PDCtrl", function ($scope, $routeParams, $http) {
    $scope.id = $routeParams.id;
    console.log($scope.id);
    $scope.obj = {};
    $http.get(productsUrl + "/" + $scope.id)
        .then(function (res) {
            $scope.obj = res.data;
            console.log($scope.obj);

        }, function () {
            alert("Lỗi số 5");

        });
})
