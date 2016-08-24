for (var i = 1; i <= 15; i++){
	if (i % 15 === 0) {
		console.log("fizzbuzz")
	}
	if (i % 3 === 0) {
		console.log("fizz")
	}
	if (i % 5 === 0) {
		console.log("buzz")
	}
	else {
		console.log(i)
	}
}