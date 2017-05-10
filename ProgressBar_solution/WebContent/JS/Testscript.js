var app = angular.module('progressbar', ['ui.bootstrap']);

app.controller('MainCtrl', [ '$scope', '$http',  function($scope,$http) {

$http
  .get("data.json")
  .then(function(response){
    $scope.datajson = response.data;
  });

}]);