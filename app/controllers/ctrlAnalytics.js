app.controller("ctrlAnalytics", ["$scope", "servAPI", "$timeout", function($scope, servAPI, $timeout){

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





    /*
    $(document).ready(function () {
        tamanosVista();
    });

    $( window ).resize(function() {
        tamanosVista();
    });

    function tamanosVista () {
        $timeout(function() {
            $scope.wGrafica1 = $(".chart-wrapper.grafica1 .content")[0].getBoundingClientRect().width;
            $scope.hGrafica1 = $(".chart-wrapper.grafica1 .content")[0].getBoundingClientRect().height;
            console.log($scope.wGrafica1);
            console.log($scope.hGrafica1);
        }, 0);
    }
    */




    $scope.mensaje = "Analytics";



    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                },
                {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: true,
                    position: 'right'
                }
            ]
        },
        responsive: true,
        maintainAspectRatio: false
    };

}]);
