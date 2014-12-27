(function(){
    var app = angular.module('leapMotion', ['ngRoute']);

    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/',
                {
                    templateUrl: "templates/finger_tracking.html"
                }
            )
            .when('/finger-tracking',
                {
                    templateUrl: "templates/finger_tracking.html"
                }
            )
            .when('/finger-painting',
                {
                    templateUrl: "templates/finger_painting.html"
                }
            )
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    })
}())
