'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {
    var htmlElement;

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] form')).first().getAttribute('id')).
        toMatch(/frmEdit/);
    });

      it('should have a "Make:" label', function() {
          htmlElement = element(by.id('lblMake'));
          expect(htmlElement).not.toBe(undefined);
          expect(htmlElement.getText()).toEqual('Make:');
      });

      it('should have a "Make" edit', function() {
          htmlElement = element(by.id('edMake'));
          expect(htmlElement).not.toBe(undefined);
          expect(htmlElement.getAttribute('value')).toEqual('Honda');
      })

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] th')).first().getText()).
        toMatch(/Make/);
    });

  });
});
