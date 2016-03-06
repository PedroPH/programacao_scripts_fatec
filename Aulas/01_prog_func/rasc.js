function generateCounter() {
	var x = 0;

	function counter() {
		return x + 1; 
	}

	return counter;
}

var c1 = generateCounter();
console.log('c1: ' + c1());
console.log('c1: ' + c1());
console.log('c1: ' + c1());

var c2 = generateCounter();
console.log('c2: ' + c2());
console.log('c2: ' + c2());
console.log('c2: ' + c2());