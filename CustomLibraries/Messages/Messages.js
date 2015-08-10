Array.prototype.clear = function(){
	this.splice(0, this.length);
};

angular.module('messages', ['ngAnimate']);

angular.module('messages').directive('messageContainer', ['$animate', function($animate){
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
			// angular.forEach(element.find('span'), function(closer){
			// 	var btnClose = angular.element(closer);
			// 	btnClose.on('click', function(){
			// 		$animate.addClass(btnClose.parent(), 'switching').then(function(){
			// 			console.log('Animation terminada');
			// 		});
			// 	});
			// });

			// var _addClass = function(targetElement){
			// 	$animate.addClass(targetElement, 'ng-hide-remove').then(function(){
			// 		console.log('NG HIDE REMOVE OK');
			// 	});
			// };

			scope.$watch('successArray', function(newValue, oldValue){
				if (newValue.length > oldValue.length) {
					// var targets = element.find('span');
					// angular.forEach(targets, function(target){
					// 	var parent = angular.element(target).parent();
					// 	if (parent.hasClass('alert-success')){
					// 		_addClass(parent);
					// 	}
					// });
					if (scope.successTimeout !== undefined) {
						setTimeout(function(){
							scope.successArray.clear();
							scope.$digest();
						}, scope.successTimeout);
					}
				}
			}, true);

			scope.close = function(closedMessage, event){
				var target = angular.element(event.target).parent();
				$animate.addClass(target, 'ng-hide-add').then(function(){
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
					$animate.removeClass(target, 'ng-hide-add');
				});
			};
		}
	};
}]);

// angular.module('messages').animation('.messageContainer', [function(){
// 	return {
// 		addClass: function(elem, done){
// 			console.log('emtrouhniomsogjisd');
// 			jQuery(element).fadeOut(5000, done);
// 		}
// 	};
// }]);