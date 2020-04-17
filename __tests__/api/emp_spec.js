const frisby = require("frisby")


describe("Testing Employe Data",function(){
	it('Should be Employe data',function(){
		return frisby.get('http://dummy.restapiexample.com/api/v1/employees')
		.expect('status',200)
		//.expectHeader('Content-Type', 'application/json');

		it("Should be employee data by id",function(){
		return frisby.get('http://dummy.restapiexample.com/api/v1/employee/1')
		.expect('status',200)
	});

	});
})

