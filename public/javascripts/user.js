var aplicacion = angular.module('yankee-app', []);
aplicacion.controller('User', function ($scope, $http, $location, $window) {
    $scope.user = new Object();
    $scope.typeUser =  new Object();
    $scope.searchUser =  new Object();
    $scope.showSuccess = false;
    $scope.containerDelete = false;
    $scope.searchUsers = function (){
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
        console.log($scope.typeUser.typeUser.id)
        $http({
            method: 'POST',
            url: '/user/saveUser',
            params: {
                firstName: $scope.user.name,
                lastName: $scope.user.last_name,
                username: $scope.user.username,
                password: $scope.user.password,
                phone: $scope.user.phone,
                typeUserId: $scope.typeUser.typeUser.id, 
            }
        }).success(function (data) {
            $scope.nameUser = data.firstName;
            $scope.user = new Object();
            $scope.searchUser =  new Object();
            $scope.showSuccess = true;
            $scope.searchUsers();
            $scope.containerDelete = false;
        }).error(function () {
            console.log('Error al intentar guardar el cliente.');
        });
    }
    $scope.clearuser= function () {
        $scope.user = new Object();
        $scope.containerDelete = false;
    }
    $scope.recoveryUser = function (data) {
        console.log($scope.typeUser)
        $scope.user.id = $scope.searchUser.searchUser.id;
        $scope.user.name = $scope.searchUser.searchUser.firstName;
        $scope.user.last_name = $scope.searchUser.searchUser.lastName;
        $scope.user.username = $scope.searchUser.searchUser.username;
        $scope.user.password = $scope.searchUser.searchUser.password;
        $scope.user.phone = $scope.searchUser.searchUser.phone;
        $scope.typeUser = $scope.searchUser.searchUser.typeUserId;
        $scope.containerDelete = true
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