var aplicacion = angular.module('yankee-app', []);
aplicacion.controller('Login', function ($scope, $http, $location, $window) {
    $scope.user = new Object();
    $scope.erroPass = false;
    $scope.erroUser = false
    $scope.login = function () {
        if ($scope.user.username == undefined) {
            $scope.erroUser = true;
        }
        if ($scope.user.password == undefined) {
            $scope.erroPass = true;
        } 
        if ($scope.user.password != undefined && $scope.user.username != undefined ) {
            $http({
                method: 'post',
                url: '/login',
                params: {
                    username: $scope.user.username,
                    password: $scope.user.password,
                }
            })
                .success(function (data) {
                    if (data == 'error') {
                        $scope.errorLogin = "Usuario o Contraseña incorrecta"
                    } else {
                        $window.location.href = '/home';
                    }
                }).
                error(function () {
                    alert('Error al intentar recuperar los clientes.');
                });
        }
    };
});
