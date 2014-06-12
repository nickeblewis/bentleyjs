'use strict';

/**
 * @ngdoc function
 * @name bentleyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bentleyApp
 */
angular.module('bentleyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
