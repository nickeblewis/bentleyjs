'use strict';

/**
 * @ngdoc function
 * @name bentleyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bentleyApp
 */
angular.module('bentleyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
