var aplicacion = angular.module('yankee-app', []);
aplicacion.controller('Login', function ($scope, $http, $location,$window) {
    $scope.user = new Object();
    $scope.login = function () {
      /*if ($scope.user.username != ""){
        console.log("paso por aqui");
      }*/
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

/*$(document).on("ready", init);

var view;
var controller;
var model;

function init() {
    console.log("((Init))");

    model = new Model();
    controller = new Controller();
    view = new View();
}

function View() {
    console.log("((View))");
    //..
}

function Controller() {
    console.log("((Controller))");

    //..
}

function Model() {
    console.log("((Model))");

    //..
}*/