'use strict'
var request = require('supertest')

var app = require('../app/server')

describe('Crear una nueva cerveza', function() {
  it('Crea la cerveza retornando 201', function(done) {
    request(app)
      .post('/api/cervezas/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send({
        'Nombre': 'Roman',
        'Descripción': 'Mi cerveza chingona',
        'Graduación': '15º',
        'Envase': 'De Vidrio',
        'Precio': '30 pesitos'
      })
      .expect(201, done)
  })
})
