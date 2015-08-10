angular.module('sample-application').controller('sample-validator', ['$scope', '$validator', function($scope, $validator){

	$scope.errors = [];
	$scope.success = [];

	$scope.validateCpf = function(cpf){
		if ($validator.validateCpf(cpf)){
			$scope.success.push('O CPF informado é válido.');
		} else {
			$scope.errors.push('O CPF informádo é inválido.');
		}
	}

	$scope.validateCnpj = function(cnpj){
		if ($validator.validateCnpj(cnpj)){
			$scope.success.push('O CNPJ informado é válido.');
		} else {
			$scope.errors.push('O CNPJ informádo é inválido.');
		}
	};

}]);