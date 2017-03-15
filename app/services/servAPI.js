app.factory("servAPI", ["$http", "$q", "apiUrl", function($http, $q, apiUrl){
    
    return {
        getAll: function (datos) {
            var defered = $q.defer();
            var promise = defered.promise;

            $http
            	.get("backend/activity-data.json", datos)
                .then(function(data) {
        			defered.resolve(data);
        		})
        		.catch(function(err) {
        		    defered.reject(err);
        		});

        	return promise;
        }
    }

}]);
