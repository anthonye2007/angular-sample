define(['angular', 'angular-mocks', 'App'], function (angular, mocks, app) {

  'use strict';

  describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('angularSampleApp'));

    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      $controller('MainCtrl', { $scope: scope });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings.length).toBe(3);
    });
  });

});
