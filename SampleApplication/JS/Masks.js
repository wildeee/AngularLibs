angular.module('sample-application').controller('sample-masks', ['$scope', function($scope){
	$scope.phone = '554499606007';
	$scope.cpf = '08928581923';
	$scope.cnpj = '25654679000163';
	$scope.cpfCnpj = '12341064801';
	$scope.date1 = 1012622522000;
	$scope.date2 = 1012622522000;
	$scope.date3 = 1012622522000;
	$scope.date4 = 1012622522000;
	$scope.money = 5200.5;
	$scope.opcoesEstado = 'PR';
	$scope.inscricaoEstadual = '1252352341';
	$scope.cep = '87030230';

	$scope.showBind = false;

	$scope.showBindToggle = function(status){
		$scope.showBind = !status;
	};

}]);