angular.module('messages').directive('errorMessages', function(){
	return {
		templateUrl: '/LIB/Messages/Error/ErrorMessages.html', // Desacoplar com Grunt
		restrict: 'E',
		scope: {
			errorArray: '='
		},
		link: function(scope, element, attrs, ctrl){
			scope.visibleWindow = false;

			scope.$watch('errorArray', function(newValue){
				if (newValue.length > 0) {
					scope.visibleWindow = true;
				}
			}, true);

			scope.close = function(){
				scope.visibleWindow = false;
				setTimeout(function(){
					scope.errorArray.splice(0, scope.errorArray.length);
				}, 500);
			};
		}
	};
});