var forts = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ];
exports.getF = function(){
	return forts[Math.floor(Math.random() *forts.length)];
};
