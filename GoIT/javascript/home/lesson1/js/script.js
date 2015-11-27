function pow (x, n) {
	var result = 1;
	for (var i = 0; i < n; i ++) {
		result *= x;
	}
	return result;
}

var x = prompt('Enter x', '');
var n = prompt('Enter n', '');

console.log(pow (x, n) );