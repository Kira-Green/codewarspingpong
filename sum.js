function sum(a, b) {
	if (isNaN(a) || isNaN(b)) {
		return "input is not a number";
	} else {
		return a + b;
	}
}

module.exports = sum;
