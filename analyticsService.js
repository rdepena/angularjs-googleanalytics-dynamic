var _gaq = _gaq || [];

angular.module('analytics', []).run(['$http', function ($http) {

}]).service('analytics', function ($rootScope, $window, $location, $routeParams) {

	var init = function (accountCodes) {
		angular.forEach(accountCodes, function (accountCode) {
			_gaq.push(['_setAccount', accountCode]);
			_gaq.push(['_trackPageview']);
		});

		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(ga, s);

		$rootScope.$on('$viewContentLoaded', track);
	}
	
	var track = function() {
		var path = convertPathToQueryString($location.path(), $routeParams)
		$window._gaq.push(['_trackPageview', path]);
	};
	
	var convertPathToQueryString = function (path, $routeParams) {
		for (var key in $routeParams) {
			var queryParam = '/' + $routeParams[key];
			path = path.replace(queryParam, '');
		}

		var querystring = decodeURIComponent($.param($routeParams));

		if (querystring === '') return path;

		return path + "?" + querystring;
	};

	return {
		init : init
	};

});
