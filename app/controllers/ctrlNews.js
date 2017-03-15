app.controller("ctrlNews", ["$scope", "servAPI", function($scope, servAPI){

    /*
    servAPI
        .getAll()
        .then(function(data) {
            console.log(data);
            $scope.api = data.data;
        })
        .catch(function(err) {
        	console.log(err);
        });

    $scope.closeAlert = function(index) {
        $scope.api.splice(index, 1);
    };
    */

    $scope.mensaje = "News";


    servAPI
        .getAll()
        .then(function(data) {
            console.log(data.data);
            $scope.arreglo = data.data;
        })
        .catch(function(err) {
            console.log(err);
        });

}]);
