angular.module("Dashboard",[]).config(function($routeProvider){
	$routeProvider.when("/Dashboard",{
				templateUrl:"dashboard/Dashboard.html",
				controller:"DashboardController"
			});
});