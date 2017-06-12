var aplicacion = angular.module('yankee-app', []);
aplicacion.controller('Register', function ($scope, $http, $location, $window) {
    $scope.client = new Object();
    $scope.searchClient = new Object();
    $scope.showSuccess = false;
    $scope.errorUserSave = false;
    $scope.errorPhoneSave = false;
    $scope.errorLimit_drink = false;
    $scope.errorLimit_food = false
    $scope.seachClient = function () {
        $http({
            method: 'get',
            url: '/client/searchClientByName',

        }).success(function (data) {
            $scope.searchClient = data
        }).error(function () {
            console.log('Error al intentar guardar el cliente.');
        });
    }
    $scope.recoveryClient = function (data) {
        $scope.client.id = $scope.searchClient.searchClient.id;
        $scope.client.name = $scope.searchClient.searchClient.firstName;
        $scope.client.phone = $scope.searchClient.searchClient.phone;
        $scope.client.address = $scope.searchClient.searchClient.address;
        $scope.client.vip = $scope.searchClient.searchClient.client_vip;
        $scope.client.limit_drink = $scope.searchClient.searchClient.limit_drink;
        $scope.client.limit_food = $scope.searchClient.searchClient.limit_food;
    }
    $scope.clearClient = function () {
        $scope.client = new Object();
        $scope.containerDelete = false;
    }
    $scope.registerClient = function (id) {
        if ($scope.client.name == undefined) {
            console.log("paso por aqui 1");
            $scope.errorUserSave = true;
        }
        if ($scope.client.phone == undefined) {
            console.log("paso por aqui 2");
            $scope.errorPhoneSave = true;
        }
        if ($scope.client.name != undefined && $scope.client.phone != undefined) {
            $http({
                method: 'POST',
                url: '/client/saveClient',
                params: {
                    id: $scope.client.id,
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
                $scope.searchClient = new Object();
                $scope.showSuccess = true;
                $scope.seachClient();
            }).error(function () {
                console.log('Error al intentar guardar el cliente.');
            });
        }
    }
});