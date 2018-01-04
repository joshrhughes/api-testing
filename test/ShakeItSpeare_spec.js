const request = require('request');
const expect = require('chai').expect;

let URL = 'http://ShakeItSpeare.com/api/sentence';

describe('Testing Shakey',function(){
    it('should receive a 200 / OK HTTP status code',function(done){
        request(URL, function(error, apiResponse, body){
            expect(apiResponse.statusCode).to.eq(200);
            done();
        });
    });
    it('should have a sentence in the body', function(done){
        request(URL, function(error, apiResponse, body){
            expect(JSON.parse(body).sentence).to.not.be.empty;
            done();
        });
    });
});