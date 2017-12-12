const Assert = require('assert');
const app = require('../app');
const request = require('supertest');

describe('Stats Endpoint tests', () => {
    it('can get current stat', (done) => {
        request(app)
            .get('/stats')
            .then(response => {
                Assert(response.body.cpuLoad != null);
                done();
            })
    })
    it('can get stat graph', (done) => {
        request(app)
            .get('/stats/graph')
            .then(response => {
                Assert(response.body[24].cpuLoad != null );
                done();
            })
    })
})