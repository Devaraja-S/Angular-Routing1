app.config(function($routeProvider){
			$routeProvider
			.when("/Employee",{
				templateUrl:"employee/Employee.html",
				controller:"EmployeeController"
			})
			.when("/EmployeeEdit/:rolno",{
				templateUrl:"employee/EmployeeEdit.html",
				controller:"editEmployeeCtrl"
			})
			.when("/Dashboard",{
				templateUrl:"dashboard/Dashboard.html",
				controller:"DashboardController"
			});




		});