angular.module('masks', []);

angular.module('masks').service('$maskService', function(){
	this.numbersOnly = function(strValue){
		return strValue.replace(/[^0-9]+/g, '');
	};
});

angular.module('masks').directive('phoneMask', ['$maskService', function($maskService){
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function(scope, element, attrs, ctrl){
			var _format = function(unformatted){
				var formatted = unformatted;
				if (formatted.length > 0){
					formatted = '+' + formatted;
				}

				if (formatted.length > 3) {
					formatted = formatted.substring(0, 3) + ' (' + formatted.substring(3);
				}

				if (formatted.length > 7) {
					formatted = formatted.substring(0, 7) + ') ' + formatted.substring(7);
				}

				if (formatted.length > 13 && formatted.length < 18) {
					formatted = formatted.substring(0, 13) + '-' + formatted.substring(13);
				} else if (formatted.length >= 18) {
					formatted = formatted.substring(0, 14) + '-' + formatted.substring(14, 18);
				}

				return formatted;
			};
			element.on('keyup', function(){
				var _toFormat = $maskService.numbersOnly(ctrl.$viewValue);
				var _formatted = _format(_toFormat);
				ctrl.$setViewValue(_formatted);
				ctrl.$render();
			});
		}
	};
}]);

angular.module('masks').directive('cpfMask', ['$maskService', function($maskService){
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function(scope, element, attrs, ctrl){
			var _format = function(unformatted){
				var formatted = unformatted;
				if (formatted.length > 3){
					formatted = formatted.substring(0, 3) + '.' + formatted.substring(3);
				}

				if (formatted.length > 7){
					formatted = formatted.substring(0, 7) + '.' + formatted.substring(7);
				}

				if (formatted.length > 11){
					formatted = formatted.substring(0, 11) + '-' + formatted.substring(11);
				}

				if (formatted.length > 14){
					formatted = formatted.substring(0, 14);
				}

				return formatted;
			};
			element.on('keyup', function(){
				var _toFormat = $maskService.numbersOnly(ctrl.$viewValue);
				var _formatted = _format(_toFormat);
				ctrl.$setViewValue(_formatted);
				ctrl.$render();
			});
		}
	};
}]);


angular.module('masks').directive('cnpjMask', ['$maskService', function($maskService){
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function(scope, element, attrs, ctrl){
			var _format = function(unformatted){
				var formatted = unformatted;

				if (formatted.length > 2){
					formatted = formatted.substring(0, 2) + '.' + formatted.substring(2);
				}

				if (formatted.length > 6){
					formatted = formatted.substring(0, 6) + '.' + formatted.substring(6);
				}

				if (formatted.length > 10){
					formatted = formatted.substring(0, 10) + '/' + formatted.substring(10);
				}

				if (formatted.length > 15){
					formatted = formatted.substring(0, 15) + '-' + formatted.substring(15);
				}

				if (formatted.length > 18){
					formatted = formatted.substring(0, 18);
				}

				return formatted;
			};
			element.on('keyup', function(){
				var _toFormat = $maskService.numbersOnly(ctrl.$viewValue);
				var _formatted = _format(_toFormat);
				ctrl.$setViewValue(_formatted);
				ctrl.$render();
			});
		}
	};
}]);

angular.module('masks').directive('cpfCnpjMask', ['$maskService', function($maskService){
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function(scope, element, attrs, ctrl){
			var _format = function(unformatted, preFormatter){
				var formatted = preFormatter(unformatted);

				if (formatted.length > 3){
					formatted = formatted.substring(0, 3) + '.' + formatted.substring(3);
				}

				if (formatted.length > 7){
					formatted = formatted.substring(0, 7) + '.' + formatted.substring(7);
				}

				if (formatted.length > 11){
					formatted = formatted.substring(0, 11) + '-' + formatted.substring(11);
				}

				if (formatted.length > 14){
					formatted = preFormatter(formatted);
					formatted = formatted.substring(0, 2) + '.' 
							  + formatted.substring(2, 5) + '.' 
							  + formatted.substring(5, 8) + '/' 
							  + formatted.substring(8);

					
				}
				if (formatted.length > 15){
					formatted = formatted.substring(0, 15) + '-' + formatted.substring(15);
				}

				if (formatted.length > 18){
					formatted = formatted.substring(0, 18);
				}

				return formatted;
			};
			element.on('keyup', function(){
				var _formatted = _format(ctrl.$viewValue, $maskService.numbersOnly);
				ctrl.$setViewValue(_formatted);
				ctrl.$render();
			});
		}
	};
}]);