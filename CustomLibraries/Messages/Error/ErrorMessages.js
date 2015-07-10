angular.module('messages').directive('errorMessages', function(){
	return {
		templateUrl: '/LIB/Messages/Error/ErrorMessages.html', // Desacoplar com Grunt
		restrict: 'E',
		scope: {
			errorArray: '='
		}
	};
});