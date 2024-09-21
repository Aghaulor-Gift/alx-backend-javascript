const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      if (err) {
        console.error('Error occurred:', err);
        return done(err);  // End test with error
      }
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/47`, (err, res, body) => {
      if (err) {
        console.error('Error occurred:', err);
        return done(err);
      }
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-47`, (err, res, body) => {
      if (err) {
        console.error('Error occurred:', err);
        return done(err);
      }
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (err, res, body) => {
      if (err) {
        console.error('Error occurred:', err);
        return done(err);
      }
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login returns valid response', (done) => {
    const testUserName = 'TestUser';  // This can be any username
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: true,
        body: { userName: testUserName }
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body.message).to.equal(`Welcome ${testUserName}`);
        done();
      }
    );
  });

  it('GET /available_payments returns valid response', (done) => {
    request.get(`${API_URL}/available_payments`, (err, res, body) => {
      if (err) {
        console.error('Error occurred:', err);
        return done(err);
      }
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});
