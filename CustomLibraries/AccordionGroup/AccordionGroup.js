angular.module('accordiongroups', []);

angular.module('accordiongroups').directive('accordionGroup', function(){
	return {
 		controller: function($scope, $element, $attrs){
 			var _accordions = [];

 			this.registerAccordion = function(accordion){
 				_accordions.push(accordion);
 			};

 			this.closeAll = function(){
 				_accordions.forEach(function(accordion){
 					accordion.isOpened = false;
 				});
 			};
 		}
	};
});

angular.module('accordiongroups').directive('accordion', function(){
	return {
		templateUrl: '/LIB/AccordionGroup/AccordionGroup.html',
		restrict: 'E',
		scope: {
			title: '@'
		},
		transclude: true,
		require: '^accordionGroup',
		link: function(scope, element, attrs, ctrl){
			ctrl.registerAccordion(scope);
			scope.open = function(state){
				if (!state){
					ctrl.closeAll();
					scope.isOpened = true;
				} else {
					scope.isOpened = false;
				}
			};
		}
	};
});