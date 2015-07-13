angular.module('sample-application').controller('sample-error', function($scope){
	$scope.errors = [];
	$scope.entity = {
		message1: '', message2: ''
	};
	$scope.addErrorMessage = function(entity){
		if (entity.message1) { 
			$scope.errors.push(angular.copy(entity.message1));
			delete entity.message1;
		}
		if (entity.message2) { 
			$scope.errors.push(angular.copy(entity.message2));
			delete entity.message2;
		}
	};
});