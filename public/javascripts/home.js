var aplicacion = angular.module('yankee-app', []);
aplicacion.controller('Register', function ($scope, $http, $location, $window) {
    $scope.client = new Object();
    $scope.searchClient =  new Object();
    $scope.showSuccess = false;
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
    }
    $scope.registerClient = function (id) {
        console.log($scope.client.id);
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
            $scope.showSuccess = true;
        }).error(function () {
            console.log('Error al intentar guardar el cliente.');
        });
    }
});