angular.module('sample-application').controller('sample-error', function($scope){
	$scope.errors = ['erro 1', 'erro 2'];
	$scope.alerts = ['alerta 1', 'alerta 2'];
	$scope.success= ['sucesso 1', 'sucesso 2'];
	
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

	$scope.addAlertMessage = function(entity){
		if (entity.message1) { 
			$scope.alerts.push(angular.copy(entity.message1));
			delete entity.message1;
		}
		if (entity.message2) { 
			$scope.alerts.push(angular.copy(entity.message2));
			delete entity.message2;
		}
	};

	$scope.addSuccessMessage = function(entity){
		if (entity.message1) { 
			$scope.success.push(angular.copy(entity.message1));
			delete entity.message1;
		}
		if (entity.message2) { 
			$scope.success.push(angular.copy(entity.message2));
			delete entity.message2;
		}
	};
});