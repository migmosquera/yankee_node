var aplicacion = angular.module('yankee-app', []);
aplicacion.controller('Register', function ($scope, $http, $location, $window) {
    $scope.client = new Object();
    $scope.showSuccess = false;
    $scope.registerClient = function () {
        $http({
            method: 'POST',
            url: '/client/saveClient',
            params: {
                firstName: $scope.client.name,
                phone: $scope.client.phone,
                address: $scope.client.address,
                limit_drink: $scope.client.limit_drink,
                limit_food: $scope.client.limit_food,
                client_vip: $scope.client.vip,
            }
        }).success(function (data) {
            $scope.nameClient = data.firstName;
            $scope.client = new Object();
            $scope.showSuccess = true;
        }).error(function () {
            console.log('Error al intentar guardar el cliente.');
        });
    }
});