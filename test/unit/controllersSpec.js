'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){

    describe('MyCtrl1', function() {
        var scope = {}, ctrl;

        beforeEach(module('myApp'));

        beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('MyCtrl1', {$scope: scope});
        }));

        it('should exist', inject(function () {

            expect(ctrl).not.toBe(undefined);
        }));

        it('should have a car property', inject(function () {
            expect(scope.car).not.toBe(undefined);
        }));

        it('should have a car.make property', inject(function () {
            expect(scope.car.make).not.toBe(undefined);
        }));

        it('should have a car.model property', inject(function () {
            expect(scope.car.model).not.toBe(undefined);
        }));

        it('should have a car.year property', inject(function () {
            expect(scope.car.price).not.toBe(undefined);
        }));

        it('should have a car.price property', inject(function () {
            expect(scope.car.price).not.toBe(undefined);
        }));

        it('car.make should be Honda', inject(function () {
            expect(scope.car.make).toBe('Honda');
        }));

        it('car.model should be Civic', inject(function () {
            expect(scope.car.model).toBe('Civic');
        }));


    });


    describe('MyCtrl2', function() {
        var scope = {}, ctrl2;

        beforeEach(module('myApp'));

        beforeEach(inject(function($controller) {
            scope = {};
            ctrl2 = $controller('MyCtrl2', {$scope: scope});
        }));

        it('MyCtrl2 should exist', inject(function () {
            expect(ctrl2).not.toBe(undefined);
        }));

        it('should have a cars property', inject(function () {
            expect(scope.cars).not.toBe(undefined);
        }));

        it('should have 6 cars', inject(function () {
            expect(scope.cars.length).toBe(6);
        }));

        it('should be able to add one more car', inject(function () {
            scope.cars.push({make: 'Honda', model: 'Civic',  year: 2014,  price: 24000});
            expect(scope.cars.length).toBe(7);
        }));

        it('the second cars make should be "Honda"', inject(function () {
            expect(scope.cars[1].make).toBe("Honda");
        }));


    });

});