'use strict';

describe('Directive: taskElementDirective', function () {

  // load the directive's module
  beforeEach(module('foodtruckieApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<task-element-directive></task-element-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the taskElementDirective directive');
  }));
});
