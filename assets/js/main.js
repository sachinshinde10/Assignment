var myApp  = angular.module("myApp", ['ngRoute', 'ngAnimate']);


myApp.factory('commonFactory', function() {
    return {name: ""}
})

myApp.filter('username', function() {
    return function(text) {
        return text.split("@")[0];
    }
});

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'CommonController',
            templateUrl: 'assets/Partials/View1.html'
        })
        .when('/welcome',
        {
            controller: 'CommonController',
            templateUrl: 'assets/Partials/View2.html'
        })
        .otherwise({ redirectTo: '/' });
});

myApp.filter('titleCase', function () {
    return function (input) {
        var words = input.split(' ');
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
    }
});


myApp.controller('CommonController', function ($scope, $location, commonFactory, profileService) {

    $scope.data = commonFactory;
    $scope.emp = profileService.getProfiles();

    $scope.redirectTo = function(temp) {
        $location.path("/" + temp);
    }

    $scope.cIndex = 0;


    $scope.setIndex = function (index){
        $scope.cIndex = index;
    }

    $scope.deleteProf = function (id) {

        profileService.deleteUser(id);
        $scope.newdata = {name: $scope.newEmp[$scope.cIndex].name, skills: $scope.newEmp[$scope.cIndex].skills, team: $scope.newEmp[$scope.cIndex].team, city: $scope.newEmp[$scope.cIndex].city};

        if($scope.emp.length == 0){
            $scope.ModAdd(true);
            $scope.ModEdit(false);
            $scope.ModShow(false);
        }
    }

    $scope.edit = false;
    $scope.show = true;
    $scope.add = false;
    $scope.malert = false;
    $scope.newdata = [];
    $scope.moddata = [];

    $scope.updateIndex = function(){
        $scope.cIndex = $scope.emp.length - 1;
    }

    $scope.ModEdit = function(val){
        if(val) {
            $scope.moddata = {id: $scope.newEmp[$scope.cIndex].id, name: $scope.newEmp[$scope.cIndex].name, skills: $scope.newEmp[$scope.cIndex].skills, team: $scope.newEmp[$scope.cIndex].team, city: $scope.newEmp[$scope.cIndex].city};
            $scope.malert = false;
        }
        $scope.edit = val;

    }

    $scope.ModAdd = function(val){
        $scope.newdata = [];
        $scope.add = val;
        if(val)
        $scope.malert = false;
    }

    $scope.ModShow = function(val){
        $scope.show = val;
        if(val)
            $scope.malert = false;
    }


    $scope.updateProf = function() {
        //console.log('updating');
        profileService.updateUser($scope.moddata.id, $scope.moddata.name, $scope.moddata.team, $scope.moddata.skills, $scope.moddata.city);
    }

    $scope.insertUser = function() {
        profileService.insertUser($scope.newdata.name, $scope.newdata.team, $scope.newdata.skills, $scope.newdata.city);
    }

    $scope.checkAndChange = function() {
        //console.log("working");
        if($scope.newEmp.length == 0){
            $scope.ModAdd(false);
            $scope.ModEdit(false);
            $scope.ModShow(false);
            $scope.malert = true;
        } else {
            $scope.ModAdd(false);
            $scope.ModEdit(false);
            $scope.ModShow(true);
            $scope.malert = false;
        }
    }




})

