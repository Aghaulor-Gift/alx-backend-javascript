const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api'); // Import the express app

// Use chaiHttp for making HTTP requests in Chai tests
chai.use(chaiHttp);
const { expect } = chai;

describe('Index page', () => {
  it('should return the correct status code and message', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
