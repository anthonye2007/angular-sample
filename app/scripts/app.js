define([
  'angular', 
  'angular-animate', 
  'angular-cookies',
  'angular-resource',
  'angular-route',
  'angular-sanitize',
  'angular-touch'
], function (
  angular, 
  ngAnimate, 
  ngCookies,
  ngResource,
  ngRoute,
  ngSanitize,
  ngTouch
) {

'use strict';

/**
 * @ngdoc overview
 * @name angularSampleApp
 * @description
 * # angularSampleApp
 *
 * Main module of the application.
 */
angular
  .module('angularSampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
});
