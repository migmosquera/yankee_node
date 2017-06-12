var aplicacion = angular.module('yankee-app', []);
aplicacion.controller('User', function ($scope, $http, $location, $window) {
    $scope.user = new Object();
    $scope.typeUser =  new Object();
    $scope.searchUser =  new Object();
    $scope.showSuccess = false;
    $scope.containerDelete = false;
    $scope.searchUser = function (){
        $http({
            method: 'get',
            url: '/user/searchUser',
            
        }).success(function (data) {
            $scope.searchUser = data;
        }).error(function () {
            console.log('Error al intentar guardar el cliente.');
        });
    };
    $scope.searchTypeUser = function (){
        $http({
            method: 'get',
            url: '/user/searchTypeUser',
            
        }).success(function (data) {
            $scope.typeUser = data;
        }).error(function () {
            console.log('Error al intentar guardar el cliente.');
        });
    }
    $scope.registerUser = function () {
        console.log($scope.searchUser[0].id)
        $http({
            method: 'POST',
            url: '/user/saveUser',
            params: {
                firstName: $scope.user.name,
                lastName: $scope.user.last_name,
                username: $scope.user.username,
                password: $scope.user.password,
                phone: $scope.user.phone,
                typeUserId: $scope.searchUser[0].id , 
            }
        }).success(function (data) {
            $scope.nameUser = data.firstName;
            $scope.user = new Object();
            $scope.searchUser =  new Object();
            $scope.showSuccess = true;
            $scope.searchUser();
            $scope.containerDelete = false;
        }).error(function () {
            console.log('Error al intentar guardar el cliente.');
        });
    }
    $scope.clearuser= function () {
        $scope.user = new Object();
        $scope.containerDelete = false;
    }
    /*$scope.deleteClient = function () {

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
    }*/
});