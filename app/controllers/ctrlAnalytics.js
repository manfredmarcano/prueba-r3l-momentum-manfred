app.controller("ctrlAnalytics", ["$scope", "servAPI", "$timeout", "$interval", "$filter", function($scope, servAPI, $timeout, $interval, $filter){

    $scope.indice = 1;
    $scope.bandera = false;

    servAPI
        .getAll()
        .then(function(data) {
            console.log(data.data);
            $scope.arreglo = data.data;
            activarLineas();
            activarBarras();
            activarTorta();
        })
        .catch(function(err) {
        	console.log(err);
        });




    /* GRÁFICO DE LÍNEAS */

    $scope.lineasSeries = [];
    $scope.labels = [];
    $scope.data = [];
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

    function activarLineas () {

        angular.forEach($scope.arreglo, function(value, key) {
            $scope.lineasSeries.push(value.zoneId);
        });

        $interval(iniciarRandom, 1000, 15);
    }

    function iniciarRandom(){

        var time = new Date();
        $scope.labels.push($filter('date')(time, "h:mm:ssa"));


        var arr = [], d = 0;
        // Primera vez
        if(!$scope.bandera){

            var aux = [];
            for(var i=0; i<5; i++){

                var a = new Date($scope.arreglo[i].data.time * 1000);
                var hour = a.getHours();
                var v = $scope.arreglo[i].data.speed;

                d =  v * hour;

                console.log(d);

                aux.push(d);
                $scope.data.push(aux);
                aux = [];
            }

            $scope.bandera = true;
        }else{ //Segunda vez

            for(var i=0; i<5; i++){
                var hour = getRandomSpan();
                var v = $scope.arreglo[0].data.speed;
                d =  Math.round(v * hour);
                //console.log("Hour: ",hour,"V ",v);
                $scope.data[i].push(d);
            }

        }

    }

    function getRandomSpan(){
        return Math.random() * (100 - 0);
    };




    /* GRÁFICO DE BARRAS */

    $scope.barraLabels = [];
    $scope.barraSeries = [];
    $scope.barraData = [];
    $scope.barraColores = ["#4a90e2"];
    $scope.barraOptions = {
        responsive: true,
        maintainAspectRatio: false
    };
    function activarBarras () {
        var counts = [];
        angular.forEach($scope.arreglo, function(value, key) {
            $scope.barraLabels.push(value.zoneId);
            counts.push(value.data.count);
        });
        $scope.barraData.push(counts);
    }




    /* GRÁFICO DE DONA */

    $scope.tortaColores = ["#c25991", "#f9992e", "#a578f7", "#5ddfca", "#ef0000"]
    $scope.tortaLabels = [];
    $scope.tortaData = [];
    $scope.optionsTorta = {
        responsive: true,
        maintainAspectRatio: false
    };
    function activarTorta () {
        angular.forEach($scope.arreglo, function(value, key) {
            $scope.tortaLabels.push(value.zoneId);
            $scope.tortaData.push(value.data.speed);
        });
    }



}]);
