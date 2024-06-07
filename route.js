var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Home/home.html",
            controller: "homeCtrl"
        })
        .when("/login",
            {
                templateUrl: "sign-in/login.html",
                controller: "loginCtrl"
            }
        )
        .when("/logup", {
            templateUrl: "sign-in/logup.html",
            controller: "logupCtrl"
        })
        .when("/user",
            {
                templateUrl: "User/User.html",
                controller: "userCtrl"
            })
        .when("/Mproduct", {
            templateUrl: "product/ProductManagement.html",
            controller: "MproductCtrl"
        })
        .when("/Mproduct/add", {
            templateUrl: "product/addProduct.html",
            controller: "addCtrl"
        })
        .when("/Mproduct/update/:id", {
            templateUrl: "product/updateProduct.html",
            controller: "updateCtrl"
        })
        .when("/MCategory", {
            templateUrl: "product/MCategory.html",
            controller: "categoryCtrl"
        })
        .when("/MCategory/add", {
            templateUrl: "product/addCategory.html",
            controller: "AddCategoryCtrl"
        })
        .otherwise({
            redirectTo: "/",
        })
})