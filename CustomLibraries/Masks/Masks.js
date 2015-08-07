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
			element.on('keyup', function(key){
				if (key.keyCode !== 9){
					var _toFormat = $maskService.numbersOnly(ctrl.$viewValue);
					var _formatted = _format(_toFormat);
					ctrl.$setViewValue(_formatted);
					ctrl.$render();
				}
			});

			ctrl.$parsers.push(function(value){
				var numbers = $maskService.numbersOnly(value);
				if (numbers.length === 12 || numbers.length === 13){
					return numbers;
				}
			});

			// ctrl.$formatters.push(function(value){
				
			// });
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
			element.on('keyup', function(key){
				if (key.keyCode !== 9){
					var _toFormat = $maskService.numbersOnly(ctrl.$viewValue);
					var _formatted = _format(_toFormat);
					ctrl.$setViewValue(_formatted);
					ctrl.$render();
				}
			});

			ctrl.$parsers.push(function(value){
				var numbers = $maskService.numbersOnly(value);

				if (numbers.length === 11){
					return numbers;
				}
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
			element.on('keyup', function(key){
				if (key.keyCode !== 9){
					var _toFormat = $maskService.numbersOnly(ctrl.$viewValue);
					var _formatted = _format(_toFormat);
					ctrl.$setViewValue(_formatted);
					ctrl.$render();
				}
			});

			ctrl.$parsers.push(function(value){
				var numbers = $maskService.numbersOnly(value);
				if (numbers.length === 14){
					return numbers;
				}
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
			element.on('keyup', function(key){
				if (key.keyCode !== 9){
					var _formatted = _format(ctrl.$viewValue, $maskService.numbersOnly);
					ctrl.$setViewValue(_formatted);
					ctrl.$render();
				}
			});

			ctrl.$parsers.push(function(value){
				var numbers = $maskService.numbersOnly(value);
				if (numbers.length === 11 || numbers.length === 14){
					return numbers;
				}
			});
		}
	};
}]);

angular.module('masks').directive('dateMask', ['$maskService', function($maskService){
	return {
		require: 'ngModel',
		restrict: 'A',
		scope:{
			dateMaskFormat: '@'
		},
		link: function(scope, element, attrs, ctrl){
			var _format = function(unformatted, dateFormat){
				var formatted = unformatted;

				if (formatted.length > 2){
					formatted = formatted.substring(0, 2) + '/' + formatted.substring(2);
				}

				if (formatted.length > 5){
					formatted = formatted.substring(0, 5) + '/' + formatted.substring(5);
				}

				if (dateFormat){
					dateFormat = dateFormat.toUpperCase();
					switch (dateFormat){
						case 'DD/MM/AAAA':
							if (formatted.length > 10) {
								formatted = formatted.substring(0, 10);
							}
							break;

						case 'DD/MM/AAAA HH:MM':
							if (formatted.length > 10){
								formatted = formatted.substring(0, 10) + ' ' + formatted.substring(10);
							}
							if (formatted.length > 13){
								formatted = formatted.substring(0, 13) + ':' + formatted.substring(13);
							}
							if (formatted.length > 16){
								formatted = formatted.substring(0, 16);
							}
							break;

						case 'DD/MM/AAAA HH:MM:SS':
							if (formatted.length > 10){
								formatted = formatted.substring(0, 10) + ' ' + formatted.substring(10);
							}
							if (formatted.length > 13){
								formatted = formatted.substring(0, 13) + ':' + formatted.substring(13);
							}
							if (formatted.length > 16){
								formatted = formatted.substring(0, 16) + ':' + formatted.substring(16);
							}
							if (formatted.length > 19){
								formatted = formatted.substring(0, 19);
							}
							break;
						default:
							console.log('O formato "' + dateFormat + '" não é suportado. Adotando formato default DD/MM/AAAA.');
							if (formatted.length > 10) {
								formatted = formatted.substring(0, 10);
							}
							break;
					}
				} else {
					if (formatted.length > 10) {
						formatted = formatted.substring(0, 10);
					}
				}
				return formatted;
			};

			element.on('keyup', function(key){
				if (key.keyCode !== 9){
					var _toFormat = $maskService.numbersOnly(ctrl.$viewValue);
					var _formatted = _format(_toFormat, scope.dateMaskFormat);
					ctrl.$setViewValue(_formatted);
					ctrl.$render();
				}
			});

			ctrl.$parsers.push(function(value){
				switch (scope.dateMaskFormat){
					case 'DD/MM/AAAA HH:MM':
						if (value.length === 16){
							var array = value.substring(0, 10).split('/');
							value.substring(11, 16).split(':').forEach(function(val){
								array.push(val);
							});
							return new Date(array[2], array[1] - 1, array[0], array[3], array[4], 0, 0).getTime();
						}
						break;
					case 'DD/MM/AAAA HH:MM:SS':
						if (value.length === 19){
							var array = value.substring(0, 10).split('/');
							value.substring(11, 19).split(':').forEach(function(val){
								array.push(val);
							});
							return new Date(array[2], array[1] - 1, array[0], array[3], array[4], array[5], 0).getTime();
						}
						break;
					default:
						if (value.length === 10){
							var array = value.split('/');
							return new Date(array[2], array[1] - 1, array[0]).getTime();
						}
					break;
				}
			});

		}
	};
}]);


angular.module('masks').directive('moneyMask', ['$maskService', function($maskService){
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function(scope, element, attrs, ctrl){
			var _format = function(unformatted){
				var formatted = unformatted;

				if (formatted.length > 15){
					formatted = formatted.substring(formatted.length - 15, formatted.length);
				}

				if (formatted){
					formatted = Number(formatted) + '';

					if (formatted.length > 2){
						formatted = formatted.substring(0, formatted.length - 2) + ',' + formatted.substring(formatted.length - 2);
					} else {
						if (formatted.length == 1){
							formatted = '0,0' + formatted;
						}
						if (formatted.length == 2){
							formatted = '0,' + formatted;
						}
					}

					if (formatted.length > 6){
						var parteInteira = formatted.substring(0, formatted.length - 2);

						for (var count = parteInteira.length - 4; count > 0; count-= 3){
							formatted = formatted.substring(0, count) + '.' + formatted.substring(count);
						}
					}
				}

				return formatted;
			};
			element.on('keyup', function(key){
				if (key.keyCode !== 9){
					var _toFormat = $maskService.numbersOnly(ctrl.$viewValue);
					var _formatted = _format(_toFormat);
					ctrl.$setViewValue(_formatted);
					ctrl.$render();
				}
			});

			ctrl.$parsers.push(function(value){
				var ret = $maskService.numbersOnly(value);
				if (ret.length < 16) {
					if (ret.length > 2){
						ret = ret.substring(0, ret.length - 2) + '.' + ret.substring(ret.length - 2);
					}
					return parseFloat(ret);
				}
			});
		}
	};
}]);

angular.module('masks').directive('inscricaoEstadualMask', ['$maskService', function($maskService){
	return {
		require: 'ngModel',
		restrict: 'A',
		scope: {
			estado: '='
		},
		link: function(scope, element, attrs, ctrl){
			var _format = function(unformatted, uf){
				var formatted = $maskService.numbersOnly(unformatted);
				switch (uf) {
					case 'AC':
						//01.876.571/403-86
						//12.312.312/312-31
						//01.529.241/226-40
						if (formatted.length > 2){
							formatted = formatted.substring(0, 2) + '.' + formatted.substring(2);
						}
						if (formatted.length > 6){
							formatted = formatted.substring(0, 6) + '.' + formatted.substring(6);
						}
						if (formatted.length > 10){
							formatted = formatted.substring(0, 10) + '/' + formatted.substring(10);
						}
						if (formatted.length > 14){
							formatted = formatted.substring(0, 14) + '-' + formatted.substring(14);
						}
						if (formatted.length > 17){
							formatted = formatted.substring(0, 17);
						}
						break;
					case 'AL':
						//248576429
						//123123123
						//248508830
						if (formatted.length > 9){
							formatted = formatted.substring(0, 9);
						}
						break;
					case 'AP':
						//031801927
						//123123123
						//030263590
						if (formatted.length > 9){
							formatted = formatted.substring(0, 9);
						}
						break;
					case 'AM':
						//54.129.059-2
						//12.312.312-3
						//19.262.340-0
						if (formatted.length > 2){
							formatted = formatted.substring(0, 2) + '.' + formatted.substring(2);
						}
						if (formatted.length > 6){
							formatted = formatted.substring(0, 6) + '.' + formatted.substring(6);
						}
						if (formatted.length > 10){
							formatted = formatted.substring(0, 10) + '-' + formatted.substring(10);
						}
						if (formatted.length > 12){
							formatted = formatted.substring(0, 12);
						}
						break;
					case 'BA':
						//087192-12
						//232323-23
						//450117-11
						if (formatted.length > 6){
							formatted = formatted.substring(0, 6) + '-' + formatted.substring(6);
						}
						if (formatted.length > 9){
							formatted = formatted.substring(0, 9);
						}
						break;
					case 'CE':
						//38947668-4
						//12342342-3
						//93095664-8
						if (formatted.length > 8){
							formatted = formatted.substring(0, 8) + '-' + formatted.substring(8);
						}
						if (formatted.length > 10){
							formatted = formatted.substring(0, 10);
						}
						break;
					case 'DF':
						//07393442001-24
						//12342342334-34
						//07298665001-06
						if (formatted.length > 11){
							formatted = formatted.substring(0, 11) + '-' + formatted.substring(11);
						}
						if (formatted.length > 14){
							formatted = formatted.substring(0, 14);
						}
						break;
					case 'ES':
						//85047751-4
						//23423423-4
						//12450754-9
						if (formatted.length > 8){
							formatted = formatted.substring(0, 8) + '-' + formatted.substring(8);
						}
						if (formatted.length > 10){
							formatted = formatted.substring(0, 10);
						}
						break;
					case 'GO':
						//11.305.005-4
						//12.312.312-3
						//15.724.255-2
						if (formatted.length > 2){
							formatted = formatted.substring(0, 2) + '.' + formatted.substring(2);
						}
						if (formatted.length > 6){
							formatted = formatted.substring(0, 6) + '.' + formatted.substring(6);
						}
						if (formatted.length > 10){
							formatted = formatted.substring(0, 10) + '-' + formatted.substring(10);
						}
						if (formatted.length > 12){
							formatted = formatted.substring(0, 12);
						}
						break;
					case 'MA':
						//12522655-1
						//12312312-3
						//12347950-9
						if (formatted.length > 8){
							formatted = formatted.substring(0, 8) + '-' + formatted.substring(8);
						}
						if (formatted.length > 10){
							formatted = formatted.substring(0, 10);
						}
						break;
					case 'MT':
						//0586675503-0
						//1231231231-2
						//0797361954-3
						if (formatted.length > 10){
							formatted = formatted.substring(0, 10) + '-' + formatted.substring(10);
						}
						if (formatted.length > 12){
							formatted = formatted.substring(0, 12);
						}
						break;
					case 'MS':
						//28475596-6
						//12342342-3
						//28331232-7
						if (formatted.length > 8){
							formatted = formatted.substring(0, 8) + '-' + formatted.substring(8);
						}
						if (formatted.length > 10){
							formatted = formatted.substring(0, 10);
						}
						break;
					case 'MG':
						//996.939.814/2871
						//123.123.123/1231
						//027.975.505/0651
						if (formatted.length > 3){
							formatted = formatted.substring(0, 3) + '.' + formatted.substring(3);
						}
						if (formatted.length > 7){
							formatted = formatted.substring(0, 7) + '.' + formatted.substring(7);							
						}
						if (formatted.length > 11){
							formatted = formatted.substring(0, 11) + '/' + formatted.substring(11);
						}
						if (formatted.length > 16){
							formatted = formatted.substring(0, 16);
						}
						break;
					case 'PA':
						//15-663922-0
						//23-123123-1
						//15-056456-2
						if (formatted.length > 2){
							formatted = formatted.substring(0, 2) + '-' + formatted.substring(2);
						}
						if (formatted.length > 9){
							formatted = formatted.substring(0, 9) + '-' + formatted.substring(9);
						}
						if (formatted.length > 11){
							formatted = formatted.substring(0, 11);
						}
						break;
					case 'PB':
						//51044842-9
						//23123123-1
						//05644687-0
						if (formatted.length > 8){
							formatted = formatted.substring(0, 8) + '-' + formatted.substring(8);
						}
						if (formatted.length > 10){
							formatted = formatted.substring(0, 10);
						}
						break;
					case 'PR':
						//567.82903-02
						//231.23123-12
						//008.90319-07
						if (formatted.length > 3){
							formatted = formatted.substring(0, 3) + '.' + formatted.substring(3);
						}
						if (formatted.length > 9){
							formatted = formatted.substring(0, 9) + '-' + formatted.substring(9);
						}
						if (formatted.length > 12){
							formatted = formatted.substring(0, 12);
						}
						break;
					case 'PE':
						//4521257-07
						//1231231-23
						//6997000-94
						if (formatted.length > 7){
							formatted = formatted.substring(0, 7) + '-' + formatted.substring(7);
						}
						if (formatted.length > 10){
							formatted = formatted.substring(0, 10);
						}
						break;
					case 'PI':
						//94875867-8
						//12312312-3
						//87135403-9
						if (formatted.length > 8){
							formatted = formatted.substring(0, 8) + '-' + formatted.substring(8);
						}
						if (formatted.length > 10){
							formatted = formatted.substring(0, 10);
						}
						break;
					case 'RJ':
						//52.602.54-8
						//12.312.31-2
						//32.281.92-3
						if (formatted.length > 2){
							formatted = formatted.substring(0, 2) + '.' + formatted.substring(2);
						}
						if (formatted.length > 6){
							formatted = formatted.substring(0, 6) + '.' + formatted.substring(6);
						}
						if (formatted.length > 9){
							formatted = formatted.substring(0, 9) + '-' + formatted.substring(9);
						}
						if (formatted.length > 11){
							formatted = formatted.substring(0, 11);
						}
						break;
					case 'RN':
						//20.665.532-0
						//12.313.123-2
						//20.649.457-2
						if (formatted.length > 2){
							formatted = formatted.substring(0, 2) + '.' + formatted.substring(2);
						}
						if (formatted.length > 6){
							formatted = formatted.substring(0, 6) + '.' + formatted.substring(6);
						}
						if (formatted.length > 10){
							formatted = formatted.substring(0, 10) + '-' + formatted.substring(10);
						}
						if (formatted.length > 12){
							formatted = formatted.substring(0, 12);
						}
						break;
					case 'RS':
						//102/5255191
						//121/2121212
						//353/7375303
						if (formatted.length > 3){
							formatted = formatted.substring(0, 3) + '/' + formatted.substring(3);
						}
						if (formatted.length > 11){
							formatted = formatted.substring(0, 11);
						}
						break;
					case 'RO':
						//3461571638232-8
						//1212121212121-2
						//8311393982305-6
						if (formatted.length > 13){
							formatted = formatted.substring(0, 13) + '-' + formatted.substring(13);
						}
						if (formatted.length > 15){
							formatted = formatted.substring(0, 15);
						}
						break;
					case 'RR':
						//24980639-0
						//12121212-1
						//24706053-3
						if (formatted.length > 8){
							formatted = formatted.substring(0, 8) + '-' + formatted.substring(8);
						}
						if (formatted.length > 10){
							formatted = formatted.substring(0, 10);
						}
						break;
					case 'SC':
						//390.465.950
						//121.212.121
						//185.055.400
						if (formatted.length > 3){
							formatted = formatted.substring(0, 3) + '.' + formatted.substring(3);
						}
						if (formatted.length > 7){
							formatted = formatted.substring(0, 7) + '.' + formatted.substring(7);
						}
						if (formatted.length > 11){
							formatted = formatted.substring(0, 11);
						}
						break;
					case 'SP':
						//242.904.007.985
						//121.212.121.232
						//128.446.148.543
						if (formatted.length > 3){
							formatted = formatted.substring(0, 3) + '.' + formatted.substring(3);
						}
						if (formatted.length > 7){
							formatted = formatted.substring(0, 7) + '.' + formatted.substring(7);
						}
						if (formatted.length > 11){
							formatted = formatted.substring(0, 11) + '.' + formatted.substring(11);
						}
						if (formatted.length > 15){
							formatted = formatted.substring(0, 15);
						}
						break;
					case 'SE':
						//95762871-4
						//12121212-1
						//87706654-0
						if (formatted.length > 8){
							formatted = formatted.substring(0, 8) + '-' + formatted.substring(8);
						}
						if (formatted.length > 10){
							formatted = formatted.substring(0, 10);
						}
						break;
					case 'TO':
						//1203641149-2
						//2323232323-2
						//8603771593-6
						if (formatted.length > 10){
							formatted = formatted.substring(0, 10) + '-' + formatted.substring(10);
						}
						if (formatted.length > 12){
							formatted = formatted.substring(0, 12);
						}
						break;
					default:
						return unformatted;
				}

				return formatted;
			};
			element.on('keyup', function(key){
				if (key.keyCode !== 9) {
					if (scope.estado) {
						var _formatted = _format(ctrl.$viewValue, scope.estado);
						ctrl.$setViewValue(_formatted);
						ctrl.$render();
					}
				}
			});

			ctrl.$parsers.push(function(value){
				if (scope.estado){
					var numbers = $maskService.numbersOnly(value);
					return numbers;
				}
				return value;
			});
		}
	};
}]);