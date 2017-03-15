var app = angular.module("app", ["ui.router", "chart.js"]);

app.constant("apiUrl", "https://jsonplaceholder.typicode.com");

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/analytics');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('analytics', {
            url: '/analytics',
            templateUrl: 'views/analytics.html',
            controller: "ctrlAnalytics"
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('news', {
            url: '/news',
            templateUrl: 'views/news.html',
            controller: "ctrlNews"
        });


});
