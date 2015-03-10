define(['angular', 'angularMocks', 'angularSampleApp'], function (angular, mocks, app) {

  'use strict';

  describe('Controller: MainCtrl', function () {

    // load the controller's module
    //beforeEach(module('angularSampleApp'));

    var scope;
    it('should exist...', inject(function ($controller) {
      var ctrl = $controller('MainCtrl', {$scope: {}});
      expect(ctrl).toBeDefined();
    }));

    // Initialize the controller and a mock scope
    /*beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      $controller('MainCtrl', { $scope: scope });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings.length).toBe(3);
    });*/
  });

});
