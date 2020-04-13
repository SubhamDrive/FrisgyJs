const frisby = require('frisby');


describe('my test suite', function() {
    // Here all your it tests
    //http://www.brendanconnolly.net/testing-with-frisby/

	it('should be a teapot', function () {
  	return frisby.get('http://httpbin.org/status/418')
    .expect('status', 418);
});
})