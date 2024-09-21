const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with the correct data when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                // Test that the promise resolves with the correct data
                expect(response).to.be.an('object');
                expect(response.data).to.equal('Successful response from the API');
                done();
            })
            .catch((err) => done(err));
    });
});
