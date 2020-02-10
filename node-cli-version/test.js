const recursiveQuestion = require('./index');

describe('recursiveQuestion', function () {
    var stdin;
    beforeEach(() => {
        stdin = require('mock-stdin').stdin();
    });
    it('asks for user choice', function () {
        return recursiveQuestion
    });
    it('user answers rock', () => { 
        process.nextTick(function mockResponse() {
            stdin.send('rock');
        });
        return recursiveQuestion 
    });
    it('user answers paper', () => { 
        process.nextTick(function mockResponse() {
            stdin.send('paper');
          });
        return recursiveQuestion 
        });
    it('user answers scissor', () => { 
        process.nextTick(function mockResponse() {
            stdin.send('scissor');
            });
        return recursiveQuestion 
        });
});
