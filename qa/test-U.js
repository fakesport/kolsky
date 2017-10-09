var 	fort 	= require('../lib/fort.js'),
	expect	= require('chai').expect;
suite('Fort Test', function(){
	test('getF() returns letter', function(){
		expect(typeof fort.getF() === 'string');
	});
});

