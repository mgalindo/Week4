'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {
    var htmlElement, htmlElement2;

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] form')).first().getAttribute('id')).
        toMatch(/frmEdit/);
    });

    //---------Make---------------
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

    it('should have a "Make" span', function() {
        htmlElement = element(by.id('sMake'));
        expect(htmlElement).not.toBe(undefined);
        expect(htmlElement.getText()).toEqual('Honda');
    })

    it('should be able to enter data in the Make edit, edit and span should have the entered value', function() {
        htmlElement = element(by.id('edMake'));
        htmlElement2 = element(by.id('sMake'))

        htmlElement.clear();
        htmlElement.sendKeys('Ford');
        expect(htmlElement.getAttribute('value')).toEqual('Ford');
        expect(htmlElement2.getText()).toEqual('Ford');
    })

    //---------END Make---------------

      //---------Model---------------
      it('should have a "Model:" label', function() {
          htmlElement = element(by.id('lblModel'));
          expect(htmlElement).not.toBe(undefined);
          expect(htmlElement.getText()).toEqual('Model:');
      });

      it('should have a "Model" edit', function() {
          htmlElement = element(by.id('edModel'));
          expect(htmlElement).not.toBe(undefined);
          expect(htmlElement.getAttribute('value')).toEqual('Civic');
      })

      it('should have a "Model" span', function() {
          htmlElement = element(by.id('sModel'));
          expect(htmlElement).not.toBe(undefined);
          expect(htmlElement.getText()).toEqual('Civic');
      })

      it('should be able to enter data in the Model edit, edit and span should have the entered value', function() {
          htmlElement = element(by.id('edModel'));
          htmlElement2 = element(by.id('sModel'))

          htmlElement.clear();
          htmlElement.sendKeys('Explorer');
          expect(htmlElement.getAttribute('value')).toEqual('Explorer');
          expect(htmlElement2.getText()).toEqual('Explorer');
      })
      //---------END Model---------------

      //---------Year---------------
      it('should have a "Year:" label', function() {
          htmlElement = element(by.id('lblYear'));
          expect(htmlElement).not.toBe(undefined);
          expect(htmlElement.getText()).toEqual('Year:');
      });

      it('should have a "Year" edit', function() {
          htmlElement = element(by.id('edYear'));
          expect(htmlElement).not.toBe(undefined);
          expect(htmlElement.getAttribute('value')).toEqual('2014');
      })

      it('should have a "Year" span', function() {
          htmlElement = element(by.id('sYear'));
          expect(htmlElement).not.toBe(undefined);
          expect(htmlElement.getText()).toEqual('2014');
      })

      it('should be able to enter data in the Year edit, edit and span should have the entered value', function() {
          htmlElement = element(by.id('edYear'));
          htmlElement2 = element(by.id('sYear'))

          htmlElement.sendKeys('2011');
          expect(htmlElement.getAttribute('value')).toEqual('2011');
          expect(htmlElement2.getText()).toEqual('2011');
      })
      //---------END Year---------------

      //---------Price---------------
      it('should have a "Price:" label', function() {
          htmlElement = element(by.id('lblPrice'));
          expect(htmlElement).not.toBe(undefined);
          expect(htmlElement.getText()).toEqual('Price:');
      });

      it('should have a "Price" edit', function() {
          htmlElement = element(by.id('edPrice'));
          expect(htmlElement).not.toBe(undefined);
          expect(htmlElement.getAttribute('value')).toEqual('24000');
      })

      it('should have a "Price" span', function() {
          htmlElement = element(by.id('sPrice'));
          expect(htmlElement).not.toBe(undefined);
          expect(htmlElement.getText()).toEqual('$24,000.00');
      })

      it('should be able to enter data in the Price edit, edit and span should have the entered value', function() {
          htmlElement = element(by.id('edPrice'));
          htmlElement2 = element(by.id('sPrice'))

          htmlElement.clear();
          htmlElement.sendKeys('30000');
          expect(htmlElement.getAttribute('value')).toEqual('30000');
          expect(htmlElement2.getText()).toEqual('$30,000.00');
      })

      //---------END Year---------------
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
