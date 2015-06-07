var app = angular.module('weatherFinder');

app.controller('weatherCtrl', function($scope, weatherService) {
	
	$scope.getWeather = function(location) {
		weatherService.getWeather(location).then(function(data) {
			$scope.city = data.location;
			$scope.temp = data.temp;
			$scope.conditions = data.conditions;
			$scope.wxIcon = data.icon;
			$scope.location.state = '';
			$scope.location.town = '';
			console.log('in controller', data);
		}, function(error) {
			console.log(error);
		});
	};

	$scope.getForecast = function(location) {
		weatherService.getForecast(location).then(function(forecastResponse) {
			console.log('forecast from ctrl', forecastResponse)
		}, function(error) {
			console.log(error);
		});
	}

});