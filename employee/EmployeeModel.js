angular.module("Employee",[]).config(function($routeProvider){
	$routeProvider.when("/Employee",{
				templateUrl:"employee/Employee.html",
				controller:"EmployeeController"
			});
});