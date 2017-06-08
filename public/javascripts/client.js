var aplicacion = angular.module('yankee-app', []);
aplicacion.controller('Client', function ($scope, $http, $location, $window) {
    $scope.client = new Object();
    $scope.searchClient =  new Object();
    $scope.showSuccess = false;
    $scope.containerDelete = false;
    $scope.seachClient = function (){
        $http({
            method: 'get',
            url: '/client/searchClientByName',
            
        }).success(function (data) {
            console.log(data)
            $scope.searchClient = data
        }).error(function () {
            console.log('Error al intentar guardar el cliente.');
        });
    }
    $scope.recoveryClient = function (data){
        $scope.client.id = $scope.searchClient.searchClient.id;
        $scope.client.name = $scope.searchClient.searchClient.firstName;
        $scope.client.phone = $scope.searchClient.searchClient.phone;
        $scope.client.address = $scope.searchClient.searchClient.address;
        $scope.client.vip = $scope.searchClient.searchClient.client_vip;
        $scope.client.limit_drink = $scope.searchClient.searchClient.limit_drink;
        $scope.client.limit_food = $scope.searchClient.searchClient.limit_food;
        $scope.containerDelete = true;
    }
    $scope.registerClient = function (id) {
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
            $scope.searchClient =  new Object();
            $scope.showSuccess = true;
            $scope.seachClient();
            $scope.containerDelete = false;
        }).error(function () {
            console.log('Error al intentar guardar el cliente.');
        });
    }
    $scope.clearClient = function () {
        $scope.client = new Object();
        $scope.containerDelete = false;
    }
    $scope.deleteClient = function () {

        $http({
            method: 'POST',
            url: '/client/deleteClient',
            params: {
                id: $scope.client.id
            }
        }).
            success(function (data) {
                if (data == 'ok') {
                    $scope.clearClient();
                    $scope.seachClient();
                } else {
                    alert('Error al intentar eliminar el cliente.');
                }
            }).
            error(function () {
                alert('Error al intentar eliminar el cliente.');
            });
    }
});