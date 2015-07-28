Array.prototype.clear = function(){
	this.splice(0, this.length);
};

angular.module('messages', []);

// angular.module('messages').directive('errorMessages', function(){
// 	return {
// 		templateUrl: '/LIB/Messages/ErrorMessages.html',
// 		restrict: 'E',
// 		scope: {
// 			errorArray: '='
// 		},
// 		link: function(scope, element, attrs, ctrl){
// 			scope.visibleWindow = false;
// 			scope.visibleAfterTransition = false;

// 			scope.$watch('errorArray', function(newValue){
// 				if (newValue.length > 0) {
// 					scope.visibleWindow = true;
// 					scope.visibleAfterTransition = true;
// 				}
// 			}, true);

// 			scope.close = function(){
// 				scope.visibleWindow = false;
// 				setTimeout(function(){
// 					scope.errorArray.splice(0, scope.errorArray.length);
// 					scope.visibleAfterTransition = false;
// 				}, 500);
// 			};
// 		}
// 	};
// });

// angular.module('messages').directive('alertMessages', function(){
// 	return {
// 		templateUrl: '/LIB/Messages/AlertMessages.html',
// 		restrict: 'E',
// 		scope: {
// 			alertArray: '='
// 		},
// 		link: function(scope, element, attrs, ctrl){
// 			scope.visibleWindow = false;

// 			scope.$watch('alertArray', function(newValue){
// 				if (newValue.length > 0) {
// 					scope.visibleWindow = true;
// 				}
// 			}, true);

// 			scope.close = function(){
// 				scope.visibleWindow = false;
// 				setTimeout(function(){
// 					scope.alertArray.splice(0, scope.alertArray.length);
// 				}, 500);
// 			};
// 		}
// 	};
// });


angular.module('messages').directive('messageContainer', function(){
	return {
		templateUrl: '/LIB/Messages/Messages.html',
		restrict: 'E',
		scope: {
			errorArray: '=',
			alertArray: '=',
			successArray: '='
		},

		link: function(scope, element, attrs, ctrl){
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
