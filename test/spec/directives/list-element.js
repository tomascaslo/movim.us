'use strict';

describe('Directive: listElement', function () {

  // load the directive's module
  beforeEach(module('foodtruckieApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<list-element></list-element>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the listElement directive');
  }));
});
