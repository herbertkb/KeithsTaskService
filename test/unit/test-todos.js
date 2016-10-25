'use strict';

var expect = require('chai').expect;

describe('todos api', function() {

  var request, app;
  beforeEach( () => {
    request = require('supertest'); 
    app = require('express')();
    app.use('/todos', require('lib/todo'));
  });

  describe('list (GET /', function() {
    it('should return all todos', function(done){
      request(app)
        .get('/todos')
        .expect('Content-Type',/json/g )
        .expect(200)
        .end( (err, res) => {
          expect(err).to.be.null;
          expect(res.body).to.be.have.property('count');
          expect(res.body).to.be.have.property('list');
          expect(red.body.list).to.be.a('array');

          done();
        })
    })
  });
  describe('single (GET /:id', function() {
  });
  describe('create (POST /', function() {
  });
  describe('update (PUT /:id', function() {
  });
  describe('remove (DELTE /:id', function() {
  });
});

