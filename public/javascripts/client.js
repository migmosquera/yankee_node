var aplicacion = angular.module('yankee-app', []);
aplicacion.controller('Client', function ($scope, $http, $location, $window) {
    $scope.client = new Object();
    $scope.typeClient = new Object();
    $scope.searchTypeClient = function () {
        $http({
            method: 'GET', url: '/client/listar'
        })
            .success(function (data) {
                $scope.typeClient = data
            }).
            error(function () {
                console.log('Error al intentar recuperar los clientes.');
            });
    }
    $scope.registerClient = function () {
        $http({
            method: 'POST',
            url: '/client/saveClient',
            params: {
                firstName: $scope.client.firtName,
                lastName: $scope.client.lastName,
                dni: $scope.client.dni,
                phone: $scope.client.phone,
                limit: $scope.client.limit,
                typeClient: $scope.typeClient.typeClient.id,
            }
        }).success(function (data) {
            $scope.client = new Object();
        }).error(function () {
            console.log('Error al intentar guardar el cliente.');
        });
    }
});