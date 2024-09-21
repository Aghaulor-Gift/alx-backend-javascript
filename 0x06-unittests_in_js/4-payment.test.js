const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberStub;
    let consoleSpy;

    beforeEach(() => {
        // Stub Utils.calculateNumber to always return 10
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Spy on console.log
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the stub and spy
        calculateNumberStub.restore();
        consoleSpy.restore();
    });

    it('should call Utils.calculateNumber with "SUM", 100, and 20', () => {
        sendPaymentRequestToApi(100, 20);
        
        // Check that the stub was called with the right arguments
        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

        // Check that console.log was called with the expected message
        expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    });
});
