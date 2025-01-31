const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const FAQ = require('../models/FAQ');

chai.use(chaiHttp);
const { expect } = chai;

describe('FAQ API', () => {
  beforeEach(async () => {
    await FAQ.deleteMany({});
  });

  it('should create a new FAQ', (done) => {
    const faq = { question: 'What is Node.js?', answer: 'Node.js is a runtime environment.' };
    chai.request(server)
      .post('/api/faqs')
      .send(faq)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.question).to.equal(faq.question);
        done();
      });
  });
});