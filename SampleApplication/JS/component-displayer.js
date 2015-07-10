angular.module('sample-application').controller('displayer', function($scope, $http, $window){
	_getInfo = function(){
		var _id = $window.location.pathname.split('/').pop();
		$http.get('/ComponentInfo/' + _id).success(function(data){
			$scope.info = data;
		});
	};
	_getInfo();
});

angular.module('sample-application').directive('componentDisplayer', function(){
	return {
		templateUrl: '/ComponentDisplayer',
		restrict: 'E',
		transclude: true,
		scope: {
			title: '=',
			description: '='
		}
	};
});
