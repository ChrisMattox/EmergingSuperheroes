app.controller("SuperpowerController", ["$http", function($http) {
  console.log("Superpower Controller Running");
  var self = this;
  self.heroes = [];
  self.newHero = {};

  getHeroes();

  function getHeroes(){
    $http.get('/heroes')
    .then(function(response){
      self.heroes = response.data;
      console.log(response.data);
    });
  }

  self.deleteHero = function(thisHero){
  console.log(thisHero);
  $http.delete('heroes/' + thisHero.id)
  .then(function(response){
    getHeroes();
  });
}

}]);
