angular.module('sample-application').controller('index-controller', function($scope, $http, $window){

	var _getComponentsDescription = function(){
		$http.get('http://localhost:3000/componentes').success(function(componentes){
			$scope.componentes = componentes;
		});
			
	};
	_getComponentsDescription();

	$scope.sendRedirect = function(target){
		if (target){
			$window.location.href = target;
		}
	};
});


