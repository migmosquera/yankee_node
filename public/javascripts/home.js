var aplicacion = angular.module('yankee-app', []);
aplicacion.controller('Register', function ($scope, $http, $location, $window) {
    $scope.client = new Object();
    $scope.registerClient = function () {
        $http({
            method: 'POST',
            url: '/client/saveClient',
            params: {
                firstName: $scope.client.firtName,
                phone: $scope.client.phone,
                address: $scope.client.address,
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