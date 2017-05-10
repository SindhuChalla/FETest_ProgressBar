var app = angular.module('myApp', [])
.controller('myCtrl',['$scope', '$http', function($scope,$http){


$http
.get("data.json")
.then(function(response){
	$scope.cv  = response.data;
});

}]);