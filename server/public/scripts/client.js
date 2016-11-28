var app = angular.module('myApp', ['ngRoute']);

app.filter('unique', function() {

 return function (arr, field) {
   var o = {}, i, l = arr.length, r = [];
   for(i=0; i<l;i+=1) {
     o[arr[i][field]] = arr[i];
   }
   for(i in o) {
     r.push(o[i]);
   }
   return r;
 };
})

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/heroes', {
            templateUrl: '/views/templates/heroes.html',
            controller: 'HeroesController',
            controllerAs: 'hero'
        })
        .when('/superpowers', {
            templateUrl: '/views/templates/superpowers.html',
            controller: 'SuperpowerController',
            controllerAs: 'superpowers'
        })
        .otherwise({
            redirectTo: 'heroes'
        });
}]);
