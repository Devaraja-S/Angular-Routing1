 
app.controller("EmployeeController",function($scope,$route,sharedProperties){
	$scope.ob="Eid";
	$scope.empArr=sharedProperties.getProperty();
$scope.n={};
	sharedProperties.setProperty($scope.empArr);
	$scope.setOrderBy=function(o){
		$scope.ob=o;
	}
	$scope.removeEmployee=function(i){
				 //$scope.empArr.splice(i,1);
				 console.log(i)
				 for(var j in $scope.empArr){
				 	if(i==$scope.empArr[j].Name){
				 		$scope.empArr.splice(j,1);break;
				 	}


				 }
				}


$scope.addEmployee=function(){
		console.log("df");
		$scope.empArr.push({"Eid":$scope.n.Eid,"Name":$scope.n.Name,"Domain":$scope.n.Domain});
		$scope.n={};

	};

 

			});





 
app.controller("editEmployeeCtrl",function($scope,$route,$routeParams,sharedProperties,$window){
	$scope.emp={};
$scope.idx=0;
	$scope.e=sharedProperties.getProperty();
	for(var x in $scope.e)
	{ 
		 
		console.log($scope.e[x].Eid);

		if($scope.e[x].Eid==($routeParams.rolno)){
			$scope.emp.Eid=$scope.e[x].Eid;
			$scope.emp.Name=$scope.e[x].Name;
			$scope.emp.Domain=$scope.e[x].Domain;
			$scope.emp2=$scope.e[x];
			$scope.idx=x;
			break;
		}
	}

	$scope.editEmployee=function(){
		$scope.e[$scope.idx].Eid=$scope.emp.Eid;
		$scope.e[$scope.idx].Name=$scope.emp.Name;
		$scope.e[$scope.idx].Domain=$scope.emp.Domain;
		$scope.emp={};

sharedProperties.setProperty($scope.e);
 $window.history.back();
	}


});
