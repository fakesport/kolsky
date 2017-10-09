suite('Global Test', function(){
	test('Right Title', function(){
		assert(document.title && document.title.match(/\S/) &&
			document.title.toUpperCase() !== 'TODO');
	});
});

