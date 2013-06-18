# Tracking Google Analytics Page Views with Angular.js

Code based from https://github.com/isamuelson/angularjs-googleanalytics
changed to meet a specific scenario where the account codes are dynamically provided.
not planning on creating a pull request for such and edge case so mirrored.

## How?

follow these step:

- Add the service to your angular js app module:

	```javascript
	var app = angular.module('myapp', ['analytics']) {
		...
	});
	```


- have analytics to be injected in your contorller.

	```javascript 
	function myCtrl($rootScope, $scope, $http, analytics) {
	    ...
	};
	```
	
- pass the accounts by calling the init

	```javascript 
	function myCtrl($rootScope, $scope, $http, analytics) {
 		analytics.init(['Account one', 'Account Two', 'Account Seven']);
 	};
 	```

Code licensed under The MIT License. 
