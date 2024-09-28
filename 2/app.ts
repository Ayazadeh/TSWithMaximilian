function add(n1: number, n2: number): number { // we can don't specify the return type
	return n1 + n2;
}

function printResult(num: number): void { // if we don't return anything we can specify void
	console.log("Result: " + num);
}

printResult(add(5, 12));