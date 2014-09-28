'use strict';

describe('Controller: TaskListControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('foodtruckieApp'));

  var TaskListControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaskListControllerCtrl = $controller('TaskListControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
