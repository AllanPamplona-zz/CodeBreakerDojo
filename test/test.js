var assert = require('assert');
//var codeBreak=require('../functionTest/CodeBreaker');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app.js');
let should = chai.should();
chai.use(chaiHttp);

describe('testCodeBreaker',function(){
    /**describe('codebreakerTest',function(){
            it('its the secret number',function(){
                assert.equal(codeBreak.isTheSecretNumber("9831"),"XXXX");
            });
            it('almost the secret number',function(){
                assert.equal(codeBreak.isTheSecretNumber("9832"),"XXX");
            });
            it('desorder secret number',function(){
                assert.equal(codeBreak.isTheSecretNumber("1389"),"----");
            });
            it('try again',function(){
                assert.equal(codeBreak.isTheSecretNumber("2456"),"");
            });
            it('a half order secret number',function(){
                assert.equal(codeBreak.isTheSecretNumber("9138"),"XX--");
            });
            it('not a number',function(){
                assert.equal(codeBreak.isTheSecretNumber("xxxx"),"Fake number");
            });
            it('not a number either',function(){
                assert.equal(codeBreak.isTheSecretNumber("1xx1"),"Fake number");
            });
            it('one digit less',function(){
                assert.equal(codeBreak.isTheSecretNumber("123"),"Invalid size");
            });
            it('four digit more',function(){
                assert.equal(codeBreak.isTheSecretNumber(""),"Invalid size");
            });
            it('two digit more',function(){
                assert.equal(codeBreak.isTheSecretNumber("123456"),"Invalid size");
            });
            it('digit repeated',function(){
                assert.equal(codeBreak.isTheSecretNumber("1231"),"number with digits repeated");
            });
            it('digit repeated',function(){
                assert.equal(codeBreak.isTheSecretNumber("1223"),"number with digits repeated");
            });
            it('digit repeated',function(){
                assert.equal(codeBreak.isTheSecretNumber("1233"),"number with digits repeated");
            });
        });**/
    describe('/GET /', () => {
      it('Correct number', (done) => {
        let number = '9831'
        chai.request(server)
            .get('/?number='+number)
            .send(number)
            .end((err, res) => {
                res.should.have.status(200);
                assert.equal(res.body.type,1);
                assert.equal(res.body.message,'XXXX');
              done();
            });
      });
      it('Almost the secret number', (done) => {
        let number = '9832'
        chai.request(server)
            .get('/?number='+number)
            .send(number)
            .end((err, res) => {
                res.should.have.status(200);
                assert.equal(res.body.type,1);
                assert.equal(res.body.message,'XXX');
              done();
            });
      });
      it('Desorder secret number', (done) => {
        let number = '3198'
        chai.request(server)
            .get('/?number='+number)
            .send(number)
            .end((err, res) => {
                res.should.have.status(200);
                assert.equal(res.body.type,1);
                assert.equal(res.body.message,'----');
              done();
            });
      });
      it('Totally wrong number', (done) => {
        let number = '2657'
        chai.request(server)
            .get('/?number='+number)
            .send(number)
            .end((err, res) => {
                res.should.have.status(200);
                assert.equal(res.body.type,1);
                assert.equal(res.body.message,'');
              done();
            });
      });
      it('A half order secret number', (done) => {
        let number = '3189'
        chai.request(server)
            .get('/?number='+number)
            .send(number)
            .end((err, res) => {
                res.should.have.status(200);
                assert.equal(res.body.type,1);
                assert.equal(res.body.message,'----');
              done();
            });
      });
      it('Not a number', (done) => {
        let number = 'xxxx'
        chai.request(server)
            .get('/?number='+number)
            .send(number)
            .end((err, res) => {
                res.should.have.status(200);
                assert.equal(res.body.type,0);
                assert.equal(res.body.message,'Fake number');
              done();
            });
      });
      it('Invalid size', (done) => {
        let number = '398'
        chai.request(server)
            .get('/?number='+number)
            .send(number)
            .end((err, res) => {
                res.should.have.status(200);
                assert.equal(res.body.type,0);
                assert.equal(res.body.message,'Invalid size');
              done();
            });
      });
      it('Repeated number', (done) => {
        let number = '3398'
        chai.request(server)
            .get('/?number='+number)
            .send(number)
            .end((err, res) => {
                res.should.have.status(200);
                assert.equal(res.body.type,0);
                assert.equal(res.body.message,'Number with digits repeated');
              done();
            });
      });
  });
});
