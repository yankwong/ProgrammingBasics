const assert = require('chai').assert;
const expect = require('chai').expect;
let sinon = require('sinon');
let learnBasics = require('../learnBasics');

describe('Learn Conditional', function() {

    describe('Hello World', function() {
        it('says "Hello World"', function() {
            expect(learnBasics.helloWorld()).to.equal('Hello World');
        });
    });

    describe.skip('returnParameter', function() {
        it('returns whatever being passed in', function() {
            const parameter = 'Hey';
            expect(learnBasics.returnParameter(parameter)).to.equal(parameter);
        });
    });

    describe.skip('getSumOfParameters', function() {
        it('returns the sum of the two parameters', function() {
            const numberA = 10;
            const numberB = 20;
            const sum = numberA + numberB;

            expect(learnBasics.getSumOfParameters(numberA, numberB)).to.equal(sum);
        });
    })
});