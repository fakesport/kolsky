var	Browser = require('zombie'),
	assert	= require('chai').assert,
	browser;
suite('CrossPage Test', function(){
	setup(function(){
		browser = new Browser();
	});
	test('Hood-River Ref', function(done){
		var referrer = 'http://localhost:3000/tours/hood-river';
		browser.visit(referrer, function(){
			browser.clickLink('.requestGroupRate', function(){
				assert(browser.field('referrer').value === referrer);
				done();
			});
		});
	});
	test('Oregon-Coast Ref', function(done){
		var referrer = 'http://localhost:3000/tours/oregon-coast';
		browser.visit(referrer, function(){
			browser.clickLink('.requestGroupRate', function(){
				assert(browser.field('referrer').value === referrer);
				done();
			});
		});
	});
	test('Direct-Link Ref', function(done){
		browser.visit('http://localhost:3000/tours/request-group-rate', function(){
			assert(browser.field('referrer').value === '');
			done();
		});
	});
});


