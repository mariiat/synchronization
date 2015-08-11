'use strict';

/**
 * @ngdoc overview
 * @name syncronizationApp
 * @description
 * # syncronizationApp
 *
 * Main module of the application.
 */
angular
  .module('syncronizationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
    .config([
      '$routeProvider',
      '$locationProvider',

      function (
          $routeProvider,
          $locationProvider
      ) {
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });

        $routeProvider
            .when('/', {
              templateUrl: 'views/main.html',
              controller: 'SyncCtrl'
            })
            .when('/about', {
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl'
            })
            .otherwise({
              redirectTo: '/'
            });
      }
    ]);



