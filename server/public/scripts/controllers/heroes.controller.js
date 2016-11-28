app.controller("HeroesController", ["$http", function($http) {
  console.log("Hero Controller Running");
  var self = this;
  self.heroes = [];
  self.newHero = {};

  // add a new employee
self.addHero = function() {

  $http.post('/heroes', self.newHero)
    .then(function(response) {
      // cool
      console.log('response: ', response.data);
      // make GET request for employee data
      self.newHero = {};

    },
    function(response) {
      // error
      console.log('ERROR response: ', response.data);
    });
}

}]);
