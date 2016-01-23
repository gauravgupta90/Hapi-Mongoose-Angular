app.controller('userCtrl', [ '$scope', '$http','$location', 'growl',
	function($scope, $http, $location,  growl){

		$scope.submit = function(){
			console.log($scope.user);
			$http.post('/user',$scope.user).then(function(data){
				alert("Successfully created");
			}).catch(function(error){
				//growl.addErrorMessage('oops! Something went wrong');
				alert("Oops something went wrong !!");
			})
		}
	}]
)