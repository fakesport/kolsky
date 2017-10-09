suite('About Test', function(){
	test('Link on "/contacts"', function(){
		assert($('a[href="/contacts"]').length);
	});
});
