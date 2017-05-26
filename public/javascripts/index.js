var aplicacion = angular.module('yankee-app', []);
aplicacion.controller('Login', function ($scope, $http) {
    $scope.user = new Object();
    $scope.login = function () {
        $http({
         method: 'post', 
         url: '/login', 
         params: {
                username: $scope.user.username,
                password: $scope.user.password,
            }
        })
        .success(function (data) {
            console.log(data)
            console.log("llego aqui")
        }).
        error(function() {
            alert('Error al intentar recuperar los clientes.');
        });
    };
});