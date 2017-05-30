var aplicacion = angular.module('yankee-app', []);
aplicacion.controller('Client', function ($scope, $http, $location,$window) {
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
          console.log(data);
          if(data == 'error'){
            console.log('usuario o contrasena incorrecta')
          }else{
            $window.location.href = '/home';
          }
        }).
        error(function() {
          alert('Error al intentar recuperar los clientes.');
        });
    };
});