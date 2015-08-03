Array.prototype.clear = function(){
	this.splice(0, this.length);
};

angular.module('messages', []);

angular.module('messages').directive('messageContainer', function(){
	return {
		templateUrl: '/LIB/Messages/Messages.html',
		restrict: 'E',
		scope: {
			errorArray: '=',
			alertArray: '=',
			successArray: '=',
			successTimeout: '@'
		},
		

		link: function(scope, element, attrs, ctrl){
			scope.$watch('successArray', function(newValue){
				if (scope.successTimeout !== undefined) {
					setTimeout(function(){
						scope.successArray.clear();
						scope.$digest();
					}, scope.successTimeout);
				}
			}, true);

			scope.close = function(closedMessage){
				switch (closedMessage){
					case 'error':
						scope.errorArray.clear();
						break;
					case 'alert':
						scope.alertArray.clear();
						break;
					case 'success':
						scope.successArray.clear();
						break;
				}
			};
		}
	};
});
