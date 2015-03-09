define(['angular', 'angularMocks', 'App'], function (angular, mocks, app) {
  'use strict';

  describe('Testing angular-mocks', function () {

    // load the controller's module
    beforeEach(module('angularSampleApp', ['ngMock']));

    it('should work', function() {
      expect(true).toBe(true);
    });

  });

});
